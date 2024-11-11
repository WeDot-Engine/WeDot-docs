<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/csg/doc_classes/CSGTorus3D.xml。 -->

<div id="_class_csgtorus3d"></div>

# CSGTorus3D

**继承：** [`CSGPrimitive3D`](class_csgprimitive3d.md) **<** [`CSGShape3D`](class_csgshape3d.md) **<** [`GeometryInstance3D`](class_geometryinstance3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A CSG Torus shape.

## 描述

This node allows you to create a torus for use with the CSG system.

 **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [`MeshInstance3D`](class_meshinstance3d.md) with a [`PrimitiveMesh`](class_primitivemesh.md). Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)       | [`inner_radius`](class_csgtorus3d.md#class_csgtorus3d_property_inner_radius) | ``0.5``  |
| [`Material`](class_material.md) | [`material`](class_csgtorus3d.md#class_csgtorus3d_property_material)         |          |
| [`float`](class_float.md)       | [`outer_radius`](class_csgtorus3d.md#class_csgtorus3d_property_outer_radius) | ``1.0``  |
| [`int`](class_int.md)           | [`ring_sides`](class_csgtorus3d.md#class_csgtorus3d_property_ring_sides)     | ``6``    |
| [`int`](class_int.md)           | [`sides`](class_csgtorus3d.md#class_csgtorus3d_property_sides)               | ``8``    |
| [`bool`](class_bool.md)         | [`smooth_faces`](class_csgtorus3d.md#class_csgtorus3d_property_smooth_faces) | ``true`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_csgtorus3d_property_inner_radius"></div>

[`float`](class_float.md) **inner_radius** = ``0.5`` <div id="class_csgtorus3d_property_inner_radius"></div>

- `void` **set_inner_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_inner_radius** ( )

The inner radius of the torus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgtorus3d_property_material"></div>

[`Material`](class_material.md) **material** <div id="class_csgtorus3d_property_material"></div>

- `void` **set_material** ( value: [`Material`](class_material.md) )
- [`Material`](class_material.md) **get_material** ( )

The material used to render the torus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgtorus3d_property_outer_radius"></div>

[`float`](class_float.md) **outer_radius** = ``1.0`` <div id="class_csgtorus3d_property_outer_radius"></div>

- `void` **set_outer_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_outer_radius** ( )

The outer radius of the torus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgtorus3d_property_ring_sides"></div>

[`int`](class_int.md) **ring_sides** = ``6`` <div id="class_csgtorus3d_property_ring_sides"></div>

- `void` **set_ring_sides** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_ring_sides** ( )

The number of edges each ring of the torus is constructed of.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgtorus3d_property_sides"></div>

[`int`](class_int.md) **sides** = ``8`` <div id="class_csgtorus3d_property_sides"></div>

- `void` **set_sides** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sides** ( )

The number of slices the torus is constructed of.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_csgtorus3d_property_smooth_faces"></div>

[`bool`](class_bool.md) **smooth_faces** = ``true`` <div id="class_csgtorus3d_property_smooth_faces"></div>

- `void` **set_smooth_faces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_smooth_faces** ( )

If `true` the normals of the torus are set to give a smooth effect making the torus seem rounded. If `false` the torus will have a flat shaded look.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
