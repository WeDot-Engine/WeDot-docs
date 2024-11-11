<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GPUParticlesAttractor3D.xml。 -->

<div id="_class_gpuparticlesattractor3d"></div>

# GPUParticlesAttractor3D

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`GPUParticlesAttractorBox3D`](class_gpuparticlesattractorbox3d.md), [`GPUParticlesAttractorSphere3D`](class_gpuparticlesattractorsphere3d.md), [`GPUParticlesAttractorVectorField3D`](class_gpuparticlesattractorvectorfield3d.md)

Abstract base class for 3D particle attractors.

## 描述

Particle attractors can be used to attract particles towards the attractor's origin, or to push them away from the attractor's origin.

Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.

Attractors can be temporarily disabled by hiding them, or by setting their [`strength`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_strength) to `0.0`.

 **Note:** Particle attractors only affect [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`attenuation`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_attenuation)       | ``1.0``        |
| [`int`](class_int.md)     | [`cull_mask`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_cull_mask)           | ``4294967295`` |
| [`float`](class_float.md) | [`directionality`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_directionality) | ``0.0``        |
| [`float`](class_float.md) | [`strength`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_strength)             | ``1.0``        |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlesattractor3d_property_attenuation"></div>

[`float`](class_float.md) **attenuation** = ``1.0`` <div id="class_gpuparticlesattractor3d_property_attenuation"></div>

- `void` **set_attenuation** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_attenuation** ( )

The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlesattractor3d_property_cull_mask"></div>

[`int`](class_int.md) **cull_mask** = ``4294967295`` <div id="class_gpuparticlesattractor3d_property_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

The particle rendering layers ([`VisualInstance3D.layers`](class_visualinstance3d.md#class_visualinstance3d_property_layers)) that will be affected by the attractor. By default, all particles are affected by an attractor.

After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.

Particle attraction can also be disabled on a per-process material basis by setting [`ParticleProcessMaterial.attractor_interaction_enabled`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_attractor_interaction_enabled) on the [`GPUParticles3D`](class_gpuparticles3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlesattractor3d_property_directionality"></div>

[`float`](class_float.md) **directionality** = ``0.0`` <div id="class_gpuparticlesattractor3d_property_directionality"></div>

- `void` **set_directionality** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_directionality** ( )

Adjusts how directional the attractor is. At `0.0`, the attractor is not directional at all: it will attract particles towards its center. At `1.0`, the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [`strength`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_strength) is negative).

 **Note:** If [`directionality`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_directionality) is greater than `0.0`, the direction in which particles are pushed can be changed by rotating the **GPUParticlesAttractor3D** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gpuparticlesattractor3d_property_strength"></div>

[`float`](class_float.md) **strength** = ``1.0`` <div id="class_gpuparticlesattractor3d_property_strength"></div>

- `void` **set_strength** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_strength** ( )

Adjusts the strength of the attractor. If [`strength`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_strength) is negative, particles will be pushed in the opposite direction. Particles will be pushed *away* from the attractor's origin if [`directionality`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_directionality) is `0.0`, or towards local +Z if [`directionality`](class_gpuparticlesattractor3d.md#class_gpuparticlesattractor3d_property_directionality) is greater than `0.0`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
