<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRNode3D.xml。 -->

<div id="_class_xrnode3d"></div>

# XRNode3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`XRAnchor3D`](class_xranchor3d.md), [`XRController3D`](class_xrcontroller3d.md)

A spatial node that has its position automatically updated by the [`XRServer`](class_xrserver.md).

## 描述

This node can be bound to a specific pose of a [`XRPositionalTracker`](class_xrpositionaltracker.md) and will automatically have its [`Node3D.transform`](class_node3d.md#class_node3d_property_transform) updated by the [`XRServer`](class_xrserver.md). Nodes of this type must be added as children of the [`XROrigin3D`](class_xrorigin3d.md) node.

## 属性

|||
|:-:|:--|
| [`StringName`](class_stringname.md) | [`pose`](class_xrnode3d.md#class_xrnode3d_property_pose)                           | ``&"default"`` |
| [`bool`](class_bool.md)             | [`show_when_tracked`](class_xrnode3d.md#class_xrnode3d_property_show_when_tracked) | ``false``      |
| [`StringName`](class_stringname.md) | [`tracker`](class_xrnode3d.md#class_xrnode3d_property_tracker)                     | ``&""``        |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)     | [`get_has_tracking_data`](class_xrnode3d.md#class_xrnode3d_method_get_has_tracking_data) ( ) const[^const]                                                                                                                                                                                     |
| [`bool`](class_bool.md)     | [`get_is_active`](class_xrnode3d.md#class_xrnode3d_method_get_is_active) ( ) const[^const]                                                                                                                                                                                                     |
| [`XRPose`](class_xrpose.md) | [`get_pose`](class_xrnode3d.md#class_xrnode3d_method_get_pose) ( )                                                                                                                                                                                                                             |
| `void`                      | [`trigger_haptic_pulse`](class_xrnode3d.md#class_xrnode3d_method_trigger_haptic_pulse) ( action_name: [`String`](class_string.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_xrnode3d_signal_tracking_changed"></div>

**tracking_changed** ( tracking: [`bool`](class_bool.md) ) <div id="class_xrnode3d_signal_tracking_changed"></div>

Emitted when the [`tracker`](class_xrnode3d.md#class_xrnode3d_property_tracker) starts or stops receiving updated tracking data for the [`pose`](class_xrnode3d.md#class_xrnode3d_property_pose) being tracked. The `tracking` argument indicates whether the tracker is getting updated tracking data.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrnode3d_property_pose"></div>

[`StringName`](class_stringname.md) **pose** = ``&"default"`` <div id="class_xrnode3d_property_pose"></div>

- `void` **set_pose_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_pose_name** ( )

The name of the pose we're bound to. Which poses a tracker supports is not known during design time.

Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [`XRInterface`](class_xrinterface.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrnode3d_property_show_when_tracked"></div>

[`bool`](class_bool.md) **show_when_tracked** = ``false`` <div id="class_xrnode3d_property_show_when_tracked"></div>

- `void` **set_show_when_tracked** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_show_when_tracked** ( )

Enables showing the node when tracking starts, and hiding the node when tracking is lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrnode3d_property_tracker"></div>

[`StringName`](class_stringname.md) **tracker** = ``&""`` <div id="class_xrnode3d_property_tracker"></div>

- `void` **set_tracker** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_tracker** ( )

The name of the tracker we're bound to. Which trackers are available is not known during design time.

Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [`XRInterface`](class_xrinterface.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrnode3d_method_get_has_tracking_data"></div>

[`bool`](class_bool.md) **get_has_tracking_data** ( ) const[^const]<div id="class_xrnode3d_method_get_has_tracking_data"></div>

Returns `true` if the [`tracker`](class_xrnode3d.md#class_xrnode3d_property_tracker) has current tracking data for the [`pose`](class_xrnode3d.md#class_xrnode3d_property_pose) being tracked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrnode3d_method_get_is_active"></div>

[`bool`](class_bool.md) **get_is_active** ( ) const[^const]<div id="class_xrnode3d_method_get_is_active"></div>

Returns `true` if the [`tracker`](class_xrnode3d.md#class_xrnode3d_property_tracker) has been registered and the [`pose`](class_xrnode3d.md#class_xrnode3d_property_pose) is being tracked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrnode3d_method_get_pose"></div>

[`XRPose`](class_xrpose.md) **get_pose** ( )<div id="class_xrnode3d_method_get_pose"></div>

Returns the [`XRPose`](class_xrpose.md) containing the current state of the pose being tracked. This gives access to additional properties of this pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrnode3d_method_trigger_haptic_pulse"></div>

`void` **trigger_haptic_pulse** ( action_name: [`String`](class_string.md), frequency: [`float`](class_float.md), amplitude: [`float`](class_float.md), duration_sec: [`float`](class_float.md), delay_sec: [`float`](class_float.md) )<div id="class_xrnode3d_method_trigger_haptic_pulse"></div>

Triggers a haptic pulse on a device associated with this interface.

 `action_name` is the name of the action for this pulse.

 `frequency` is the frequency of the pulse, set to `0.0` to have the system use a default frequency.

 `amplitude` is the amplitude of the pulse between `0.0` and `1.0`.

 `duration_sec` is the duration of the pulse in seconds.

 `delay_sec` is a delay in seconds before the pulse is given.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
