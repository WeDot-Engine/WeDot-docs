<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PinJoint2D.xml。 -->

<div id="_class_pinjoint2d"></div>

# PinJoint2D

**继承：** [`Joint2D`](class_joint2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.

## 描述

A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate. For example, a [`RigidBody2D`](class_rigidbody2d.md) can be attached to a [`StaticBody2D`](class_staticbody2d.md) to create a pendulum or a seesaw.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`angular_limit_enabled`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_enabled) | ``false`` |
| [`float`](class_float.md) | [`angular_limit_lower`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_lower)     | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_upper`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_upper)     | ``0.0``   |
| [`bool`](class_bool.md)   | [`motor_enabled`](class_pinjoint2d.md#class_pinjoint2d_property_motor_enabled)                 | ``false`` |
| [`float`](class_float.md) | [`motor_target_velocity`](class_pinjoint2d.md#class_pinjoint2d_property_motor_target_velocity) | ``0.0``   |
| [`float`](class_float.md) | [`softness`](class_pinjoint2d.md#class_pinjoint2d_property_softness)                           | ``0.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_pinjoint2d_property_angular_limit_enabled"></div>

[`bool`](class_bool.md) **angular_limit_enabled** = ``false`` <div id="class_pinjoint2d_property_angular_limit_enabled"></div>

- `void` **set_angular_limit_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_angular_limit_enabled** ( )

If `true`, the pin maximum and minimum rotation, defined by [`angular_limit_lower`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_lower) and [`angular_limit_upper`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_upper) are applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint2d_property_angular_limit_lower"></div>

[`float`](class_float.md) **angular_limit_lower** = ``0.0`` <div id="class_pinjoint2d_property_angular_limit_lower"></div>

- `void` **set_angular_limit_lower** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_angular_limit_lower** ( )

The minimum rotation. Only active if [`angular_limit_enabled`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint2d_property_angular_limit_upper"></div>

[`float`](class_float.md) **angular_limit_upper** = ``0.0`` <div id="class_pinjoint2d_property_angular_limit_upper"></div>

- `void` **set_angular_limit_upper** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_angular_limit_upper** ( )

The maximum rotation. Only active if [`angular_limit_enabled`](class_pinjoint2d.md#class_pinjoint2d_property_angular_limit_enabled) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint2d_property_motor_enabled"></div>

[`bool`](class_bool.md) **motor_enabled** = ``false`` <div id="class_pinjoint2d_property_motor_enabled"></div>

- `void` **set_motor_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_motor_enabled** ( )

When activated, a motor turns the pin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint2d_property_motor_target_velocity"></div>

[`float`](class_float.md) **motor_target_velocity** = ``0.0`` <div id="class_pinjoint2d_property_motor_target_velocity"></div>

- `void` **set_motor_target_velocity** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_motor_target_velocity** ( )

Target speed for the motor. In radians per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint2d_property_softness"></div>

[`float`](class_float.md) **softness** = ``0.0`` <div id="class_pinjoint2d_property_softness"></div>

- `void` **set_softness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_softness** ( )

The higher this value, the more the bond to the pinned partner can flex.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
