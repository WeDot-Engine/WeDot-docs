<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRServer.xml。 -->

<div id="_class_xrserver"></div>

# XRServer

**继承：** [`Object`](class_object.md)

Server for AR and VR features.

## 描述

The AR/VR server is the heart of our Advanced and Virtual Reality solution and handles all the processing.

## 属性

|||
|:-:|:--|
| [`XRInterface`](class_xrinterface.md) | [`primary_interface`](class_xrserver.md#class_xrserver_property_primary_interface) |                                                     |
| [`Transform3D`](class_transform3d.md) | [`world_origin`](class_xrserver.md#class_xrserver_property_world_origin)           | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |
| [`float`](class_float.md)             | [`world_scale`](class_xrserver.md#class_xrserver_property_world_scale)             | ``1.0``                                             |

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_interface`](class_xrserver.md#class_xrserver_method_add_interface) ( interface: [`XRInterface`](class_xrinterface.md) )                                                 |
| `void`                                                      | [`add_tracker`](class_xrserver.md#class_xrserver_method_add_tracker) ( tracker: [`XRTracker`](class_xrtracker.md) )                                                           |
| `void`                                                      | [`center_on_hmd`](class_xrserver.md#class_xrserver_method_center_on_hmd) ( rotation_mode: [RotationMode](#enum_xrserver_rotationmode), keep_height: [`bool`](class_bool.md) ) |
| `void`                                                      | [`clear_reference_frame`](class_xrserver.md#class_xrserver_method_clear_reference_frame) ( )                                                                                  |
| [`XRInterface`](class_xrinterface.md)                       | [`find_interface`](class_xrserver.md#class_xrserver_method_find_interface) ( name: [`String`](class_string.md) ) const[^const]                                                |
| [`Transform3D`](class_transform3d.md)                       | [`get_hmd_transform`](class_xrserver.md#class_xrserver_method_get_hmd_transform) ( )                                                                                          |
| [`XRInterface`](class_xrinterface.md)                       | [`get_interface`](class_xrserver.md#class_xrserver_method_get_interface) ( idx: [`int`](class_int.md) ) const[^const]                                                         |
| [`int`](class_int.md)                                       | [`get_interface_count`](class_xrserver.md#class_xrserver_method_get_interface_count) ( ) const[^const]                                                                        |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_interfaces`](class_xrserver.md#class_xrserver_method_get_interfaces) ( ) const[^const]                                                                                  |
| [`Transform3D`](class_transform3d.md)                       | [`get_reference_frame`](class_xrserver.md#class_xrserver_method_get_reference_frame) ( ) const[^const]                                                                        |
| [`XRTracker`](class_xrtracker.md)                           | [`get_tracker`](class_xrserver.md#class_xrserver_method_get_tracker) ( tracker_name: [`StringName`](class_stringname.md) ) const[^const]                                      |
| [`Dictionary`](class_dictionary.md)                         | [`get_trackers`](class_xrserver.md#class_xrserver_method_get_trackers) ( tracker_types: [`int`](class_int.md) )                                                               |
| `void`                                                      | [`remove_interface`](class_xrserver.md#class_xrserver_method_remove_interface) ( interface: [`XRInterface`](class_xrinterface.md) )                                           |
| `void`                                                      | [`remove_tracker`](class_xrserver.md#class_xrserver_method_remove_tracker) ( tracker: [`XRTracker`](class_xrtracker.md) )                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_xrserver_signal_interface_added"></div>

**interface_added** ( interface_name: [`StringName`](class_stringname.md) ) <div id="class_xrserver_signal_interface_added"></div>

Emitted when a new interface has been added.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrserver_signal_interface_removed"></div>

**interface_removed** ( interface_name: [`StringName`](class_stringname.md) ) <div id="class_xrserver_signal_interface_removed"></div>

Emitted when an interface is removed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrserver_signal_reference_frame_changed"></div>

**reference_frame_changed** ( ) <div id="class_xrserver_signal_reference_frame_changed"></div>

Emitted when the reference frame transform changes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrserver_signal_tracker_added"></div>

**tracker_added** ( tracker_name: [`StringName`](class_stringname.md), type: [`int`](class_int.md) ) <div id="class_xrserver_signal_tracker_added"></div>

Emitted when a new tracker has been added. If you don't use a fixed number of controllers or if you're using [`XRAnchor3D`](class_xranchor3d.md) s for an AR solution, it is important to react to this signal to add the appropriate [`XRController3D`](class_xrcontroller3d.md) or [`XRAnchor3D`](class_xranchor3d.md) nodes related to this new tracker.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrserver_signal_tracker_removed"></div>

**tracker_removed** ( tracker_name: [`StringName`](class_stringname.md), type: [`int`](class_int.md) ) <div id="class_xrserver_signal_tracker_removed"></div>

Emitted when a tracker is removed. You should remove any [`XRController3D`](class_xrcontroller3d.md) or [`XRAnchor3D`](class_xranchor3d.md) points if applicable. This is not mandatory, the nodes simply become inactive and will be made active again when a new tracker becomes available (i.e. a new controller is switched on that takes the place of the previous one).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_xrserver_signal_tracker_updated"></div>

**tracker_updated** ( tracker_name: [`StringName`](class_stringname.md), type: [`int`](class_int.md) ) <div id="class_xrserver_signal_tracker_updated"></div>

Emitted when an existing tracker has been updated. This can happen if the user switches controllers.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrserver_trackertype"></div>

enum **TrackerType**: <div id="enum_xrserver_trackertype"></div>

<div id="_class_xrserver_constant_tracker_head"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_HEAD** = ``1``

The tracker tracks the location of the players head. This is usually a location centered between the players eyes. Note that for handheld AR devices this can be the current location of the device.

<div id="_class_xrserver_constant_tracker_controller"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_CONTROLLER** = ``2``

The tracker tracks the location of a controller.

<div id="_class_xrserver_constant_tracker_basestation"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_BASESTATION** = ``4``

The tracker tracks the location of a base station.

<div id="_class_xrserver_constant_tracker_anchor"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_ANCHOR** = ``8``

The tracker tracks the location and size of an AR anchor.

<div id="_class_xrserver_constant_tracker_hand"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_HAND** = ``16``

The tracker tracks the location and joints of a hand.

<div id="_class_xrserver_constant_tracker_body"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_BODY** = ``32``

The tracker tracks the location and joints of a body.

<div id="_class_xrserver_constant_tracker_face"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_FACE** = ``64``

The tracker tracks the expressions of a face.

<div id="_class_xrserver_constant_tracker_any_known"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_ANY_KNOWN** = ``127``

Used internally to filter trackers of any known type.

<div id="_class_xrserver_constant_tracker_unknown"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_UNKNOWN** = ``128``

Used internally if we haven't set the tracker type yet.

<div id="_class_xrserver_constant_tracker_any"></div>

[TrackerType](#enum_xrserver_trackertype) **TRACKER_ANY** = ``255``

Used internally to select all trackers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_xrserver_rotationmode"></div>

enum **RotationMode**: <div id="enum_xrserver_rotationmode"></div>

<div id="_class_xrserver_constant_reset_full_rotation"></div>

[RotationMode](#enum_xrserver_rotationmode) **RESET_FULL_ROTATION** = ``0``

Fully reset the orientation of the HMD. Regardless of what direction the user is looking to in the real world. The user will look dead ahead in the virtual world.

<div id="_class_xrserver_constant_reset_but_keep_tilt"></div>

[RotationMode](#enum_xrserver_rotationmode) **RESET_BUT_KEEP_TILT** = ``1``

Resets the orientation but keeps the tilt of the device. So if we're looking down, we keep looking down but heading will be reset.

<div id="_class_xrserver_constant_dont_reset_rotation"></div>

[RotationMode](#enum_xrserver_rotationmode) **DONT_RESET_ROTATION** = ``2``

Does not reset the orientation of the HMD, only the position of the player gets centered.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrserver_property_primary_interface"></div>

[`XRInterface`](class_xrinterface.md) **primary_interface** <div id="class_xrserver_property_primary_interface"></div>

- `void` **set_primary_interface** ( value: [`XRInterface`](class_xrinterface.md) )
- [`XRInterface`](class_xrinterface.md) **get_primary_interface** ( )

The primary [`XRInterface`](class_xrinterface.md) currently bound to the **XRServer**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_property_world_origin"></div>

[`Transform3D`](class_transform3d.md) **world_origin** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_xrserver_property_world_origin"></div>

- `void` **set_world_origin** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_world_origin** ( )

The current origin of our tracking space in the virtual world. This is used by the renderer to properly position the camera with new tracking data.

 **Note:** This property is managed by the current [`XROrigin3D`](class_xrorigin3d.md) node. It is exposed for access from GDExtensions.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_property_world_scale"></div>

[`float`](class_float.md) **world_scale** = ``1.0`` <div id="class_xrserver_property_world_scale"></div>

- `void` **set_world_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_world_scale** ( )

The scale of the game world compared to the real world. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrserver_method_add_interface"></div>

`void` **add_interface** ( interface: [`XRInterface`](class_xrinterface.md) )<div id="class_xrserver_method_add_interface"></div>

Registers an [`XRInterface`](class_xrinterface.md) object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_add_tracker"></div>

`void` **add_tracker** ( tracker: [`XRTracker`](class_xrtracker.md) )<div id="class_xrserver_method_add_tracker"></div>

Registers a new [`XRTracker`](class_xrtracker.md) that tracks a physical object.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_center_on_hmd"></div>

`void` **center_on_hmd** ( rotation_mode: [RotationMode](#enum_xrserver_rotationmode), keep_height: [`bool`](class_bool.md) )<div id="class_xrserver_method_center_on_hmd"></div>

This is an important function to understand correctly. AR and VR platforms all handle positioning slightly differently.

For platforms that do not offer spatial tracking, our origin point (0, 0, 0) is the location of our HMD, but you have little control over the direction the player is facing in the real world.

For platforms that do offer spatial tracking, our origin point depends very much on the system. For OpenVR, our origin point is usually the center of the tracking space, on the ground. For other platforms, it's often the location of the tracking camera.

This method allows you to center your tracker on the location of the HMD. It will take the current location of the HMD and use that to adjust all your tracking data; in essence, realigning the real world to your player's current position in the game world.

For this method to produce usable results, tracking information must be available. This often takes a few frames after starting your game.

You should call this method after a few seconds have passed. For example, when the user requests a realignment of the display holding a designated button on a controller for a short period of time, or when implementing a teleport mechanism.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_clear_reference_frame"></div>

`void` **clear_reference_frame** ( )<div id="class_xrserver_method_clear_reference_frame"></div>

Clears the reference frame that was set by previous calls to [`center_on_hmd`](class_xrserver.md#class_xrserver_method_center_on_hmd).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_find_interface"></div>

[`XRInterface`](class_xrinterface.md) **find_interface** ( name: [`String`](class_string.md) ) const[^const]<div id="class_xrserver_method_find_interface"></div>

Finds an interface by its `name`. For example, if your project uses capabilities of an AR/VR platform, you can find the interface for that platform by name and initialize it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_hmd_transform"></div>

[`Transform3D`](class_transform3d.md) **get_hmd_transform** ( )<div id="class_xrserver_method_get_hmd_transform"></div>

Returns the primary interface's transformation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_interface"></div>

[`XRInterface`](class_xrinterface.md) **get_interface** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_xrserver_method_get_interface"></div>

Returns the interface registered at the given `idx` index in the list of interfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_interface_count"></div>

[`int`](class_int.md) **get_interface_count** ( ) const[^const]<div id="class_xrserver_method_get_interface_count"></div>

Returns the number of interfaces currently registered with the AR/VR server. If your project supports multiple AR/VR platforms, you can look through the available interface, and either present the user with a selection or simply try to initialize each interface and use the first one that returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_interfaces"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_interfaces** ( ) const[^const]<div id="class_xrserver_method_get_interfaces"></div>

Returns a list of available interfaces the ID and name of each interface.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_reference_frame"></div>

[`Transform3D`](class_transform3d.md) **get_reference_frame** ( ) const[^const]<div id="class_xrserver_method_get_reference_frame"></div>

Returns the reference frame transform. Mostly used internally and exposed for GDExtension build interfaces.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_tracker"></div>

[`XRTracker`](class_xrtracker.md) **get_tracker** ( tracker_name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_xrserver_method_get_tracker"></div>

Returns the positional tracker with the given `tracker_name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_get_trackers"></div>

[`Dictionary`](class_dictionary.md) **get_trackers** ( tracker_types: [`int`](class_int.md) )<div id="class_xrserver_method_get_trackers"></div>

Returns a dictionary of trackers for `tracker_types`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_remove_interface"></div>

`void` **remove_interface** ( interface: [`XRInterface`](class_xrinterface.md) )<div id="class_xrserver_method_remove_interface"></div>

Removes this `interface`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrserver_method_remove_tracker"></div>

`void` **remove_tracker** ( tracker: [`XRTracker`](class_xrtracker.md) )<div id="class_xrserver_method_remove_tracker"></div>

Removes this `tracker`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
