<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PlaneMesh.xml。 -->

<div id="_class_planemesh"></div>

# PlaneMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`QuadMesh`](class_quadmesh.md)

Class representing a planar [`PrimitiveMesh`](class_primitivemesh.md).

## 描述

Class representing a planar [`PrimitiveMesh`](class_primitivemesh.md). This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Z axes; this default rotation isn't suited for use with billboarded materials. For billboarded materials, change [`orientation`](#class_planemesh_property_orientation) to [`FACE_Z`](#class_planemesh_constant_face_z).

 **Note:** When using a large textured **PlaneMesh** (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [`subdivide_depth`](#class_planemesh_property_subdivide_depth) and [`subdivide_width`](#class_planemesh_property_subdivide_width) until you no longer notice UV jittering.

## 属性

| [`Vector3`](class_vector3.md)              | [`center_offset`](#class_planemesh_property_center_offset)     | ``Vector3(0, 0, 0)`` |
| [Orientation](#enum_planemesh_orientation) | [`orientation`](#class_planemesh_property_orientation)         | ``1``                |
| [`Vector2`](class_vector2.md)              | [`size`](#class_planemesh_property_size)                       | ``Vector2(2, 2)``    |
| [`int`](class_int.md)                      | [`subdivide_depth`](#class_planemesh_property_subdivide_depth) | ``0``                |
| [`int`](class_int.md)                      | [`subdivide_width`](#class_planemesh_property_subdivide_width) | ``0``                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_planemesh_orientation"></div>

enum **Orientation**: <div id="enum_planemesh_orientation"></div>

<div id="_class_planemesh_constant_face_x"></div>

[Orientation](#enum_planemesh_orientation) **FACE_X** = ``0``

**PlaneMesh** will face the positive X-axis.

<div id="_class_planemesh_constant_face_y"></div>

[Orientation](#enum_planemesh_orientation) **FACE_Y** = ``1``

**PlaneMesh** will face the positive Y-axis. This matches the behavior of the **PlaneMesh** in Godot 3.x.

<div id="_class_planemesh_constant_face_z"></div>

[Orientation](#enum_planemesh_orientation) **FACE_Z** = ``2``

**PlaneMesh** will face the positive Z-axis. This matches the behavior of the QuadMesh in Godot 3.x.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_planemesh_property_center_offset"></div>

[`Vector3`](class_vector3.md) **center_offset** = ``Vector3(0, 0, 0)`` <div id="class_planemesh_property_center_offset"></div>

- `void` **set_center_offset** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_center_offset** ( )

Offset of the generated plane. Useful for particles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_planemesh_property_orientation"></div>

[Orientation](#enum_planemesh_orientation) **orientation** = ``1`` <div id="class_planemesh_property_orientation"></div>

- `void` **set_orientation** ( value: [Orientation](#enum_planemesh_orientation) )
- [Orientation](#enum_planemesh_orientation) **get_orientation** ( )

Direction that the **PlaneMesh** is facing. See [Orientation](#enum_planemesh_orientation) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_planemesh_property_size"></div>

[`Vector2`](class_vector2.md) **size** = ``Vector2(2, 2)`` <div id="class_planemesh_property_size"></div>

- `void` **set_size** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_size** ( )

Size of the generated plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_planemesh_property_subdivide_depth"></div>

[`int`](class_int.md) **subdivide_depth** = ``0`` <div id="class_planemesh_property_subdivide_depth"></div>

- `void` **set_subdivide_depth** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_subdivide_depth** ( )

Number of subdivision along the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_planemesh_property_subdivide_width"></div>

[`int`](class_int.md) **subdivide_width** = ``0`` <div id="class_planemesh_property_subdivide_width"></div>

- `void` **set_subdivide_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_subdivide_width** ( )

Number of subdivision along the X axis.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
