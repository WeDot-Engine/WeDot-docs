<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PathFollow2D.xml。 -->

<div id="_class_pathfollow2d"></div>

# PathFollow2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Point sampler for a [`Path2D`](class_path2d.md).

## 描述

This node takes its parent [`Path2D`](class_path2d.md), and returns the coordinates of a point within it, given a distance from the first vertex.

It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [`progress`](class_pathfollow2d.md#class_pathfollow2d_property_progress) in this node.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`cubic_interp`](class_pathfollow2d.md#class_pathfollow2d_property_cubic_interp)     | ``true`` |
| [`float`](class_float.md) | [`h_offset`](class_pathfollow2d.md#class_pathfollow2d_property_h_offset)             | ``0.0``  |
| [`bool`](class_bool.md)   | [`loop`](class_pathfollow2d.md#class_pathfollow2d_property_loop)                     | ``true`` |
| [`float`](class_float.md) | [`progress`](class_pathfollow2d.md#class_pathfollow2d_property_progress)             | ``0.0``  |
| [`float`](class_float.md) | [`progress_ratio`](class_pathfollow2d.md#class_pathfollow2d_property_progress_ratio) | ``0.0``  |
| [`bool`](class_bool.md)   | [`rotates`](class_pathfollow2d.md#class_pathfollow2d_property_rotates)               | ``true`` |
| [`float`](class_float.md) | [`v_offset`](class_pathfollow2d.md#class_pathfollow2d_property_v_offset)             | ``0.0``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_pathfollow2d_property_cubic_interp"></div>

[`bool`](class_bool.md) **cubic_interp** = ``true`` <div id="class_pathfollow2d_property_cubic_interp"></div>

- `void` **set_cubic_interpolation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_cubic_interpolation** ( )

If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.

The points along the [`Curve2D`](class_curve2d.md) of the [`Path2D`](class_path2d.md) are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.

There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_h_offset"></div>

[`float`](class_float.md) **h_offset** = ``0.0`` <div id="class_pathfollow2d_property_h_offset"></div>

- `void` **set_h_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_h_offset** ( )

The node's offset along the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``true`` <div id="class_pathfollow2d_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_progress"></div>

[`float`](class_float.md) **progress** = ``0.0`` <div id="class_pathfollow2d_property_progress"></div>

- `void` **set_progress** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_progress** ( )

The distance along the path, in pixels. Changing this value sets this node's position to a point within the path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_progress_ratio"></div>

[`float`](class_float.md) **progress_ratio** = ``0.0`` <div id="class_pathfollow2d_property_progress_ratio"></div>

- `void` **set_progress_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_progress_ratio** ( )

The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length.

It can be set or get only if the **PathFollow2D** is the child of a [`Path2D`](class_path2d.md) which is part of the scene tree, and that this [`Path2D`](class_path2d.md) has a [`Curve2D`](class_curve2d.md) with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_rotates"></div>

[`bool`](class_bool.md) **rotates** = ``true`` <div id="class_pathfollow2d_property_rotates"></div>

- `void` **set_rotates** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_rotating** ( )

If `true`, this node rotates to follow the path, with the +X direction facing forward on the path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow2d_property_v_offset"></div>

[`float`](class_float.md) **v_offset** = ``0.0`` <div id="class_pathfollow2d_property_v_offset"></div>

- `void` **set_v_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_v_offset** ( )

The node's offset perpendicular to the curve.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
