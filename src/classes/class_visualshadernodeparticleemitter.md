<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeParticleEmitter.xml。 -->

<div id="_class_visualshadernodeparticleemitter"></div>

# VisualShaderNodeParticleEmitter

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeParticleBoxEmitter`](class_visualshadernodeparticleboxemitter.md), [`VisualShaderNodeParticleMeshEmitter`](class_visualshadernodeparticlemeshemitter.md), [`VisualShaderNodeParticleRingEmitter`](class_visualshadernodeparticleringemitter.md), [`VisualShaderNodeParticleSphereEmitter`](class_visualshadernodeparticlesphereemitter.md)

A base class for particle emitters.

## 描述

Particle emitter nodes can be used in "start" step of particle shaders and they define the starting position of the particles. Connect them to the Position output port.

## 属性

| [`bool`](class_bool.md) | [`mode_2d`](#class_visualshadernodeparticleemitter_property_mode_2d) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparticleemitter_property_mode_2d"></div>

[`bool`](class_bool.md) **mode_2d** = ``false`` <div id="class_visualshadernodeparticleemitter_property_mode_2d"></div>

- `void` **set_mode_2d** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_mode_2d** ( )

If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
