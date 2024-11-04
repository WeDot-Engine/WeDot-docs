<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventMouseMotion.xml。 -->

<div id="_class_inputeventmousemotion"></div>

# InputEventMouseMotion

**继承：** [`InputEventMouse`](class_inputeventmouse.md) **<** [`InputEventWithModifiers`](class_inputeventwithmodifiers.md) **<** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a mouse or a pen movement.

## 描述

Stores information about a mouse or a pen motion. This includes relative position, absolute position, and velocity. See [`Node._input`](#class_node_private_method__input).

 **Note:** By default, this event is only emitted once per frame rendered at most. If you need more precise input reporting, set [`Input.use_accumulated_input`](#class_input_property_use_accumulated_input) to `false` to make events emitted as often as possible. If you use InputEventMouseMotion to draw lines, consider implementing [*Bresenham's line algorithm*](https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm) as well to avoid visible gaps in lines if the user is moving the mouse quickly.

## 属性

| [`bool`](class_bool.md)       | [`pen_inverted`](#class_inputeventmousemotion_property_pen_inverted)       | ``false``         |
| [`float`](class_float.md)     | [`pressure`](#class_inputeventmousemotion_property_pressure)               | ``0.0``           |
| [`Vector2`](class_vector2.md) | [`relative`](#class_inputeventmousemotion_property_relative)               | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`screen_relative`](#class_inputeventmousemotion_property_screen_relative) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`screen_velocity`](#class_inputeventmousemotion_property_screen_velocity) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`tilt`](#class_inputeventmousemotion_property_tilt)                       | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`velocity`](#class_inputeventmousemotion_property_velocity)               | ``Vector2(0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventmousemotion_property_pen_inverted"></div>

[`bool`](class_bool.md) **pen_inverted** = ``false`` <div id="class_inputeventmousemotion_property_pen_inverted"></div>

- `void` **set_pen_inverted** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_pen_inverted** ( )

Returns `true` when using the eraser end of a stylus pen.

 **Note:** This property is implemented on Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_pressure"></div>

[`float`](class_float.md) **pressure** = ``0.0`` <div id="class_inputeventmousemotion_property_pressure"></div>

- `void` **set_pressure** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pressure** ( )

Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_relative"></div>

[`Vector2`](class_vector2.md) **relative** = ``Vector2(0, 0)`` <div id="class_inputeventmousemotion_property_relative"></div>

- `void` **set_relative** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_relative** ( )

The mouse position relative to the previous position (position at the last frame).

 **Note:** Since **InputEventMouseMotion** is only emitted when the mouse moves, the last event won't have a relative position of `Vector2(0, 0)` when the user stops moving the mouse.

 **Note:** [`relative`](#class_inputeventmousemotion_property_relative) is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using [`relative`](#class_inputeventmousemotion_property_relative) in a script that handles mouse aiming with the [`Input.MOUSE_MODE_CAPTURED`](#class_input_constant_mouse_mode_captured) mouse mode. To avoid this, use [`screen_relative`](#class_inputeventmousemotion_property_screen_relative) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_screen_relative"></div>

[`Vector2`](class_vector2.md) **screen_relative** = ``Vector2(0, 0)`` <div id="class_inputeventmousemotion_property_screen_relative"></div>

- `void` **set_screen_relative** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_screen_relative** ( )

The unscaled mouse position relative to the previous position in the coordinate system of the screen (position at the last frame).

 **Note:** Since **InputEventMouseMotion** is only emitted when the mouse moves, the last event won't have a relative position of `Vector2(0, 0)` when the user stops moving the mouse. This coordinate is *not* scaled according to the content scale factor or calls to [`InputEvent.xformed_by`](#class_inputevent_method_xformed_by). This should be preferred over [`relative`](#class_inputeventmousemotion_property_relative) for mouse aiming when using the [`Input.MOUSE_MODE_CAPTURED`](#class_input_constant_mouse_mode_captured) mouse mode, regardless of the project's stretch mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_screen_velocity"></div>

[`Vector2`](class_vector2.md) **screen_velocity** = ``Vector2(0, 0)`` <div id="class_inputeventmousemotion_property_screen_velocity"></div>

- `void` **set_screen_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_screen_velocity** ( )

The unscaled mouse velocity in pixels per second in screen coordinates. This velocity is *not* scaled according to the content scale factor or calls to [`InputEvent.xformed_by`](#class_inputevent_method_xformed_by). This should be preferred over [`velocity`](#class_inputeventmousemotion_property_velocity) for mouse aiming when using the [`Input.MOUSE_MODE_CAPTURED`](#class_input_constant_mouse_mode_captured) mouse mode, regardless of the project's stretch mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_tilt"></div>

[`Vector2`](class_vector2.md) **tilt** = ``Vector2(0, 0)`` <div id="class_inputeventmousemotion_property_tilt"></div>

- `void` **set_tilt** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_tilt** ( )

Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventmousemotion_property_velocity"></div>

[`Vector2`](class_vector2.md) **velocity** = ``Vector2(0, 0)`` <div id="class_inputeventmousemotion_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_velocity** ( )

The mouse velocity in pixels per second.

 **Note:** [`velocity`](#class_inputeventmousemotion_property_velocity) is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using [`velocity`](#class_inputeventmousemotion_property_velocity) in a script that handles mouse aiming with the [`Input.MOUSE_MODE_CAPTURED`](#class_input_constant_mouse_mode_captured) mouse mode. To avoid this, use [`screen_velocity`](#class_inputeventmousemotion_property_screen_velocity) instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
