<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/QuadMesh.xml。 -->

<div id="_class_quadmesh"></div>

# QuadMesh

**继承：** [`PlaneMesh`](class_planemesh.md) **<** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class representing a square mesh facing the camera.

## 描述

Class representing a square [`PrimitiveMesh`](class_primitivemesh.md). This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Y axes; this rotation is more suited for use with billboarded materials. A **QuadMesh** is equivalent to a [`PlaneMesh`](class_planemesh.md) except its default [`PlaneMesh.orientation`](class_planemesh.md#class_planemesh_property_orientation) is [`PlaneMesh.FACE_Z`](class_planemesh.md#class_planemesh_constant_face_z).

## 属性

|||
|:-:|:--|
| [Orientation](#enum_planemesh_orientation) | orientation | ``2`` (overrides [`PlaneMesh`](class_planemesh.md#class_planemesh_property_orientation))      |
| [`Vector2`](class_vector2.md)              | size        | ``Vector2(1, 1)`` (overrides [`PlaneMesh`](class_planemesh.md#class_planemesh_property_size)) |

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
