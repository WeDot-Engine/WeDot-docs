<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeParticleMultiplyByAxisAngle.xml。 -->

<div id="_class_visualshadernodeparticlemultiplybyaxisangle"></div>

# VisualShaderNodeParticleMultiplyByAxisAngle

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader helper node for multiplying position and rotation of particles.

## 描述

This node helps to multiply a position input vector by rotation using specific axis. Intended to work with emitters.

## 属性

| [`bool`](class_bool.md) | [`degrees_mode`](#class_visualshadernodeparticlemultiplybyaxisangle_property_degrees_mode) | ``true`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparticlemultiplybyaxisangle_property_degrees_mode"></div>

[`bool`](class_bool.md) **degrees_mode** = ``true`` <div id="class_visualshadernodeparticlemultiplybyaxisangle_property_degrees_mode"></div>

- `void` **set_degrees_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_degrees_mode** ( )

If `true`, the angle will be interpreted in degrees instead of radians.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
