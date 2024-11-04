<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Slider.xml。 -->

<div id="_class_slider"></div>

# Slider

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HSlider`](class_hslider.md), [`VSlider`](class_vslider.md)

Abstract base class for sliders.

## 描述

Abstract base class for sliders, used to adjust a value by moving a grabber along a horizontal or vertical axis. Sliders are [`Range`](class_range.md)-based controls.

## 属性

| [`bool`](class_bool.md)              | [`editable`](#class_slider_property_editable)                 | ``true``                                                          |
| [FocusMode](#enum_control_focusmode) | focus_mode                                                    | ``2`` (overrides [`Control`](#class_control_property_focus_mode)) |
| [`bool`](class_bool.md)              | [`scrollable`](#class_slider_property_scrollable)             | ``true``                                                          |
| [`float`](class_float.md)            | step                                                          | ``1.0`` (overrides [`Range`](#class_range_property_step))         |
| [`int`](class_int.md)                | [`tick_count`](#class_slider_property_tick_count)             | ``0``                                                             |
| [`bool`](class_bool.md)              | [`ticks_on_borders`](#class_slider_property_ticks_on_borders) | ``false``                                                         |

## 主题属性

| [`int`](class_int.md)             | [`center_grabber`](#class_slider_theme_constant_center_grabber)              | ``0`` |
| [`int`](class_int.md)             | [`grabber_offset`](#class_slider_theme_constant_grabber_offset)              | ``0`` |
| [`Texture2D`](class_texture2d.md) | [`grabber`](#class_slider_theme_icon_grabber)                                |       |
| [`Texture2D`](class_texture2d.md) | [`grabber_disabled`](#class_slider_theme_icon_grabber_disabled)              |       |
| [`Texture2D`](class_texture2d.md) | [`grabber_highlight`](#class_slider_theme_icon_grabber_highlight)            |       |
| [`Texture2D`](class_texture2d.md) | [`tick`](#class_slider_theme_icon_tick)                                      |       |
| [`StyleBox`](class_stylebox.md)   | [`grabber_area`](#class_slider_theme_style_grabber_area)                     |       |
| [`StyleBox`](class_stylebox.md)   | [`grabber_area_highlight`](#class_slider_theme_style_grabber_area_highlight) |       |
| [`StyleBox`](class_stylebox.md)   | [`slider`](#class_slider_theme_style_slider)                                 |       |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_slider_signal_drag_ended"></div>

**drag_ended** ( value_changed: [`bool`](class_bool.md) ) <div id="class_slider_signal_drag_ended"></div>

Emitted when dragging stops. If `value_changed` is true, [`Range.value`](#class_range_property_value) is different from the value when you started the dragging.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_slider_signal_drag_started"></div>

**drag_started** ( ) <div id="class_slider_signal_drag_started"></div>

Emitted when dragging is started. This is emitted before the corresponding [`Range.value_changed`](#class_range_signal_value_changed) signal.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_slider_property_editable"></div>

[`bool`](class_bool.md) **editable** = ``true`` <div id="class_slider_property_editable"></div>

- `void` **set_editable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_editable** ( )

If `true`, the slider can be interacted with. If `false`, the value can be changed only by code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_property_scrollable"></div>

[`bool`](class_bool.md) **scrollable** = ``true`` <div id="class_slider_property_scrollable"></div>

- `void` **set_scrollable** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_scrollable** ( )

If `true`, the value can be changed using the mouse wheel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_property_tick_count"></div>

[`int`](class_int.md) **tick_count** = ``0`` <div id="class_slider_property_tick_count"></div>

- `void` **set_ticks** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_ticks** ( )

Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_property_ticks_on_borders"></div>

[`bool`](class_bool.md) **ticks_on_borders** = ``false`` <div id="class_slider_property_ticks_on_borders"></div>

- `void` **set_ticks_on_borders** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_ticks_on_borders** ( )

If `true`, the slider will display ticks for minimum and maximum values.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_slider_theme_constant_center_grabber"></div>

[`int`](class_int.md) **center_grabber** = ``0`` <div id="class_slider_theme_constant_center_grabber"></div>

Boolean constant. If `1`, the grabber texture size will be ignored and it will fit within slider's bounds based only on its center position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_constant_grabber_offset"></div>

[`int`](class_int.md) **grabber_offset** = ``0`` <div id="class_slider_theme_constant_grabber_offset"></div>

Vertical or horizontal offset of the grabber.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_icon_grabber"></div>

[`Texture2D`](class_texture2d.md) **grabber** <div id="class_slider_theme_icon_grabber"></div>

The texture for the grabber (the draggable element).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_icon_grabber_disabled"></div>

[`Texture2D`](class_texture2d.md) **grabber_disabled** <div id="class_slider_theme_icon_grabber_disabled"></div>

The texture for the grabber when it's disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_icon_grabber_highlight"></div>

[`Texture2D`](class_texture2d.md) **grabber_highlight** <div id="class_slider_theme_icon_grabber_highlight"></div>

The texture for the grabber when it's focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_icon_tick"></div>

[`Texture2D`](class_texture2d.md) **tick** <div id="class_slider_theme_icon_tick"></div>

The texture for the ticks, visible when [`tick_count`](#class_slider_property_tick_count) is greater than 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_style_grabber_area"></div>

[`StyleBox`](class_stylebox.md) **grabber_area** <div id="class_slider_theme_style_grabber_area"></div>

The background of the area to the left or bottom of the grabber.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_style_grabber_area_highlight"></div>

[`StyleBox`](class_stylebox.md) **grabber_area_highlight** <div id="class_slider_theme_style_grabber_area_highlight"></div>

The background of the area to the left or bottom of the grabber that displays when it's being hovered or focused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_slider_theme_style_slider"></div>

[`StyleBox`](class_stylebox.md) **slider** <div id="class_slider_theme_style_slider"></div>

The background for the whole slider. Affects the height or width of the [`grabber_area`](#class_slider_theme_style_grabber_area).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
