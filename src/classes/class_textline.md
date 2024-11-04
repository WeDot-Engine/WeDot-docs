<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TextLine.xml。 -->

<div id="_class_textline"></div>

# TextLine

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Holds a line of text.

## 描述

Abstraction over [`TextServer`](class_textserver.md) for handling a single line of text.

## 属性

| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | [`alignment`](#class_textline_property_alignment)                         | ``0``     |
| [Direction](#enum_textserver_direction)                       | [`direction`](#class_textline_property_direction)                         | ``0``     |
| [`String`](class_string.md)                                   | [`ellipsis_char`](#class_textline_property_ellipsis_char)                 | ``"…"``   |
| [JustificationFlag](#enum_textserver_justificationflag)       | [`flags`](#class_textline_property_flags)                                 | ``3``     |
| [Orientation](#enum_textserver_orientation)                   | [`orientation`](#class_textline_property_orientation)                     | ``0``     |
| [`bool`](class_bool.md)                                       | [`preserve_control`](#class_textline_property_preserve_control)           | ``false`` |
| [`bool`](class_bool.md)                                       | [`preserve_invalid`](#class_textline_property_preserve_invalid)           | ``true``  |
| [OverrunBehavior](#enum_textserver_overrunbehavior)           | [`text_overrun_behavior`](#class_textline_property_text_overrun_behavior) | ``3``     |
| [`float`](class_float.md)                                     | [`width`](#class_textline_property_width)                                 | ``-1.0``  |

## 方法

| [`bool`](class_bool.md)       | [`add_object`](#class_textline_method_add_object) ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 ) |
| [`bool`](class_bool.md)       | [`add_string`](#class_textline_method_add_string) ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null )                                     |
| `void`                        | [`clear`](#class_textline_method_clear) ( )                                                                                                                                                                                                                                          |
| `void`                        | [`draw`](#class_textline_method_draw) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                                                                                      |
| `void`                        | [`draw_outline`](#class_textline_method_draw_outline) ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]                                             |
| [`float`](class_float.md)     | [`get_line_ascent`](#class_textline_method_get_line_ascent) ( ) const[^const]                                                                                                                                                                                                        |
| [`float`](class_float.md)     | [`get_line_descent`](#class_textline_method_get_line_descent) ( ) const[^const]                                                                                                                                                                                                      |
| [`float`](class_float.md)     | [`get_line_underline_position`](#class_textline_method_get_line_underline_position) ( ) const[^const]                                                                                                                                                                                |
| [`float`](class_float.md)     | [`get_line_underline_thickness`](#class_textline_method_get_line_underline_thickness) ( ) const[^const]                                                                                                                                                                              |
| [`float`](class_float.md)     | [`get_line_width`](#class_textline_method_get_line_width) ( ) const[^const]                                                                                                                                                                                                          |
| [`Rect2`](class_rect2.md)     | [`get_object_rect`](#class_textline_method_get_object_rect) ( key: [`Variant`](class_variant.md) ) const[^const]                                                                                                                                                                     |
| [`Array`](class_array.md)     | [`get_objects`](#class_textline_method_get_objects) ( ) const[^const]                                                                                                                                                                                                                |
| [`RID`](class_rid.md)         | [`get_rid`](#class_textline_method_get_rid) ( ) const[^const]                                                                                                                                                                                                                        |
| [`Vector2`](class_vector2.md) | [`get_size`](#class_textline_method_get_size) ( ) const[^const]                                                                                                                                                                                                                      |
| [`int`](class_int.md)         | [`hit_test`](#class_textline_method_hit_test) ( coords: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                    |
| [`bool`](class_bool.md)       | [`resize_object`](#class_textline_method_resize_object) ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )                              |
| `void`                        | [`set_bidi_override`](#class_textline_method_set_bidi_override) ( override: [`Array`](class_array.md) )                                                                                                                                                                              |
| `void`                        | [`tab_align`](#class_textline_method_tab_align) ( tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )                                                                                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_textline_property_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **alignment** = ``0`` <div id="class_textline_property_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Sets text alignment within the line as if the line was horizontal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_direction"></div>

[Direction](#enum_textserver_direction) **direction** = ``0`` <div id="class_textline_property_direction"></div>

- `void` **set_direction** ( value: [Direction](#enum_textserver_direction) )
- [Direction](#enum_textserver_direction) **get_direction** ( )

Text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_ellipsis_char"></div>

[`String`](class_string.md) **ellipsis_char** = ``"…"`` <div id="class_textline_property_ellipsis_char"></div>

- `void` **set_ellipsis_char** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_ellipsis_char** ( )

Ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_flags"></div>

[JustificationFlag](#enum_textserver_justificationflag) **flags** = ``3`` <div id="class_textline_property_flags"></div>

- `void` **set_flags** ( value: [JustificationFlag](#enum_textserver_justificationflag) )
- [JustificationFlag](#enum_textserver_justificationflag) **get_flags** ( )

Line alignment rules. For more info see [`TextServer`](class_textserver.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_orientation"></div>

[Orientation](#enum_textserver_orientation) **orientation** = ``0`` <div id="class_textline_property_orientation"></div>

- `void` **set_orientation** ( value: [Orientation](#enum_textserver_orientation) )
- [Orientation](#enum_textserver_orientation) **get_orientation** ( )

Text orientation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_preserve_control"></div>

[`bool`](class_bool.md) **preserve_control** = ``false`` <div id="class_textline_property_preserve_control"></div>

- `void` **set_preserve_control** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_preserve_control** ( )

If set to `true` text will display control characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_preserve_invalid"></div>

[`bool`](class_bool.md) **preserve_invalid** = ``true`` <div id="class_textline_property_preserve_invalid"></div>

- `void` **set_preserve_invalid** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_preserve_invalid** ( )

If set to `true` text will display invalid characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **text_overrun_behavior** = ``3`` <div id="class_textline_property_text_overrun_behavior"></div>

- `void` **set_text_overrun_behavior** ( value: [OverrunBehavior](#enum_textserver_overrunbehavior) )
- [OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( )

Sets the clipping behavior when the text exceeds the text line's set width. See [OverrunBehavior](#enum_textserver_overrunbehavior) for a description of all modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_property_width"></div>

[`float`](class_float.md) **width** = ``-1.0`` <div id="class_textline_property_width"></div>

- `void` **set_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_width** ( )

Text line width.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textline_method_add_object"></div>

[`bool`](class_bool.md) **add_object** ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, length: [`int`](class_int.md) = 1, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textline_method_add_object"></div>

Adds inline object to the text buffer, `key` must be unique. In the text, object is represented as `length` object replacement characters.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_add_string"></div>

[`bool`](class_bool.md) **add_string** ( text: [`String`](class_string.md), font: [`Font`](class_font.md), font_size: [`int`](class_int.md), language: [`String`](class_string.md) = "", meta: [`Variant`](class_variant.md) = null )<div id="class_textline_method_add_string"></div>

Adds text span and font to draw it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_clear"></div>

`void` **clear** ( )<div id="class_textline_method_clear"></div>

Clears text line (removes text and inline objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_draw"></div>

`void` **draw** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textline_method_draw"></div>

Draw text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_draw_outline"></div>

`void` **draw_outline** ( canvas: [`RID`](class_rid.md), pos: [`Vector2`](class_vector2.md), outline_size: [`int`](class_int.md) = 1, color: [`Color`](class_color.md) = Color(1, 1, 1, 1) ) const[^const]<div id="class_textline_method_draw_outline"></div>

Draw text into a canvas item at a given position, with `color`. `pos` specifies the top left corner of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_line_ascent"></div>

[`float`](class_float.md) **get_line_ascent** ( ) const[^const]<div id="class_textline_method_get_line_ascent"></div>

Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_line_descent"></div>

[`float`](class_float.md) **get_line_descent** ( ) const[^const]<div id="class_textline_method_get_line_descent"></div>

Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_line_underline_position"></div>

[`float`](class_float.md) **get_line_underline_position** ( ) const[^const]<div id="class_textline_method_get_line_underline_position"></div>

Returns pixel offset of the underline below the baseline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_line_underline_thickness"></div>

[`float`](class_float.md) **get_line_underline_thickness** ( ) const[^const]<div id="class_textline_method_get_line_underline_thickness"></div>

Returns thickness of the underline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_line_width"></div>

[`float`](class_float.md) **get_line_width** ( ) const[^const]<div id="class_textline_method_get_line_width"></div>

Returns width (for horizontal layout) or height (for vertical) of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_object_rect"></div>

[`Rect2`](class_rect2.md) **get_object_rect** ( key: [`Variant`](class_variant.md) ) const[^const]<div id="class_textline_method_get_object_rect"></div>

Returns bounding rectangle of the inline object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_objects"></div>

[`Array`](class_array.md) **get_objects** ( ) const[^const]<div id="class_textline_method_get_objects"></div>

Returns array of inline objects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_textline_method_get_rid"></div>

Returns TextServer buffer RID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_get_size"></div>

[`Vector2`](class_vector2.md) **get_size** ( ) const[^const]<div id="class_textline_method_get_size"></div>

Returns size of the bounding box of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_hit_test"></div>

[`int`](class_int.md) **hit_test** ( coords: [`float`](class_float.md) ) const[^const]<div id="class_textline_method_hit_test"></div>

Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_resize_object"></div>

[`bool`](class_bool.md) **resize_object** ( key: [`Variant`](class_variant.md), size: [`Vector2`](class_vector2.md), inline_align: [InlineAlignment](#enum_@globalscope_inlinealignment) = 5, baseline: [`float`](class_float.md) = 0.0 )<div id="class_textline_method_resize_object"></div>

Sets new size and alignment of embedded object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_set_bidi_override"></div>

`void` **set_bidi_override** ( override: [`Array`](class_array.md) )<div id="class_textline_method_set_bidi_override"></div>

Overrides BiDi for the structured text.

Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textline_method_tab_align"></div>

`void` **tab_align** ( tab_stops: [`PackedFloat32Array`](class_packedfloat32array.md) )<div id="class_textline_method_tab_align"></div>

Aligns text to the given tab-stops.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
