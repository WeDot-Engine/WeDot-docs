<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Path3D.xml。 -->

<div id="_class_path3d"></div>

# Path3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Contains a [`Curve3D`](class_curve3d.md) path for [`PathFollow3D`](class_pathfollow3d.md) nodes to follow.

## 描述

Can have [`PathFollow3D`](class_pathfollow3d.md) child nodes moving along the [`Curve3D`](class_curve3d.md). See [`PathFollow3D`](class_pathfollow3d.md) for more information on the usage.

Note that the path is considered as relative to the moved nodes (children of [`PathFollow3D`](class_pathfollow3d.md)). As such, the curve should usually start with a zero vector `(0, 0, 0)`.

## 属性

|||
|:-:|:--|
| [`Curve3D`](class_curve3d.md) | [`curve`](class_path3d.md#class_path3d_property_curve) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_path3d_signal_curve_changed"></div>

**curve_changed** ( ) <div id="class_path3d_signal_curve_changed"></div>

Emitted when the [`curve`](class_path3d.md#class_path3d_property_curve) changes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_path3d_property_curve"></div>

[`Curve3D`](class_curve3d.md) **curve** <div id="class_path3d_property_curve"></div>

- `void` **set_curve** ( value: [`Curve3D`](class_curve3d.md) )
- [`Curve3D`](class_curve3d.md) **get_curve** ( )

A [`Curve3D`](class_curve3d.md) describing the path.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
