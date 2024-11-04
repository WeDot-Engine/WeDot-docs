<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BoxMesh.xml。 -->

<div id="_class_boxmesh"></div>

# BoxMesh

**继承：** [`PrimitiveMesh`](class_primitivemesh.md) **<** [`Mesh`](class_mesh.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Generate an axis-aligned box [`PrimitiveMesh`](class_primitivemesh.md).

## 描述

Generate an axis-aligned box [`PrimitiveMesh`](class_primitivemesh.md).

The box's UV layout is arranged in a 3×2 layout that allows texturing each face individually. To apply the same texture on all faces, change the material's UV property to `Vector3(3, 2, 1)`. This is equivalent to adding `UV *= vec2(3.0, 2.0)` in a vertex shader.

 **Note:** When using a large textured **BoxMesh** (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [`subdivide_depth`](#class_boxmesh_property_subdivide_depth), [`subdivide_height`](#class_boxmesh_property_subdivide_height) and [`subdivide_width`](#class_boxmesh_property_subdivide_width) until you no longer notice UV jittering.

## 属性

| [`Vector3`](class_vector3.md) | [`size`](#class_boxmesh_property_size)                         | ``Vector3(1, 1, 1)`` |
| [`int`](class_int.md)         | [`subdivide_depth`](#class_boxmesh_property_subdivide_depth)   | ``0``                |
| [`int`](class_int.md)         | [`subdivide_height`](#class_boxmesh_property_subdivide_height) | ``0``                |
| [`int`](class_int.md)         | [`subdivide_width`](#class_boxmesh_property_subdivide_width)   | ``0``                |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_boxmesh_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(1, 1, 1)`` <div id="class_boxmesh_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The box's width, height and depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boxmesh_property_subdivide_depth"></div>

[`int`](class_int.md) **subdivide_depth** = ``0`` <div id="class_boxmesh_property_subdivide_depth"></div>

- `void` **set_subdivide_depth** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_subdivide_depth** ( )

Number of extra edge loops inserted along the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boxmesh_property_subdivide_height"></div>

[`int`](class_int.md) **subdivide_height** = ``0`` <div id="class_boxmesh_property_subdivide_height"></div>

- `void` **set_subdivide_height** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_subdivide_height** ( )

Number of extra edge loops inserted along the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_boxmesh_property_subdivide_width"></div>

[`int`](class_int.md) **subdivide_width** = ``0`` <div id="class_boxmesh_property_subdivide_width"></div>

- `void` **set_subdivide_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_subdivide_width** ( )

Number of extra edge loops inserted along the X axis.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
