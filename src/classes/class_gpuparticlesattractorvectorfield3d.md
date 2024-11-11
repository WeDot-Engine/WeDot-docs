<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GPUParticlesAttractorVectorField3D.xml。 -->

<div id="_class_gpuparticlesattractorvectorfield3d"></div>

# GPUParticlesAttractorVectorField3D

**继承：** [`GPUParticlesAttractor3D`](class_gpuparticlesattractor3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A box-shaped attractor with varying directions and strengths defined in it that influences particles from [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

A box-shaped attractor with varying directions and strengths defined in it that influences particles from [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

Unlike [`GPUParticlesAttractorBox3D`](class_gpuparticlesattractorbox3d.md), **GPUParticlesAttractorVectorField3D** uses a [`texture`](class_gpuparticlesattractorvectorfield3d.md#class_gpuparticlesattractorvectorfield3d_property_texture) to affect attraction strength within the box. This can be used to create complex attraction scenarios where particles travel in different directions depending on their location. This can be useful for weather effects such as sandstorms.

Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.

 **Note:** Particle attractors only affect [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

|||
|:-:|:--|
| [`Vector3`](class_vector3.md)     | [`size`](class_gpuparticlesattractorvectorfield3d.md#class_gpuparticlesattractorvectorfield3d_property_size)       | ``Vector3(2, 2, 2)`` |
| [`Texture3D`](class_texture3d.md) | [`texture`](class_gpuparticlesattractorvectorfield3d.md#class_gpuparticlesattractorvectorfield3d_property_texture) |                      |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlesattractorvectorfield3d_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_gpuparticlesattractorvectorfield3d_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The size of the vector field box in 3D units.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlesattractorvectorfield3d_property_texture"></div>

[`Texture3D`](class_texture3d.md) **texture** <div id="class_gpuparticlesattractorvectorfield3d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture3D`](class_texture3d.md) )
- [`Texture3D`](class_texture3d.md) **get_texture** ( )

The 3D texture to be used. Values are linearly interpolated between the texture's pixels.

 **Note:** To get better performance, the 3D texture's resolution should reflect the [`size`](class_gpuparticlesattractorvectorfield3d.md#class_gpuparticlesattractorvectorfield3d_property_size) of the attractor. Since particle attraction is usually low-frequency data, the texture can be kept at a low resolution such as 64×64×64.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
