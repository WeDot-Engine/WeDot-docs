<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RootMotionView.xml。 -->

<div id="_class_rootmotionview"></div>

# RootMotionView

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Editor-only helper for setting up root motion in [`AnimationMixer`](class_animationmixer.md).

## 描述

*Root motion* refers to an animation technique where a mesh's skeleton is used to give impulse to a character. When working with 3D animations, a popular technique is for animators to use the root skeleton bone to give motion to the rest of the skeleton. This allows animating characters in a way where steps actually match the floor below. It also allows precise interaction with objects during cinematics. See also [`AnimationMixer`](class_animationmixer.md).

 **Note:** **RootMotionView** is only visible in the editor. It will be hidden automatically in the running project.

## 属性

| [`NodePath`](class_nodepath.md) | [`animation_path`](#class_rootmotionview_property_animation_path) | ``NodePath("")``          |
| [`float`](class_float.md)       | [`cell_size`](#class_rootmotionview_property_cell_size)           | ``1.0``                   |
| [`Color`](class_color.md)       | [`color`](#class_rootmotionview_property_color)                   | ``Color(0.5, 0.5, 1, 1)`` |
| [`float`](class_float.md)       | [`radius`](#class_rootmotionview_property_radius)                 | ``10.0``                  |
| [`bool`](class_bool.md)         | [`zero_y`](#class_rootmotionview_property_zero_y)                 | ``true``                  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rootmotionview_property_animation_path"></div>

[`NodePath`](class_nodepath.md) **animation_path** = ``NodePath("")`` <div id="class_rootmotionview_property_animation_path"></div>

- `void` **set_animation_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_animation_path** ( )

Path to an [`AnimationMixer`](class_animationmixer.md) node to use as a basis for root motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rootmotionview_property_cell_size"></div>

[`float`](class_float.md) **cell_size** = ``1.0`` <div id="class_rootmotionview_property_cell_size"></div>

- `void` **set_cell_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_cell_size** ( )

The grid's cell size in 3D units.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rootmotionview_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(0.5, 0.5, 1, 1)`` <div id="class_rootmotionview_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The grid's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rootmotionview_property_radius"></div>

[`float`](class_float.md) **radius** = ``10.0`` <div id="class_rootmotionview_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [`radius`](#class_rootmotionview_property_radius) is reached.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rootmotionview_property_zero_y"></div>

[`bool`](class_bool.md) **zero_y** = ``true`` <div id="class_rootmotionview_property_zero_y"></div>

- `void` **set_zero_y** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_zero_y** ( )

If `true`, the grid's points will all be on the same Y coordinate (*local* Y = 0). If `false`, the points' original Y coordinate is preserved.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
