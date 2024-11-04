<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CheckBox.xml。 -->

<div id="_class_checkbox"></div>

# CheckBox

**继承：** [`Button`](class_button.md) **<** [`BaseButton`](class_basebutton.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A button that represents a binary choice.

## 描述

**CheckBox** allows the user to choose one of only two possible options. It's similar to [`CheckButton`](class_checkbutton.md) in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use **CheckBox** when toggling it has **no** immediate effect on something. For example, it could be used when toggling it will only do something once a confirmation button is pressed.

See also [`BaseButton`](class_basebutton.md) which contains common properties and methods associated with this node.

When [`BaseButton.button_group`](#class_basebutton_property_button_group) specifies a [`ButtonGroup`](class_buttongroup.md), **CheckBox** changes its appearance to that of a radio button and uses the various `radio_*` theme properties.

## 属性

| [HorizontalAlignment](#enum_@globalscope_horizontalalignment) | alignment   | ``0`` (overrides [`Button`](#class_button_property_alignment))              |
| [`bool`](class_bool.md)                                       | toggle_mode | ``true`` (overrides [`BaseButton`](#class_basebutton_property_toggle_mode)) |

## 主题属性

| [`int`](class_int.md)             | [`check_v_offset`](#class_checkbox_theme_constant_check_v_offset)                 | ``0`` |
| [`Texture2D`](class_texture2d.md) | [`checked`](#class_checkbox_theme_icon_checked)                                   |       |
| [`Texture2D`](class_texture2d.md) | [`checked_disabled`](#class_checkbox_theme_icon_checked_disabled)                 |       |
| [`Texture2D`](class_texture2d.md) | [`radio_checked`](#class_checkbox_theme_icon_radio_checked)                       |       |
| [`Texture2D`](class_texture2d.md) | [`radio_checked_disabled`](#class_checkbox_theme_icon_radio_checked_disabled)     |       |
| [`Texture2D`](class_texture2d.md) | [`radio_unchecked`](#class_checkbox_theme_icon_radio_unchecked)                   |       |
| [`Texture2D`](class_texture2d.md) | [`radio_unchecked_disabled`](#class_checkbox_theme_icon_radio_unchecked_disabled) |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked`](#class_checkbox_theme_icon_unchecked)                               |       |
| [`Texture2D`](class_texture2d.md) | [`unchecked_disabled`](#class_checkbox_theme_icon_unchecked_disabled)             |       |

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_checkbox_theme_constant_check_v_offset"></div>

[`int`](class_int.md) **check_v_offset** = ``0`` <div id="class_checkbox_theme_constant_check_v_offset"></div>

The vertical offset used when rendering the check icons (in pixels).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_checked"></div>

[`Texture2D`](class_texture2d.md) **checked** <div id="class_checkbox_theme_icon_checked"></div>

The check icon to display when the **CheckBox** is checked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **checked_disabled** <div id="class_checkbox_theme_icon_checked_disabled"></div>

The check icon to display when the **CheckBox** is checked and is disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_radio_checked"></div>

[`Texture2D`](class_texture2d.md) **radio_checked** <div id="class_checkbox_theme_icon_radio_checked"></div>

The check icon to display when the **CheckBox** is configured as a radio button and is checked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_radio_checked_disabled"></div>

[`Texture2D`](class_texture2d.md) **radio_checked_disabled** <div id="class_checkbox_theme_icon_radio_checked_disabled"></div>

The check icon to display when the **CheckBox** is configured as a radio button, is disabled, and is unchecked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_radio_unchecked"></div>

[`Texture2D`](class_texture2d.md) **radio_unchecked** <div id="class_checkbox_theme_icon_radio_unchecked"></div>

The check icon to display when the **CheckBox** is configured as a radio button and is unchecked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_radio_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **radio_unchecked_disabled** <div id="class_checkbox_theme_icon_radio_unchecked_disabled"></div>

The check icon to display when the **CheckBox** is configured as a radio button, is disabled, and is unchecked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_unchecked"></div>

[`Texture2D`](class_texture2d.md) **unchecked** <div id="class_checkbox_theme_icon_unchecked"></div>

The check icon to display when the **CheckBox** is unchecked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_checkbox_theme_icon_unchecked_disabled"></div>

[`Texture2D`](class_texture2d.md) **unchecked_disabled** <div id="class_checkbox_theme_icon_unchecked_disabled"></div>

The check icon to display when the **CheckBox** is unchecked and is disabled.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
