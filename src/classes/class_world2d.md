<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/World2D.xml。 -->

<div id="_class_world2d"></div>

# World2D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A resource that holds all components of a 2D world, such as a canvas and a physics space.

## 描述

Class that has everything pertaining to a 2D world: A physics space, a canvas, and a sound space. 2D nodes register their resources into the current 2D world.

## 属性

| [`RID`](class_rid.md)                                             | [`canvas`](#class_world2d_property_canvas)                         |
| [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) | [`direct_space_state`](#class_world2d_property_direct_space_state) |
| [`RID`](class_rid.md)                                             | [`navigation_map`](#class_world2d_property_navigation_map)         |
| [`RID`](class_rid.md)                                             | [`space`](#class_world2d_property_space)                           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_world2d_property_canvas"></div>

[`RID`](class_rid.md) **canvas** <div id="class_world2d_property_canvas"></div>

- [`RID`](class_rid.md) **get_canvas** ( )

The [`RID`](class_rid.md) of this world's canvas resource. Used by the [`RenderingServer`](class_renderingserver.md) for 2D drawing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world2d_property_direct_space_state"></div>

[`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) **direct_space_state** <div id="class_world2d_property_direct_space_state"></div>

- [`PhysicsDirectSpaceState2D`](class_physicsdirectspacestate2d.md) **get_direct_space_state** ( )

Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [`Node._physics_process`](#class_node_private_method__physics_process) in the main thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world2d_property_navigation_map"></div>

[`RID`](class_rid.md) **navigation_map** <div id="class_world2d_property_navigation_map"></div>

- [`RID`](class_rid.md) **get_navigation_map** ( )

The [`RID`](class_rid.md) of this world's navigation map. Used by the [`NavigationServer2D`](class_navigationserver2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world2d_property_space"></div>

[`RID`](class_rid.md) **space** <div id="class_world2d_property_space"></div>

- [`RID`](class_rid.md) **get_space** ( )

The [`RID`](class_rid.md) of this world's physics space resource. Used by the [`PhysicsServer2D`](class_physicsserver2d.md) for 2D physics, treating it as both a space and an area.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
