<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/InputEventMouse.xml。 -->

<div id="_class_inputeventmouse"></div>

# InputEventMouse

**继承：** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`InputEventMouseButton`](class_inputeventmousebutton.md), [`InputEventMouseMotion`](class_inputeventmousemotion.md)

Base input event type for mouse events.

## 描述

Stores general information about mouse events.

## 属性

|||
|:-:|:--|
| [MouseButtonMask](#enum_@globalscope_mousebuttonmask) | [`button_mask`](class_inputeventmouse.md#class_inputeventmouse_property_button_mask)         | ``0``             |
| [`Vector2`](class_vector2.md)                         | [`global_position`](class_inputeventmouse.md#class_inputeventmouse_property_global_position) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md)                         | [`position`](class_inputeventmouse.md#class_inputeventmouse_property_position)               | ``Vector2(0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventmouse_property_button_mask"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **button_mask** = ``0`` <div id="class_inputeventmouse_property_button_mask"></div>

- `void` **set_button_mask** ( value: [MouseButtonMask](#enum_@globalscope_mousebuttonmask) )
- [MouseButtonMask](#enum_@globalscope_mousebuttonmask) **get_button_mask** ( )

The mouse button mask identifier, one of or a bitwise combination of the [MouseButton](#enum_@globalscope_mousebutton) button masks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmouse_property_global_position"></div>

[`Vector2`](class_vector2.md) **global_position** = ``Vector2(0, 0)`` <div id="class_inputeventmouse_property_global_position"></div>

- `void` **set_global_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_global_position** ( )

When received in [`Node._input`](class_node.md#class_node_private_method__input) or [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input), returns the mouse's position in the root [`Viewport`](class_viewport.md) using the coordinate system of the root [`Viewport`](class_viewport.md).

When received in [`Control._gui_input`](class_control.md#class_control_private_method__gui_input), returns the mouse's position in the [`CanvasLayer`](class_canvaslayer.md) that the [`Control`](class_control.md) is in using the coordinate system of the [`CanvasLayer`](class_canvaslayer.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmouse_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_inputeventmouse_property_position"></div>

- `void` **set_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_position** ( )

When received in [`Node._input`](class_node.md#class_node_private_method__input) or [`Node._unhandled_input`](class_node.md#class_node_private_method__unhandled_input), returns the mouse's position in the [`Viewport`](class_viewport.md) this [`Node`](class_node.md) is in using the coordinate system of this [`Viewport`](class_viewport.md).

When received in [`Control._gui_input`](class_control.md#class_control_private_method__gui_input), returns the mouse's position in the [`Control`](class_control.md) using the local coordinate system of the [`Control`](class_control.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
