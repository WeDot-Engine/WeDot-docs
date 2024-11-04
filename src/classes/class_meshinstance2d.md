<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MeshInstance2D.xml。 -->

<div id="_class_meshinstance2d"></div>

# MeshInstance2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node used for displaying a [`Mesh`](class_mesh.md) in 2D.

## 描述

Node used for displaying a [`Mesh`](class_mesh.md) in 2D. A **MeshInstance2D** can be automatically created from an existing [`Sprite2D`](class_sprite2d.md) via a tool in the editor toolbar. Select the [`Sprite2D`](class_sprite2d.md) node, then choose **Sprite2D > Convert to MeshInstance2D** at the top of the 2D editor viewport.

## 属性

| [`Mesh`](class_mesh.md)           | [`mesh`](#class_meshinstance2d_property_mesh)       |
| [`Texture2D`](class_texture2d.md) | [`texture`](#class_meshinstance2d_property_texture) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_meshinstance2d_signal_texture_changed"></div>

**texture_changed** ( ) <div id="class_meshinstance2d_signal_texture_changed"></div>

Emitted when the [`texture`](#class_meshinstance2d_property_texture) is changed.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_meshinstance2d_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_meshinstance2d_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

The [`Mesh`](class_mesh.md) that will be drawn by the **MeshInstance2D**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_meshinstance2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_meshinstance2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The [`Texture2D`](class_texture2d.md) that will be used if using the default [`CanvasItemMaterial`](class_canvasitemmaterial.md). Can be accessed as `TEXTURE` in CanvasItem shader.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
