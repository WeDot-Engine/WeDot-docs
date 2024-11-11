<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TouchScreenButton.xml。 -->

<div id="_class_touchscreenbutton"></div>

# TouchScreenButton

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Button for touch screen devices for gameplay use.

## 描述

TouchScreenButton allows you to create on-screen buttons for touch devices. It's intended for gameplay use, such as a unit you have to touch to move. Unlike [`Button`](class_button.md), TouchScreenButton supports multitouch out of the box. Several TouchScreenButtons can be pressed at the same time with touch input.

This node inherits from [`Node2D`](class_node2d.md). Unlike with [`Control`](class_control.md) nodes, you cannot set anchors on it. If you want to create menus or user interfaces, you may want to use [`Button`](class_button.md) nodes instead. To make button nodes react to touch events, you can enable the Emulate Mouse option in the Project Settings.

You can configure TouchScreenButton to be visible only on touch devices, helping you develop your game both for desktop and mobile devices.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                              | [`action`](class_touchscreenbutton.md#class_touchscreenbutton_property_action)                   | ``""``    |
| [`BitMap`](class_bitmap.md)                              | [`bitmask`](class_touchscreenbutton.md#class_touchscreenbutton_property_bitmask)                 |           |
| [`bool`](class_bool.md)                                  | [`passby_press`](class_touchscreenbutton.md#class_touchscreenbutton_property_passby_press)       | ``false`` |
| [`Shape2D`](class_shape2d.md)                            | [`shape`](class_touchscreenbutton.md#class_touchscreenbutton_property_shape)                     |           |
| [`bool`](class_bool.md)                                  | [`shape_centered`](class_touchscreenbutton.md#class_touchscreenbutton_property_shape_centered)   | ``true``  |
| [`bool`](class_bool.md)                                  | [`shape_visible`](class_touchscreenbutton.md#class_touchscreenbutton_property_shape_visible)     | ``true``  |
| [`Texture2D`](class_texture2d.md)                        | [`texture_normal`](class_touchscreenbutton.md#class_touchscreenbutton_property_texture_normal)   |           |
| [`Texture2D`](class_texture2d.md)                        | [`texture_pressed`](class_touchscreenbutton.md#class_touchscreenbutton_property_texture_pressed) |           |
| [VisibilityMode](#enum_touchscreenbutton_visibilitymode) | [`visibility_mode`](class_touchscreenbutton.md#class_touchscreenbutton_property_visibility_mode) | ``0``     |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`is_pressed`](class_touchscreenbutton.md#class_touchscreenbutton_method_is_pressed) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_touchscreenbutton_signal_pressed"></div>

**pressed** ( ) <div id="class_touchscreenbutton_signal_pressed"></div>

Emitted when the button is pressed (down).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_touchscreenbutton_signal_released"></div>

**released** ( ) <div id="class_touchscreenbutton_signal_released"></div>

Emitted when the button is released (up).

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_touchscreenbutton_visibilitymode"></div>

enum **VisibilityMode**: <div id="enum_touchscreenbutton_visibilitymode"></div>

<div id="_class_touchscreenbutton_constant_visibility_always"></div>

[VisibilityMode](#enum_touchscreenbutton_visibilitymode) **VISIBILITY_ALWAYS** = ``0``

Always visible.

<div id="_class_touchscreenbutton_constant_visibility_touchscreen_only"></div>

[VisibilityMode](#enum_touchscreenbutton_visibilitymode) **VISIBILITY_TOUCHSCREEN_ONLY** = ``1``

Visible on touch screens only.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_touchscreenbutton_property_action"></div>

[`String`](class_string.md) **action** = ``""`` <div id="class_touchscreenbutton_property_action"></div>

- `void` **set_action** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_action** ( )

The button's action. Actions can be handled with [`InputEventAction`](class_inputeventaction.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_bitmask"></div>

[`BitMap`](class_bitmap.md) **bitmask** <div id="class_touchscreenbutton_property_bitmask"></div>

- `void` **set_bitmask** ( value: [`BitMap`](class_bitmap.md) )
- [`BitMap`](class_bitmap.md) **get_bitmask** ( )

The button's bitmask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_passby_press"></div>

[`bool`](class_bool.md) **passby_press** = ``false`` <div id="class_touchscreenbutton_property_passby_press"></div>

- `void` **set_passby_press** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_passby_press_enabled** ( )

If `true`, the [`pressed`](class_touchscreenbutton.md#class_touchscreenbutton_signal_pressed) and [`released`](class_touchscreenbutton.md#class_touchscreenbutton_signal_released) signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.

 **Note:** This is a "pass-by" (not "bypass") press mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_shape"></div>

[`Shape2D`](class_shape2d.md) **shape** <div id="class_touchscreenbutton_property_shape"></div>

- `void` **set_shape** ( value: [`Shape2D`](class_shape2d.md) )
- [`Shape2D`](class_shape2d.md) **get_shape** ( )

The button's shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_shape_centered"></div>

[`bool`](class_bool.md) **shape_centered** = ``true`` <div id="class_touchscreenbutton_property_shape_centered"></div>

- `void` **set_shape_centered** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shape_centered** ( )

If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_shape_visible"></div>

[`bool`](class_bool.md) **shape_visible** = ``true`` <div id="class_touchscreenbutton_property_shape_visible"></div>

- `void` **set_shape_visible** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shape_visible** ( )

If `true`, the button's shape is visible in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_texture_normal"></div>

[`Texture2D`](class_texture2d.md) **texture_normal** <div id="class_touchscreenbutton_property_texture_normal"></div>

- `void` **set_texture_normal** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_normal** ( )

The button's texture for the normal state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_texture_pressed"></div>

[`Texture2D`](class_texture2d.md) **texture_pressed** <div id="class_touchscreenbutton_property_texture_pressed"></div>

- `void` **set_texture_pressed** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture_pressed** ( )

The button's texture for the pressed state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_touchscreenbutton_property_visibility_mode"></div>

[VisibilityMode](#enum_touchscreenbutton_visibilitymode) **visibility_mode** = ``0`` <div id="class_touchscreenbutton_property_visibility_mode"></div>

- `void` **set_visibility_mode** ( value: [VisibilityMode](#enum_touchscreenbutton_visibilitymode) )
- [VisibilityMode](#enum_touchscreenbutton_visibilitymode) **get_visibility_mode** ( )

The button's visibility mode. See [VisibilityMode](#enum_touchscreenbutton_visibilitymode) for possible values.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_touchscreenbutton_method_is_pressed"></div>

[`bool`](class_bool.md) **is_pressed** ( ) const[^const]<div id="class_touchscreenbutton_method_is_pressed"></div>

Returns `true` if this button is currently pressed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
