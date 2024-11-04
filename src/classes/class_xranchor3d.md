<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XRAnchor3D.xml。 -->

<div id="_class_xranchor3d"></div>

# XRAnchor3D

**继承：** [`XRNode3D`](class_xrnode3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

An anchor point in AR space.

## 描述

The **XRAnchor3D** point is an [`XRNode3D`](class_xrnode3d.md) that maps a real world location identified by the AR platform to a position within the game world. For example, as long as plane detection in ARKit is on, ARKit will identify and update the position of planes (tables, floors, etc.) and create anchors for them.

This node is mapped to one of the anchors through its unique ID. When you receive a signal that a new anchor is available, you should add this node to your scene for that anchor. You can predefine nodes and set the ID; the nodes will simply remain on 0,0,0 until a plane is recognized.

Keep in mind that, as long as plane detection is enabled, the size, placing and orientation of an anchor will be updated as the detection logic learns more about the real world out there especially if only part of the surface is in view.

## 方法

| [`Plane`](class_plane.md)     | [`get_plane`](#class_xranchor3d_method_get_plane) ( ) const[^const] |
| [`Vector3`](class_vector3.md) | [`get_size`](#class_xranchor3d_method_get_size) ( ) const[^const]   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_xranchor3d_method_get_plane"></div>

[`Plane`](class_plane.md) **get_plane** ( ) const[^const]<div id="class_xranchor3d_method_get_plane"></div>

Returns a plane aligned with our anchor; handy for intersection testing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xranchor3d_method_get_size"></div>

[`Vector3`](class_vector3.md) **get_size** ( ) const[^const]<div id="class_xranchor3d_method_get_size"></div>

Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
