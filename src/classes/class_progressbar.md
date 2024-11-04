<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ProgressBar.xml。 -->

<div id="_class_progressbar"></div>

# ProgressBar

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control used for visual representation of a percentage.

## 描述

A control used for visual representation of a percentage. Shows fill percentage from right to left.

## 属性

| [`bool`](class_bool.md) | [`editor_preview_indeterminate`](#class_progressbar_property_editor_preview_indeterminate) |           |
| [`int`](class_int.md)   | [`fill_mode`](#class_progressbar_property_fill_mode)                                       | ``0``     |
| [`bool`](class_bool.md) | [`indeterminate`](#class_progressbar_property_indeterminate)                               | ``false`` |
| [`bool`](class_bool.md) | [`show_percentage`](#class_progressbar_property_show_percentage)                           | ``true``  |

## 主题属性

| [`Color`](class_color.md)       | [`font_color`](#class_progressbar_theme_color_font_color)                 | ``Color(0.95, 0.95, 0.95, 1)`` |
| [`Color`](class_color.md)       | [`font_outline_color`](#class_progressbar_theme_color_font_outline_color) | ``Color(0, 0, 0, 1)``          |
| [`int`](class_int.md)           | [`outline_size`](#class_progressbar_theme_constant_outline_size)          | ``0``                          |
| [`Font`](class_font.md)         | [`font`](#class_progressbar_theme_font_font)                              |                                |
| [`int`](class_int.md)           | [`font_size`](#class_progressbar_theme_font_size_font_size)               |                                |
| [`StyleBox`](class_stylebox.md) | [`background`](#class_progressbar_theme_style_background)                 |                                |
| [`StyleBox`](class_stylebox.md) | [`fill`](#class_progressbar_theme_style_fill)                             |                                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_progressbar_fillmode"></div>

enum **FillMode**: <div id="enum_progressbar_fillmode"></div>

<div id="_class_progressbar_constant_fill_begin_to_end"></div>

[FillMode](#enum_progressbar_fillmode) **FILL_BEGIN_TO_END** = ``0``

The progress bar fills from begin to end horizontally, according to the language direction. If [`Control.is_layout_rtl`](#class_control_method_is_layout_rtl) returns `false`, it fills from left to right, and if it returns `true`, it fills from right to left.

<div id="_class_progressbar_constant_fill_end_to_begin"></div>

[FillMode](#enum_progressbar_fillmode) **FILL_END_TO_BEGIN** = ``1``

The progress bar fills from end to begin horizontally, according to the language direction. If [`Control.is_layout_rtl`](#class_control_method_is_layout_rtl) returns `false`, it fills from right to left, and if it returns `true`, it fills from left to right.

<div id="_class_progressbar_constant_fill_top_to_bottom"></div>

[FillMode](#enum_progressbar_fillmode) **FILL_TOP_TO_BOTTOM** = ``2``

The progress fills from top to bottom.

<div id="_class_progressbar_constant_fill_bottom_to_top"></div>

[FillMode](#enum_progressbar_fillmode) **FILL_BOTTOM_TO_TOP** = ``3``

The progress fills from bottom to top.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_progressbar_property_editor_preview_indeterminate"></div>

[`bool`](class_bool.md) **editor_preview_indeterminate** <div id="class_progressbar_property_editor_preview_indeterminate"></div>

- `void` **set_editor_preview_indeterminate** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editor_preview_indeterminate_enabled** ( )

If `false`, the [`indeterminate`](#class_progressbar_property_indeterminate) animation will be paused in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_property_fill_mode"></div>

[`int`](class_int.md) **fill_mode** = ``0`` <div id="class_progressbar_property_fill_mode"></div>

- `void` **set_fill_mode** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fill_mode** ( )

The fill direction. See [FillMode](#enum_progressbar_fillmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_property_indeterminate"></div>

[`bool`](class_bool.md) **indeterminate** = ``false`` <div id="class_progressbar_property_indeterminate"></div>

- `void` **set_indeterminate** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_indeterminate** ( )

When set to `true`, the progress bar indicates that something is happening with an animation, but does not show the fill percentage or value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_property_show_percentage"></div>

[`bool`](class_bool.md) **show_percentage** = ``true`` <div id="class_progressbar_property_show_percentage"></div>

- `void` **set_show_percentage** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_percentage_shown** ( )

If `true`, the fill percentage is displayed on the bar.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_progressbar_theme_color_font_color"></div>

[`Color`](class_color.md) **font_color** = ``Color(0.95, 0.95, 0.95, 1)`` <div id="class_progressbar_theme_color_font_color"></div>

The color of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_color_font_outline_color"></div>

[`Color`](class_color.md) **font_outline_color** = ``Color(0, 0, 0, 1)`` <div id="class_progressbar_theme_color_font_outline_color"></div>

The tint of text outline of the **ProgressBar**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_constant_outline_size"></div>

[`int`](class_int.md) **outline_size** = ``0`` <div id="class_progressbar_theme_constant_outline_size"></div>

The size of the text outline.

 **Note:** If using a font with [`FontFile.multichannel_signed_distance_field`](#class_fontfile_property_multichannel_signed_distance_field) enabled, its [`FontFile.msdf_pixel_range`](#class_fontfile_property_msdf_pixel_range) must be set to at least *twice* the value of [`outline_size`](#class_progressbar_theme_constant_outline_size) for outline rendering to look correct. Otherwise, the outline may appear to be cut off earlier than intended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_font_font"></div>

[`Font`](class_font.md) **font** <div id="class_progressbar_theme_font_font"></div>

Font used to draw the fill percentage if [`show_percentage`](#class_progressbar_property_show_percentage) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_font_size_font_size"></div>

[`int`](class_int.md) **font_size** <div id="class_progressbar_theme_font_size_font_size"></div>

Font size used to draw the fill percentage if [`show_percentage`](#class_progressbar_property_show_percentage) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_style_background"></div>

[`StyleBox`](class_stylebox.md) **background** <div id="class_progressbar_theme_style_background"></div>

The style of the background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_progressbar_theme_style_fill"></div>

[`StyleBox`](class_stylebox.md) **fill** <div id="class_progressbar_theme_style_fill"></div>

The style of the progress (i.e. the part that fills the bar).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
