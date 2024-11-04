<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ConeTwistJoint3D.xml。 -->

<div id="_class_conetwistjoint3d"></div>

# ConeTwistJoint3D

**继承：** [`Joint3D`](class_joint3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint.

## 描述

A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint. The twist axis is initiated as the X axis of the **ConeTwistJoint3D**. Once the physics bodies swing, the twist axis is calculated as the middle of the X axes of the joint in the local space of the two physics bodies. Useful for limbs like shoulders and hips, lamps hanging off a ceiling, etc.

## 属性

| [`float`](class_float.md) | [`bias`](#class_conetwistjoint3d_property_bias)             | ``0.3``      |
| [`float`](class_float.md) | [`relaxation`](#class_conetwistjoint3d_property_relaxation) | ``1.0``      |
| [`float`](class_float.md) | [`softness`](#class_conetwistjoint3d_property_softness)     | ``0.8``      |
| [`float`](class_float.md) | [`swing_span`](#class_conetwistjoint3d_property_swing_span) | ``0.785398`` |
| [`float`](class_float.md) | [`twist_span`](#class_conetwistjoint3d_property_twist_span) | ``3.14159``  |

## 方法

| [`float`](class_float.md) | [`get_param`](#class_conetwistjoint3d_method_get_param) ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]                     |
| `void`                    | [`set_param`](#class_conetwistjoint3d_method_set_param) ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_conetwistjoint3d_param"></div>

enum **Param**: <div id="enum_conetwistjoint3d_param"></div>

<div id="_class_conetwistjoint3d_constant_param_swing_span"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_SWING_SPAN** = ``0``

Swing is rotation from side to side, around the axis perpendicular to the twist axis.

The swing span defines, how much rotation will not get corrected along the swing axis.

Could be defined as looseness in the **ConeTwistJoint3D**.

If below 0.05, this behavior is locked.

<div id="_class_conetwistjoint3d_constant_param_twist_span"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_TWIST_SPAN** = ``1``

Twist is the rotation around the twist axis, this value defined how far the joint can twist.

Twist is locked if below 0.05.

<div id="_class_conetwistjoint3d_constant_param_bias"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_BIAS** = ``2``

The speed with which the swing or twist will take place.

The higher, the faster.

<div id="_class_conetwistjoint3d_constant_param_softness"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_SOFTNESS** = ``3``

The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint.

<div id="_class_conetwistjoint3d_constant_param_relaxation"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_RELAXATION** = ``4``

Defines, how fast the swing- and twist-speed-difference on both sides gets synced.

<div id="_class_conetwistjoint3d_constant_param_max"></div>

[Param](#enum_conetwistjoint3d_param) **PARAM_MAX** = ``5``

Represents the size of the [Param](#enum_conetwistjoint3d_param) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_conetwistjoint3d_property_bias"></div>

[`float`](class_float.md) **bias** = ``0.3`` <div id="class_conetwistjoint3d_property_bias"></div>

- `void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]

The speed with which the swing or twist will take place.

The higher, the faster.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_conetwistjoint3d_property_relaxation"></div>

[`float`](class_float.md) **relaxation** = ``1.0`` <div id="class_conetwistjoint3d_property_relaxation"></div>

- `void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]

Defines, how fast the swing- and twist-speed-difference on both sides gets synced.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_conetwistjoint3d_property_softness"></div>

[`float`](class_float.md) **softness** = ``0.8`` <div id="class_conetwistjoint3d_property_softness"></div>

- `void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]

The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_conetwistjoint3d_property_swing_span"></div>

[`float`](class_float.md) **swing_span** = ``0.785398`` <div id="class_conetwistjoint3d_property_swing_span"></div>

- `void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]

Swing is rotation from side to side, around the axis perpendicular to the twist axis.

The swing span defines, how much rotation will not get corrected along the swing axis.

Could be defined as looseness in the **ConeTwistJoint3D**.

If below 0.05, this behavior is locked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_conetwistjoint3d_property_twist_span"></div>

[`float`](class_float.md) **twist_span** = ``3.14159`` <div id="class_conetwistjoint3d_property_twist_span"></div>

- `void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]

Twist is the rotation around the twist axis, this value defined how far the joint can twist.

Twist is locked if below 0.05.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_conetwistjoint3d_method_get_param"></div>

[`float`](class_float.md) **get_param** ( param: [Param](#enum_conetwistjoint3d_param) ) const[^const]<div id="class_conetwistjoint3d_method_get_param"></div>

Returns the value of the specified parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_conetwistjoint3d_method_set_param"></div>

`void` **set_param** ( param: [Param](#enum_conetwistjoint3d_param), value: [`float`](class_float.md) )<div id="class_conetwistjoint3d_method_set_param"></div>

Sets the value of the specified parameter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
