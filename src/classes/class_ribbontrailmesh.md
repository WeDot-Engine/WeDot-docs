<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/RibbonTrailMesh.xml。 -->

<div id="_class_ribbontrailmesh"></div>

# RibbonTrailMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a straight ribbon-shaped [`PrimitiveMesh`](class_primitivemesh.md) with variable width.

## 描述

**RibbonTrailMesh** represents a straight ribbon-shaped mesh with variable width. The ribbon is composed of a number of flat or cross-shaped sections, each with the same [`section_length`](#class_ribbontrailmesh_property_section_length) and number of [`section_segments`](#class_ribbontrailmesh_property_section_segments). A [`curve`](#class_ribbontrailmesh_property_curve) is sampled along the total length of the ribbon, meaning that the curve determines the size of the ribbon along its length.

This primitive mesh is usually used for particle trails.

## 属性

| [`Curve`](class_curve.md)            | [`curve`](#class_ribbontrailmesh_property_curve)                       |         |
| [`float`](class_float.md)            | [`section_length`](#class_ribbontrailmesh_property_section_length)     | ``0.2`` |
| [`int`](class_int.md)                | [`section_segments`](#class_ribbontrailmesh_property_section_segments) | ``3``   |
| [`int`](class_int.md)                | [`sections`](#class_ribbontrailmesh_property_sections)                 | ``5``   |
| [Shape](#enum_ribbontrailmesh_shape) | [`shape`](#class_ribbontrailmesh_property_shape)                       | ``1``   |
| [`float`](class_float.md)            | [`size`](#class_ribbontrailmesh_property_size)                         | ``1.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_ribbontrailmesh_shape"></div>

enum **Shape**: <div id="enum_ribbontrailmesh_shape"></div>

<div id="_class_ribbontrailmesh_constant_shape_flat"></div>

[Shape](#enum_ribbontrailmesh_shape) **SHAPE_FLAT** = ``0``

Gives the mesh a single flat face.

<div id="_class_ribbontrailmesh_constant_shape_cross"></div>

[Shape](#enum_ribbontrailmesh_shape) **SHAPE_CROSS** = ``1``

Gives the mesh two perpendicular flat faces, making a cross shape.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_ribbontrailmesh_property_curve"></div>

[`Curve`](class_curve.md) **curve** <div id="class_ribbontrailmesh_property_curve"></div>

- `void` **set_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve** ( )

Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [`size`](#class_ribbontrailmesh_property_size) by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ribbontrailmesh_property_section_length"></div>

[`float`](class_float.md) **section_length** = ``0.2`` <div id="class_ribbontrailmesh_property_section_length"></div>

- `void` **set_section_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_section_length** ( )

The length of a section of the ribbon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ribbontrailmesh_property_section_segments"></div>

[`int`](class_int.md) **section_segments** = ``3`` <div id="class_ribbontrailmesh_property_section_segments"></div>

- `void` **set_section_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_section_segments** ( )

The number of segments in a section. The [`curve`](#class_ribbontrailmesh_property_curve) is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ribbontrailmesh_property_sections"></div>

[`int`](class_int.md) **sections** = ``5`` <div id="class_ribbontrailmesh_property_sections"></div>

- `void` **set_sections** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sections** ( )

The total number of sections on the ribbon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ribbontrailmesh_property_shape"></div>

[Shape](#enum_ribbontrailmesh_shape) **shape** = ``1`` <div id="class_ribbontrailmesh_property_shape"></div>

- `void` **set_shape** ( value: [Shape](#enum_ribbontrailmesh_shape) )
- [Shape](#enum_ribbontrailmesh_shape) **get_shape** ( )

Determines the shape of the ribbon.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ribbontrailmesh_property_size"></div>

[`float`](class_float.md) **size** = ``1.0`` <div id="class_ribbontrailmesh_property_size"></div>

- `void` **set_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_size** ( )

The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [`curve`](#class_ribbontrailmesh_property_curve) at the given distance.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
