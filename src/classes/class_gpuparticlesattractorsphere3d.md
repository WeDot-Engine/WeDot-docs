<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GPUParticlesAttractorSphere3D.xml。 -->

<div id="_class_gpuparticlesattractorsphere3d"></div>

# GPUParticlesAttractorSphere3D

**继承：** [`GPUParticlesAttractor3D`](class_gpuparticlesattractor3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A spheroid-shaped attractor that influences particles from [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

A spheroid-shaped attractor that influences particles from [`GPUParticles3D`](class_gpuparticles3d.md) nodes. Can be used to attract particles towards its origin, or to push them away from its origin.

Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.

 **Note:** Particle attractors only affect [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

| [`float`](class_float.md) | [`radius`](#class_gpuparticlesattractorsphere3d_property_radius) | ``1.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlesattractorsphere3d_property_radius"></div>

[`float`](class_float.md) **radius** = ``1.0`` <div id="class_gpuparticlesattractorsphere3d_property_radius"></div>

- `void` **set_radius** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radius** ( )

The attractor sphere's radius in 3D units.

 **Note:** Stretched ellipses can be obtained by using non-uniform scaling on the **GPUParticlesAttractorSphere3D** node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
