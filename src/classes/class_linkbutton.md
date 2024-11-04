<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/LinkButton.xml。 -->

<div id="_class_linkbutton"></div>

# LinkButton

**继承：** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that represents a link.

## 描述

A button that represents a link. This type of button is primarily used for interactions that cause a context change (like linking to a web page).

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

## 属性

| [FocusMode](#enum_control_focusmode)                          | focus_mode                                                                                                  | ``0`` (overrides [`Control`](#class_control_property_focus_mode))                 |
| [`String`](class_string.md)                                   | [`language`](#class_linkbutton_property_language)                                                           | ``""``                                                                            |
| [CursorShape](#enum_control_cursorshape)                      | mouse_default_cursor_shape                                                                                  | ``2`` (overrides [`Control`](#class_control_property_mouse_default_cursor_shape)) |
| [StructuredTextParser](#enum_textserver_structuredtextparser) | [`structured_text_bidi_override`](#class_linkbutton_property_structured_text_bidi_override)                 | ``0``                                                                             |
| [`Array`](class_array.md)                                     | [`structured_text_bidi_override_options`](#class_linkbutton_property_structured_text_bidi_override_options) | ``[]``                                                                            |
| [`String`](class_string.md)                                   | [`text`](#class_linkbutton_property_text)                                                                   | ``""``                                                                            |
| [TextDirection](#enum_control_textdirection)                  | [`text_direction`](#class_linkbutton_property_text_direction)                                               | ``0``                                                                             |
| [UnderlineMode](#enum_linkbutton_underlinemode)               | [`underline`](#class_linkbutton_property_underline)                                                         | ``0``                                                                             |
| [`String`](class_string.md)                                   | [`uri`](#class_linkbutton_property_uri)                                                                     | ``""``                                                                            |

## 主题属性

| [`Color`](class_color.md)       | [`font_color`](#class_linkbutton_theme_color_font_color)                             | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`Color`](class_color.md)       | [`font_disabled_color`](#class_linkbutton_theme_color_font_disabled_color)           | ``Color(0, 0, 0, 1)``             |
| [`Color`](class_color.md)       | [`font_focus_color`](#class_linkbutton_theme_color_font_focus_color)                 | ``Color(0.95, 0.95, 0.95, 1)``    |
| [`Color`](class_color.md)       | [`font_hover_color`](#class_linkbutton_theme_color_font_hover_color)                 | ``Color(0.95, 0.95, 0.95, 1)``    |
| [`Color`](class_color.md)       | [`font_hover_pressed_color`](#class_linkbutton_theme_color_font_hover_pressed_color) | ``Color(0, 0, 0, 1)``             |
| [`Color`](class_color.md)       | [`font_outline_color`](#class_linkbutton_theme_color_font_outline_color)             | ``Color(0, 0, 0, 1)``             |
| [`Color`](class_color.md)       | [`font_pressed_color`](#class_linkbutton_theme_color_font_pressed_color)             | ``Color(1, 1, 1, 1)``             |
| [`int`](class_int.md)           | [`outline_size`](#class_linkbutton_theme_constant_outline_size)                      | ``0``                             |
| [`int`](class_int.md)           | [`underline_spacing`](#class_linkbutton_theme_constant_underline_spacing)            | ``2``                             |
| [`Font`](class_font.md)         | [`font`](#class_linkbutton_theme_font_font)                                          |                                   |
| [`int`](class_int.md)           | [`font_size`](#class_linkbutton_theme_font_size_font_size)                           |                                   |
| [`StyleBox`](class_stylebox.md) | [`focus`](#class_linkbutton_theme_style_focus)                                       |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_linkbutton_underlinemode"></div>

enum **UnderlineMode**: <div id="enum_linkbutton_underlinemode"></div>

<div id="_class_linkbutton_constant_underline_mode_always"></div>

[UnderlineMode](#enum_linkbutton_underlinemode) **UNDERLINE_MODE_ALWAYS** = ``0``

The LinkButton will always show an underline at the bottom of its text.

<div id="_class_linkbutton_constant_underline_mode_on_hover"></div>

[UnderlineMode](#enum_linkbutton_underlinemode) **UNDERLINE_MODE_ON_HOVER** = ``1``

The LinkButton will show an underline at the bottom of its text when the mouse cursor is over it.

<div id="_class_linkbutton_constant_underline_mode_never"></div>

[UnderlineMode](#enum_linkbutton_underlinemode) **UNDERLINE_MODE_NEVER** = ``2``

The LinkButton will never show an underline at the bottom of its text.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_linkbutton_property_language"></div>

[`String`](class_string.md) **language** = ``""`` <div id="class_linkbutton_property_language"></div>

- `void` **set_language** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_language** ( )

Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_structured_text_bidi_override"></div>

[StructuredTextParser](#enum_textserver_structuredtextparser) **structured_text_bidi_override** = ``0`` <div id="class_linkbutton_property_structured_text_bidi_override"></div>

- `void` **set_structured_text_bidi_override** ( value: [StructuredTextParser](#enum_textserver_structuredtextparser) )
- [StructuredTextParser](#enum_textserver_structuredtextparser) **get_structured_text_bidi_override** ( )

Set BiDi algorithm override for the structured text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_structured_text_bidi_override_options"></div>

[`Array`](class_array.md) **structured_text_bidi_override_options** = ``[]`` <div id="class_linkbutton_property_structured_text_bidi_override_options"></div>

- `void` **set_structured_text_bidi_override_options** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_structured_text_bidi_override_options** ( )

Set additional options for BiDi override.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_text"></div>

[`String`](class_string.md) **text** = ``""`` <div id="class_linkbutton_property_text"></div>

- `void` **set_text** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_text** ( )

The button's text that will be displayed inside the button's area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_text_direction"></div>

[TextDirection](#enum_control_textdirection) **text_direction** = ``0`` <div id="class_linkbutton_property_text_direction"></div>

- `void` **set_text_direction** ( value: [TextDirection](#enum_control_textdirection) )
- [TextDirection](#enum_control_textdirection) **get_text_direction** ( )

Base text writing direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_underline"></div>

[UnderlineMode](#enum_linkbutton_underlinemode) **underline** = ``0`` <div id="class_linkbutton_property_underline"></div>

- `void` **set_underline_mode** ( value: [UnderlineMode](#enum_linkbutton_underlinemode) )
- [UnderlineMode](#enum_linkbutton_underlinemode) **get_underline_mode** ( )

The underline mode to use for the text. See [UnderlineMode](#enum_linkbutton_underlinemode) for the available modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_property_uri"></div>

[`String`](class_string.md) **uri** = ``""`` <div id="class_linkbutton_property_uri"></div>

- `void` **set_uri** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_uri** ( )

The [*URI*](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) for this **LinkButton**. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [`OS.shell_open`](#class_os_method_shell_open)). HTTP and HTTPS URLs open the default web browser.

 **Examples:** 



```gdscript

    uri = "https://godotengine.org"  # Opens the URL in the default web browser.
    uri = "C:\SomeFolder"  # Opens the file explorer at the given path.
    uri = "C:\SomeImage.png"  # Opens the given image in the default viewing app.
```

```csharp

    Uri = "https://godotengine.org"; // Opens the URL in the default web browser.
    Uri = "C:\SomeFolder"; // Opens the file explorer at the given path.
    Uri = "C:\SomeImage.png"; // Opens the given image in the default viewing app.
```







<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_linkbutton_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_linkbutton_theme_color_font_color"></div>

Default text [`Color`](class_color.md) of the **LinkButton**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_disabled_color"></div>

[`Color`](class_color.md) **font_disabled_color** = ``Color(0, 0, 0, 1)`` <div id="class_linkbutton_theme_color_font_disabled_color"></div>

Text [`Color`](class_color.md) used when the **LinkButton** is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_focus_color"></div>

[`Color`](class_color.md) **font_focus_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_linkbutton_theme_color_font_focus_color"></div>

Text [`Color`](class_color.md) used when the **LinkButton** is focused. Only replaces the normal text color of the button. Disabled, hovered, and pressed states take precedence over this color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_hover_color"></div>

[`Color`](class_color.md) **font_hover_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_linkbutton_theme_color_font_hover_color"></div>

Text [`Color`](class_color.md) used when the **LinkButton** is being hovered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_hover_pressed_color"></div>

[`Color`](class_color.md) **font_hover_pressed_color** = ``Color(0, 0, 0, 1)`` <div id="class_linkbutton_theme_color_font_hover_pressed_color"></div>

Text [`Color`](class_color.md) used when the **LinkButton** is being hovered and pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_linkbutton_theme_color_font_outline_color"></div>

The tint of text outline of the **LinkButton**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_color_font_pressed_color"></div>

[`Color`](class_color.md) **font_pressed_color** = ``Color(1, 1, 1, 1)`` <div id="class_linkbutton_theme_color_font_pressed_color"></div>

Text [`Color`](class_color.md) used when the **LinkButton** is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_linkbutton_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_linkbutton_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_constant_underline_spacing"></div>

[`int`](class_int.md) **underline_spacing** = ``2`` <div id="class_linkbutton_theme_constant_underline_spacing"></div>

The vertical space between the baseline of text and the underline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_linkbutton_theme_font_font"></div>

[`Font`](class_font.md) of the **LinkButton**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_linkbutton_theme_font_size_font_size"></div>

Font size of the **LinkButton**'s text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_linkbutton_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) **focus** <div id="class_linkbutton_theme_style_focus"></div>

[`StyleBox`](class_stylebox.md) used when the **LinkButton** is focused. The [`focus`](#class_linkbutton_theme_style_focus) [`StyleBox`](class_stylebox.md) is displayed *over* the base [`StyleBox`](class_stylebox.md), so a partially transparent [`StyleBox`](class_stylebox.md) should be used to ensure the base [`StyleBox`](class_stylebox.md) remains visible. A [`StyleBox`](class_stylebox.md) that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a [`StyleBoxEmpty`](class_styleboxempty.md) resource. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
