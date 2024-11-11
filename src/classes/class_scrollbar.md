<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ScrollBar.xml。 -->

<div id="_class_scrollbar"></div>

# ScrollBar

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HScrollBar`](class_hscrollbar.md), [`VScrollBar`](class_vscrollbar.md)

Abstract base class for scrollbars.

## 描述

Abstract base class for scrollbars, typically used to navigate through content that extends beyond the visible area of a control. Scrollbars are [`Range`](class_range.md)-based controls.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`custom_step`](class_scrollbar.md#class_scrollbar_property_custom_step) | ``-1.0``                                                                |
| [`float`](class_float.md) | step                                                                     | ``0.0`` (overrides [`Range`](class_range.md#class_range_property_step)) |

## 主题属性

|||
|:-:|:--|
| [`Texture2D`](class_texture2d.md) | [`decrement`](class_scrollbar.md#class_scrollbar_theme_icon_decrement)                     |
| [`Texture2D`](class_texture2d.md) | [`decrement_highlight`](class_scrollbar.md#class_scrollbar_theme_icon_decrement_highlight) |
| [`Texture2D`](class_texture2d.md) | [`decrement_pressed`](class_scrollbar.md#class_scrollbar_theme_icon_decrement_pressed)     |
| [`Texture2D`](class_texture2d.md) | [`increment`](class_scrollbar.md#class_scrollbar_theme_icon_increment)                     |
| [`Texture2D`](class_texture2d.md) | [`increment_highlight`](class_scrollbar.md#class_scrollbar_theme_icon_increment_highlight) |
| [`Texture2D`](class_texture2d.md) | [`increment_pressed`](class_scrollbar.md#class_scrollbar_theme_icon_increment_pressed)     |
| [`StyleBox`](class_stylebox.md)   | [`grabber`](class_scrollbar.md#class_scrollbar_theme_style_grabber)                        |
| [`StyleBox`](class_stylebox.md)   | [`grabber_highlight`](class_scrollbar.md#class_scrollbar_theme_style_grabber_highlight)    |
| [`StyleBox`](class_stylebox.md)   | [`grabber_pressed`](class_scrollbar.md#class_scrollbar_theme_style_grabber_pressed)        |
| [`StyleBox`](class_stylebox.md)   | [`scroll`](class_scrollbar.md#class_scrollbar_theme_style_scroll)                          |
| [`StyleBox`](class_stylebox.md)   | [`scroll_focus`](class_scrollbar.md#class_scrollbar_theme_style_scroll_focus)              |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scrollbar_signal_scrolling"></div>

**scrolling** ( ) <div id="class_scrollbar_signal_scrolling"></div>

Emitted when the scrollbar is being scrolled.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_scrollbar_property_custom_step"></div>

[`float`](class_float.md) **custom_step** = ``-1.0`` <div id="class_scrollbar_property_custom_step"></div>

- `void` **set_custom_step** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_custom_step** ( )

Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the **ScrollBar** is focused.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_scrollbar_theme_icon_decrement"></div>

[`Texture2D`](class_texture2d.md) **decrement** <div id="class_scrollbar_theme_icon_decrement"></div>

Icon used as a button to scroll the **ScrollBar** left/up. Supports custom step using the [`custom_step`](class_scrollbar.md#class_scrollbar_property_custom_step) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_icon_decrement_highlight"></div>

[`Texture2D`](class_texture2d.md) **decrement_highlight** <div id="class_scrollbar_theme_icon_decrement_highlight"></div>

Displayed when the mouse cursor hovers over the decrement button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_icon_decrement_pressed"></div>

[`Texture2D`](class_texture2d.md) **decrement_pressed** <div id="class_scrollbar_theme_icon_decrement_pressed"></div>

Displayed when the decrement button is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_icon_increment"></div>

[`Texture2D`](class_texture2d.md) **increment** <div id="class_scrollbar_theme_icon_increment"></div>

Icon used as a button to scroll the **ScrollBar** right/down. Supports custom step using the [`custom_step`](class_scrollbar.md#class_scrollbar_property_custom_step) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_icon_increment_highlight"></div>

[`Texture2D`](class_texture2d.md) **increment_highlight** <div id="class_scrollbar_theme_icon_increment_highlight"></div>

Displayed when the mouse cursor hovers over the increment button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_icon_increment_pressed"></div>

[`Texture2D`](class_texture2d.md) **increment_pressed** <div id="class_scrollbar_theme_icon_increment_pressed"></div>

Displayed when the increment button is being pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_style_grabber"></div>

[`StyleBox`](class_stylebox.md) **grabber** <div id="class_scrollbar_theme_style_grabber"></div>

Used as texture for the grabber, the draggable element representing current scroll.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_style_grabber_highlight"></div>

[`StyleBox`](class_stylebox.md) **grabber_highlight** <div id="class_scrollbar_theme_style_grabber_highlight"></div>

Used when the mouse hovers over the grabber.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_style_grabber_pressed"></div>

[`StyleBox`](class_stylebox.md) **grabber_pressed** <div id="class_scrollbar_theme_style_grabber_pressed"></div>

Used when the grabber is being dragged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_style_scroll"></div>

[`StyleBox`](class_stylebox.md) **scroll** <div id="class_scrollbar_theme_style_scroll"></div>

Used as background of this **ScrollBar**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_scrollbar_theme_style_scroll_focus"></div>

[`StyleBox`](class_stylebox.md) **scroll_focus** <div id="class_scrollbar_theme_style_scroll_focus"></div>

Used as background when the **ScrollBar** has the GUI focus.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
