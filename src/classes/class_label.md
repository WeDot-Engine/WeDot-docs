<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Label.xml。 -->

<div id="_class_label"></div>

# Label

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control for displaying plain text.

## 描述

A control for displaying plain text. It gives you control over the horizontal and vertical alignment and can wrap the text inside the node's bounding rectangle. It doesn't support bold, italics, or other rich text formatting. For that, use [`RichTextLabel`](class_richtextlabel.md) instead.

## 属性

| [AutowrapMode](#enum_textserver_autowrapmode)                           | [`autowrap_mode`](#class_label_property_autowrap_mode)                                                 | ``0``                                                                      |
| [`bool`](class_bool.md)                                                 | [`clip_text`](#class_label_property_clip_text)                                                         | ``false``                                                                  |
| [`String`](class_string.md)                                             | [`ellipsis_char`](#class_label_property_ellipsis_char)                                                 | ``"…"``                                                                    |
| [HorizontalAlignment](#enum_@globalscope_horizontalalignment)           | [`horizontal_alignment`](#class_label_property_horizontal_alignment)                                   | ``0``                                                                      |
| [JustificationFlag](#enum_textserver_justificationflag)                 | [`justification_flags`](#class_label_property_justification_flags)                                     | ``163``                                                                    |
| [`LabelSettings`](class_labelsettings.md)                               | [`label_settings`](#class_label_property_label_settings)                                               |                                                                            |
| [`String`](class_string.md)                                             | [`language`](#class_label_property_language)                                                           | ``""``                                                                     |
| [`int`](class_int.md)                                                   | [`lines_skipped`](#class_label_property_lines_skipped)                                                 | ``0``                                                                      |
| [`int`](class_int.md)                                                   | [`max_lines_visible`](#class_label_property_max_lines_visible)                                         | ``-1``                                                                     |
| [MouseFilter](#enum_control_mousefilter)                                | mouse_filter                                                                                           | ``2`` (overrides [`Control`](#class_control_property_mouse_filter))        |
| [SizeFlags](#enum_control_sizeflags)                                    | size_flags_vertical                                                                                    | ``4`` (overrides [`Control`](#class_control_property_size_flags_vertical)) |
| [StructuredTextParser](#enum_textserver_structuredtextparser)           | [`structured_text_bidi_override`](#class_label_property_structured_text_bidi_override)                 | ``0``                                                                      |
| [`Array`](class_array.md)                                               | [`structured_text_bidi_override_options`](#class_label_property_structured_text_bidi_override_options) | ``[]``                                                                     |
| [`PackedFloat32Array`](class_packedfloat32array.md)                     | [`tab_stops`](#class_label_property_tab_stops)                                                         | ``PackedFloat32Array()``                                                   |
| [`String`](class_string.md)                                             | [`text`](#class_label_property_text)                                                                   | ``""``                                                                     |
| [TextDirection](#enum_control_textdirection)                            | [`text_direction`](#class_label_property_text_direction)                                               | ``0``                                                                      |
| [OverrunBehavior](#enum_textserver_overrunbehavior)                     | [`text_overrun_behavior`](#class_label_property_text_overrun_behavior)                                 | ``0``                                                                      |
| [`bool`](class_bool.md)                                                 | [`uppercase`](#class_label_property_uppercase)                                                         | ``false``                                                                  |
| [VerticalAlignment](#enum_@globalscope_verticalalignment)               | [`vertical_alignment`](#class_label_property_vertical_alignment)                                       | ``0``                                                                      |
| [`int`](class_int.md)                                                   | [`visible_characters`](#class_label_property_visible_characters)                                       | ``-1``                                                                     |
| [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) | [`visible_characters_behavior`](#class_label_property_visible_characters_behavior)                     | ``0``                                                                      |
| [`float`](class_float.md)                                               | [`visible_ratio`](#class_label_property_visible_ratio)                                                 | ``1.0``                                                                    |

## 方法

| [`Rect2`](class_rect2.md) | [`get_character_bounds`](#class_label_method_get_character_bounds) ( pos: [`int`](class_int.md) ) const[^const] |
| [`int`](class_int.md)     | [`get_line_count`](#class_label_method_get_line_count) ( ) const[^const]                                        |
| [`int`](class_int.md)     | [`get_line_height`](#class_label_method_get_line_height) ( line: [`int`](class_int.md) = -1 ) const[^const]     |
| [`int`](class_int.md)     | [`get_total_character_count`](#class_label_method_get_total_character_count) ( ) const[^const]                  |
| [`int`](class_int.md)     | [`get_visible_line_count`](#class_label_method_get_visible_line_count) ( ) const[^const]                        |

## 主题属性

| [`Color`](class_color.md)       | [`font_color`](#class_label_theme_color_font_color)                      | ``Color(1, 1, 1, 1)`` |
| [`Color`](class_color.md)       | [`font_outline_color`](#class_label_theme_color_font_outline_color)      | ``Color(0, 0, 0, 1)`` |
| [`Color`](class_color.md)       | [`font_shadow_color`](#class_label_theme_color_font_shadow_color)        | ``Color(0, 0, 0, 0)`` |
| [`int`](class_int.md)           | [`line_spacing`](#class_label_theme_constant_line_spacing)               | ``3``                 |
| [`int`](class_int.md)           | [`outline_size`](#class_label_theme_constant_outline_size)               | ``0``                 |
| [`int`](class_int.md)           | [`shadow_offset_x`](#class_label_theme_constant_shadow_offset_x)         | ``1``                 |
| [`int`](class_int.md)           | [`shadow_offset_y`](#class_label_theme_constant_shadow_offset_y)         | ``1``                 |
| [`int`](class_int.md)           | [`shadow_outline_size`](#class_label_theme_constant_shadow_outline_size) | ``1``                 |
| [`Font`](class_font.md)         | [`font`](#class_label_theme_font_font)                                   |                       |
| [`int`](class_int.md)           | [`font_size`](#class_label_theme_font_size_font_size)                    |                       |
| [`StyleBox`](class_stylebox.md) | [`normal`](#class_label_theme_style_normal)                              |                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_label_property_autowrap_mode"></div>

[AutowrapMode](#enum_textserver_autowrapmode) **autowrap_mode** = ``0`` <div id="class_label_property_autowrap_mode"></div>

- `void` **set_autowrap_mode** ( value: [AutowrapMode](#enum_textserver_autowrapmode) )
- [AutowrapMode](#enum_textserver_autowrapmode) **get_autowrap_mode** ( )

If set to something other than [`TextServer.AUTOWRAP_OFF`](#class_textserver_constant_autowrap_off), the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [AutowrapMode](#enum_textserver_autowrapmode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_clip_text"></div>

[`bool`](class_bool.md) **clip_text** = ``false`` <div id="class_label_property_clip_text"></div>

- `void` **set_clip_text** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_clipping_text** ( )

If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_ellipsis_char"></div>

[`String`](class_string.md) **ellipsis_char** = ``"…"`` <div id="class_label_property_ellipsis_char"></div>

- `void` **set_ellipsis_char** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_ellipsis_char** ( )

Ellipsis character used for text clipping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_horizontal_alignment"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **horizontal_alignment** = ``0`` <div id="class_label_property_horizontal_alignment"></div>

- `void` **set_horizontal_alignment** ( value: [HorizontalAlignment](#enum_@globalscope_horizontalalignment) )
- [HorizontalAlignment](#enum_@globalscope_horizontalalignment) **get_horizontal_alignment** ( )

Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [HorizontalAlignment](#enum_@globalscope_horizontalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_justification_flags"></div>

[JustificationFlag](#enum_textserver_justificationflag) **justification_flags** = ``163`` <div id="class_label_property_justification_flags"></div>

- `void` **set_justification_flags** ( value: [JustificationFlag](#enum_textserver_justificationflag) )
- [JustificationFlag](#enum_textserver_justificationflag) **get_justification_flags** ( )

Line fill alignment rules. For more info see [JustificationFlag](#enum_textserver_justificationflag).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_label_settings"></div>

[`LabelSettings`](class_labelsettings.md) **label_settings** <div id="class_label_property_label_settings"></div>

- `void` **set_label_settings** ( value: [`LabelSettings`](class_labelsettings.md) )
- [`LabelSettings`](class_labelsettings.md) **get_label_settings** ( )

A [`LabelSettings`](class_labelsettings.md) resource that can be shared between multiple **Label** nodes. Takes priority over theme properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_label_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_lines_skipped"></div>

[`int`](class_int.md) **lines_skipped** = ``0`` <div id="class_label_property_lines_skipped"></div>

- `void` **set_lines_skipped** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_lines_skipped** ( )

The number of the lines ignored and not displayed from the start of the [`text`](#class_label_property_text) value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_max_lines_visible"></div>

[`int`](class_int.md) **max_lines_visible** = ``-1`` <div id="class_label_property_max_lines_visible"></div>

- `void` **set_max_lines_visible** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_lines_visible** ( )

Limits the lines of text the node shows on screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_label_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_label_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_tab_stops"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **tab_stops** = ``PackedFloat32Array()`` <div id="class_label_property_tab_stops"></div>

- `void` **set_tab_stops** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_tab_stops** ( )

Aligns text to the given tab-stops.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedFloat32Array`](class_packedfloat32array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_label_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The text to display on screen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_label_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_text_overrun_behavior"></div>

[OverrunBehavior](#enum_textserver_overrunbehavior) **text_overrun_behavior** = ``0`` <div id="class_label_property_text_overrun_behavior"></div>

- `void` **set_text_overrun_behavior** ( value: [OverrunBehavior](#enum_textserver_overrunbehavior) )
- [OverrunBehavior](#enum_textserver_overrunbehavior) **get_text_overrun_behavior** ( )

Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [OverrunBehavior](#enum_textserver_overrunbehavior) for a description of all modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_uppercase"></div>

[`bool`](class_bool.md) **uppercase** = ``false`` <div id="class_label_property_uppercase"></div>

- `void` **set_uppercase** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_uppercase** ( )

If `true`, all the text displays as UPPERCASE.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_vertical_alignment"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **vertical_alignment** = ``0`` <div id="class_label_property_vertical_alignment"></div>

- `void` **set_vertical_alignment** ( value: [VerticalAlignment](#enum_@globalscope_verticalalignment) )
- [VerticalAlignment](#enum_@globalscope_verticalalignment) **get_vertical_alignment** ( )

Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [VerticalAlignment](#enum_@globalscope_verticalalignment) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_visible_characters"></div>

[`int`](class_int.md) **visible_characters** = ``-1`` <div id="class_label_property_visible_characters"></div>

- `void` **set_visible_characters** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_visible_characters** ( )

The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.

 **Note:** Setting this property updates [`visible_ratio`](#class_label_property_visible_ratio) accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_visible_characters_behavior"></div>

[VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **visible_characters_behavior** = ``0`` <div id="class_label_property_visible_characters_behavior"></div>

- `void` **set_visible_characters_behavior** ( value: [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) )
- [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) **get_visible_characters_behavior** ( )

Sets the clipping behavior when [`visible_characters`](#class_label_property_visible_characters) or [`visible_ratio`](#class_label_property_visible_ratio) is set. See [VisibleCharactersBehavior](#enum_textserver_visiblecharactersbehavior) for more info.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_property_visible_ratio"></div>

[`float`](class_float.md) **visible_ratio** = ``1.0`` <div id="class_label_property_visible_ratio"></div>

- `void` **set_visible_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_visible_ratio** ( )

The fraction of characters to display, relative to the total number of characters (see [`get_total_character_count`](#class_label_method_get_total_character_count)). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.

 **Note:** Setting this property updates [`visible_characters`](#class_label_property_visible_characters) accordingly.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_label_method_get_character_bounds"></div>

[`Rect2`](class_rect2.md) **get_character_bounds** ( pos: [`int`](class_int.md) ) const[^const]<div id="class_label_method_get_character_bounds"></div>

Returns the bounding rectangle of the character at position `pos`. If the character is a non-visual character or `pos` is outside the valid range, an empty [`Rect2`](class_rect2.md) is returned. If the character is a part of a composite grapheme, the bounding rectangle of the whole grapheme is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_method_get_line_count"></div>

[`int`](class_int.md) **get_line_count** ( ) const[^const]<div id="class_label_method_get_line_count"></div>

Returns the number of lines of text the Label has.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_method_get_line_height"></div>

[`int`](class_int.md) **get_line_height** ( line: [`int`](class_int.md) = -1 ) const[^const]<div id="class_label_method_get_line_height"></div>

Returns the height of the line `line`.

If `line` is set to `-1`, returns the biggest line height.

If there are no lines, returns font size in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_method_get_total_character_count"></div>

[`int`](class_int.md) **get_total_character_count** ( ) const[^const]<div id="class_label_method_get_total_character_count"></div>

Returns the total number of printable characters in the text (excluding spaces and newlines).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_method_get_visible_line_count"></div>

[`int`](class_int.md) **get_visible_line_count** ( ) const[^const]<div id="class_label_method_get_visible_line_count"></div>

Returns the number of lines shown. Useful if the **Label**'s height cannot currently display all lines.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_label_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(1, 1, 1, 1)`` <div id="class_label_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the **Label**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_label_theme_color_font_outline_color"></div>

The color of text outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_color_font_shadow_color"></div>

[`Color`](class_color.md) **font_shadow_color** = ``Color(0, 0, 0, 0)`` <div id="class_label_theme_color_font_shadow_color"></div>

[`Color`](class_color.md) of the text's shadow effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_constant_line_spacing"></div>

[`int`](class_int.md) **line_spacing** = ``3`` <div id="class_label_theme_constant_line_spacing"></div>

Vertical space between lines in multiline **Label**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_label_theme_constant_outline_size"></div>

Text outline size.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_label_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

 **Note:** Using a value that is larger than half the font size is not recommended, as the font outline may fail to be fully closed in this case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_constant_shadow_offset_x"></div>

[`int`](class_int.md) **shadow_offset_x** = ``1`` <div id="class_label_theme_constant_shadow_offset_x"></div>

The horizontal offset of the text's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_constant_shadow_offset_y"></div>

[`int`](class_int.md) **shadow_offset_y** = ``1`` <div id="class_label_theme_constant_shadow_offset_y"></div>

The vertical offset of the text's shadow.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_constant_shadow_outline_size"></div>

[`int`](class_int.md) **shadow_outline_size** = ``1`` <div id="class_label_theme_constant_shadow_outline_size"></div>

The size of the shadow outline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_label_theme_font_font"></div>

[`Font`](class_font.md) used for the **Label**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_label_theme_font_size_font_size"></div>

Font size of the **Label**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_label_theme_style_normal"></div>

[`StyleBox`](class_stylebox.md) **normal** <div id="class_label_theme_style_normal"></div>

Background [`StyleBox`](class_stylebox.md) for the **Label**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
