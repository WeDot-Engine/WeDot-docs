<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRTracker.xml。 -->

<div id="_class_xrtracker"></div>

# XRTracker

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`XRFaceTracker`](class_xrfacetracker.md), [`XRPositionalTracker`](class_xrpositionaltracker.md)

A tracked object.

## 描述

This object is the base of all XR trackers.

## 属性

| [`String`](class_string.md)               | [`description`](#class_xrtracker_property_description) | ``""``         |
| [`StringName`](class_stringname.md)       | [`name`](#class_xrtracker_property_name)               | ``&"Unknown"`` |
| [TrackerType](#enum_xrserver_trackertype) | [`type`](#class_xrtracker_property_type)               | ``128``        |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrtracker_property_description"></div>

[`String`](class_string.md) **description** = ``""`` <div id="class_xrtracker_property_description"></div>

- `void` **set_tracker_desc** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_tracker_desc** ( )

The description of this tracker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrtracker_property_name"></div>

[`StringName`](class_stringname.md) **name** = ``&"Unknown"`` <div id="class_xrtracker_property_name"></div>

- `void` **set_tracker_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_tracker_name** ( )

The unique name of this tracker. The trackers that are available differ between various XR runtimes and can often be configured by the user. Godot maintains a number of reserved names that it expects the [`XRInterface`](class_xrinterface.md) to implement if applicable:

- `head` identifies the [`XRPositionalTracker`](class_xrpositionaltracker.md) of the players head

- `left_hand` identifies the [`XRControllerTracker`](class_xrcontrollertracker.md) in the players left hand

- `right_hand` identifies the [`XRControllerTracker`](class_xrcontrollertracker.md) in the players right hand

- `/user/hand_tracker/left` identifies the [`XRHandTracker`](class_xrhandtracker.md) for the players left hand

- `/user/hand_tracker/right` identifies the [`XRHandTracker`](class_xrhandtracker.md) for the players right hand

- `/user/body_tracker` identifies the [`XRBodyTracker`](class_xrbodytracker.md) for the players body

- `/user/face_tracker` identifies the [`XRFaceTracker`](class_xrfacetracker.md) for the players face

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrtracker_property_type"></div>

[TrackerType](#enum_xrserver_trackertype) **type** = ``128`` <div id="class_xrtracker_property_type"></div>

- `void` **set_tracker_type** ( value: [TrackerType](#enum_xrserver_trackertype) )
- [TrackerType](#enum_xrserver_trackertype) **get_tracker_type** ( )

The type of tracker.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
