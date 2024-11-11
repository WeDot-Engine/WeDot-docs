<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRController3D.xml。 -->

<div id="_class_xrcontroller3d"></div>

# XRController3D

**继承：** [`XRNode3D`](class_xrnode3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A spatial node representing a spatially-tracked controller.

## 描述

This is a helper spatial node that is linked to the tracking of controllers. It also offers several handy passthroughs to the state of buttons and such on the controllers.

Controllers are linked by their ID. You can create controller nodes before the controllers are available. If your game always uses two controllers (one for each hand), you can predefine the controllers with ID 1 and 2; they will become active as soon as the controllers are identified. If you expect additional controllers to be used, you should react to the signals and add XRController3D nodes to your scene.

The position of the controller node is automatically updated by the [`XRServer`](class_xrserver.md). This makes this node ideal to add child nodes to visualize the controller.

As many XR runtimes now use a configurable action map all inputs are named.

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)                            | [`get_float`](class_xrcontroller3d.md#class_xrcontroller3d_method_get_float) ( name: [`StringName`](class_stringname.md) ) const[^const]                 |
| [`Variant`](class_variant.md)                        | [`get_input`](class_xrcontroller3d.md#class_xrcontroller3d_method_get_input) ( name: [`StringName`](class_stringname.md) ) const[^const]                 |
| [TrackerHand](#enum_xrpositionaltracker_trackerhand) | [`get_tracker_hand`](class_xrcontroller3d.md#class_xrcontroller3d_method_get_tracker_hand) ( ) const[^const]                                             |
| [`Vector2`](class_vector2.md)                        | [`get_vector2`](class_xrcontroller3d.md#class_xrcontroller3d_method_get_vector2) ( name: [`StringName`](class_stringname.md) ) const[^const]             |
| [`bool`](class_bool.md)                              | [`is_button_pressed`](class_xrcontroller3d.md#class_xrcontroller3d_method_is_button_pressed) ( name: [`StringName`](class_stringname.md) ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_xrcontroller3d_signal_button_pressed"></div>

**button_pressed** ( name: [`String`](class_string.md) ) <div id="class_xrcontroller3d_signal_button_pressed"></div>

Emitted when a button on this controller is pressed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrcontroller3d_signal_button_released"></div>

**button_released** ( name: [`String`](class_string.md) ) <div id="class_xrcontroller3d_signal_button_released"></div>

Emitted when a button on this controller is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrcontroller3d_signal_input_float_changed"></div>

**input_float_changed** ( name: [`String`](class_string.md), value: [`float`](class_float.md) ) <div id="class_xrcontroller3d_signal_input_float_changed"></div>

Emitted when a trigger or similar input on this controller changes value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrcontroller3d_signal_input_vector2_changed"></div>

**input_vector2_changed** ( name: [`String`](class_string.md), value: [`Vector2`](class_vector2.md) ) <div id="class_xrcontroller3d_signal_input_vector2_changed"></div>

Emitted when a thumbstick or thumbpad on this controller is moved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrcontroller3d_signal_profile_changed"></div>

**profile_changed** ( role: [`String`](class_string.md) ) <div id="class_xrcontroller3d_signal_profile_changed"></div>

Emitted when the interaction profile on this controller is changed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrcontroller3d_method_get_float"></div>

[`float`](class_float.md) **get_float** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrcontroller3d_method_get_float"></div>

Returns a numeric value for the input with the given `name`. This is used for triggers and grip sensors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrcontroller3d_method_get_input"></div>

[`Variant`](class_variant.md) **get_input** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrcontroller3d_method_get_input"></div>

Returns a [`Variant`](class_variant.md) for the input with the given `name`. This works for any input type, the variant will be typed according to the actions configuration.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrcontroller3d_method_get_tracker_hand"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **get_tracker_hand** ( ) const[^const]<div id="class_xrcontroller3d_method_get_tracker_hand"></div>

Returns the hand holding this controller, if known. See [TrackerHand](#enum_xrpositionaltracker_trackerhand).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrcontroller3d_method_get_vector2"></div>

[`Vector2`](class_vector2.md) **get_vector2** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrcontroller3d_method_get_vector2"></div>

Returns a [`Vector2`](class_vector2.md) for the input with the given `name`. This is used for thumbsticks and thumbpads found on many controllers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrcontroller3d_method_is_button_pressed"></div>

[`bool`](class_bool.md) **is_button_pressed** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrcontroller3d_method_is_button_pressed"></div>

Returns `true` if the button with the given `name` is pressed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
