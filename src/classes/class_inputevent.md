<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEvent.xml。 -->

<div id="_class_inputevent"></div>

# InputEvent

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`InputEventAction`](class_inputeventaction.md), [`InputEventFromWindow`](class_inputeventfromwindow.md), [`InputEventJoypadButton`](class_inputeventjoypadbutton.md), [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md), [`InputEventMIDI`](class_inputeventmidi.md), [`InputEventShortcut`](class_inputeventshortcut.md)

Abstract base class for input events.

## 描述

Abstract base class of all types of input events. See [`Node._input`](class_node.md#class_node_private_method__input).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md) | [`device`](class_inputevent.md#class_inputevent_property_device) | ``0`` |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`accumulate`](class_inputevent.md#class_inputevent_method_accumulate) ( with_event: [`InputEvent`](class_inputevent.md) )                                                                                                                    |
| [`String`](class_string.md)         | [`as_text`](class_inputevent.md#class_inputevent_method_as_text) ( ) const[^const]                                                                                                                                                            |
| [`float`](class_float.md)           | [`get_action_strength`](class_inputevent.md#class_inputevent_method_get_action_strength) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                          |
| [`bool`](class_bool.md)             | [`is_action`](class_inputevent.md#class_inputevent_method_is_action) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                                              |
| [`bool`](class_bool.md)             | [`is_action_pressed`](class_inputevent.md#class_inputevent_method_is_action_pressed) ( action: [`StringName`](class_stringname.md), allow_echo: [`bool`](class_bool.md) = false, exact_match: [`bool`](class_bool.md) = false ) const[^const] |
| [`bool`](class_bool.md)             | [`is_action_released`](class_inputevent.md#class_inputevent_method_is_action_released) ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]                                            |
| [`bool`](class_bool.md)             | [`is_action_type`](class_inputevent.md#class_inputevent_method_is_action_type) ( ) const[^const]                                                                                                                                              |
| [`bool`](class_bool.md)             | [`is_canceled`](class_inputevent.md#class_inputevent_method_is_canceled) ( ) const[^const]                                                                                                                                                    |
| [`bool`](class_bool.md)             | [`is_echo`](class_inputevent.md#class_inputevent_method_is_echo) ( ) const[^const]                                                                                                                                                            |
| [`bool`](class_bool.md)             | [`is_match`](class_inputevent.md#class_inputevent_method_is_match) ( event: [`InputEvent`](class_inputevent.md), exact_match: [`bool`](class_bool.md) = true ) const[^const]                                                                  |
| [`bool`](class_bool.md)             | [`is_pressed`](class_inputevent.md#class_inputevent_method_is_pressed) ( ) const[^const]                                                                                                                                                      |
| [`bool`](class_bool.md)             | [`is_released`](class_inputevent.md#class_inputevent_method_is_released) ( ) const[^const]                                                                                                                                                    |
| [`InputEvent`](class_inputevent.md) | [`xformed_by`](class_inputevent.md#class_inputevent_method_xformed_by) ( xform: [`Transform2D`](class_transform2d.md), local_ofs: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]                                               |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_inputevent_constant_device_id_emulation"></div>

**DEVICE_ID_EMULATION** = ``-1`` <div id="class_inputevent_constant_device_id_emulation"></div>

Device ID used for emulated mouse input from a touchscreen, or for emulated touch input from a mouse. This can be used to distinguish emulated mouse input from physical mouse input, or emulated touch input from physical touch input.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputevent_property_device"></div>

[`int`](class_int.md) **device** = ``0`` <div id="class_inputevent_property_device"></div>

- `void` **set_device** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_device** ( )

The event's device ID.

 **Note:** [`device`](class_inputevent.md#class_inputevent_property_device) can be negative for special use cases that don't refer to devices physically present on the system. See [`DEVICE_ID_EMULATION`](class_inputevent.md#class_inputevent_constant_device_id_emulation).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_inputevent_method_accumulate"></div>

[`bool`](class_bool.md) **accumulate** ( with_event: [`InputEvent`](class_inputevent.md) )<div id="class_inputevent_method_accumulate"></div>

Returns `true` if the given input event and this input event can be added together (only for events of type [`InputEventMouseMotion`](class_inputeventmousemotion.md)).

The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_as_text"></div>

[`String`](class_string.md) **as_text** ( ) const[^const]<div id="class_inputevent_method_as_text"></div>

Returns a [`String`](class_string.md) representation of the event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_get_action_strength"></div>

[`float`](class_float.md) **get_action_strength** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_inputevent_method_get_action_strength"></div>

Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md).

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_action"></div>

[`bool`](class_bool.md) **is_action** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_inputevent_method_is_action"></div>

Returns `true` if this input event matches a pre-defined action of any type.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_action_pressed"></div>

[`bool`](class_bool.md) **is_action_pressed** ( action: [`StringName`](class_stringname.md), allow_echo: [`bool`](class_bool.md) = false, exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_inputevent_method_is_action_pressed"></div>

Returns `true` if the given action is being pressed (and is not an echo event for [`InputEventKey`](class_inputeventkey.md) events, unless `allow_echo` is `true`). Not relevant for events of type [`InputEventMouseMotion`](class_inputeventmousemotion.md) or [`InputEventScreenDrag`](class_inputeventscreendrag.md).

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

 **Note:** Due to keyboard ghosting, [`is_action_pressed`](class_inputevent.md#class_inputevent_method_is_action_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_action_released"></div>

[`bool`](class_bool.md) **is_action_released** ( action: [`StringName`](class_stringname.md), exact_match: [`bool`](class_bool.md) = false ) const[^const]<div id="class_inputevent_method_is_action_released"></div>

Returns `true` if the given action is released (i.e. not pressed). Not relevant for events of type [`InputEventMouseMotion`](class_inputeventmousemotion.md) or [`InputEventScreenDrag`](class_inputeventscreendrag.md).

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_action_type"></div>

[`bool`](class_bool.md) **is_action_type** ( ) const[^const]<div id="class_inputevent_method_is_action_type"></div>

Returns `true` if this input event's type is one that can be assigned to an input action.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_canceled"></div>

[`bool`](class_bool.md) **is_canceled** ( ) const[^const]<div id="class_inputevent_method_is_canceled"></div>

Returns `true` if this input event has been canceled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_echo"></div>

[`bool`](class_bool.md) **is_echo** ( ) const[^const]<div id="class_inputevent_method_is_echo"></div>

Returns `true` if this input event is an echo event (only for events of type [`InputEventKey`](class_inputeventkey.md)). An echo event is a repeated key event sent when the user is holding down the key. Any other event type returns `false`.

 **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_match"></div>

[`bool`](class_bool.md) **is_match** ( event: [`InputEvent`](class_inputevent.md), exact_match: [`bool`](class_bool.md) = true ) const[^const]<div id="class_inputevent_method_is_match"></div>

Returns `true` if the specified `event` matches this event. Only valid for action events i.e key ([`InputEventKey`](class_inputeventkey.md)), button ([`InputEventMouseButton`](class_inputeventmousebutton.md) or [`InputEventJoypadButton`](class_inputeventjoypadbutton.md)), axis [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) or action ([`InputEventAction`](class_inputeventaction.md)) events.

If `exact_match` is `false`, it ignores additional input modifiers for [`InputEventKey`](class_inputeventkey.md) and [`InputEventMouseButton`](class_inputeventmousebutton.md) events, and the direction for [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md) events.

 **Note:** Only considers the event configuration (such as the keyboard key or joypad axis), not state information like [`is_pressed`](class_inputevent.md#class_inputevent_method_is_pressed), [`is_released`](class_inputevent.md#class_inputevent_method_is_released), [`is_echo`](class_inputevent.md#class_inputevent_method_is_echo), or [`is_canceled`](class_inputevent.md#class_inputevent_method_is_canceled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_pressed"></div>

[`bool`](class_bool.md) **is_pressed** ( ) const[^const]<div id="class_inputevent_method_is_pressed"></div>

Returns `true` if this input event is pressed. Not relevant for events of type [`InputEventMouseMotion`](class_inputeventmousemotion.md) or [`InputEventScreenDrag`](class_inputeventscreendrag.md).

 **Note:** Due to keyboard ghosting, [`is_pressed`](class_inputevent.md#class_inputevent_method_is_pressed) may return `false` even if one of the action's keys is pressed. See [*Input examples*](../tutorials/inputs/input_examples.md#keyboard-events) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_is_released"></div>

[`bool`](class_bool.md) **is_released** ( ) const[^const]<div id="class_inputevent_method_is_released"></div>

Returns `true` if this input event is released. Not relevant for events of type [`InputEventMouseMotion`](class_inputeventmousemotion.md) or [`InputEventScreenDrag`](class_inputeventscreendrag.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputevent_method_xformed_by"></div>

[`InputEvent`](class_inputevent.md) **xformed_by** ( xform: [`Transform2D`](class_transform2d.md), local_ofs: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]<div id="class_inputevent_method_xformed_by"></div>

Returns a copy of the given input event which has been offset by `local_ofs` and transformed by `xform`. Relevant for events of type [`InputEventMouseButton`](class_inputeventmousebutton.md), [`InputEventMouseMotion`](class_inputeventmousemotion.md), [`InputEventScreenTouch`](class_inputeventscreentouch.md), [`InputEventScreenDrag`](class_inputeventscreendrag.md), [`InputEventMagnifyGesture`](class_inputeventmagnifygesture.md) and [`InputEventPanGesture`](class_inputeventpangesture.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
