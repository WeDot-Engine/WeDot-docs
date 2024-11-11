<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRPositionalTracker.xml。 -->

<div id="_class_xrpositionaltracker"></div>

# XRPositionalTracker

**继承：** [`XRTracker`](class_xrtracker.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`XRBodyTracker`](class_xrbodytracker.md), [`XRControllerTracker`](class_xrcontrollertracker.md), [`XRHandTracker`](class_xrhandtracker.md)

A tracked object.

## 描述

An instance of this object represents a device that is tracked, such as a controller or anchor point. HMDs aren't represented here as they are handled internally.

As controllers are turned on and the [`XRInterface`](class_xrinterface.md) detects them, instances of this object are automatically added to this list of active tracking objects accessible through the [`XRServer`](class_xrserver.md).

The [`XRNode3D`](class_xrnode3d.md) and [`XRAnchor3D`](class_xranchor3d.md) both consume objects of this type and should be used in your project. The positional trackers are just under-the-hood objects that make this all work. These are mostly exposed so that GDExtension-based interfaces can interact with them.

## 属性

|||
|:-:|:--|
| [TrackerHand](#enum_xrpositionaltracker_trackerhand) | [`hand`](class_xrpositionaltracker.md#class_xrpositionaltracker_property_hand)       | ``0``  |
| [`String`](class_string.md)                          | [`profile`](class_xrpositionaltracker.md#class_xrpositionaltracker_property_profile) | ``""`` |

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md) | [`get_input`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_get_input) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                |
| [`XRPose`](class_xrpose.md)   | [`get_pose`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_get_pose) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                  |
| [`bool`](class_bool.md)       | [`has_pose`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_has_pose) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                                                                  |
| `void`                        | [`invalidate_pose`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_invalidate_pose) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                                                                                  |
| `void`                        | [`set_input`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_set_input) ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )                                                                                                                                                                                        |
| `void`                        | [`set_pose`](class_xrpositionaltracker.md#class_xrpositionaltracker_method_set_pose) ( name: [`StringName`](class_stringname.md), transform: [`Transform3D`](class_transform3d.md), linear_velocity: [`Vector3`](class_vector3.md), angular_velocity: [`Vector3`](class_vector3.md), tracking_confidence: [TrackingConfidence](#enum_xrpose_trackingconfidence) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_xrpositionaltracker_signal_button_pressed"></div>

**button_pressed** ( name: [`String`](class_string.md) ) <div id="class_xrpositionaltracker_signal_button_pressed"></div>

Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_button_released"></div>

**button_released** ( name: [`String`](class_string.md) ) <div id="class_xrpositionaltracker_signal_button_released"></div>

Emitted when a button on this tracker is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_input_float_changed"></div>

**input_float_changed** ( name: [`String`](class_string.md), value: [`float`](class_float.md) ) <div id="class_xrpositionaltracker_signal_input_float_changed"></div>

Emitted when a trigger or similar input on this tracker changes value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_input_vector2_changed"></div>

**input_vector2_changed** ( name: [`String`](class_string.md), vector: [`Vector2`](class_vector2.md) ) <div id="class_xrpositionaltracker_signal_input_vector2_changed"></div>

Emitted when a thumbstick or thumbpad on this tracker moves.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_pose_changed"></div>

**pose_changed** ( pose: [`XRPose`](class_xrpose.md) ) <div id="class_xrpositionaltracker_signal_pose_changed"></div>

Emitted when the state of a pose tracked by this tracker changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_pose_lost_tracking"></div>

**pose_lost_tracking** ( pose: [`XRPose`](class_xrpose.md) ) <div id="class_xrpositionaltracker_signal_pose_lost_tracking"></div>

Emitted when a pose tracked by this tracker stops getting updated tracking data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrpositionaltracker_signal_profile_changed"></div>

**profile_changed** ( role: [`String`](class_string.md) ) <div id="class_xrpositionaltracker_signal_profile_changed"></div>

Emitted when the profile of our tracker changes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrpositionaltracker_trackerhand"></div>

enum **TrackerHand**: <div id="enum_xrpositionaltracker_trackerhand"></div>

<div id="_class_xrpositionaltracker_constant_tracker_hand_unknown"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **TRACKER_HAND_UNKNOWN** = ``0``

The hand this tracker is held in is unknown or not applicable.

<div id="_class_xrpositionaltracker_constant_tracker_hand_left"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **TRACKER_HAND_LEFT** = ``1``

This tracker is the left hand controller.

<div id="_class_xrpositionaltracker_constant_tracker_hand_right"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **TRACKER_HAND_RIGHT** = ``2``

This tracker is the right hand controller.

<div id="_class_xrpositionaltracker_constant_tracker_hand_max"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **TRACKER_HAND_MAX** = ``3``

Represents the size of the [TrackerHand](#enum_xrpositionaltracker_trackerhand) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrpositionaltracker_property_hand"></div>

[TrackerHand](#enum_xrpositionaltracker_trackerhand) **hand** = ``0`` <div id="class_xrpositionaltracker_property_hand"></div>

- `void` **set_tracker_hand** ( value: [TrackerHand](#enum_xrpositionaltracker_trackerhand) )
- [TrackerHand](#enum_xrpositionaltracker_trackerhand) **get_tracker_hand** ( )

Defines which hand this tracker relates to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_property_profile"></div>

[`String`](class_string.md) **profile** = ``""`` <div id="class_xrpositionaltracker_property_profile"></div>

- `void` **set_tracker_profile** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_tracker_profile** ( )

The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrpositionaltracker_method_get_input"></div>

[`Variant`](class_variant.md) **get_input** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrpositionaltracker_method_get_input"></div>

**已弃用：** Use through [`XRControllerTracker`](class_xrcontrollertracker.md).

Returns an input for this tracker. It can return a boolean, float or [`Vector2`](class_vector2.md) value depending on whether the input is a button, trigger or thumbstick/thumbpad.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_method_get_pose"></div>

[`XRPose`](class_xrpose.md) **get_pose** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrpositionaltracker_method_get_pose"></div>

Returns the current [`XRPose`](class_xrpose.md) state object for the bound `name` pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_method_has_pose"></div>

[`bool`](class_bool.md) **has_pose** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrpositionaltracker_method_has_pose"></div>

Returns `true` if the tracker is available and is currently tracking the bound `name` pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_method_invalidate_pose"></div>

`void` **invalidate_pose** ( name: [`StringName`](class_stringname.md) )<div id="class_xrpositionaltracker_method_invalidate_pose"></div>

Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_method_set_input"></div>

`void` **set_input** ( name: [`StringName`](class_stringname.md), value: [`Variant`](class_variant.md) )<div id="class_xrpositionaltracker_method_set_input"></div>

**已弃用：** Use through [`XRControllerTracker`](class_xrcontrollertracker.md).

Changes the value for the given input. This method is called by a [`XRInterface`](class_xrinterface.md) implementation and should not be used directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpositionaltracker_method_set_pose"></div>

`void` **set_pose** ( name: [`StringName`](class_stringname.md), transform: [`Transform3D`](class_transform3d.md), linear_velocity: [`Vector3`](class_vector3.md), angular_velocity: [`Vector3`](class_vector3.md), tracking_confidence: [TrackingConfidence](#enum_xrpose_trackingconfidence) )<div id="class_xrpositionaltracker_method_set_pose"></div>

Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by a [`XRInterface`](class_xrinterface.md) implementation and should not be used directly.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
