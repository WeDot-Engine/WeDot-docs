<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Popup.xml。 -->

<div id="_class_popup"></div>

# Popup

**继承：** [`Window`](class_window.md) **<** [`Viewport`](class_viewport.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`PopupMenu`](class_popupmenu.md), [`PopupPanel`](class_popuppanel.md)

Base class for contextual windows and panels with fixed position.

## 描述

**Popup** is a base class for contextual windows and panels with fixed position. It's a modal by default (see [`Window.popup_window`](#class_window_property_popup_window)) and provides methods for implementing custom popup behavior.

## 属性

| [`bool`](class_bool.md) | borderless    | ``true`` (overrides [`Window`](#class_window_property_borderless))    |
| [`bool`](class_bool.md) | popup_window  | ``true`` (overrides [`Window`](#class_window_property_popup_window))  |
| [`bool`](class_bool.md) | transient     | ``true`` (overrides [`Window`](#class_window_property_transient))     |
| [`bool`](class_bool.md) | unresizable   | ``true`` (overrides [`Window`](#class_window_property_unresizable))   |
| [`bool`](class_bool.md) | visible       | ``false`` (overrides [`Window`](#class_window_property_visible))      |
| [`bool`](class_bool.md) | wrap_controls | ``true`` (overrides [`Window`](#class_window_property_wrap_controls)) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_popup_signal_popup_hide"></div>

**popup_hide** ( ) <div id="class_popup_signal_popup_hide"></div>

Emitted when the popup is hidden.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
