<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GPUParticlesCollision3D.xml。 -->

<div id="_class_gpuparticlescollision3d"></div>

# GPUParticlesCollision3D

**继承：** [`VisualInstance3D`](class_visualinstance3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`GPUParticlesCollisionBox3D`](class_gpuparticlescollisionbox3d.md), [`GPUParticlesCollisionHeightField3D`](class_gpuparticlescollisionheightfield3d.md), [`GPUParticlesCollisionSDF3D`](class_gpuparticlescollisionsdf3d.md), [`GPUParticlesCollisionSphere3D`](class_gpuparticlescollisionsphere3d.md)

Abstract base class for 3D particle collision shapes affecting [`GPUParticles3D`](class_gpuparticles3d.md) nodes.

## 描述

Particle collision shapes can be used to make particles stop or bounce against them.

Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is *not* supported.

Particle collision shapes can be temporarily disabled by hiding them.

 **Note:** [`ParticleProcessMaterial.collision_mode`](#class_particleprocessmaterial_property_collision_mode) must be [`ParticleProcessMaterial.COLLISION_RIGID`](#class_particleprocessmaterial_constant_collision_rigid) or [`ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`](#class_particleprocessmaterial_constant_collision_hide_on_contact) on the [`GPUParticles3D`](class_gpuparticles3d.md)'s process material for collision to work.

 **Note:** Particle collision only affects [`GPUParticles3D`](class_gpuparticles3d.md), not [`CPUParticles3D`](class_cpuparticles3d.md).

 **Note:** Particles pushed by a collider that is being moved will not be interpolated, which can result in visible stuttering. This can be alleviated by setting [`GPUParticles3D.fixed_fps`](#class_gpuparticles3d_property_fixed_fps) to `0` or a value that matches or exceeds the target framerate.

## 属性

| [`int`](class_int.md) | [`cull_mask`](#class_gpuparticlescollision3d_property_cull_mask) | ``4294967295`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gpuparticlescollision3d_property_cull_mask"></div>

[`int`](class_int.md) **cull_mask** = ``4294967295`` <div id="class_gpuparticlescollision3d_property_cull_mask"></div>

- `void` **set_cull_mask** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_cull_mask** ( )

The particle rendering layers ([`VisualInstance3D.layers`](#class_visualinstance3d_property_layers)) that will be affected by the collision shape. By default, all particles that have [`ParticleProcessMaterial.collision_mode`](#class_particleprocessmaterial_property_collision_mode) set to [`ParticleProcessMaterial.COLLISION_RIGID`](#class_particleprocessmaterial_constant_collision_rigid) or [`ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`](#class_particleprocessmaterial_constant_collision_hide_on_contact) will be affected by a collision shape.

After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.

Particle attraction can also be disabled on a per-process material basis by setting [`ParticleProcessMaterial.attractor_interaction_enabled`](#class_particleprocessmaterial_property_attractor_interaction_enabled) on the [`GPUParticles3D`](class_gpuparticles3d.md) node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
