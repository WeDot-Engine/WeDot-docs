<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventJoypadButton.xml。 -->

<div id="_class_inputeventjoypadbutton"></div>

# InputEventJoypadButton

**继承：** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a gamepad button being pressed or released.

## 描述

Input event type for gamepad buttons. For gamepad analog sticks and joysticks, see [`InputEventJoypadMotion`](class_inputeventjoypadmotion.md).

## 属性

|||
|:-:|:--|
| [JoyButton](#enum_@globalscope_joybutton) | [`button_index`](class_inputeventjoypadbutton.md#class_inputeventjoypadbutton_property_button_index) | ``0``     |
| [`bool`](class_bool.md)                   | [`pressed`](class_inputeventjoypadbutton.md#class_inputeventjoypadbutton_property_pressed)           | ``false`` |
| [`float`](class_float.md)                 | [`pressure`](class_inputeventjoypadbutton.md#class_inputeventjoypadbutton_property_pressure)         | ``0.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventjoypadbutton_property_button_index"></div>

[JoyButton](#enum_@globalscope_joybutton) **button_index** = ``0`` <div id="class_inputeventjoypadbutton_property_button_index"></div>

- `void` **set_button_index** ( value: [JoyButton](#enum_@globalscope_joybutton) )
- [JoyButton](#enum_@globalscope_joybutton) **get_button_index** ( )

Button identifier. One of the [JoyButton](#enum_@globalscope_joybutton) button constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventjoypadbutton_property_pressed"></div>

[`bool`](class_bool.md) **pressed** = ``false`` <div id="class_inputeventjoypadbutton_property_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the button's state is pressed. If `false`, the button's state is released.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventjoypadbutton_property_pressure"></div>

[`float`](class_float.md) **pressure** = ``0.0`` <div id="class_inputeventjoypadbutton_property_pressure"></div>

- `void` **set_pressure** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pressure** ( )

**已弃用：** This property is never set by the engine and is always `0`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
