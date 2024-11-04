<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventMagnifyGesture.xml。 -->

<div id="_class_inputeventmagnifygesture"></div>

# InputEventMagnifyGesture

**继承：** [`InputEventGesture`](class_inputeventgesture.md) **<** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a magnifying touch gesture.

## 描述

Stores the factor of a magnifying touch gesture. This is usually performed when the user pinches the touch screen and used for zooming in/out.

 **Note:** On Android, this requires the [`ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures`](#class_projectsettings_property_input_devices/pointing/android/enable_pan_and_scale_gestures) project setting to be enabled.

## 属性

| [`float`](class_float.md) | [`factor`](#class_inputeventmagnifygesture_property_factor) | ``1.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventmagnifygesture_property_factor"></div>

[`float`](class_float.md) **factor** = ``1.0`` <div id="class_inputeventmagnifygesture_property_factor"></div>

- `void` **set_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_factor** ( )

The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
