<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/XROrigin3D.xml。 -->

<div id="_class_xrorigin3d"></div>

# XROrigin3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

The origin point in AR/VR.

## 描述

This is a special node within the AR/VR system that maps the physical location of the center of our tracking space to the virtual location within our game world.

Multiple origin points can be added to the scene tree, but only one can used at a time. All the [`XRCamera3D`](class_xrcamera3d.md), [`XRController3D`](class_xrcontroller3d.md), and [`XRAnchor3D`](class_xranchor3d.md) nodes should be direct children of this node for spatial tracking to work correctly.

It is the position of this node that you update when your character needs to move through your game world while we're not moving in the real world. Movement in the real world is always in relation to this origin point.

For example, if your character is driving a car, the **XROrigin3D** node should be a child node of this car. Or, if you're implementing a teleport system to move your character, you should change the position of this node.

## 属性

| [`bool`](class_bool.md)   | [`current`](#class_xrorigin3d_property_current)         | ``false`` |
| [`float`](class_float.md) | [`world_scale`](#class_xrorigin3d_property_world_scale) | ``1.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_xrorigin3d_property_current"></div>

[`bool`](class_bool.md) **current** = ``false`` <div id="class_xrorigin3d_property_current"></div>

- `void` **set_current** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_current** ( )

If `true`, this origin node is currently being used by the [`XRServer`](class_xrserver.md). Only one origin point can be used at a time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_xrorigin3d_property_world_scale"></div>

[`float`](class_float.md) **world_scale** = ``1.0`` <div id="class_xrorigin3d_property_world_scale"></div>

- `void` **set_world_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_world_scale** ( )

The scale of the game world compared to the real world. This is the same as [`XRServer.world_scale`](#class_xrserver_property_world_scale). By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
