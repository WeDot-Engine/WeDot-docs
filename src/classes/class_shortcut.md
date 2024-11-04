<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Shortcut.xml。 -->

<div id="_class_shortcut"></div>

# Shortcut

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A shortcut for binding input.

## 描述

Shortcuts are commonly used for interacting with a [`Control`](class_control.md) element from an [`InputEvent`](class_inputevent.md) (also known as hotkeys).

One shortcut can contain multiple [`InputEvent`](class_inputevent.md)'s, allowing the possibility of triggering one action with multiple different inputs.

## 属性

| [`Array`](class_array.md) | [`events`](#class_shortcut_property_events) | ``[]`` |

## 方法

| [`String`](class_string.md) | [`get_as_text`](#class_shortcut_method_get_as_text) ( ) const[^const]                                                |
| [`bool`](class_bool.md)     | [`has_valid_event`](#class_shortcut_method_has_valid_event) ( ) const[^const]                                        |
| [`bool`](class_bool.md)     | [`matches_event`](#class_shortcut_method_matches_event) ( event: [`InputEvent`](class_inputevent.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_shortcut_property_events"></div>

[`Array`](class_array.md) **events** = ``[]`` <div id="class_shortcut_property_events"></div>

- `void` **set_events** ( value: [`Array`](class_array.md) )
- [`Array`](class_array.md) **get_events** ( )

The shortcut's [`InputEvent`](class_inputevent.md) array.

Generally the [`InputEvent`](class_inputevent.md) used is an [`InputEventKey`](class_inputeventkey.md), though it can be any [`InputEvent`](class_inputevent.md), including an [`InputEventAction`](class_inputeventaction.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_shortcut_method_get_as_text"></div>

[`String`](class_string.md) **get_as_text** ( ) const[^const]<div id="class_shortcut_method_get_as_text"></div>

Returns the shortcut's first valid [`InputEvent`](class_inputevent.md) as a [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shortcut_method_has_valid_event"></div>

[`bool`](class_bool.md) **has_valid_event** ( ) const[^const]<div id="class_shortcut_method_has_valid_event"></div>

Returns whether [`events`](#class_shortcut_property_events) contains an [`InputEvent`](class_inputevent.md) which is valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_shortcut_method_matches_event"></div>

[`bool`](class_bool.md) **matches_event** ( event: [`InputEvent`](class_inputevent.md) ) const[^const]<div id="class_shortcut_method_matches_event"></div>

Returns whether any [`InputEvent`](class_inputevent.md) in [`events`](#class_shortcut_property_events) equals `event`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
