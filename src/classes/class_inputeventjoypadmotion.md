<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventJoypadMotion.xml。 -->

<div id="_class_inputeventjoypadmotion"></div>

# InputEventJoypadMotion

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents axis motions (such as joystick or analog triggers) from a gamepad.

## 描述

Stores information about joystick motions. One **InputEventJoypadMotion** represents one axis at a time. For gamepad buttons, see [`InputEventJoypadButton`](class_inputeventjoypadbutton.md).

## 属性

|||
|:-:|:--|
| [JoyAxis](#enum_@globalscope_joyaxis) | [`axis`](class_inputeventjoypadmotion.md#class_inputeventjoypadmotion_property_axis)             | ``0``   |
| [`float`](class_float.md)             | [`axis_value`](class_inputeventjoypadmotion.md#class_inputeventjoypadmotion_property_axis_value) | ``0.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventjoypadmotion_property_axis"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **axis** = ``0`` <div id="class_inputeventjoypadmotion_property_axis"></div>

- `void` **set_axis** ( value: [JoyAxis](#enum_@globalscope_joyaxis) )
- [JoyAxis](#enum_@globalscope_joyaxis) **get_axis** ( )

Axis identifier. Use one of the [JoyAxis](#enum_@globalscope_joyaxis) axis constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventjoypadmotion_property_axis_value"></div>

[`float`](class_float.md) **axis_value** = ``0.0`` <div id="class_inputeventjoypadmotion_property_axis_value"></div>

- `void` **set_axis_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_axis_value** ( )

Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
