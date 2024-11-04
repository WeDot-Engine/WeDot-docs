<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/DampedSpringJoint2D.xml。 -->

<div id="_class_dampedspringjoint2d"></div>

# DampedSpringJoint2D

**继承：** [`Joint2D`](class_joint2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that connects two 2D physics bodies with a spring-like force.

## 描述

A physics joint that connects two 2D physics bodies with a spring-like force. This resembles a spring that always wants to stretch to a given length.

## 属性

| [`float`](class_float.md) | [`damping`](#class_dampedspringjoint2d_property_damping)         | ``1.0``  |
| [`float`](class_float.md) | [`length`](#class_dampedspringjoint2d_property_length)           | ``50.0`` |
| [`float`](class_float.md) | [`rest_length`](#class_dampedspringjoint2d_property_rest_length) | ``0.0``  |
| [`float`](class_float.md) | [`stiffness`](#class_dampedspringjoint2d_property_stiffness)     | ``20.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_dampedspringjoint2d_property_damping"></div>

[`float`](class_float.md) **damping** = ``1.0`` <div id="class_dampedspringjoint2d_property_damping"></div>

- `void` **set_damping** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping** ( )

The spring joint's damping ratio. A value between `0` and `1`. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [`damping`](#class_dampedspringjoint2d_property_damping) value forces the attached bodies to align faster.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dampedspringjoint2d_property_length"></div>

[`float`](class_float.md) **length** = ``50.0`` <div id="class_dampedspringjoint2d_property_length"></div>

- `void` **set_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_length** ( )

The spring joint's maximum length. The two attached bodies cannot stretch it past this value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dampedspringjoint2d_property_rest_length"></div>

[`float`](class_float.md) **rest_length** = ``0.0`` <div id="class_dampedspringjoint2d_property_rest_length"></div>

- `void` **set_rest_length** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_rest_length** ( )

When the bodies attached to the spring joint move they stretch or squash it. The joint always tries to resize towards this length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_dampedspringjoint2d_property_stiffness"></div>

[`float`](class_float.md) **stiffness** = ``20.0`` <div id="class_dampedspringjoint2d_property_stiffness"></div>

- `void` **set_stiffness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_stiffness** ( )

The higher the value, the less the bodies attached to the joint will deform it. The joint applies an opposing force to the bodies, the product of the stiffness multiplied by the size difference from its resting length.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
