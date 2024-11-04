<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicsServer3DRenderingServerHandler.xml。 -->

<div id="_class_physicsserver3drenderingserverhandler"></div>

# PhysicsServer3DRenderingServerHandler

**继承：** [`Object`](class_object.md)

A class used to provide [`PhysicsServer3DExtension._soft_body_update_rendering_server`](#class_physicsserver3dextension_private_method__soft_body_update_rendering_server) with a rendering handler for soft bodies.

## 方法

| `void` | [`_set_aabb`](#class_physicsserver3drenderingserverhandler_private_method__set_aabb) ( aabb: [`AABB`](class_aabb.md) ) virtual[^virtual]                                               |
| `void` | [`_set_normal`](#class_physicsserver3drenderingserverhandler_private_method__set_normal) ( vertex_id: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) ) virtual[^virtual] |
| `void` | [`_set_vertex`](#class_physicsserver3drenderingserverhandler_private_method__set_vertex) ( vertex_id: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) ) virtual[^virtual] |
| `void` | [`set_aabb`](#class_physicsserver3drenderingserverhandler_method_set_aabb) ( aabb: [`AABB`](class_aabb.md) )                                                                           |
| `void` | [`set_normal`](#class_physicsserver3drenderingserverhandler_method_set_normal) ( vertex_id: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) )                             |
| `void` | [`set_vertex`](#class_physicsserver3drenderingserverhandler_method_set_vertex) ( vertex_id: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) )                             |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicsserver3drenderingserverhandler_private_method__set_aabb"></div>

`void` **_set_aabb** ( aabb: [`AABB`](class_aabb.md) ) virtual[^virtual]<div id="class_physicsserver3drenderingserverhandler_private_method__set_aabb"></div>

Called by the [`PhysicsServer3D`](class_physicsserver3d.md) to set the bounding box for the [`SoftBody3D`](class_softbody3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3drenderingserverhandler_private_method__set_normal"></div>

`void` **_set_normal** ( vertex_id: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3drenderingserverhandler_private_method__set_normal"></div>

Called by the [`PhysicsServer3D`](class_physicsserver3d.md) to set the normal for the [`SoftBody3D`](class_softbody3d.md) vertex at the index specified by `vertex_id`.

 **Note:** The `normal` parameter used to be of type `const void*` prior to Godot 4.2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3drenderingserverhandler_private_method__set_vertex"></div>

`void` **_set_vertex** ( vertex_id: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) ) virtual[^virtual]<div id="class_physicsserver3drenderingserverhandler_private_method__set_vertex"></div>

Called by the [`PhysicsServer3D`](class_physicsserver3d.md) to set the position for the [`SoftBody3D`](class_softbody3d.md) vertex at the index specified by `vertex_id`.

 **Note:** The `vertex` parameter used to be of type `const void*` prior to Godot 4.2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3drenderingserverhandler_method_set_aabb"></div>

`void` **set_aabb** ( aabb: [`AABB`](class_aabb.md) )<div id="class_physicsserver3drenderingserverhandler_method_set_aabb"></div>

Sets the bounding box for the [`SoftBody3D`](class_softbody3d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3drenderingserverhandler_method_set_normal"></div>

`void` **set_normal** ( vertex_id: [`int`](class_int.md), normal: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3drenderingserverhandler_method_set_normal"></div>

Sets the normal for the [`SoftBody3D`](class_softbody3d.md) vertex at the index specified by `vertex_id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicsserver3drenderingserverhandler_method_set_vertex"></div>

`void` **set_vertex** ( vertex_id: [`int`](class_int.md), vertex: [`Vector3`](class_vector3.md) )<div id="class_physicsserver3drenderingserverhandler_method_set_vertex"></div>

Sets the position for the [`SoftBody3D`](class_softbody3d.md) vertex at the index specified by `vertex_id`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
