<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/XRPose.xml。 -->

<div id="_class_xrpose"></div>

# XRPose

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

This object contains all data related to a pose on a tracked object.

## 描述

XR runtimes often identify multiple locations on devices such as controllers that are spatially tracked.

Orientation, location, linear velocity and angular velocity are all provided for each pose by the XR runtime. This object contains this state of a pose.

## 属性

|||
|:-:|:--|
| [`Vector3`](class_vector3.md)                         | [`angular_velocity`](class_xrpose.md#class_xrpose_property_angular_velocity)       | ``Vector3(0, 0, 0)``                                |
| [`bool`](class_bool.md)                               | [`has_tracking_data`](class_xrpose.md#class_xrpose_property_has_tracking_data)     | ``false``                                           |
| [`Vector3`](class_vector3.md)                         | [`linear_velocity`](class_xrpose.md#class_xrpose_property_linear_velocity)         | ``Vector3(0, 0, 0)``                                |
| [`StringName`](class_stringname.md)                   | [`name`](class_xrpose.md#class_xrpose_property_name)                               | ``&""``                                             |
| [TrackingConfidence](#enum_xrpose_trackingconfidence) | [`tracking_confidence`](class_xrpose.md#class_xrpose_property_tracking_confidence) | ``0``                                               |
| [`Transform3D`](class_transform3d.md)                 | [`transform`](class_xrpose.md#class_xrpose_property_transform)                     | ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` |

## 方法

|||
|:-:|:--|
| [`Transform3D`](class_transform3d.md) | [`get_adjusted_transform`](class_xrpose.md#class_xrpose_method_get_adjusted_transform) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_xrpose_trackingconfidence"></div>

enum **TrackingConfidence**: <div id="enum_xrpose_trackingconfidence"></div>

<div id="_class_xrpose_constant_xr_tracking_confidence_none"></div>

[TrackingConfidence](#enum_xrpose_trackingconfidence) **XR_TRACKING_CONFIDENCE_NONE** = ``0``

No tracking information is available for this pose.

<div id="_class_xrpose_constant_xr_tracking_confidence_low"></div>

[TrackingConfidence](#enum_xrpose_trackingconfidence) **XR_TRACKING_CONFIDENCE_LOW** = ``1``

Tracking information may be inaccurate or estimated. For example, with inside out tracking this would indicate a controller may be (partially) obscured.

<div id="_class_xrpose_constant_xr_tracking_confidence_high"></div>

[TrackingConfidence](#enum_xrpose_trackingconfidence) **XR_TRACKING_CONFIDENCE_HIGH** = ``2``

Tracking information is considered accurate and up to date.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrpose_property_angular_velocity"></div>

[`Vector3`](class_vector3.md) **angular_velocity** = ``Vector3(0, 0, 0)`` <div id="class_xrpose_property_angular_velocity"></div>

- `void` **set_angular_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_angular_velocity** ( )

The angular velocity for this pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpose_property_has_tracking_data"></div>

[`bool`](class_bool.md) **has_tracking_data** = ``false`` <div id="class_xrpose_property_has_tracking_data"></div>

- `void` **set_has_tracking_data** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_has_tracking_data** ( )

If `true` our tracking data is up to date. If `false` we're no longer receiving new tracking data and our state is whatever that last valid state was.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpose_property_linear_velocity"></div>

[`Vector3`](class_vector3.md) **linear_velocity** = ``Vector3(0, 0, 0)`` <div id="class_xrpose_property_linear_velocity"></div>

- `void` **set_linear_velocity** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_linear_velocity** ( )

The linear velocity of this pose.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpose_property_name"></div>

[`StringName`](class_stringname.md) **name** = ``&""`` <div id="class_xrpose_property_name"></div>

- `void` **set_name** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_name** ( )

The name of this pose. Usually, this name is derived from an action map set up by the user. Godot also suggests some pose names that [`XRInterface`](class_xrinterface.md) objects are expected to implement:

- `root` is the root location, often used for tracked objects that do not have further nodes.

- `aim` is the tip of a controller with its orientation pointing outwards, often used for raycasts.

- `grip` is the location where the user grips the controller.

- `skeleton` is the root location for a hand mesh, when using hand tracking and an animated skeleton is supplied by the XR runtime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpose_property_tracking_confidence"></div>

[TrackingConfidence](#enum_xrpose_trackingconfidence) **tracking_confidence** = ``0`` <div id="class_xrpose_property_tracking_confidence"></div>

- `void` **set_tracking_confidence** ( value: [TrackingConfidence](#enum_xrpose_trackingconfidence) )
- [TrackingConfidence](#enum_xrpose_trackingconfidence) **get_tracking_confidence** ( )

The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrpose_property_transform"></div>

[`Transform3D`](class_transform3d.md) **transform** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_xrpose_property_transform"></div>

- `void` **set_transform** ( value: [`Transform3D`](class_transform3d.md) )
- [`Transform3D`](class_transform3d.md) **get_transform** ( )

The transform containing the original and transform as reported by the XR runtime.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xrpose_method_get_adjusted_transform"></div>

[`Transform3D`](class_transform3d.md) **get_adjusted_transform** ( ) const[^const]<div id="class_xrpose_method_get_adjusted_transform"></div>

Returns the [`transform`](class_xrpose.md#class_xrpose_property_transform) with world scale and our reference frame applied. This is the transform used to position [`XRNode3D`](class_xrnode3d.md) objects.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
