<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeParticleEmit.xml。 -->

<div id="_class_visualshadernodeparticleemit"></div>

# VisualShaderNodeParticleEmit

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node that forces to emit a particle from a sub-emitter.

## 描述

This node internally calls `emit_subparticle` shader method. It will emit a particle from the configured sub-emitter and also allows to customize how its emitted. Requires a sub-emitter assigned to the particles node with this shader.

## 属性

|||
|:-:|:--|
| [EmitFlags](#enum_visualshadernodeparticleemit_emitflags) | [`flags`](class_visualshadernodeparticleemit.md#class_visualshadernodeparticleemit_property_flags) | ``31`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeparticleemit_emitflags"></div>

enum **EmitFlags**: <div id="enum_visualshadernodeparticleemit_emitflags"></div>

<div id="_class_visualshadernodeparticleemit_constant_emit_flag_position"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **EMIT_FLAG_POSITION** = ``1``

If enabled, the particle starts with the position defined by this node.

<div id="_class_visualshadernodeparticleemit_constant_emit_flag_rot_scale"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **EMIT_FLAG_ROT_SCALE** = ``2``

If enabled, the particle starts with the rotation and scale defined by this node.

<div id="_class_visualshadernodeparticleemit_constant_emit_flag_velocity"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **EMIT_FLAG_VELOCITY** = ``4``

If enabled,the particle starts with the velocity defined by this node.

<div id="_class_visualshadernodeparticleemit_constant_emit_flag_color"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **EMIT_FLAG_COLOR** = ``8``

If enabled, the particle starts with the color defined by this node.

<div id="_class_visualshadernodeparticleemit_constant_emit_flag_custom"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **EMIT_FLAG_CUSTOM** = ``16``

If enabled, the particle starts with the `CUSTOM` data defined by this node.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparticleemit_property_flags"></div>

[EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **flags** = ``31`` <div id="class_visualshadernodeparticleemit_property_flags"></div>

- `void` **set_flags** ( value: [EmitFlags](#enum_visualshadernodeparticleemit_emitflags) )
- [EmitFlags](#enum_visualshadernodeparticleemit_emitflags) **get_flags** ( )

Flags used to override the properties defined in the sub-emitter's process material.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
