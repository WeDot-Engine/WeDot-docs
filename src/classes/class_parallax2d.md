<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Parallax2D.xml。 -->

<div id="_class_parallax2d"></div>

# Parallax2D

**实验性：** This node is meant to replace [`ParallaxBackground`](class_parallaxbackground.md) and [`ParallaxLayer`](class_parallaxlayer.md). The implementation may change in the future.

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used to create a parallax scrolling background.

## 描述

A **Parallax2D** is used to create a parallax effect. It can move at a different speed relative to the camera movement using [`scroll_scale`](class_parallax2d.md#class_parallax2d_property_scroll_scale). This creates an illusion of depth in a 2D game. If manual scrolling is desired, the [`Camera2D`](class_camera2d.md) position can be ignored with [`ignore_camera_scroll`](class_parallax2d.md#class_parallax2d_property_ignore_camera_scroll).

 **Note:** Any changes to this node's position made after it enters the scene tree will be overridden if [`ignore_camera_scroll`](class_parallax2d.md#class_parallax2d_property_ignore_camera_scroll) is `false` or [`screen_offset`](class_parallax2d.md#class_parallax2d_property_screen_offset) is modified.

## 属性

|||
|:-:|:--|
| [`Vector2`](class_vector2.md)                                   | [`autoscroll`](class_parallax2d.md#class_parallax2d_property_autoscroll)                     | ``Vector2(0, 0)``                                                                        |
| [`bool`](class_bool.md)                                         | [`follow_viewport`](class_parallax2d.md#class_parallax2d_property_follow_viewport)           | ``true``                                                                                 |
| [`bool`](class_bool.md)                                         | [`ignore_camera_scroll`](class_parallax2d.md#class_parallax2d_property_ignore_camera_scroll) | ``false``                                                                                |
| [`Vector2`](class_vector2.md)                                   | [`limit_begin`](class_parallax2d.md#class_parallax2d_property_limit_begin)                   | ``Vector2(-1e+07, -1e+07)``                                                              |
| [`Vector2`](class_vector2.md)                                   | [`limit_end`](class_parallax2d.md#class_parallax2d_property_limit_end)                       | ``Vector2(1e+07, 1e+07)``                                                                |
| [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) | physics_interpolation_mode                                                                   | ``2`` (overrides [`Node`](class_node.md#class_node_property_physics_interpolation_mode)) |
| [`Vector2`](class_vector2.md)                                   | [`repeat_size`](class_parallax2d.md#class_parallax2d_property_repeat_size)                   | ``Vector2(0, 0)``                                                                        |
| [`int`](class_int.md)                                           | [`repeat_times`](class_parallax2d.md#class_parallax2d_property_repeat_times)                 | ``1``                                                                                    |
| [`Vector2`](class_vector2.md)                                   | [`screen_offset`](class_parallax2d.md#class_parallax2d_property_screen_offset)               | ``Vector2(0, 0)``                                                                        |
| [`Vector2`](class_vector2.md)                                   | [`scroll_offset`](class_parallax2d.md#class_parallax2d_property_scroll_offset)               | ``Vector2(0, 0)``                                                                        |
| [`Vector2`](class_vector2.md)                                   | [`scroll_scale`](class_parallax2d.md#class_parallax2d_property_scroll_scale)                 | ``Vector2(1, 1)``                                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_parallax2d_property_autoscroll"></div>

[`Vector2`](class_vector2.md) **autoscroll** = ``Vector2(0, 0)`` <div id="class_parallax2d_property_autoscroll"></div>

- `void` **set_autoscroll** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_autoscroll** ( )

Velocity at which the offset scrolls automatically, in pixels per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_follow_viewport"></div>

[`bool`](class_bool.md) **follow_viewport** = ``true`` <div id="class_parallax2d_property_follow_viewport"></div>

- `void` **set_follow_viewport** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_follow_viewport** ( )

If `true`, this **Parallax2D** is offset by the current camera's position. If the **Parallax2D** is in a [`CanvasLayer`](class_canvaslayer.md) separate from the current camera, it may be desired to match the value with [`CanvasLayer.follow_viewport_enabled`](class_canvaslayer.md#class_canvaslayer_property_follow_viewport_enabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_ignore_camera_scroll"></div>

[`bool`](class_bool.md) **ignore_camera_scroll** = ``false`` <div id="class_parallax2d_property_ignore_camera_scroll"></div>

- `void` **set_ignore_camera_scroll** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ignore_camera_scroll** ( )

If `true`, **Parallax2D**'s position is not affected by the position of the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_limit_begin"></div>

[`Vector2`](class_vector2.md) **limit_begin** = ``Vector2(-1e+07, -1e+07)`` <div id="class_parallax2d_property_limit_begin"></div>

- `void` **set_limit_begin** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_limit_begin** ( )

Top-left limits for scrolling to begin. If the camera is outside of this limit, the **Parallax2D** stops scrolling. Must be lower than [`limit_end`](class_parallax2d.md#class_parallax2d_property_limit_end) minus the viewport size to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_limit_end"></div>

[`Vector2`](class_vector2.md) **limit_end** = ``Vector2(1e+07, 1e+07)`` <div id="class_parallax2d_property_limit_end"></div>

- `void` **set_limit_end** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_limit_end** ( )

Bottom-right limits for scrolling to end. If the camera is outside of this limit, the **Parallax2D** will stop scrolling. Must be higher than [`limit_begin`](class_parallax2d.md#class_parallax2d_property_limit_begin) and the viewport size combined to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_repeat_size"></div>

[`Vector2`](class_vector2.md) **repeat_size** = ``Vector2(0, 0)`` <div id="class_parallax2d_property_repeat_size"></div>

- `void` **set_repeat_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_repeat_size** ( )

Repeats the [`Texture2D`](class_texture2d.md) of each of this node's children and offsets them by this value. When scrolling, the node's position loops, giving the illusion of an infinite scrolling background if the values are larger than the screen size. If an axis is set to `0`, the [`Texture2D`](class_texture2d.md) will not be repeated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_repeat_times"></div>

[`int`](class_int.md) **repeat_times** = ``1`` <div id="class_parallax2d_property_repeat_times"></div>

- `void` **set_repeat_times** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_repeat_times** ( )

Overrides the amount of times the texture repeats. Each texture copy spreads evenly from the original by [`repeat_size`](class_parallax2d.md#class_parallax2d_property_repeat_size). Useful for when zooming out with a camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_screen_offset"></div>

[`Vector2`](class_vector2.md) **screen_offset** = ``Vector2(0, 0)`` <div id="class_parallax2d_property_screen_offset"></div>

- `void` **set_screen_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_screen_offset** ( )

Offset used to scroll this **Parallax2D**. This value is updated automatically unless [`ignore_camera_scroll`](class_parallax2d.md#class_parallax2d_property_ignore_camera_scroll) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_scroll_offset"></div>

[`Vector2`](class_vector2.md) **scroll_offset** = ``Vector2(0, 0)`` <div id="class_parallax2d_property_scroll_offset"></div>

- `void` **set_scroll_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_offset** ( )

The **Parallax2D**'s offset. Similar to [`screen_offset`](class_parallax2d.md#class_parallax2d_property_screen_offset) and [`Node2D.position`](class_node2d.md#class_node2d_property_position), but will not be overridden.

 **Note:** Values will loop if [`repeat_size`](class_parallax2d.md#class_parallax2d_property_repeat_size) is set higher than `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallax2d_property_scroll_scale"></div>

[`Vector2`](class_vector2.md) **scroll_scale** = ``Vector2(1, 1)`` <div id="class_parallax2d_property_scroll_scale"></div>

- `void` **set_scroll_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_scale** ( )

Multiplier to the final **Parallax2D**'s offset. Can be used to simulate distance from the camera.

For example, a value of `1` scrolls at the same speed as the camera. A value greater than `1` scrolls faster, making objects appear closer. Less than `1` scrolls slower, making objects appear further, and a value of `0` stops the objects completely.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
