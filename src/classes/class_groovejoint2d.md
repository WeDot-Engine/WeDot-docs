<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GrooveJoint2D.xml。 -->

<div id="_class_groovejoint2d"></div>

# GrooveJoint2D

**继承：** [`Joint2D`](class_joint2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.

## 描述

A physics joint that restricts the movement of two 2D physics bodies to a fixed axis. For example, a [`StaticBody2D`](class_staticbody2d.md) representing a piston base can be attached to a [`RigidBody2D`](class_rigidbody2d.md) representing the piston head, moving up and down.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`initial_offset`](class_groovejoint2d.md#class_groovejoint2d_property_initial_offset) | ``25.0`` |
| [`float`](class_float.md) | [`length`](class_groovejoint2d.md#class_groovejoint2d_property_length)                 | ``50.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_groovejoint2d_property_initial_offset"></div>

[`float`](class_float.md) **initial_offset** = ``25.0`` <div id="class_groovejoint2d_property_initial_offset"></div>

- `void` **set_initial_offset** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_initial_offset** ( )

The body B's initial anchor position defined by the joint's origin and a local offset [`initial_offset`](class_groovejoint2d.md#class_groovejoint2d_property_initial_offset) along the joint's Y axis (along the groove).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_groovejoint2d_property_length"></div>

[`float`](class_float.md) **length** = ``50.0`` <div id="class_groovejoint2d_property_length"></div>

- `void` **set_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_length** ( )

The groove's length. The groove is from the joint's origin towards [`length`](class_groovejoint2d.md#class_groovejoint2d_property_length) along the joint's local Y axis.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
