<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TubeTrailMesh.xml。 -->

<div id="_class_tubetrailmesh"></div>

# TubeTrailMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents a straight tube-shaped [`PrimitiveMesh`](class_primitivemesh.md) with variable width.

## 描述

**TubeTrailMesh** represents a straight tube-shaped mesh with variable width. The tube is composed of a number of cylindrical sections, each with the same [`section_length`](#class_tubetrailmesh_property_section_length) and number of [`section_rings`](#class_tubetrailmesh_property_section_rings). A [`curve`](#class_tubetrailmesh_property_curve) is sampled along the total length of the tube, meaning that the curve determines the radius of the tube along its length.

This primitive mesh is usually used for particle trails.

## 属性

| [`bool`](class_bool.md)   | [`cap_bottom`](#class_tubetrailmesh_property_cap_bottom)         | ``true`` |
| [`bool`](class_bool.md)   | [`cap_top`](#class_tubetrailmesh_property_cap_top)               | ``true`` |
| [`Curve`](class_curve.md) | [`curve`](#class_tubetrailmesh_property_curve)                   |          |
| [`int`](class_int.md)     | [`radial_steps`](#class_tubetrailmesh_property_radial_steps)     | ``8``    |
| [`float`](class_float.md) | [`radius`](#class_tubetrailmesh_property_radius)                 | ``0.5``  |
| [`float`](class_float.md) | [`section_length`](#class_tubetrailmesh_property_section_length) | ``0.2``  |
| [`int`](class_int.md)     | [`section_rings`](#class_tubetrailmesh_property_section_rings)   | ``3``    |
| [`int`](class_int.md)     | [`sections`](#class_tubetrailmesh_property_sections)             | ``5``    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_tubetrailmesh_property_cap_bottom"></div>

[`bool`](class_bool.md) **cap_bottom** = ``true`` <div id="class_tubetrailmesh_property_cap_bottom"></div>

- `void` **set_cap_bottom** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_cap_bottom** ( )

If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_cap_top"></div>

[`bool`](class_bool.md) **cap_top** = ``true`` <div id="class_tubetrailmesh_property_cap_top"></div>

- `void` **set_cap_top** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_cap_top** ( )

If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_curve"></div>

[`Curve`](class_curve.md) **curve** <div id="class_tubetrailmesh_property_curve"></div>

- `void` **set_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve** ( )

Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [`radius`](#class_tubetrailmesh_property_radius) by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_radial_steps"></div>

[`int`](class_int.md) **radial_steps** = ``8`` <div id="class_tubetrailmesh_property_radial_steps"></div>

- `void` **set_radial_steps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_radial_steps** ( )

The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.5`` <div id="class_tubetrailmesh_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [`curve`](#class_tubetrailmesh_property_curve) at the given distance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_section_length"></div>

[`float`](class_float.md) **section_length** = ``0.2`` <div id="class_tubetrailmesh_property_section_length"></div>

- `void` **set_section_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_section_length** ( )

The length of a section of the tube.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_section_rings"></div>

[`int`](class_int.md) **section_rings** = ``3`` <div id="class_tubetrailmesh_property_section_rings"></div>

- `void` **set_section_rings** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_section_rings** ( )

The number of rings in a section. The [`curve`](#class_tubetrailmesh_property_curve) is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_tubetrailmesh_property_sections"></div>

[`int`](class_int.md) **sections** = ``5`` <div id="class_tubetrailmesh_property_sections"></div>

- `void` **set_sections** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_sections** ( )

The total number of sections on the tube.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
