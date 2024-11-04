<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TextParagraph.xml。 -->

<div id="_class_textparagraph"></div>

# TextParagraph

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds a paragraph of text.

## 描述

Abstraction over [`TextServer`](class_textserver.md) for handling a single paragraph of text.

## 属性

| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`alignment`](#class_textparagraph_property_alignment)                         | ``0``     |
| [LineBreakFlag](#enum_textserver_linebreakflag)               | [`break_flags`](#class_textparagraph_property_break_flags)                     | ``3``     |
| [`String`](class_string.md)                                   | [`custom_punctuation`](#class_textparagraph_property_custom_punctuation)       | ``""``    |
| [Direction](#enum_textserver_direction)                       | [`direction`](#class_textparagraph_property_direction)                         | ``0``     |
| [`String`](class_string.md)                                   | [`ellipsis_char`](#class_textparagraph_property_ellipsis_char)                 | ``"…"``   |
| [JustificationFlag](#enum_textserver_justificationflag)       | [`justification_flags`](#class_textparagraph_property_justification_flags)     | ``163``   |
| [`int`](class_int.md)                                         | [`max_lines_visible`](#class_textparagraph_property_max_lines_visible)         | ``-1``    |
| [Orientation](#enum_textserver_orientation)                   | [`orientation`](#class_textparagraph_property_orientation)                     | ``0``     |
| [`bool`](class_bool.md)                                       | [`preserve_control`](#class_textparagraph_property_preserve_control)           | ``false`` |
| [`bool`](class_bool.md)                                       | [`preserve_invalid`](#class_textparagraph_property_preserve_invalid)           | ``true``  |
| [OverrunBehavior](#enum_textserver_overrunbehavior)           | [`text_overrun_behavior`](#class_textparagraph_property_text_overrun_behavior) | ``0``     |
| [`float`](class_float.md)                                     | [`width`](#class_textparagraph_property_width)                                 | ``-1.0``  |

## 方法

| [`bool`](class_bool.md)         | [`add_object`](#class_textparagraph_method_add_object) ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 )              |
| [`bool`](class_bool.md)         | [`add_string`](#class_textparagraph_method_add_string) ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null )                                                  |
| `void`                          | [`clear`](#class_textparagraph_method_clear) ( )                                                                                                                                                                                                                                                       |
| `void`                          | [`clear_dropcap`](#class_textparagraph_method_clear_dropcap) ( )                                                                                                                                                                                                                                       |
| `void`                          | [`draw`](#class_textparagraph_method_draw) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1), dc_color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                          |
| `void`                          | [`draw_dropcap`](#class_textparagraph_method_draw_dropcap) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                   |
| `void`                          | [`draw_dropcap_outline`](#class_textparagraph_method_draw_dropcap_outline) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                          |
| `void`                          | [`draw_line`](#class_textparagraph_method_draw_line) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), line: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                            |
| `void`                          | [`draw_line_outline`](#class_textparagraph_method_draw_line_outline) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), line: [`int`](class_int.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                   |
| `void`                          | [`draw_outline`](#class_textparagraph_method_draw_outline) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), dc_color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const] |
| [`int`](class_int.md)           | [`get_dropcap_lines`](#class_textparagraph_method_get_dropcap_lines) ( ) const[^const]                                                                                                                                                                                                                 |
| [`RID`](class_rid.md)           | [`get_dropcap_rid`](#class_textparagraph_method_get_dropcap_rid) ( ) const[^const]                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md)   | [`get_dropcap_size`](#class_textparagraph_method_get_dropcap_size) ( ) const[^const]                                                                                                                                                                                                                   |
| [`float`](class_float.md)       | [`get_line_ascent`](#class_textparagraph_method_get_line_ascent) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                         |
| [`int`](class_int.md)           | [`get_line_count`](#class_textparagraph_method_get_line_count) ( ) const[^const]                                                                                                                                                                                                                       |
| [`float`](class_float.md)       | [`get_line_descent`](#class_textparagraph_method_get_line_descent) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                       |
| [`Rect2`](class_rect2.md)       | [`get_line_object_rect`](#class_textparagraph_method_get_line_object_rect) ( line: [`int`](class_int.md), key: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                           |
| [`Array`](class_array.md)       | [`get_line_objects`](#class_textparagraph_method_get_line_objects) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                       |
| [`Vector2i`](class_vector2i.md) | [`get_line_range`](#class_textparagraph_method_get_line_range) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                           |
| [`RID`](class_rid.md)           | [`get_line_rid`](#class_textparagraph_method_get_line_rid) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                               |
| [`Vector2`](class_vector2.md)   | [`get_line_size`](#class_textparagraph_method_get_line_size) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                             |
| [`float`](class_float.md)       | [`get_line_underline_position`](#class_textparagraph_method_get_line_underline_position) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                 |
| [`float`](class_float.md)       | [`get_line_underline_thickness`](#class_textparagraph_method_get_line_underline_thickness) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                               |
| [`float`](class_float.md)       | [`get_line_width`](#class_textparagraph_method_get_line_width) ( line: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md)   | [`get_non_wrapped_size`](#class_textparagraph_method_get_non_wrapped_size) ( ) const[^const]                                                                                                                                                                                                           |
| [`RID`](class_rid.md)           | [`get_rid`](#class_textparagraph_method_get_rid) ( ) const[^const]                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md)   | [`get_size`](#class_textparagraph_method_get_size) ( ) const[^const]                                                                                                                                                                                                                                   |
| [`int`](class_int.md)           | [`hit_test`](#class_textparagraph_method_hit_test) ( coords: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                             |
| [`bool`](class_bool.md)         | [`resize_object`](#class_textparagraph_method_resize_object) ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )                                           |
| `void`                          | [`set_bidi_override`](#class_textparagraph_method_set_bidi_override) ( override: [`Array`](class_array.md) )                                                                                                                                                                                           |
| [`bool`](class_bool.md)         | [`set_dropcap`](#class_textparagraph_method_set_dropcap) ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), dropcap_margins: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), language: [`String`](class_string.md) = "" )                            |
| `void`                          | [`tab_align`](#class_textparagraph_method_tab_align) ( tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_textparagraph_property_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **alignment** = ``0`` <div id="class_textparagraph_property_alignment"></div>

- `void` **set_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_alignment** ( )

Paragraph horizontal alignment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_break_flags"></div>

[LineBreakFlag](#enum_textserver_linebreakflag) **break_flags** = ``3`` <div id="class_textparagraph_property_break_flags"></div>

- `void` **set_break_flags** ( value: [LineBreakFlag](#enum_textserver_linebreakflag) )
- [LineBreakFlag](#enum_textserver_linebreakflag) **get_break_flags** ( )

Line breaking rules. For more info see [`TextServer`](class_textserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_custom_punctuation"></div>

[`String`](class_string.md) **custom_punctuation** = ``""`` <div id="class_textparagraph_property_custom_punctuation"></div>

- `void` **set_custom_punctuation** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_custom_punctuation** ( )

Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_direction"></div>

[Direction](#enum_textserver_direction) **direction** = ``0`` <div id="class_textparagraph_property_direction"></div>

- `void` **set_direction** ( value: [Direction](#enum_textserver_direction) )
- [Direction](#enum_textserver_direction) **get_direction** ( )

Text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_ellipsis_char"></div>

[`String`](class_string.md) **ellipsis_char** = ``"…"`` <div id="class_textparagraph_property_ellipsis_char"></div>

- `void` **set_ellipsis_char** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_ellipsis_char** ( )

Ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_justification_flags"></div>

[JustificationFlag](#enum_textserver_justificationflag) **justification_flags** = ``163`` <div id="class_textparagraph_property_justification_flags"></div>

- `void` **set_justification_flags** ( value: [JustificationFlag](#enum_textserver_justificationflag) )
- [JustificationFlag](#enum_textserver_justificationflag) **get_justification_flags** ( )

Line fill alignment rules. For more info see [JustificationFlag](#enum_textserver_justificationflag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_max_lines_visible"></div>

[`int`](class_int.md) **max_lines_visible** = ``-1`` <div id="class_textparagraph_property_max_lines_visible"></div>

- `void` **set_max_lines_visible** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_lines_visible** ( )

Limits the lines of text shown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_orientation"></div>

[Orientation](#enum_textserver_orientation) **orientation** = ``0`` <div id="class_textparagraph_property_orientation"></div>

- `void` **set_orientation** ( value: [Orientation](#enum_textserver_orientation) )
- [Orientation](#enum_textserver_orientation) **get_orientation** ( )

Text orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_preserve_control"></div>

[`bool`](class_bool.md) **preserve_control** = ``false`` <div id="class_textparagraph_property_preserve_control"></div>

- `void` **set_preserve_control** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_preserve_control** ( )

If set to `true` text will display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_preserve_invalid"></div>

[`bool`](class_bool.md) **preserve_invalid** = ``true`` <div id="class_textparagraph_property_preserve_invalid"></div>

- `void` **set_preserve_invalid** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_preserve_invalid** ( )

If set to `true` text will display invalid characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **text_overrun_behavior** = ``0`` <div id="class_textparagraph_property_text_overrun_behavior"></div>

- `void` **set_text_overrun_behavior** ( value: [OverrunBehavior](#enum_textserver_overrunbehavior) )
- [OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( )

Sets the clipping behavior when the text exceeds the paragraph's set width. See [OverrunBehavior](#enum_textserver_overrunbehavior) for a description of all modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_property_width"></div>

[`float`](class_float.md) **width** = ``-1.0`` <div id="class_textparagraph_property_width"></div>

- `void` **set_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_width** ( )

Paragraph width.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textparagraph_method_add_object"></div>

[`bool`](class_bool.md) **add_object** ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textparagraph_method_add_object"></div>

Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_add_string"></div>

[`bool`](class_bool.md) **add_string** ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null )<div id="class_textparagraph_method_add_string"></div>

Adds text span and font to draw it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_clear"></div>

`void` **clear** ( )<div id="class_textparagraph_method_clear"></div>

Clears text paragraph (removes text and inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_clear_dropcap"></div>

`void` **clear_dropcap** ( )<div id="class_textparagraph_method_clear_dropcap"></div>

Removes dropcap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw"></div>

`void` **draw** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1), dc_color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw"></div>

Draw all lines of the text and drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw_dropcap"></div>

`void` **draw_dropcap** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw_dropcap"></div>

Draw drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw_dropcap_outline"></div>

`void` **draw_dropcap_outline** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw_dropcap_outline"></div>

Draw drop cap outline into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw_line"></div>

`void` **draw_line** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), line: [`int`](class_int.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw_line"></div>

Draw single line of text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw_line_outline"></div>

`void` **draw_line_outline** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), line: [`int`](class_int.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw_line_outline"></div>

Draw outline of the single line of text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_draw_outline"></div>

`void` **draw_outline** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1), dc_color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textparagraph_method_draw_outline"></div>

Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_dropcap_lines"></div>

[`int`](class_int.md) **get_dropcap_lines** ( ) const[^const]<div id="class_textparagraph_method_get_dropcap_lines"></div>

Returns number of lines used by dropcap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_dropcap_rid"></div>

[`RID`](class_rid.md) **get_dropcap_rid** ( ) const[^const]<div id="class_textparagraph_method_get_dropcap_rid"></div>

Returns drop cap text buffer RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_dropcap_size"></div>

[`Vector2`](class_vector2.md) **get_dropcap_size** ( ) const[^const]<div id="class_textparagraph_method_get_dropcap_size"></div>

Returns drop cap bounding box size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_ascent"></div>

[`float`](class_float.md) **get_line_ascent** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_ascent"></div>

Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_count"></div>

[`int`](class_int.md) **get_line_count** ( ) const[^const]<div id="class_textparagraph_method_get_line_count"></div>

Returns number of lines in the paragraph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_descent"></div>

[`float`](class_float.md) **get_line_descent** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_descent"></div>

Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_object_rect"></div>

[`Rect2`](class_rect2.md) **get_line_object_rect** ( line: [`int`](class_int.md), key: [`Variant`](class_variant.md) ) const[^const]<div id="class_textparagraph_method_get_line_object_rect"></div>

Returns bounding rectangle of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_objects"></div>

[`Array`](class_array.md) **get_line_objects** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_objects"></div>

Returns array of inline objects in the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_range"></div>

[`Vector2i`](class_vector2i.md) **get_line_range** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_range"></div>

Returns character range of the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_rid"></div>

[`RID`](class_rid.md) **get_line_rid** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_rid"></div>

Returns TextServer line buffer RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_size"></div>

[`Vector2`](class_vector2.md) **get_line_size** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_size"></div>

Returns size of the bounding box of the line of text. Returned size is rounded up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_underline_position"></div>

[`float`](class_float.md) **get_line_underline_position** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_underline_position"></div>

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_underline_thickness"></div>

[`float`](class_float.md) **get_line_underline_thickness** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_underline_thickness"></div>

Returns thickness of the underline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_line_width"></div>

[`float`](class_float.md) **get_line_width** ( line: [`int`](class_int.md) ) const[^const]<div id="class_textparagraph_method_get_line_width"></div>

Returns width (for horizontal layout) or height (for vertical) of the line of text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_non_wrapped_size"></div>

[`Vector2`](class_vector2.md) **get_non_wrapped_size** ( ) const[^const]<div id="class_textparagraph_method_get_non_wrapped_size"></div>

Returns the size of the bounding box of the paragraph, without line breaks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_textparagraph_method_get_rid"></div>

Returns TextServer full string buffer RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_get_size"></div>

[`Vector2`](class_vector2.md) **get_size** ( ) const[^const]<div id="class_textparagraph_method_get_size"></div>

Returns the size of the bounding box of the paragraph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_hit_test"></div>

[`int`](class_int.md) **hit_test** ( coords: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_textparagraph_method_hit_test"></div>

Returns caret character offset at the specified coordinates. This function always returns a valid position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_resize_object"></div>

[`bool`](class_bool.md) **resize_object** ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textparagraph_method_resize_object"></div>

Sets new size and alignment of embedded object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_set_bidi_override"></div>

`void` **set_bidi_override** ( override: [`Array`](class_array.md) )<div id="class_textparagraph_method_set_bidi_override"></div>

Overrides BiDi for the structured text.

Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_set_dropcap"></div>

[`bool`](class_bool.md) **set_dropcap** ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), dropcap_margins: [`Rect2`](class_rect2.md) = Rect2(0, 0, 0, 0), language: [`String`](class_string.md) = "" )<div id="class_textparagraph_method_set_dropcap"></div>

Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textparagraph_method_tab_align"></div>

`void` **tab_align** ( tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_textparagraph_method_tab_align"></div>

Aligns paragraph to the given tab-stops.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
