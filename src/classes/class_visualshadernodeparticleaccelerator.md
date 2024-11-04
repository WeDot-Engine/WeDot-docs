<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeParticleAccelerator.xml。 -->

<div id="_class_visualshadernodeparticleaccelerator"></div>

# VisualShaderNodeParticleAccelerator

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node that accelerates particles.

## 描述

Particle accelerator can be used in "process" step of particle shader. It will accelerate the particles. Connect it to the Velocity output port.

## 属性

| [Mode](#enum_visualshadernodeparticleaccelerator_mode) | [`mode`](#class_visualshadernodeparticleaccelerator_property_mode) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeparticleaccelerator_mode"></div>

enum **Mode**: <div id="enum_visualshadernodeparticleaccelerator_mode"></div>

<div id="_class_visualshadernodeparticleaccelerator_constant_mode_linear"></div>

[Mode](#enum_visualshadernodeparticleaccelerator_mode) **MODE_LINEAR** = ``0``

The particles will be accelerated based on their velocity.

<div id="_class_visualshadernodeparticleaccelerator_constant_mode_radial"></div>

[Mode](#enum_visualshadernodeparticleaccelerator_mode) **MODE_RADIAL** = ``1``

The particles will be accelerated towards or away from the center.

<div id="_class_visualshadernodeparticleaccelerator_constant_mode_tangential"></div>

[Mode](#enum_visualshadernodeparticleaccelerator_mode) **MODE_TANGENTIAL** = ``2``

The particles will be accelerated tangentially to the radius vector from center to their position.

<div id="_class_visualshadernodeparticleaccelerator_constant_mode_max"></div>

[Mode](#enum_visualshadernodeparticleaccelerator_mode) **MODE_MAX** = ``3``

Represents the size of the [Mode](#enum_visualshadernodeparticleaccelerator_mode) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparticleaccelerator_property_mode"></div>

[Mode](#enum_visualshadernodeparticleaccelerator_mode) **mode** = ``0`` <div id="class_visualshadernodeparticleaccelerator_property_mode"></div>

- `void` **set_mode** ( value: [Mode](#enum_visualshadernodeparticleaccelerator_mode) )
- [Mode](#enum_visualshadernodeparticleaccelerator_mode) **get_mode** ( )

Defines in what manner the particles will be accelerated.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
