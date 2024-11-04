<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/StatusIndicator.xml。 -->

<div id="_class_statusindicator"></div>

# StatusIndicator

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Application status indicator (aka notification area icon).

 **Note:** Status indicator is implemented on macOS and Windows.

## 属性

| [`Texture2D`](class_texture2d.md) | [`icon`](#class_statusindicator_property_icon)       |                  |
| [`NodePath`](class_nodepath.md)   | [`menu`](#class_statusindicator_property_menu)       | ``NodePath("")`` |
| [`String`](class_string.md)       | [`tooltip`](#class_statusindicator_property_tooltip) | ``""``           |
| [`bool`](class_bool.md)           | [`visible`](#class_statusindicator_property_visible) | ``true``         |

## 方法

| [`Rect2`](class_rect2.md) | [`get_rect`](#class_statusindicator_method_get_rect) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_statusindicator_signal_pressed"></div>

**pressed** ( mouse_button: [`int`](class_int.md), mouse_position: [`Vector2i`](class_vector2i.md) ) <div id="class_statusindicator_signal_pressed"></div>

Emitted when the status indicator is pressed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_statusindicator_property_icon"></div>

[`Texture2D`](class_texture2d.md) **icon** <div id="class_statusindicator_property_icon"></div>

- `void` **set_icon** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_icon** ( )

Status indicator icon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_statusindicator_property_menu"></div>

[`NodePath`](class_nodepath.md) **menu** = ``NodePath("")`` <div id="class_statusindicator_property_menu"></div>

- `void` **set_menu** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_menu** ( )

Status indicator native popup menu. If this is set, the [`pressed`](#class_statusindicator_signal_pressed) signal is not emitted.

 **Note:** Native popup is only supported if [`NativeMenu`](class_nativemenu.md) supports [`NativeMenu.FEATURE_POPUP_MENU`](#class_nativemenu_constant_feature_popup_menu) feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_statusindicator_property_tooltip"></div>

[`String`](class_string.md) **tooltip** = ``""`` <div id="class_statusindicator_property_tooltip"></div>

- `void` **set_tooltip** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_tooltip** ( )

Status indicator tooltip.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_statusindicator_property_visible"></div>

[`bool`](class_bool.md) **visible** = ``true`` <div id="class_statusindicator_property_visible"></div>

- `void` **set_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_visible** ( )

If `true`, the status indicator is visible.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_statusindicator_method_get_rect"></div>

[`Rect2`](class_rect2.md) **get_rect** ( ) const[^const]<div id="class_statusindicator_method_get_rect"></div>

Returns the status indicator rectangle in screen coordinates. If this status indicator is not visible, returns an empty [`Rect2`](class_rect2.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
