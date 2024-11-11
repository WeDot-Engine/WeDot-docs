<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/CapsuleMesh.xml。 -->

<div id="_class_capsulemesh"></div>

# CapsuleMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Class representing a capsule-shaped [`PrimitiveMesh`](class_primitivemesh.md).

## 描述

Class representing a capsule-shaped [`PrimitiveMesh`](class_primitivemesh.md).

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`height`](class_capsulemesh.md#class_capsulemesh_property_height)                   | ``2.0`` |
| [`int`](class_int.md)     | [`radial_segments`](class_capsulemesh.md#class_capsulemesh_property_radial_segments) | ``64``  |
| [`float`](class_float.md) | [`radius`](class_capsulemesh.md#class_capsulemesh_property_radius)                   | ``0.5`` |
| [`int`](class_int.md)     | [`rings`](class_capsulemesh.md#class_capsulemesh_property_rings)                     | ``8``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_capsulemesh_property_height"></div>

[`float`](class_float.md) **height** = ``2.0`` <div id="class_capsulemesh_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

Total height of the capsule mesh (including the hemispherical ends).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_capsulemesh_property_radial_segments"></div>

[`int`](class_int.md) **radial_segments** = ``64`` <div id="class_capsulemesh_property_radial_segments"></div>

- `void` **set_radial_segments** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_radial_segments** ( )

Number of radial segments on the capsule mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_capsulemesh_property_radius"></div>

[`float`](class_float.md) **radius** = ``0.5`` <div id="class_capsulemesh_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

Radius of the capsule mesh.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_capsulemesh_property_rings"></div>

[`int`](class_int.md) **rings** = ``8`` <div id="class_capsulemesh_property_rings"></div>

- `void` **set_rings** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_rings** ( )

Number of rings along the height of the capsule.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
