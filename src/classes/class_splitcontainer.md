<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SplitContainer.xml。 -->

<div id="_class_splitcontainer"></div>

# SplitContainer

**继承：** [`Container`](class_container.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`HSplitContainer`](class_hsplitcontainer.md), [`VSplitContainer`](class_vsplitcontainer.md)

A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.

## 描述

A container that accepts only two child controls, then arranges them horizontally or vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.

## 属性

| [`bool`](class_bool.md)                                     | [`collapsed`](#class_splitcontainer_property_collapsed)                   | ``false`` |
| [DraggerVisibility](#enum_splitcontainer_draggervisibility) | [`dragger_visibility`](#class_splitcontainer_property_dragger_visibility) | ``0``     |
| [`int`](class_int.md)                                       | [`split_offset`](#class_splitcontainer_property_split_offset)             | ``0``     |
| [`bool`](class_bool.md)                                     | [`vertical`](#class_splitcontainer_property_vertical)                     | ``false`` |

## 方法

| `void` | [`clamp_split_offset`](#class_splitcontainer_method_clamp_split_offset) ( ) |

## 主题属性

| [`int`](class_int.md)             | [`autohide`](#class_splitcontainer_theme_constant_autohide)                             | ``1``  |
| [`int`](class_int.md)             | [`minimum_grab_thickness`](#class_splitcontainer_theme_constant_minimum_grab_thickness) | ``6``  |
| [`int`](class_int.md)             | [`separation`](#class_splitcontainer_theme_constant_separation)                         | ``12`` |
| [`Texture2D`](class_texture2d.md) | [`grabber`](#class_splitcontainer_theme_icon_grabber)                                   |        |
| [`Texture2D`](class_texture2d.md) | [`h_grabber`](#class_splitcontainer_theme_icon_h_grabber)                               |        |
| [`Texture2D`](class_texture2d.md) | [`v_grabber`](#class_splitcontainer_theme_icon_v_grabber)                               |        |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_splitcontainer_signal_dragged"></div>

**dragged** ( offset: [`int`](class_int.md) ) <div id="class_splitcontainer_signal_dragged"></div>

Emitted when the dragger is dragged by user.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_splitcontainer_draggervisibility"></div>

enum **DraggerVisibility**: <div id="enum_splitcontainer_draggervisibility"></div>

<div id="_class_splitcontainer_constant_dragger_visible"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_VISIBLE** = ``0``

The split dragger is visible when the cursor hovers it.

<div id="_class_splitcontainer_constant_dragger_hidden"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_HIDDEN** = ``1``

The split dragger is never visible.

<div id="_class_splitcontainer_constant_dragger_hidden_collapsed"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **DRAGGER_HIDDEN_COLLAPSED** = ``2``

The split dragger is never visible and its space collapsed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_splitcontainer_property_collapsed"></div>

[`bool`](class_bool.md) **collapsed** = ``false`` <div id="class_splitcontainer_property_collapsed"></div>

- `void` **set_collapsed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_collapsed** ( )

If `true`, the area of the first [`Control`](class_control.md) will be collapsed and the dragger will be disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_dragger_visibility"></div>

[DraggerVisibility](#enum_splitcontainer_draggervisibility) **dragger_visibility** = ``0`` <div id="class_splitcontainer_property_dragger_visibility"></div>

- `void` **set_dragger_visibility** ( value: [DraggerVisibility](#enum_splitcontainer_draggervisibility) )
- [DraggerVisibility](#enum_splitcontainer_draggervisibility) **get_dragger_visibility** ( )

Determines the dragger's visibility. See [DraggerVisibility](#enum_splitcontainer_draggervisibility) for details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_split_offset"></div>

[`int`](class_int.md) **split_offset** = ``0`` <div id="class_splitcontainer_property_split_offset"></div>

- `void` **set_split_offset** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_split_offset** ( )

The initial offset of the splitting between the two [`Control`](class_control.md) s, with `0` being at the end of the first [`Control`](class_control.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_property_vertical"></div>

[`bool`](class_bool.md) **vertical** = ``false`` <div id="class_splitcontainer_property_vertical"></div>

- `void` **set_vertical** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_vertical** ( )

If `true`, the **SplitContainer** will arrange its children vertically, rather than horizontally.

Can't be changed when using [`HSplitContainer`](class_hsplitcontainer.md) and [`VSplitContainer`](class_vsplitcontainer.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_splitcontainer_method_clamp_split_offset"></div>

`void` **clamp_split_offset** ( )<div id="class_splitcontainer_method_clamp_split_offset"></div>

Clamps the [`split_offset`](#class_splitcontainer_property_split_offset) value to not go outside the currently possible minimal and maximum values.

<!-- rst-class:: classref-section-separator -->

---

## 主题属性说明

<div id="_class_splitcontainer_theme_constant_autohide"></div>

[`int`](class_int.md) **autohide** = ``1`` <div id="class_splitcontainer_theme_constant_autohide"></div>

Boolean value. If 1 (`true`), the grabber will hide automatically when it isn't under the cursor. If 0 (`false`), it's always visible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_constant_minimum_grab_thickness"></div>

[`int`](class_int.md) **minimum_grab_thickness** = ``6`` <div id="class_splitcontainer_theme_constant_minimum_grab_thickness"></div>

The minimum thickness of the area users can click on to grab the splitting line. If [`separation`](#class_splitcontainer_theme_constant_separation) or [`h_grabber`](#class_splitcontainer_theme_icon_h_grabber) / [`v_grabber`](#class_splitcontainer_theme_icon_v_grabber)'s thickness are too small, this ensure that the splitting line can still be dragged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_constant_separation"></div>

[`int`](class_int.md) **separation** = ``12`` <div id="class_splitcontainer_theme_constant_separation"></div>

The space between sides of the container.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_grabber"></div>

[`Texture2D`](class_texture2d.md) **grabber** <div id="class_splitcontainer_theme_icon_grabber"></div>

The icon used for the grabber drawn in the middle area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_h_grabber"></div>

[`Texture2D`](class_texture2d.md) **h_grabber** <div id="class_splitcontainer_theme_icon_h_grabber"></div>

The icon used for the grabber drawn in the middle area when [`vertical`](#class_splitcontainer_property_vertical) is `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_splitcontainer_theme_icon_v_grabber"></div>

[`Texture2D`](class_texture2d.md) **v_grabber** <div id="class_splitcontainer_theme_icon_v_grabber"></div>

The icon used for the grabber drawn in the middle area when [`vertical`](#class_splitcontainer_property_vertical) is `true`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
