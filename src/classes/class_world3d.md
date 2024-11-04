<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/World3D.xml。 -->

<div id="_class_world3d"></div>

# World3D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A resource that holds all components of a 3D world, such as a visual scenario and a physics space.

## 描述

Class that has everything pertaining to a world: A physics space, a visual scenario, and a sound space. 3D nodes register their resources into the current 3D world.

## 属性

| [`CameraAttributes`](class_cameraattributes.md)                   | [`camera_attributes`](#class_world3d_property_camera_attributes)       |
| [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) | [`direct_space_state`](#class_world3d_property_direct_space_state)     |
| [`Environment`](class_environment.md)                             | [`environment`](#class_world3d_property_environment)                   |
| [`Environment`](class_environment.md)                             | [`fallback_environment`](#class_world3d_property_fallback_environment) |
| [`RID`](class_rid.md)                                             | [`navigation_map`](#class_world3d_property_navigation_map)             |
| [`RID`](class_rid.md)                                             | [`scenario`](#class_world3d_property_scenario)                         |
| [`RID`](class_rid.md)                                             | [`space`](#class_world3d_property_space)                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_world3d_property_camera_attributes"></div>

[`CameraAttributes`](class_cameraattributes.md) **camera_attributes** <div id="class_world3d_property_camera_attributes"></div>

- `void` **set_camera_attributes** ( value: [`CameraAttributes`](class_cameraattributes.md) )
- [`CameraAttributes`](class_cameraattributes.md) **get_camera_attributes** ( )

The default [`CameraAttributes`](class_cameraattributes.md) resource to use if none set on the [`Camera3D`](class_camera3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_direct_space_state"></div>

[`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **direct_space_state** <div id="class_world3d_property_direct_space_state"></div>

- [`PhysicsDirectSpaceState3D`](class_physicsdirectspacestate3d.md) **get_direct_space_state** ( )

Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [`Node._physics_process`](#class_node_private_method__physics_process) in the main thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_environment"></div>

[`Environment`](class_environment.md) **environment** <div id="class_world3d_property_environment"></div>

- `void` **set_environment** ( value: [`Environment`](class_environment.md) )
- [`Environment`](class_environment.md) **get_environment** ( )

The World3D's [`Environment`](class_environment.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_fallback_environment"></div>

[`Environment`](class_environment.md) **fallback_environment** <div id="class_world3d_property_fallback_environment"></div>

- `void` **set_fallback_environment** ( value: [`Environment`](class_environment.md) )
- [`Environment`](class_environment.md) **get_fallback_environment** ( )

The World3D's fallback environment will be used if [`environment`](#class_world3d_property_environment) fails or is missing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_navigation_map"></div>

[`RID`](class_rid.md) **navigation_map** <div id="class_world3d_property_navigation_map"></div>

- [`RID`](class_rid.md) **get_navigation_map** ( )

The [`RID`](class_rid.md) of this world's navigation map. Used by the [`NavigationServer3D`](class_navigationserver3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_scenario"></div>

[`RID`](class_rid.md) **scenario** <div id="class_world3d_property_scenario"></div>

- [`RID`](class_rid.md) **get_scenario** ( )

The World3D's visual scenario.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_world3d_property_space"></div>

[`RID`](class_rid.md) **space** <div id="class_world3d_property_space"></div>

- [`RID`](class_rid.md) **get_space** ( )

The World3D's physics space.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
