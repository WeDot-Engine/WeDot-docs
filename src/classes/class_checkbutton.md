<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CheckButton.xml。 -->

<div id="_class_checkbutton"></div>

# CheckButton

**继承：** [`Button`](class_button.md) **<** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that represents a binary choice.

## 描述

**CheckButton** is a toggle button displayed as a check field. It's similar to [`CheckBox`](class_checkbox.md) in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use **CheckButton** when toggling it has an **immediate** effect on something. For example, it can be used when pressing it shows or hides advanced settings, without asking the user to confirm this action.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

## 属性

| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | alignment   | ``0`` (overrides [`Button`](#class_button_property_alignment))              |
| [`bool`](class_bool.md)                                       | toggle_mode | ``true`` (overrides [`BaseButton`](#class_basebutton_property_toggle_mode)) |

## 主题属性

| [`int`](class_int.md)             | [`check_v_offset`](#class_checkbutton_theme_constant_check_v_offset)                       | ``0`` |
| [`Texture2D`](class_texture2d.md) | [`checked`](#class_checkbutton_theme_icon_checked)                                         |       |
| [`Texture2D`](class_texture2d.md) | [`checked_disabled`](#class_checkbutton_theme_icon_checked_disabled)                       |       |
| [`Texture2D`](class_texture2d.md) | [`checked_disabled_mirrored`](#class_checkbutton_theme_icon_checked_disabled_mirrored)     |       |
| [`Texture2D`](class_texture2d.md) | [`checked_mirrored`](#class_checkbutton_theme_icon_checked_mirrored)                       |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked`](#class_checkbutton_theme_icon_unchecked)                                     |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked_disabled`](#class_checkbutton_theme_icon_unchecked_disabled)                   |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked_disabled_mirrored`](#class_checkbutton_theme_icon_unchecked_disabled_mirrored) |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked_mirrored`](#class_checkbutton_theme_icon_unchecked_mirrored)                   |       |

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_checkbutton_theme_constant_check_v_offset"></div>

[`int`](class_int.md) **check_v_offset** = ``0`` <div id="class_checkbutton_theme_constant_check_v_offset"></div>

The vertical offset used when rendering the toggle icons (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_checked"></div>

[`Texture2D`](class_texture2d.md) **checked** <div id="class_checkbutton_theme_icon_checked"></div>

The icon to display when the **CheckButton** is checked (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **checked_disabled** <div id="class_checkbutton_theme_icon_checked_disabled"></div>

The icon to display when the **CheckButton** is checked and disabled (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_checked_disabled_mirrored"></div>

[`Texture2D`](class_texture2d.md) **checked_disabled_mirrored** <div id="class_checkbutton_theme_icon_checked_disabled_mirrored"></div>

The icon to display when the **CheckButton** is checked and disabled (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_checked_mirrored"></div>

[`Texture2D`](class_texture2d.md) **checked_mirrored** <div id="class_checkbutton_theme_icon_checked_mirrored"></div>

The icon to display when the **CheckButton** is checked (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_unchecked"></div>

[`Texture2D`](class_texture2d.md) **unchecked** <div id="class_checkbutton_theme_icon_unchecked"></div>

The icon to display when the **CheckButton** is unchecked (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **unchecked_disabled** <div id="class_checkbutton_theme_icon_unchecked_disabled"></div>

The icon to display when the **CheckButton** is unchecked and disabled (for left-to-right layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_unchecked_disabled_mirrored"></div>

[`Texture2D`](class_texture2d.md) **unchecked_disabled_mirrored** <div id="class_checkbutton_theme_icon_unchecked_disabled_mirrored"></div>

The icon to display when the **CheckButton** is unchecked and disabled (for right-to-left layouts).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbutton_theme_icon_unchecked_mirrored"></div>

[`Texture2D`](class_texture2d.md) **unchecked_mirrored** <div id="class_checkbutton_theme_icon_unchecked_mirrored"></div>

The icon to display when the **CheckButton** is unchecked (for right-to-left layouts).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
