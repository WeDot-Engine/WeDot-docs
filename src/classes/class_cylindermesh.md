<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CylinderMesh.xml。 -->

<div id="_class_cylindermesh"></div>

# CylinderMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class representing a cylindrical [`PrimitiveMesh`](class_primitivemesh.md).

## 描述

Class representing a cylindrical [`PrimitiveMesh`](class_primitivemesh.md). This class can be used to create cones by setting either the [`top_radius`](class_cylindermesh.md#class_cylindermesh_property_top_radius) or [`bottom_radius`](class_cylindermesh.md#class_cylindermesh_property_bottom_radius) properties to `0.0`.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`bottom_radius`](class_cylindermesh.md#class_cylindermesh_property_bottom_radius)     | ``0.5``  |
| [`bool`](class_bool.md)   | [`cap_bottom`](class_cylindermesh.md#class_cylindermesh_property_cap_bottom)           | ``true`` |
| [`bool`](class_bool.md)   | [`cap_top`](class_cylindermesh.md#class_cylindermesh_property_cap_top)                 | ``true`` |
| [`float`](class_float.md) | [`height`](class_cylindermesh.md#class_cylindermesh_property_height)                   | ``2.0``  |
| [`int`](class_int.md)     | [`radial_segments`](class_cylindermesh.md#class_cylindermesh_property_radial_segments) | ``64``   |
| [`int`](class_int.md)     | [`rings`](class_cylindermesh.md#class_cylindermesh_property_rings)                     | ``4``    |
| [`float`](class_float.md) | [`top_radius`](class_cylindermesh.md#class_cylindermesh_property_top_radius)           | ``0.5``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_cylindermesh_property_bottom_radius"></div>

[`float`](class_float.md) **bottom_radius** = ``0.5`` <div id="class_cylindermesh_property_bottom_radius"></div>

- `void` **set_bottom_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bottom_radius** ( )

Bottom radius of the cylinder. If set to `0.0`, the bottom faces will not be generated, resulting in a conic shape. See also [`cap_bottom`](class_cylindermesh.md#class_cylindermesh_property_cap_bottom).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_cap_bottom"></div>

[`bool`](class_bool.md) **cap_bottom** = ``true`` <div id="class_cylindermesh_property_cap_bottom"></div>

- `void` **set_cap_bottom** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_cap_bottom** ( )

If `true`, generates a cap at the bottom of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [`bottom_radius`](class_cylindermesh.md#class_cylindermesh_property_bottom_radius).

 **Note:** If [`bottom_radius`](class_cylindermesh.md#class_cylindermesh_property_bottom_radius) is `0.0`, cap generation is always skipped even if [`cap_bottom`](class_cylindermesh.md#class_cylindermesh_property_cap_bottom) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_cap_top"></div>

[`bool`](class_bool.md) **cap_top** = ``true`` <div id="class_cylindermesh_property_cap_top"></div>

- `void` **set_cap_top** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_cap_top** ( )

If `true`, generates a cap at the top of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [`top_radius`](class_cylindermesh.md#class_cylindermesh_property_top_radius).

 **Note:** If [`top_radius`](class_cylindermesh.md#class_cylindermesh_property_top_radius) is `0.0`, cap generation is always skipped even if [`cap_top`](class_cylindermesh.md#class_cylindermesh_property_cap_top) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_height"></div>

[`float`](class_float.md) **height** = ``2.0`` <div id="class_cylindermesh_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

Full height of the cylinder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_radial_segments"></div>

[`int`](class_int.md) **radial_segments** = ``64`` <div id="class_cylindermesh_property_radial_segments"></div>

- `void` **set_radial_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_radial_segments** ( )

Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_rings"></div>

[`int`](class_int.md) **rings** = ``4`` <div id="class_cylindermesh_property_rings"></div>

- `void` **set_rings** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_rings** ( )

Number of edge rings along the height of the cylinder. Changing [`rings`](class_cylindermesh.md#class_cylindermesh_property_rings) does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [`rings`](class_cylindermesh.md#class_cylindermesh_property_rings) should be kept to its default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_cylindermesh_property_top_radius"></div>

[`float`](class_float.md) **top_radius** = ``0.5`` <div id="class_cylindermesh_property_top_radius"></div>

- `void` **set_top_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_top_radius** ( )

Top radius of the cylinder. If set to `0.0`, the top faces will not be generated, resulting in a conic shape. See also [`cap_top`](class_cylindermesh.md#class_cylindermesh_property_cap_top).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
