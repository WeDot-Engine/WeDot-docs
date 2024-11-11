<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GPUParticlesCollisionBox3D.xml。 -->

<div id="_class_gpuparticlescollisionbox3d"></div>

# GPUParticlesCollisionBox3D

**继承：** [`GPUParticlesCollision3D`](class_gpuparticlescollision3d.md) **<** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A box-shaped 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

A box-shaped 3D particle collision shape affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is *not* supported.

 **Note:** [`ParticleProcessMaterial.collision_mode`](class_particleprocessmaterial.md#class_particleprocessmaterial_property_collision_mode) must be [`ParticleProcessMaterial.COLLISION_RIGID`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_rigid) or [`ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`](class_particleprocessmaterial.md#class_particleprocessmaterial_constant_collision_hide_on_contact) on the [`GPUParticles3D`](class_gpuparticles3d.md)'s process material for collision to work.

 **Note:** Particle collision only affects [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

## 属性

|||
|:-:|:--|
| [`Vector3`](class_vector3.md) | [`size`](class_gpuparticlescollisionbox3d.md#class_gpuparticlescollisionbox3d_property_size) | ``Vector3(2, 2, 2)`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlescollisionbox3d_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(2, 2, 2)`` <div id="class_gpuparticlescollisionbox3d_property_size"></div>

- `void` **set_size** ( value: [`Vector3`](class_vector3.md) )
- [`Vector3`](class_vector3.md) **get_size** ( )

The collision box's size in 3D units.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
