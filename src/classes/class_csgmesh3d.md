<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/csg/doc_classes/CSGMesh3D.xml。 -->

<div id="_class_csgmesh3d"></div>

# CSGMesh3D

**继承：** [`CSGPrimitive3D`](class_csgprimitive3d.md) **<** [`CSGShape3D`](class_csgshape3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A CSG Mesh shape that uses a mesh resource.

## 描述

This CSG node allows you to use any mesh resource as a CSG shape, provided it is closed, does not self-intersect, does not contain internal faces and has no edges that connect to more than two faces. See also [`CSGPolygon3D`](class_csgpolygon3d.md) for drawing 2D extruded polygons to be used as CSG nodes.

 **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [`MeshInstance3D`](class_meshinstance3d.md) with a [`PrimitiveMesh`](class_primitivemesh.md). Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.

## 属性

|||
|:-:|:--|
| [`Material`](class_material.md) | [`material`](class_csgmesh3d.md#class_csgmesh3d_property_material) |
| [`Mesh`](class_mesh.md)         | [`mesh`](class_csgmesh3d.md#class_csgmesh3d_property_mesh)         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgmesh3d_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_csgmesh3d_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The [`Material`](class_material.md) used in drawing the CSG shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgmesh3d_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_csgmesh3d_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

The [`Mesh`](class_mesh.md) resource to use as a CSG shape.

 **Note:** When using an [`ArrayMesh`](class_arraymesh.md), all vertex attributes except [`Mesh.ARRAY_VERTEX`](class_mesh.md#class_mesh_constant_array_vertex), [`Mesh.ARRAY_NORMAL`](class_mesh.md#class_mesh_constant_array_normal) and [`Mesh.ARRAY_TEX_UV`](class_mesh.md#class_mesh_constant_array_tex_uv) are left unused. Only [`Mesh.ARRAY_VERTEX`](class_mesh.md#class_mesh_constant_array_vertex) and [`Mesh.ARRAY_TEX_UV`](class_mesh.md#class_mesh_constant_array_tex_uv) will be passed to the GPU.

 [`Mesh.ARRAY_NORMAL`](class_mesh.md#class_mesh_constant_array_normal) is only used to determine which faces require the use of flat shading. By default, CSGMesh will ignore the mesh's vertex normals, recalculate them for each vertex and use a smooth shader. If a flat shader is required for a face, ensure that all vertex normals of the face are approximately equal.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
