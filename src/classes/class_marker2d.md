<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Marker2D.xml。 -->

<div id="_class_marker2d"></div>

# Marker2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Generic 2D position hint for editing.

## 描述

Generic 2D position hint for editing. It's just like a plain [`Node2D`](class_node2d.md), but it displays as a cross in the 2D editor at all times. You can set the cross' visual size by using the gizmo in the 2D editor while the node is selected.

## 属性

| [`float`](class_float.md) | [`gizmo_extents`](#class_marker2d_property_gizmo_extents) | ``10.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_marker2d_property_gizmo_extents"></div>

[`float`](class_float.md) **gizmo_extents** = ``10.0`` <div id="class_marker2d_property_gizmo_extents"></div>

- `void` **set_gizmo_extents** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_gizmo_extents** ( )

Size of the gizmo cross that appears in the editor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
