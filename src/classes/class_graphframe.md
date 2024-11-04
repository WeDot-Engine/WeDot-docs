<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GraphFrame.xml。 -->

<div id="_class_graphframe"></div>

# GraphFrame

**实验性：** This class may be changed or removed in future versions.

**继承：** [`GraphElement`](class_graphelement.md) **<** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

GraphFrame is a special [`GraphElement`](class_graphelement.md) that can be used to organize other [`GraphElement`](class_graphelement.md) s inside a [`GraphEdit`](class_graphedit.md).

## 描述

GraphFrame is a special [`GraphElement`](class_graphelement.md) to which other [`GraphElement`](class_graphelement.md) s can be attached. It can be configured to automatically resize to enclose all attached [`GraphElement`](class_graphelement.md) s. If the frame is moved, all the attached [`GraphElement`](class_graphelement.md) s inside it will be moved as well.

A GraphFrame is always kept behind the connection layer and other [`GraphElement`](class_graphelement.md) s inside a [`GraphEdit`](class_graphedit.md).

## 属性

| [`bool`](class_bool.md)                  | [`autoshrink_enabled`](#class_graphframe_property_autoshrink_enabled) | ``true``                                                            |
| [`int`](class_int.md)                    | [`autoshrink_margin`](#class_graphframe_property_autoshrink_margin)   | ``40``                                                              |
| [`int`](class_int.md)                    | [`drag_margin`](#class_graphframe_property_drag_margin)               | ``16``                                                              |
| [MouseFilter](#enum_control_mousefilter) | mouse_filter                                                          | ``0`` (overrides [`Control`](#class_control_property_mouse_filter)) |
| [`Color`](class_color.md)                | [`tint_color`](#class_graphframe_property_tint_color)                 | ``Color(0.3, 0.3, 0.3, 0.75)``                                      |
| [`bool`](class_bool.md)                  | [`tint_color_enabled`](#class_graphframe_property_tint_color_enabled) | ``false``                                                           |
| [`String`](class_string.md)              | [`title`](#class_graphframe_property_title)                           | ``""``                                                              |

## 方法

| [`HBoxContainer`](class_hboxcontainer.md) | [`get_titlebar_hbox`](#class_graphframe_method_get_titlebar_hbox) ( ) |

## 主题属性

| [`Color`](class_color.md)       | [`resizer_color`](#class_graphframe_theme_color_resizer_color)         | ``Color(0.875, 0.875, 0.875, 1)`` |
| [`StyleBox`](class_stylebox.md) | [`panel`](#class_graphframe_theme_style_panel)                         |                                   |
| [`StyleBox`](class_stylebox.md) | [`panel_selected`](#class_graphframe_theme_style_panel_selected)       |                                   |
| [`StyleBox`](class_stylebox.md) | [`titlebar`](#class_graphframe_theme_style_titlebar)                   |                                   |
| [`StyleBox`](class_stylebox.md) | [`titlebar_selected`](#class_graphframe_theme_style_titlebar_selected) |                                   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_graphframe_signal_autoshrink_changed"></div>

**autoshrink_changed** ( ) <div id="class_graphframe_signal_autoshrink_changed"></div>

Emitted when [`autoshrink_enabled`](#class_graphframe_property_autoshrink_enabled) or [`autoshrink_margin`](#class_graphframe_property_autoshrink_margin) changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_graphframe_property_autoshrink_enabled"></div>

[`bool`](class_bool.md) **autoshrink_enabled** = ``true`` <div id="class_graphframe_property_autoshrink_enabled"></div>

- `void` **set_autoshrink_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_autoshrink_enabled** ( )

If `true`, the frame's rect will be adjusted automatically to enclose all attached [`GraphElement`](class_graphelement.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_property_autoshrink_margin"></div>

[`int`](class_int.md) **autoshrink_margin** = ``40`` <div id="class_graphframe_property_autoshrink_margin"></div>

- `void` **set_autoshrink_margin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_autoshrink_margin** ( )

The margin around the attached nodes that is used to calculate the size of the frame when [`autoshrink_enabled`](#class_graphframe_property_autoshrink_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_property_drag_margin"></div>

[`int`](class_int.md) **drag_margin** = ``16`` <div id="class_graphframe_property_drag_margin"></div>

- `void` **set_drag_margin** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_drag_margin** ( )

The margin inside the frame that can be used to drag the frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_property_tint_color"></div>

[`Color`](class_color.md) **tint_color** = ``Color(0.3, 0.3, 0.3, 0.75)`` <div id="class_graphframe_property_tint_color"></div>

- `void` **set_tint_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_tint_color** ( )

The color of the frame when [`tint_color_enabled`](#class_graphframe_property_tint_color_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_property_tint_color_enabled"></div>

[`bool`](class_bool.md) **tint_color_enabled** = ``false`` <div id="class_graphframe_property_tint_color_enabled"></div>

- `void` **set_tint_color_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_tint_color_enabled** ( )

If `true`, the tint color will be used to tint the frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_property_title"></div>

[`String`](class_string.md) **title** = ``""`` <div id="class_graphframe_property_title"></div>

- `void` **set_title** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_title** ( )

Title of the frame.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_graphframe_method_get_titlebar_hbox"></div>

[`HBoxContainer`](class_hboxcontainer.md) **get_titlebar_hbox** ( )<div id="class_graphframe_method_get_titlebar_hbox"></div>

Returns the [`HBoxContainer`](class_hboxcontainer.md) used for the title bar, only containing a [`Label`](class_label.md) for displaying the title by default.

This can be used to add custom controls to the title bar such as option or close buttons.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_graphframe_theme_color_resizer_color"></div>

[`Color`](class_color.md) **resizer_color** = ``Color(0.875, 0.875, 0.875, 1)`` <div id="class_graphframe_theme_color_resizer_color"></div>

The color modulation applied to the resizer icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_theme_style_panel"></div>

[`StyleBox`](class_stylebox.md) **panel** <div id="class_graphframe_theme_style_panel"></div>

The default [`StyleBox`](class_stylebox.md) used for the background of the **GraphFrame**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_theme_style_panel_selected"></div>

[`StyleBox`](class_stylebox.md) **panel_selected** <div id="class_graphframe_theme_style_panel_selected"></div>

The [`StyleBox`](class_stylebox.md) used for the background of the **GraphFrame** when it is selected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_theme_style_titlebar"></div>

[`StyleBox`](class_stylebox.md) **titlebar** <div id="class_graphframe_theme_style_titlebar"></div>

The [`StyleBox`](class_stylebox.md) used for the title bar of the **GraphFrame**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_graphframe_theme_style_titlebar_selected"></div>

[`StyleBox`](class_stylebox.md) **titlebar_selected** <div id="class_graphframe_theme_style_titlebar_selected"></div>

The [`StyleBox`](class_stylebox.md) used for the title bar of the **GraphFrame** when it is selected.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
