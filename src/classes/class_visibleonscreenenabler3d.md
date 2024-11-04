<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisibleOnScreenEnabler3D.xml。 -->

<div id="_class_visibleonscreenenabler3d"></div>

# VisibleOnScreenEnabler3D

**继承：** [`VisibleOnScreenNotifier3D`](class_visibleonscreennotifier3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A box-shaped region of 3D space that, when visible on screen, enables a target node.

## 描述

**VisibleOnScreenEnabler3D** contains a box-shaped region of 3D space and a target node. The target node will be automatically enabled (via its [`Node.process_mode`](#class_node_property_process_mode) property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.

See [`VisibleOnScreenNotifier3D`](class_visibleonscreennotifier3d.md) if you only want to be notified when the region is visible on screen.

 **Note:** **VisibleOnScreenEnabler3D** uses an approximate heuristic that doesn't take walls and other occlusion into account, unless occlusion culling is used. It also won't function unless [`Node3D.visible`](#class_node3d_property_visible) is set to `true`.

## 属性

| [EnableMode](#enum_visibleonscreenenabler3d_enablemode) | [`enable_mode`](#class_visibleonscreenenabler3d_property_enable_mode)           | ``0``              |
| [`NodePath`](class_nodepath.md)                         | [`enable_node_path`](#class_visibleonscreenenabler3d_property_enable_node_path) | ``NodePath("..")`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visibleonscreenenabler3d_enablemode"></div>

enum **EnableMode**: <div id="enum_visibleonscreenenabler3d_enablemode"></div>

<div id="_class_visibleonscreenenabler3d_constant_enable_mode_inherit"></div>

[EnableMode](#enum_visibleonscreenenabler3d_enablemode) **ENABLE_MODE_INHERIT** = ``0``

Corresponds to [`Node.PROCESS_MODE_INHERIT`](#class_node_constant_process_mode_inherit).

<div id="_class_visibleonscreenenabler3d_constant_enable_mode_always"></div>

[EnableMode](#enum_visibleonscreenenabler3d_enablemode) **ENABLE_MODE_ALWAYS** = ``1``

Corresponds to [`Node.PROCESS_MODE_ALWAYS`](#class_node_constant_process_mode_always).

<div id="_class_visibleonscreenenabler3d_constant_enable_mode_when_paused"></div>

[EnableMode](#enum_visibleonscreenenabler3d_enablemode) **ENABLE_MODE_WHEN_PAUSED** = ``2``

Corresponds to [`Node.PROCESS_MODE_WHEN_PAUSED`](#class_node_constant_process_mode_when_paused).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visibleonscreenenabler3d_property_enable_mode"></div>

[EnableMode](#enum_visibleonscreenenabler3d_enablemode) **enable_mode** = ``0`` <div id="class_visibleonscreenenabler3d_property_enable_mode"></div>

- `void` **set_enable_mode** ( value: [EnableMode](#enum_visibleonscreenenabler3d_enablemode) )
- [EnableMode](#enum_visibleonscreenenabler3d_enablemode) **get_enable_mode** ( )

Determines how the target node is enabled. Corresponds to [ProcessMode](#enum_node_processmode). When the node is disabled, it always uses [`Node.PROCESS_MODE_DISABLED`](#class_node_constant_process_mode_disabled).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visibleonscreenenabler3d_property_enable_node_path"></div>

[`NodePath`](class_nodepath.md) **enable_node_path** = ``NodePath("..")`` <div id="class_visibleonscreenenabler3d_property_enable_node_path"></div>

- `void` **set_enable_node_path** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_enable_node_path** ( )

The path to the target node, relative to the **VisibleOnScreenEnabler3D**. The target node is cached; it's only assigned when setting this property (if the **VisibleOnScreenEnabler3D** is inside the scene tree) and every time the **VisibleOnScreenEnabler3D** enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
