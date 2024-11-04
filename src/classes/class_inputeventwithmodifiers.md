<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventWithModifiers.xml。 -->

<div id="_class_inputeventwithmodifiers"></div>

# InputEventWithModifiers

**继承：** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`InputEventGesture`](class_inputeventgesture.md), [`InputEventKey`](class_inputeventkey.md), [`InputEventMouse`](class_inputeventmouse.md)

Abstract base class for input events affected by modifier keys like <i class="fa fa-gamepad"></i>`Shift` and <i class="fa fa-gamepad"></i>`Alt`.

## 描述

Stores information about mouse, keyboard, and touch gesture input events. This includes information about which modifier keys are pressed, such as <i class="fa fa-gamepad"></i>`Shift` or <i class="fa fa-gamepad"></i>`Alt`. See [`Node._input`](#class_node_private_method__input).

## 属性

| [`bool`](class_bool.md) | [`alt_pressed`](#class_inputeventwithmodifiers_property_alt_pressed)                                   | ``false`` |
| [`bool`](class_bool.md) | [`command_or_control_autoremap`](#class_inputeventwithmodifiers_property_command_or_control_autoremap) | ``false`` |
| [`bool`](class_bool.md) | [`ctrl_pressed`](#class_inputeventwithmodifiers_property_ctrl_pressed)                                 | ``false`` |
| [`bool`](class_bool.md) | [`meta_pressed`](#class_inputeventwithmodifiers_property_meta_pressed)                                 | ``false`` |
| [`bool`](class_bool.md) | [`shift_pressed`](#class_inputeventwithmodifiers_property_shift_pressed)                               | ``false`` |

## 方法

| [KeyModifierMask](#enum_@globalscope_keymodifiermask) | [`get_modifiers_mask`](#class_inputeventwithmodifiers_method_get_modifiers_mask) ( ) const[^const]                       |
| [`bool`](class_bool.md)                               | [`is_command_or_control_pressed`](#class_inputeventwithmodifiers_method_is_command_or_control_pressed) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventwithmodifiers_property_alt_pressed"></div>

[`bool`](class_bool.md) **alt_pressed** = ``false`` <div id="class_inputeventwithmodifiers_property_alt_pressed"></div>

- `void` **set_alt_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_alt_pressed** ( )

State of the <i class="fa fa-gamepad"></i>`Alt` modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventwithmodifiers_property_command_or_control_autoremap"></div>

[`bool`](class_bool.md) **command_or_control_autoremap** = ``false`` <div id="class_inputeventwithmodifiers_property_command_or_control_autoremap"></div>

- `void` **set_command_or_control_autoremap** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_command_or_control_autoremap** ( )

Automatically use <i class="fa fa-gamepad"></i>`Meta` (<i class="fa fa-gamepad"></i>`Cmd`) on macOS and <i class="fa fa-gamepad"></i>`Ctrl` on other platforms. If `true`, [`ctrl_pressed`](#class_inputeventwithmodifiers_property_ctrl_pressed) and [`meta_pressed`](#class_inputeventwithmodifiers_property_meta_pressed) cannot be set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventwithmodifiers_property_ctrl_pressed"></div>

[`bool`](class_bool.md) **ctrl_pressed** = ``false`` <div id="class_inputeventwithmodifiers_property_ctrl_pressed"></div>

- `void` **set_ctrl_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ctrl_pressed** ( )

State of the <i class="fa fa-gamepad"></i>`Ctrl` modifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventwithmodifiers_property_meta_pressed"></div>

[`bool`](class_bool.md) **meta_pressed** = ``false`` <div id="class_inputeventwithmodifiers_property_meta_pressed"></div>

- `void` **set_meta_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_meta_pressed** ( )

State of the <i class="fa fa-gamepad"></i>`Meta` modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventwithmodifiers_property_shift_pressed"></div>

[`bool`](class_bool.md) **shift_pressed** = ``false`` <div id="class_inputeventwithmodifiers_property_shift_pressed"></div>

- `void` **set_shift_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_shift_pressed** ( )

State of the <i class="fa fa-gamepad"></i>`Shift` modifier.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_inputeventwithmodifiers_method_get_modifiers_mask"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **get_modifiers_mask** ( ) const[^const]<div id="class_inputeventwithmodifiers_method_get_modifiers_mask"></div>

Returns the keycode combination of modifier keys.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventwithmodifiers_method_is_command_or_control_pressed"></div>

[`bool`](class_bool.md) **is_command_or_control_pressed** ( ) const[^const]<div id="class_inputeventwithmodifiers_method_is_command_or_control_pressed"></div>

On macOS, returns `true` if <i class="fa fa-gamepad"></i>`Meta` (<i class="fa fa-gamepad"></i>`Cmd`) is pressed.

On other platforms, returns `true` if <i class="fa fa-gamepad"></i>`Ctrl` is pressed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
