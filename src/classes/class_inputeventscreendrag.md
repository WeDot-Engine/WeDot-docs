<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/InputEventScreenDrag.xml。 -->

<div id="_class_inputeventscreendrag"></div>

# InputEventScreenDrag

**继承：** [`InputEventFromWindow`](class_inputeventfromwindow.md) **<** [`InputEvent`](class_inputevent.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a screen drag event.

## 描述

Stores information about screen drag events. See [`Node._input`](#class_node_private_method__input).

## 属性

| [`int`](class_int.md)         | [`index`](#class_inputeventscreendrag_property_index)                     | ``0``             |
| [`bool`](class_bool.md)       | [`pen_inverted`](#class_inputeventscreendrag_property_pen_inverted)       | ``false``         |
| [`Vector2`](class_vector2.md) | [`position`](#class_inputeventscreendrag_property_position)               | ``Vector2(0, 0)`` |
| [`float`](class_float.md)     | [`pressure`](#class_inputeventscreendrag_property_pressure)               | ``0.0``           |
| [`Vector2`](class_vector2.md) | [`relative`](#class_inputeventscreendrag_property_relative)               | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`screen_relative`](#class_inputeventscreendrag_property_screen_relative) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`screen_velocity`](#class_inputeventscreendrag_property_screen_velocity) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`tilt`](#class_inputeventscreendrag_property_tilt)                       | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`velocity`](#class_inputeventscreendrag_property_velocity)               | ``Vector2(0, 0)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_inputeventscreendrag_property_index"></div>

[`int`](class_int.md) **index** = ``0`` <div id="class_inputeventscreendrag_property_index"></div>

- `void` **set_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_index** ( )

The drag event index in the case of a multi-drag event.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_pen_inverted"></div>

[`bool`](class_bool.md) **pen_inverted** = ``false`` <div id="class_inputeventscreendrag_property_pen_inverted"></div>

- `void` **set_pen_inverted** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_pen_inverted** ( )

Returns `true` when using the eraser end of a stylus pen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_position"></div>

- `void` **set_position** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_position** ( )

The drag position in the viewport the node is in, using the coordinate system of this viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_pressure"></div>

[`float`](class_float.md) **pressure** = ``0.0`` <div id="class_inputeventscreendrag_property_pressure"></div>

- `void` **set_pressure** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_pressure** ( )

Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_relative"></div>

[`Vector2`](class_vector2.md) **relative** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_relative"></div>

- `void` **set_relative** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_relative** ( )

The drag position relative to the previous position (position at the last frame).

 **Note:** [`relative`](#class_inputeventscreendrag_property_relative) is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [`relative`](#class_inputeventscreendrag_property_relative) in a script that handles touch aiming. To avoid this, use [`screen_relative`](#class_inputeventscreendrag_property_screen_relative) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_screen_relative"></div>

[`Vector2`](class_vector2.md) **screen_relative** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_screen_relative"></div>

- `void` **set_screen_relative** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_screen_relative** ( )

The unscaled drag position relative to the previous position in screen coordinates (position at the last frame). This position is *not* scaled according to the content scale factor or calls to [`InputEvent.xformed_by`](#class_inputevent_method_xformed_by). This should be preferred over [`relative`](#class_inputeventscreendrag_property_relative) for touch aiming regardless of the project's stretch mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_screen_velocity"></div>

[`Vector2`](class_vector2.md) **screen_velocity** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_screen_velocity"></div>

- `void` **set_screen_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_screen_velocity** ( )

The unscaled drag velocity in pixels per second in screen coordinates. This velocity is *not* scaled according to the content scale factor or calls to [`InputEvent.xformed_by`](#class_inputevent_method_xformed_by). This should be preferred over [`velocity`](#class_inputeventscreendrag_property_velocity) for touch aiming regardless of the project's stretch mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_tilt"></div>

[`Vector2`](class_vector2.md) **tilt** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_tilt"></div>

- `void` **set_tilt** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_tilt** ( )

Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_inputeventscreendrag_property_velocity"></div>

[`Vector2`](class_vector2.md) **velocity** = ``Vector2(0, 0)`` <div id="class_inputeventscreendrag_property_velocity"></div>

- `void` **set_velocity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_velocity** ( )

The drag velocity.

 **Note:** [`velocity`](#class_inputeventscreendrag_property_velocity) is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [`velocity`](#class_inputeventscreendrag_property_velocity) in a script that handles touch aiming. To avoid this, use [`screen_velocity`](#class_inputeventscreendrag_property_screen_velocity) instead.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
