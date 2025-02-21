<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventPanGesture.xml。 -->

<div id="_class_inputeventpangesture"></div>

# InputEventPanGesture

**继承：** [`InputEventGesture`](class_inputeventgesture.md) **<** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a panning touch gesture.

## 描述

Stores information about pan gestures. A pan gesture is performed when the user swipes the touch screen with two fingers. It's typically used for panning/scrolling.

 **Note:** On Android, this requires the [`ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/android/enable_pan_and_scale_gestures) project setting to be enabled.

## 属性

|||
|:-:|:--|
| [`Vector2`](class_vector2.md) | [`delta`](class_inputeventpangesture.md#class_inputeventpangesture_property_delta) | ``Vector2(0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventpangesture_property_delta"></div>

[`Vector2`](class_vector2.md) **delta** = ``Vector2(0, 0)`` <div id="class_inputeventpangesture_property_delta"></div>

- `void` **set_delta** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_delta** ( )

Panning amount since last pan event.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
