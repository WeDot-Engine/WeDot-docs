<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/TorusMesh.xml。 -->

<div id="_class_torusmesh"></div>

# TorusMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class representing a torus [`PrimitiveMesh`](class_primitivemesh.md).

## 描述

Class representing a torus [`PrimitiveMesh`](class_primitivemesh.md).

## 属性

| [`float`](class_float.md) | [`inner_radius`](#class_torusmesh_property_inner_radius)   | ``0.5`` |
| [`float`](class_float.md) | [`outer_radius`](#class_torusmesh_property_outer_radius)   | ``1.0`` |
| [`int`](class_int.md)     | [`ring_segments`](#class_torusmesh_property_ring_segments) | ``32``  |
| [`int`](class_int.md)     | [`rings`](#class_torusmesh_property_rings)                 | ``64``  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_torusmesh_property_inner_radius"></div>

[`float`](class_float.md) **inner_radius** = ``0.5`` <div id="class_torusmesh_property_inner_radius"></div>

- `void` **set_inner_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_inner_radius** ( )

The inner radius of the torus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_torusmesh_property_outer_radius"></div>

[`float`](class_float.md) **outer_radius** = ``1.0`` <div id="class_torusmesh_property_outer_radius"></div>

- `void` **set_outer_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_outer_radius** ( )

The outer radius of the torus.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_torusmesh_property_ring_segments"></div>

[`int`](class_int.md) **ring_segments** = ``32`` <div id="class_torusmesh_property_ring_segments"></div>

- `void` **set_ring_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_ring_segments** ( )

The number of edges each ring of the torus is constructed of.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_torusmesh_property_rings"></div>

[`int`](class_int.md) **rings** = ``64`` <div id="class_torusmesh_property_rings"></div>

- `void` **set_rings** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_rings** ( )

The number of slices the torus is constructed of.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
