<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ParallaxLayer.xml。 -->

<div id="_class_parallaxlayer"></div>

# ParallaxLayer

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A parallax scrolling layer to be used with [`ParallaxBackground`](class_parallaxbackground.md).

## 描述

A ParallaxLayer must be the child of a [`ParallaxBackground`](class_parallaxbackground.md) node. Each ParallaxLayer can be set to move at different speeds relative to the camera movement or the [`ParallaxBackground.scroll_offset`](#class_parallaxbackground_property_scroll_offset) value.

This node's children will be affected by its scroll offset.

 **Note:** Any changes to this node's position and scale made after it enters the scene will be ignored.

## 属性

| [`Vector2`](class_vector2.md)                                   | [`motion_mirroring`](#class_parallaxlayer_property_motion_mirroring) | ``Vector2(0, 0)``                                                           |
| [`Vector2`](class_vector2.md)                                   | [`motion_offset`](#class_parallaxlayer_property_motion_offset)       | ``Vector2(0, 0)``                                                           |
| [`Vector2`](class_vector2.md)                                   | [`motion_scale`](#class_parallaxlayer_property_motion_scale)         | ``Vector2(1, 1)``                                                           |
| [PhysicsInterpolationMode](#enum_node_physicsinterpolationmode) | physics_interpolation_mode                                           | ``2`` (overrides [`Node`](#class_node_property_physics_interpolation_mode)) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_parallaxlayer_property_motion_mirroring"></div>

[`Vector2`](class_vector2.md) **motion_mirroring** = ``Vector2(0, 0)`` <div id="class_parallaxlayer_property_motion_mirroring"></div>

- `void` **set_mirroring** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_mirroring** ( )

The interval, in pixels, at which the **ParallaxLayer** is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to `0`, the **ParallaxLayer** will be drawn only once along that direction.

 **Note:** If you want the repetition to pixel-perfect match a [`Texture2D`](class_texture2d.md) displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [`Sprite2D`](class_sprite2d.md) scaled to `0.5` to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to `Vector2(300, 0)`.

 **Note:** If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [`ParallaxBackground`](class_parallaxbackground.md)'s position, not the layer's own position. So, if you use mirroring, **do not** change the **ParallaxLayer** position relative to its parent. Instead, if you need to adjust the background's position, set the [`CanvasLayer.offset`](#class_canvaslayer_property_offset) property in the parent [`ParallaxBackground`](class_parallaxbackground.md).

 **Note:** Despite the name, the layer will not be mirrored, it will only be repeated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxlayer_property_motion_offset"></div>

[`Vector2`](class_vector2.md) **motion_offset** = ``Vector2(0, 0)`` <div id="class_parallaxlayer_property_motion_offset"></div>

- `void` **set_motion_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_motion_offset** ( )

The ParallaxLayer's offset relative to the parent ParallaxBackground's [`ParallaxBackground.scroll_offset`](#class_parallaxbackground_property_scroll_offset).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_parallaxlayer_property_motion_scale"></div>

[`Vector2`](class_vector2.md) **motion_scale** = ``Vector2(1, 1)`` <div id="class_parallaxlayer_property_motion_scale"></div>

- `void` **set_motion_scale** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_motion_scale** ( )

Multiplies the ParallaxLayer's motion. If an axis is set to `0`, it will not scroll.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
