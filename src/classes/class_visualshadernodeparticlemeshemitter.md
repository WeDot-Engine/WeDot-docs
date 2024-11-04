<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeParticleMeshEmitter.xml。 -->

<div id="_class_visualshadernodeparticlemeshemitter"></div>

# VisualShaderNodeParticleMeshEmitter

**继承：** [`VisualShaderNodeParticleEmitter`](class_visualshadernodeparticleemitter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node that makes particles emitted in a shape defined by a [`Mesh`](class_mesh.md).

## 描述

[`VisualShaderNodeParticleEmitter`](class_visualshadernodeparticleemitter.md) that makes the particles emitted in a shape of the assigned [`mesh`](#class_visualshadernodeparticlemeshemitter_property_mesh). It will emit from the mesh's surfaces, either all or only the specified one.

## 属性

| [`Mesh`](class_mesh.md) | [`mesh`](#class_visualshadernodeparticlemeshemitter_property_mesh)                         |          |
| [`int`](class_int.md)   | [`surface_index`](#class_visualshadernodeparticlemeshemitter_property_surface_index)       | ``0``    |
| [`bool`](class_bool.md) | [`use_all_surfaces`](#class_visualshadernodeparticlemeshemitter_property_use_all_surfaces) | ``true`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparticlemeshemitter_property_mesh"></div>

[`Mesh`](class_mesh.md) **mesh** <div id="class_visualshadernodeparticlemeshemitter_property_mesh"></div>

- `void` **set_mesh** ( value: [`Mesh`](class_mesh.md) )
- [`Mesh`](class_mesh.md) **get_mesh** ( )

The [`Mesh`](class_mesh.md) that defines emission shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeparticlemeshemitter_property_surface_index"></div>

[`int`](class_int.md) **surface_index** = ``0`` <div id="class_visualshadernodeparticlemeshemitter_property_surface_index"></div>

- `void` **set_surface_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_surface_index** ( )

Index of the surface that emits particles. [`use_all_surfaces`](#class_visualshadernodeparticlemeshemitter_property_use_all_surfaces) must be `false` for this to take effect.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeparticlemeshemitter_property_use_all_surfaces"></div>

[`bool`](class_bool.md) **use_all_surfaces** = ``true`` <div id="class_visualshadernodeparticlemeshemitter_property_use_all_surfaces"></div>

- `void` **set_use_all_surfaces** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_use_all_surfaces** ( )

If `true`, the particles will emit from all surfaces of the mesh.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
