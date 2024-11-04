<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventAction.xml。 -->

<div id="_class_inputeventaction"></div>

# InputEventAction

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An input event type for actions.

## 描述

Contains a generic action which can be targeted from several types of inputs. Actions and their events can be set in the **Input Map** tab in **Project > Project Settings**, or with the [`InputMap`](class_inputmap.md) class.

 **Note:** Unlike the other [`InputEvent`](class_inputevent.md) subclasses which map to unique physical events, this virtual one is not emitted by the engine. This class is useful to emit actions manually with [`Input.parse_input_event`](#class_input_method_parse_input_event), which are then received in [`Node._input`](#class_node_private_method__input). To check if a physical event matches an action from the Input Map, use [`InputEvent.is_action`](#class_inputevent_method_is_action) and [`InputEvent.is_action_pressed`](#class_inputevent_method_is_action_pressed).

## 属性

| [`StringName`](class_stringname.md) | [`action`](#class_inputeventaction_property_action)           | ``&""``   |
| [`int`](class_int.md)               | [`event_index`](#class_inputeventaction_property_event_index) | ``-1``    |
| [`bool`](class_bool.md)             | [`pressed`](#class_inputeventaction_property_pressed)         | ``false`` |
| [`float`](class_float.md)           | [`strength`](#class_inputeventaction_property_strength)       | ``1.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventaction_property_action"></div>

[`StringName`](class_stringname.md) **action** = ``&""`` <div id="class_inputeventaction_property_action"></div>

- `void` **set_action** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_action** ( )

The action's name. Actions are accessed via this [`String`](class_string.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventaction_property_event_index"></div>

[`int`](class_int.md) **event_index** = ``-1`` <div id="class_inputeventaction_property_event_index"></div>

- `void` **set_event_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_event_index** ( )

The real event index in action this event corresponds to (from events defined for this action in the [`InputMap`](class_inputmap.md)). If `-1`, a unique ID will be used and actions pressed with this ID will need to be released with another **InputEventAction**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventaction_property_pressed"></div>

[`bool`](class_bool.md) **pressed** = ``false`` <div id="class_inputeventaction_property_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the action's state is pressed. If `false`, the action's state is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventaction_property_strength"></div>

[`float`](class_float.md) **strength** = ``1.0`` <div id="class_inputeventaction_property_strength"></div>

- `void` **set_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_strength** ( )

The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
