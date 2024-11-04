<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ParallaxBackground.xml。 -->

<div id="_class_parallaxbackground"></div>

# ParallaxBackground

**继承：** [`CanvasLayer`](class_canvaslayer.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used to create a parallax scrolling background.

## 描述

A ParallaxBackground uses one or more [`ParallaxLayer`](class_parallaxlayer.md) child nodes to create a parallax effect. Each [`ParallaxLayer`](class_parallaxlayer.md) can move at a different speed using [`ParallaxLayer.motion_offset`](#class_parallaxlayer_property_motion_offset). This creates an illusion of depth in a 2D game. If not used with a [`Camera2D`](class_camera2d.md), you must manually calculate the [`scroll_offset`](#class_parallaxbackground_property_scroll_offset).

 **Note:** Each **ParallaxBackground** is drawn on one specific [`Viewport`](class_viewport.md) and cannot be shared between multiple [`Viewport`](class_viewport.md) s, see [`CanvasLayer.custom_viewport`](#class_canvaslayer_property_custom_viewport). When using multiple [`Viewport`](class_viewport.md) s, for example in a split-screen game, you need create an individual **ParallaxBackground** for each [`Viewport`](class_viewport.md) you want it to be drawn on.

## 属性

| [`int`](class_int.md)         | layer                                                                                       | ``-100`` (overrides [`CanvasLayer`](#class_canvaslayer_property_layer)) |
| [`Vector2`](class_vector2.md) | [`scroll_base_offset`](#class_parallaxbackground_property_scroll_base_offset)               | ``Vector2(0, 0)``                                                       |
| [`Vector2`](class_vector2.md) | [`scroll_base_scale`](#class_parallaxbackground_property_scroll_base_scale)                 | ``Vector2(1, 1)``                                                       |
| [`bool`](class_bool.md)       | [`scroll_ignore_camera_zoom`](#class_parallaxbackground_property_scroll_ignore_camera_zoom) | ``false``                                                               |
| [`Vector2`](class_vector2.md) | [`scroll_limit_begin`](#class_parallaxbackground_property_scroll_limit_begin)               | ``Vector2(0, 0)``                                                       |
| [`Vector2`](class_vector2.md) | [`scroll_limit_end`](#class_parallaxbackground_property_scroll_limit_end)                   | ``Vector2(0, 0)``                                                       |
| [`Vector2`](class_vector2.md) | [`scroll_offset`](#class_parallaxbackground_property_scroll_offset)                         | ``Vector2(0, 0)``                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_parallaxbackground_property_scroll_base_offset"></div>

[`Vector2`](class_vector2.md) **scroll_base_offset** = ``Vector2(0, 0)`` <div id="class_parallaxbackground_property_scroll_base_offset"></div>

- `void` **set_scroll_base_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_base_offset** ( )

The base position offset for all [`ParallaxLayer`](class_parallaxlayer.md) children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxbackground_property_scroll_base_scale"></div>

[`Vector2`](class_vector2.md) **scroll_base_scale** = ``Vector2(1, 1)`` <div id="class_parallaxbackground_property_scroll_base_scale"></div>

- `void` **set_scroll_base_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_base_scale** ( )

The base motion scale for all [`ParallaxLayer`](class_parallaxlayer.md) children.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxbackground_property_scroll_ignore_camera_zoom"></div>

[`bool`](class_bool.md) **scroll_ignore_camera_zoom** = ``false`` <div id="class_parallaxbackground_property_scroll_ignore_camera_zoom"></div>

- `void` **set_ignore_camera_zoom** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_ignore_camera_zoom** ( )

If `true`, elements in [`ParallaxLayer`](class_parallaxlayer.md) child aren't affected by the zoom level of the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxbackground_property_scroll_limit_begin"></div>

[`Vector2`](class_vector2.md) **scroll_limit_begin** = ``Vector2(0, 0)`` <div id="class_parallaxbackground_property_scroll_limit_begin"></div>

- `void` **set_limit_begin** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_limit_begin** ( )

Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than [`scroll_limit_end`](#class_parallaxbackground_property_scroll_limit_end) to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxbackground_property_scroll_limit_end"></div>

[`Vector2`](class_vector2.md) **scroll_limit_end** = ``Vector2(0, 0)`` <div id="class_parallaxbackground_property_scroll_limit_end"></div>

- `void` **set_limit_end** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_limit_end** ( )

Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than [`scroll_limit_begin`](#class_parallaxbackground_property_scroll_limit_begin) to work.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxbackground_property_scroll_offset"></div>

[`Vector2`](class_vector2.md) **scroll_offset** = ``Vector2(0, 0)`` <div id="class_parallaxbackground_property_scroll_offset"></div>

- `void` **set_scroll_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_scroll_offset** ( )

The ParallaxBackground's scroll value. Calculated automatically when using a [`Camera2D`](class_camera2d.md), but can be used to manually manage scrolling when no camera is present.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
