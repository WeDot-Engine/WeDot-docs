<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Path2D.xml。 -->

<div id="_class_path2d"></div>

# Path2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Contains a [`Curve2D`](class_curve2d.md) path for [`PathFollow2D`](class_pathfollow2d.md) nodes to follow.

## 描述

Can have [`PathFollow2D`](class_pathfollow2d.md) child nodes moving along the [`Curve2D`](class_curve2d.md). See [`PathFollow2D`](class_pathfollow2d.md) for more information on usage.

 **Note:** The path is considered as relative to the moved nodes (children of [`PathFollow2D`](class_pathfollow2d.md)). As such, the curve should usually start with a zero vector (`(0, 0)`).

## 属性

| [`Curve2D`](class_curve2d.md) | [`curve`](#class_path2d_property_curve) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_path2d_property_curve"></div>

[`Curve2D`](class_curve2d.md) **curve** <div id="class_path2d_property_curve"></div>

- `void` **set_curve** ( value: [`Curve2D`](class_curve2d.md) )
- [`Curve2D`](class_curve2d.md) **get_curve** ( )

A [`Curve2D`](class_curve2d.md) describing the path.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
