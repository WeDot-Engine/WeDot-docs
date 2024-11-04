<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/modules/csg/doc_classes/CSGPrimitive3D.xml。 -->

<div id="_class_csgprimitive3d"></div>

# CSGPrimitive3D

**继承：** [`CSGShape3D`](class_csgshape3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`CSGBox3D`](class_csgbox3d.md), [`CSGCylinder3D`](class_csgcylinder3d.md), [`CSGMesh3D`](class_csgmesh3d.md), [`CSGPolygon3D`](class_csgpolygon3d.md), [`CSGSphere3D`](class_csgsphere3d.md), [`CSGTorus3D`](class_csgtorus3d.md)

Base class for CSG primitives.

## 描述

Parent class for various CSG primitives. It contains code and functionality that is common between them. It cannot be used directly. Instead use one of the various classes that inherit from it.

 **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [`MeshInstance3D`](class_meshinstance3d.md) with a [`PrimitiveMesh`](class_primitivemesh.md). Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.

## 属性

| [`bool`](class_bool.md) | [`flip_faces`](#class_csgprimitive3d_property_flip_faces) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgprimitive3d_property_flip_faces"></div>

[`bool`](class_bool.md) **flip_faces** = ``false`` <div id="class_csgprimitive3d_property_flip_faces"></div>

- `void` **set_flip_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flip_faces** ( )

If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
