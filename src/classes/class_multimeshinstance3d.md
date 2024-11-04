<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/MultiMeshInstance3D.xml。 -->

<div id="_class_multimeshinstance3d"></div>

# MultiMeshInstance3D

**继承：** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node that instances a [`MultiMesh`](class_multimesh.md).

## 描述

**MultiMeshInstance3D** is a specialized node to instance [`GeometryInstance3D`](class_geometryinstance3d.md) s based on a [`MultiMesh`](class_multimesh.md) resource.

This is useful to optimize the rendering of a high number of instances of a given mesh (for example trees in a forest or grass strands).

## 属性

| [`MultiMesh`](class_multimesh.md) | [`multimesh`](#class_multimeshinstance3d_property_multimesh) |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_multimeshinstance3d_property_multimesh"></div>

[`MultiMesh`](class_multimesh.md) **multimesh** <div id="class_multimeshinstance3d_property_multimesh"></div>

- `void` **set_multimesh** ( value: [`MultiMesh`](class_multimesh.md) )
- [`MultiMesh`](class_multimesh.md) **get_multimesh** ( )

The [`MultiMesh`](class_multimesh.md) resource that will be used and shared among all instances of the **MultiMeshInstance3D**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
