<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventMouseButton.xml。 -->

<div id="_class_inputeventmousebutton"></div>

# InputEventMouseButton

**继承：** [`InputEventMouse`](class_inputeventmouse.md) **<** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a mouse button being pressed or released.

## 描述

Stores information about mouse click events. See [`Node._input`](#class_node_private_method__input).

 **Note:** On Wear OS devices, rotary input is mapped to [`@GlobalScope.MOUSE_BUTTON_WHEEL_UP`](#class_@globalscope_constant_mouse_button_wheel_up) and [`@GlobalScope.MOUSE_BUTTON_WHEEL_DOWN`](#class_@globalscope_constant_mouse_button_wheel_down). This can be changed to [`@GlobalScope.MOUSE_BUTTON_WHEEL_LEFT`](#class_@globalscope_constant_mouse_button_wheel_left) and [`@GlobalScope.MOUSE_BUTTON_WHEEL_RIGHT`](#class_@globalscope_constant_mouse_button_wheel_right) with the [`ProjectSettings.input_devices/pointing/android/rotary_input_scroll_axis`](#class_projectsettings_property_input_devices/pointing/android/rotary_input_scroll_axis) setting.

## 属性

| [MouseButton](#enum_@globalscope_mousebutton) | [`button_index`](#class_inputeventmousebutton_property_button_index) | ``0``     |
| [`bool`](class_bool.md)                       | [`canceled`](#class_inputeventmousebutton_property_canceled)         | ``false`` |
| [`bool`](class_bool.md)                       | [`double_click`](#class_inputeventmousebutton_property_double_click) | ``false`` |
| [`float`](class_float.md)                     | [`factor`](#class_inputeventmousebutton_property_factor)             | ``1.0``   |
| [`bool`](class_bool.md)                       | [`pressed`](#class_inputeventmousebutton_property_pressed)           | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventmousebutton_property_button_index"></div>

[MouseButton](#enum_@globalscope_mousebutton) **button_index** = ``0`` <div id="class_inputeventmousebutton_property_button_index"></div>

- `void` **set_button_index** ( value: [MouseButton](#enum_@globalscope_mousebutton) )
- [MouseButton](#enum_@globalscope_mousebutton) **get_button_index** ( )

The mouse button identifier, one of the [MouseButton](#enum_@globalscope_mousebutton) button or button wheel constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousebutton_property_canceled"></div>

[`bool`](class_bool.md) **canceled** = ``false`` <div id="class_inputeventmousebutton_property_canceled"></div>

- `void` **set_canceled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_canceled** ( )

If `true`, the mouse button event has been canceled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousebutton_property_double_click"></div>

[`bool`](class_bool.md) **double_click** = ``false`` <div id="class_inputeventmousebutton_property_double_click"></div>

- `void` **set_double_click** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_double_click** ( )

If `true`, the mouse button's state is a double-click.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousebutton_property_factor"></div>

[`float`](class_float.md) **factor** = ``1.0`` <div id="class_inputeventmousebutton_property_factor"></div>

- `void` **set_factor** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_factor** ( )

The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousebutton_property_pressed"></div>

[`bool`](class_bool.md) **pressed** = ``false`` <div id="class_inputeventmousebutton_property_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
