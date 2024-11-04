<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Font.xml。 -->

<div id="_class_font"></div>

# Font

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`FontFile`](class_fontfile.md), [`FontVariation`](class_fontvariation.md), [`SystemFont`](class_systemfont.md)

Abstract base class for fonts and font variations.

## 描述

Abstract base class for different font types. It has methods for drawing text and font character introspection.

## 属性

| [Array](class_array.md) [`Font`](class_font.md) | [`fallbacks`](#class_font_property_fallbacks) | ``[]`` |

## 方法

| [`float`](class_float.md)                     | [`draw_char`](#class_font_method_draw_char) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), char: [`int`](class_int.md), font_size: [`int`](class_int.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                     | [`draw_char_outline`](#class_font_method_draw_char_outline) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), char: [`int`](class_int.md), font_size: [`int`](class_int.md), size: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `void`                                        | [`draw_multiline_string`](#class_font_method_draw_multiline_string) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                  |
| `void`                                        | [`draw_multiline_string_outline`](#class_font_method_draw_multiline_string_outline) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const] |
| `void`                                        | [`draw_string`](#class_font_method_draw_string) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                                                                             |
| `void`                                        | [`draw_string_outline`](#class_font_method_draw_string_outline) ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                            |
| [`RID`](class_rid.md)                         | [`find_variation`](#class_font_method_find_variation) ( variation_coordinates: [`Dictionary`](class_dictionary.md), face_index: [`int`](class_int.md) = 0, strength: [`float`](class_float.md) = 0.0, transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), spacing_top: [`int`](class_int.md) = 0, spacing_bottom: [`int`](class_int.md) = 0, spacing_space: [`int`](class_int.md) = 0, spacing_glyph: [`int`](class_int.md) = 0, baseline_offset: [`float`](class_float.md) = 0.0 ) const[^const]                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                     | [`get_ascent`](#class_font_method_get_ascent) ( font_size: [`int`](class_int.md) = 16 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                 | [`get_char_size`](#class_font_method_get_char_size) ( char: [`int`](class_int.md), font_size: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                     | [`get_descent`](#class_font_method_get_descent) ( font_size: [`int`](class_int.md) = 16 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                         | [`get_face_count`](#class_font_method_get_face_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`String`](class_string.md)                   | [`get_font_name`](#class_font_method_get_font_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                         | [`get_font_stretch`](#class_font_method_get_font_stretch) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [FontStyle](#enum_textserver_fontstyle)       | [`get_font_style`](#class_font_method_get_font_style) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`String`](class_string.md)                   | [`get_font_style_name`](#class_font_method_get_font_style_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                         | [`get_font_weight`](#class_font_method_get_font_weight) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)                     | [`get_height`](#class_font_method_get_height) ( font_size: [`int`](class_int.md) = 16 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md)                 | [`get_multiline_string_size`](#class_font_method_get_multiline_string_size) ( text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                                                                           |
| [`Dictionary`](class_dictionary.md)           | [`get_opentype_features`](#class_font_method_get_opentype_features) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Dictionary`](class_dictionary.md)           | [`get_ot_name_strings`](#class_font_method_get_ot_name_strings) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Array](class_array.md) [`RID`](class_rid.md) | [`get_rids`](#class_font_method_get_rids) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                         | [`get_spacing`](#class_font_method_get_spacing) ( spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Vector2`](class_vector2.md)                 | [`get_string_size`](#class_font_method_get_string_size) ( text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]                                                                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                   | [`get_supported_chars`](#class_font_method_get_supported_chars) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Dictionary`](class_dictionary.md)           | [`get_supported_feature_list`](#class_font_method_get_supported_feature_list) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Dictionary`](class_dictionary.md)           | [`get_supported_variation_list`](#class_font_method_get_supported_variation_list) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                     | [`get_underline_position`](#class_font_method_get_underline_position) ( font_size: [`int`](class_int.md) = 16 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)                     | [`get_underline_thickness`](#class_font_method_get_underline_thickness) ( font_size: [`int`](class_int.md) = 16 ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                       | [`has_char`](#class_font_method_has_char) ( char: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                       | [`is_language_supported`](#class_font_method_is_language_supported) ( language: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`bool`](class_bool.md)                       | [`is_script_supported`](#class_font_method_is_script_supported) ( script: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `void`                                        | [`set_cache_capacity`](#class_font_method_set_cache_capacity) ( single_line: [`int`](class_int.md), multi_line: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_font_property_fallbacks"></div>

[Array](class_array.md) [`Font`](class_font.md) **fallbacks** = ``[]`` <div id="class_font_property_fallbacks"></div>

- `void` **set_fallbacks** ( value: [Array](class_array.md) [`Font`](class_font.md) )
- [Array](class_array.md) [`Font`](class_font.md) **get_fallbacks** ( )

Array of fallback **Font** s to use as a substitute if a glyph is not found in this current **Font**.

If this array is empty in a [`FontVariation`](class_fontvariation.md), the [`FontVariation.base_font`](#class_fontvariation_property_base_font)'s fallbacks are used instead.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_font_method_draw_char"></div>

[`float`](class_float.md) **draw_char** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), char: [`int`](class_int.md), font_size: [`int`](class_int.md), modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_font_method_draw_char"></div>

Draw a single Unicode character `char` into a canvas item using the font, at a given position, with `modulate` color. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.

 **Note:** Do not use this function to draw strings character by character, use [`draw_string`](#class_font_method_draw_string) or [`TextLine`](class_textline.md) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_draw_char_outline"></div>

[`float`](class_float.md) **draw_char_outline** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), char: [`int`](class_int.md), font_size: [`int`](class_int.md), size: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_font_method_draw_char_outline"></div>

Draw a single Unicode character `char` outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.

 **Note:** Do not use this function to draw strings character by character, use [`draw_string`](#class_font_method_draw_string) or [`TextLine`](class_textline.md) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_draw_multiline_string"></div>

`void` **draw_multiline_string** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_draw_multiline_string"></div>

Breaks `text` into lines using rules specified by `brk_flags` and draws it into a canvas item using the font, at a given position, with `modulate` color, optionally clipping the width and aligning horizontally. `pos` specifies the baseline of the first line, not the top. To draw from the top, *ascent* must be added to the Y axis.

See also [`CanvasItem.draw_multiline_string`](#class_canvasitem_method_draw_multiline_string).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_draw_multiline_string_outline"></div>

`void` **draw_multiline_string_outline** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_draw_multiline_string_outline"></div>

Breaks `text` to the lines using rules specified by `brk_flags` and draws text outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size, optionally clipping the width and aligning horizontally. `pos` specifies the baseline of the first line, not the top. To draw from the top, *ascent* must be added to the Y axis.

See also [`CanvasItem.draw_multiline_string_outline`](#class_canvasitem_method_draw_multiline_string_outline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_draw_string"></div>

`void` **draw_string** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_draw_string"></div>

Draw `text` into a canvas item using the font, at a given position, with `modulate` color, optionally clipping the width and aligning horizontally. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.

See also [`CanvasItem.draw_string`](#class_canvasitem_method_draw_string).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_draw_string_outline"></div>

`void` **draw_string_outline** ( canvas_item: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, size: [`int`](class_int.md) = 1, modulate: [`Color`](class_color.md) = Color(1, 1, 1, 1), justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_draw_string_outline"></div>

Draw `text` outline into a canvas item using the font, at a given position, with `modulate` color and `size` outline size, optionally clipping the width and aligning horizontally. `pos` specifies the baseline, not the top. To draw from the top, *ascent* must be added to the Y axis.

See also [`CanvasItem.draw_string_outline`](#class_canvasitem_method_draw_string_outline).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_find_variation"></div>

[`RID`](class_rid.md) **find_variation** ( variation_coordinates: [`Dictionary`](class_dictionary.md), face_index: [`int`](class_int.md) = 0, strength: [`float`](class_float.md) = 0.0, transform: [`Transform2D`](class_transform2d.md) = Transform2D(1, 0, 0, 1, 0, 0), spacing_top: [`int`](class_int.md) = 0, spacing_bottom: [`int`](class_int.md) = 0, spacing_space: [`int`](class_int.md) = 0, spacing_glyph: [`int`](class_int.md) = 0, baseline_offset: [`float`](class_float.md) = 0.0 ) const[^const]<div id="class_font_method_find_variation"></div>

Returns [`TextServer`](class_textserver.md) RID of the font cache for specific variation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_ascent"></div>

[`float`](class_float.md) **get_ascent** ( font_size: [`int`](class_int.md) = 16 ) const[^const]<div id="class_font_method_get_ascent"></div>

Returns the average font ascent (number of pixels above the baseline).

 **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_char_size"></div>

[`Vector2`](class_vector2.md) **get_char_size** ( char: [`int`](class_int.md), font_size: [`int`](class_int.md) ) const[^const]<div id="class_font_method_get_char_size"></div>

Returns the size of a character. Does not take kerning into account.

 **Note:** Do not use this function to calculate width of the string character by character, use [`get_string_size`](#class_font_method_get_string_size) or [`TextLine`](class_textline.md) instead. The height returned is the font height (see also [`get_height`](#class_font_method_get_height)) and has no relation to the glyph height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_descent"></div>

[`float`](class_float.md) **get_descent** ( font_size: [`int`](class_int.md) = 16 ) const[^const]<div id="class_font_method_get_descent"></div>

Returns the average font descent (number of pixels below the baseline).

 **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_face_count"></div>

[`int`](class_int.md) **get_face_count** ( ) const[^const]<div id="class_font_method_get_face_count"></div>

Returns number of faces in the TrueType / OpenType collection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_font_name"></div>

[`String`](class_string.md) **get_font_name** ( ) const[^const]<div id="class_font_method_get_font_name"></div>

Returns font family name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_font_stretch"></div>

[`int`](class_int.md) **get_font_stretch** ( ) const[^const]<div id="class_font_method_get_font_stretch"></div>

Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_font_style"></div>

[FontStyle](#enum_textserver_fontstyle) **get_font_style** ( ) const[^const]<div id="class_font_method_get_font_style"></div>

Returns font style flags, see [FontStyle](#enum_textserver_fontstyle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_font_style_name"></div>

[`String`](class_string.md) **get_font_style_name** ( ) const[^const]<div id="class_font_method_get_font_style_name"></div>

Returns font style name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_font_weight"></div>

[`int`](class_int.md) **get_font_weight** ( ) const[^const]<div id="class_font_method_get_font_weight"></div>

Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_height"></div>

[`float`](class_float.md) **get_height** ( font_size: [`int`](class_int.md) = 16 ) const[^const]<div id="class_font_method_get_height"></div>

Returns the total average font height (ascent plus descent) in pixels.

 **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_multiline_string_size"></div>

[`Vector2`](class_vector2.md) **get_multiline_string_size** ( text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, max_lines: [`int`](class_int.md) = -1, brk_flags: [LineBreakFlag](#enum_textserver_linebreakflag) = 3, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_get_multiline_string_size"></div>

Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.

See also [`draw_multiline_string`](#class_font_method_draw_multiline_string).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_opentype_features"></div>

[`Dictionary`](class_dictionary.md) **get_opentype_features** ( ) const[^const]<div id="class_font_method_get_opentype_features"></div>

Returns a set of OpenType feature tags. More info: [*OpenType feature tags*](https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_ot_name_strings"></div>

[`Dictionary`](class_dictionary.md) **get_ot_name_strings** ( ) const[^const]<div id="class_font_method_get_ot_name_strings"></div>

Returns [`Dictionary`](class_dictionary.md) with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_rids"></div>

[Array](class_array.md) [`RID`](class_rid.md) **get_rids** ( ) const[^const]<div id="class_font_method_get_rids"></div>

Returns [`Array`](class_array.md) of valid **Font** [`RID`](class_rid.md) s, which can be passed to the [`TextServer`](class_textserver.md) methods.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_spacing"></div>

[`int`](class_int.md) **get_spacing** ( spacing: [SpacingType](#enum_textserver_spacingtype) ) const[^const]<div id="class_font_method_get_spacing"></div>

Returns the spacing for the given `type` (see [SpacingType](#enum_textserver_spacingtype)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_string_size"></div>

[`Vector2`](class_vector2.md) **get_string_size** ( text: [`String`](class_string.md), alignment: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) = 0, width: [`float`](class_float.md) = -1, font_size: [`int`](class_int.md) = 16, justification_flags: [JustificationFlag](#enum_textserver_justificationflag) = 3, direction: [Direction](#enum_textserver_direction) = 0, orientation: [Orientation](#enum_textserver_orientation) = 0 ) const[^const]<div id="class_font_method_get_string_size"></div>

Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [`get_multiline_string_size`](#class_font_method_get_multiline_string_size) and [`draw_string`](#class_font_method_draw_string).

For example, to get the string size as displayed by a single-line Label, use:



```gdscript

    var string_size = $Label.get_theme_font("font").get_string_size($Label.text, HORIZONTAL_ALIGNMENT_LEFT, -1, $Label.get_theme_font_size("font_size"))
```

```csharp

    Label label = GetNode<Label>("Label");
    Vector2 stringSize = label.GetThemeFont("font").GetStringSize(label.Text, HorizontalAlignment.Left, -1, label.GetThemeFontSize("font_size"));
```



 **Note:** Since kerning, advance and subpixel positioning are taken into account by [`get_string_size`](#class_font_method_get_string_size), using separate [`get_string_size`](#class_font_method_get_string_size) calls on substrings of a string then adding the results together will return a different result compared to using a single [`get_string_size`](#class_font_method_get_string_size) call on the full string.

 **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [`get_height`](#class_font_method_get_height).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_supported_chars"></div>

[`String`](class_string.md) **get_supported_chars** ( ) const[^const]<div id="class_font_method_get_supported_chars"></div>

Returns a string containing all the characters available in the font.

If a given character is included in more than one font data source, it appears only once in the returned string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_supported_feature_list"></div>

[`Dictionary`](class_dictionary.md) **get_supported_feature_list** ( ) const[^const]<div id="class_font_method_get_supported_feature_list"></div>

Returns list of OpenType features supported by font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_supported_variation_list"></div>

[`Dictionary`](class_dictionary.md) **get_supported_variation_list** ( ) const[^const]<div id="class_font_method_get_supported_variation_list"></div>

Returns list of supported [*variation coordinates*](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg), each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.

Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.

To print available variation axes of a variable font:

```

    var fv = FontVariation.new()
    fv.base_font = load("res://RobotoFlex.ttf")
    var variation_list = fv.get_supported_variation_list()
    for tag in variation_list:
        var name = TextServerManager.get_primary_interface().tag_to_name(tag)
        var values = variation_list[tag]
        print("variation axis: %s (%d)\n\tmin, max, default: %s" % [name, tag, values])
```

 **Note:** To set and get variation coordinates of a [`FontVariation`](class_fontvariation.md), use [`FontVariation.variation_opentype`](#class_fontvariation_property_variation_opentype).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_underline_position"></div>

[`float`](class_float.md) **get_underline_position** ( font_size: [`int`](class_int.md) = 16 ) const[^const]<div id="class_font_method_get_underline_position"></div>

Returns average pixel offset of the underline below the baseline.

 **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_get_underline_thickness"></div>

[`float`](class_float.md) **get_underline_thickness** ( font_size: [`int`](class_int.md) = 16 ) const[^const]<div id="class_font_method_get_underline_thickness"></div>

Returns average thickness of the underline.

 **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_has_char"></div>

[`bool`](class_bool.md) **has_char** ( char: [`int`](class_int.md) ) const[^const]<div id="class_font_method_has_char"></div>

Returns `true` if a Unicode `char` is available in the font.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_is_language_supported"></div>

[`bool`](class_bool.md) **is_language_supported** ( language: [`String`](class_string.md) ) const[^const]<div id="class_font_method_is_language_supported"></div>

Returns `true`, if font supports given language ([*ISO 639*](https://en.wikipedia.org/wiki/ISO_639-1) code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_is_script_supported"></div>

[`bool`](class_bool.md) **is_script_supported** ( script: [`String`](class_string.md) ) const[^const]<div id="class_font_method_is_script_supported"></div>

Returns `true`, if font supports given script ([*ISO 15924*](https://en.wikipedia.org/wiki/ISO_15924) code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_font_method_set_cache_capacity"></div>

`void` **set_cache_capacity** ( single_line: [`int`](class_int.md), multi_line: [`int`](class_int.md) )<div id="class_font_method_set_cache_capacity"></div>

Sets LRU cache capacity for `draw_*` methods.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
