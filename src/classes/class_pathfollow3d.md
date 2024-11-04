<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PathFollow3D.xml。 -->

<div id="_class_pathfollow3d"></div>

# PathFollow3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Point sampler for a [`Path3D`](class_path3d.md).

## 描述

This node takes its parent [`Path3D`](class_path3d.md), and returns the coordinates of a point within it, given a distance from the first vertex.

It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [`progress`](#class_pathfollow3d_property_progress) in this node.

## 属性

| [`bool`](class_bool.md)                         | [`cubic_interp`](#class_pathfollow3d_property_cubic_interp)       | ``true``  |
| [`float`](class_float.md)                       | [`h_offset`](#class_pathfollow3d_property_h_offset)               | ``0.0``   |
| [`bool`](class_bool.md)                         | [`loop`](#class_pathfollow3d_property_loop)                       | ``true``  |
| [`float`](class_float.md)                       | [`progress`](#class_pathfollow3d_property_progress)               | ``0.0``   |
| [`float`](class_float.md)                       | [`progress_ratio`](#class_pathfollow3d_property_progress_ratio)   | ``0.0``   |
| [RotationMode](#enum_pathfollow3d_rotationmode) | [`rotation_mode`](#class_pathfollow3d_property_rotation_mode)     | ``3``     |
| [`bool`](class_bool.md)                         | [`tilt_enabled`](#class_pathfollow3d_property_tilt_enabled)       | ``true``  |
| [`bool`](class_bool.md)                         | [`use_model_front`](#class_pathfollow3d_property_use_model_front) | ``false`` |
| [`float`](class_float.md)                       | [`v_offset`](#class_pathfollow3d_property_v_offset)               | ``0.0``   |

## 方法

| [`Transform3D`](class_transform3d.md) | [`correct_posture`](#class_pathfollow3d_method_correct_posture) ( transform: [`Transform3D`](class_transform3d.md), rotation_mode: [RotationMode](#enum_pathfollow3d_rotationmode) ) static[^static] |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_pathfollow3d_rotationmode"></div>

enum **RotationMode**: <div id="enum_pathfollow3d_rotationmode"></div>

<div id="_class_pathfollow3d_constant_rotation_none"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **ROTATION_NONE** = ``0``

Forbids the PathFollow3D to rotate.

<div id="_class_pathfollow3d_constant_rotation_y"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **ROTATION_Y** = ``1``

Allows the PathFollow3D to rotate in the Y axis only.

<div id="_class_pathfollow3d_constant_rotation_xy"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **ROTATION_XY** = ``2``

Allows the PathFollow3D to rotate in both the X, and Y axes.

<div id="_class_pathfollow3d_constant_rotation_xyz"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **ROTATION_XYZ** = ``3``

Allows the PathFollow3D to rotate in any axis.

<div id="_class_pathfollow3d_constant_rotation_oriented"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **ROTATION_ORIENTED** = ``4``

Uses the up vector information in a [`Curve3D`](class_curve3d.md) to enforce orientation. This rotation mode requires the [`Path3D`](class_path3d.md)'s [`Curve3D.up_vector_enabled`](#class_curve3d_property_up_vector_enabled) property to be set to `true`.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_pathfollow3d_property_cubic_interp"></div>

[`bool`](class_bool.md) **cubic_interp** = ``true`` <div id="class_pathfollow3d_property_cubic_interp"></div>

- `void` **set_cubic_interpolation** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_cubic_interpolation** ( )

If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.

The points along the [`Curve3D`](class_curve3d.md) of the [`Path3D`](class_path3d.md) are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.

There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_h_offset"></div>

[`float`](class_float.md) **h_offset** = ``0.0`` <div id="class_pathfollow3d_property_h_offset"></div>

- `void` **set_h_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_h_offset** ( )

The node's offset along the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_loop"></div>

[`bool`](class_bool.md) **loop** = ``true`` <div id="class_pathfollow3d_property_loop"></div>

- `void` **set_loop** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_loop** ( )

If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_progress"></div>

[`float`](class_float.md) **progress** = ``0.0`` <div id="class_pathfollow3d_property_progress"></div>

- `void` **set_progress** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_progress** ( )

The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_progress_ratio"></div>

[`float`](class_float.md) **progress_ratio** = ``0.0`` <div id="class_pathfollow3d_property_progress_ratio"></div>

- `void` **set_progress_ratio** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_progress_ratio** ( )

The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_rotation_mode"></div>

[RotationMode](#enum_pathfollow3d_rotationmode) **rotation_mode** = ``3`` <div id="class_pathfollow3d_property_rotation_mode"></div>

- `void` **set_rotation_mode** ( value: [RotationMode](#enum_pathfollow3d_rotationmode) )
- [RotationMode](#enum_pathfollow3d_rotationmode) **get_rotation_mode** ( )

Allows or forbids rotation on one or more axes, depending on the [RotationMode](#enum_pathfollow3d_rotationmode) constants being used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_tilt_enabled"></div>

[`bool`](class_bool.md) **tilt_enabled** = ``true`` <div id="class_pathfollow3d_property_tilt_enabled"></div>

- `void` **set_tilt_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_tilt_enabled** ( )

If `true`, the tilt property of [`Curve3D`](class_curve3d.md) takes effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_use_model_front"></div>

[`bool`](class_bool.md) **use_model_front** = ``false`` <div id="class_pathfollow3d_property_use_model_front"></div>

- `void` **set_use_model_front** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_model_front** ( )

If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also [`Vector3.FORWARD`](#class_vector3_constant_forward) and [`Vector3.MODEL_FRONT`](#class_vector3_constant_model_front).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pathfollow3d_property_v_offset"></div>

[`float`](class_float.md) **v_offset** = ``0.0`` <div id="class_pathfollow3d_property_v_offset"></div>

- `void` **set_v_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_v_offset** ( )

The node's offset perpendicular to the curve.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_pathfollow3d_method_correct_posture"></div>

[`Transform3D`](class_transform3d.md) **correct_posture** ( transform: [`Transform3D`](class_transform3d.md), rotation_mode: [RotationMode](#enum_pathfollow3d_rotationmode) ) static[^static]<div id="class_pathfollow3d_method_correct_posture"></div>

Correct the `transform`. `rotation_mode` implicitly specifies how posture (forward, up and sideway direction) is calculated.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
