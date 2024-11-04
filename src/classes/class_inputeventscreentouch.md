<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventScreenTouch.xml。 -->

<div id="_class_inputeventscreentouch"></div>

# InputEventScreenTouch

**继承：** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a screen touch event.

## 描述

Stores information about multi-touch press/release input events. Supports touch press, touch release and [`index`](#class_inputeventscreentouch_property_index) for multi-touch count and order.

## 属性

| [`bool`](class_bool.md)       | [`canceled`](#class_inputeventscreentouch_property_canceled)     | ``false``         |
| [`bool`](class_bool.md)       | [`double_tap`](#class_inputeventscreentouch_property_double_tap) | ``false``         |
| [`int`](class_int.md)         | [`index`](#class_inputeventscreentouch_property_index)           | ``0``             |
| [`Vector2`](class_vector2.md) | [`position`](#class_inputeventscreentouch_property_position)     | ``Vector2(0, 0)`` |
| [`bool`](class_bool.md)       | [`pressed`](#class_inputeventscreentouch_property_pressed)       | ``false``         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventscreentouch_property_canceled"></div>

[`bool`](class_bool.md) **canceled** = ``false`` <div id="class_inputeventscreentouch_property_canceled"></div>

- `void` **set_canceled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_canceled** ( )

If `true`, the touch event has been canceled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreentouch_property_double_tap"></div>

[`bool`](class_bool.md) **double_tap** = ``false`` <div id="class_inputeventscreentouch_property_double_tap"></div>

- `void` **set_double_tap** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_double_tap** ( )

If `true`, the touch's state is a double tap.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreentouch_property_index"></div>

[`int`](class_int.md) **index** = ``0`` <div id="class_inputeventscreentouch_property_index"></div>

- `void` **set_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_index** ( )

The touch index in the case of a multi-touch event. One index = one finger.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreentouch_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_inputeventscreentouch_property_position"></div>

- `void` **set_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_position** ( )

The touch position in the viewport the node is in, using the coordinate system of this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreentouch_property_pressed"></div>

[`bool`](class_bool.md) **pressed** = ``false`` <div id="class_inputeventscreentouch_property_pressed"></div>

- `void` **set_pressed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_pressed** ( )

If `true`, the touch's state is pressed. If `false`, the touch's state is released.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
