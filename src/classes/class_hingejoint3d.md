<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/HingeJoint3D.xml。 -->

<div id="_class_hingejoint3d"></div>

# HingeJoint3D

**继承：** [`Joint3D`](class_joint3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body.

## 描述

A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. For example, Body A can be a [`StaticBody3D`](class_staticbody3d.md) representing a door hinge that a [`RigidBody3D`](class_rigidbody3d.md) rotates around.

## 属性

| [`float`](class_float.md) | [`angular_limit/bias`](#class_hingejoint3d_property_angular_limit/bias)             | ``0.3``     |
| [`bool`](class_bool.md)   | [`angular_limit/enable`](#class_hingejoint3d_property_angular_limit/enable)         | ``false``   |
| [`float`](class_float.md) | [`angular_limit/lower`](#class_hingejoint3d_property_angular_limit/lower)           | ``-1.5708`` |
| [`float`](class_float.md) | [`angular_limit/relaxation`](#class_hingejoint3d_property_angular_limit/relaxation) | ``1.0``     |
| [`float`](class_float.md) | [`angular_limit/softness`](#class_hingejoint3d_property_angular_limit/softness)     | ``0.9``     |
| [`float`](class_float.md) | [`angular_limit/upper`](#class_hingejoint3d_property_angular_limit/upper)           | ``1.5708``  |
| [`bool`](class_bool.md)   | [`motor/enable`](#class_hingejoint3d_property_motor/enable)                         | ``false``   |
| [`float`](class_float.md) | [`motor/max_impulse`](#class_hingejoint3d_property_motor/max_impulse)               | ``1.0``     |
| [`float`](class_float.md) | [`motor/target_velocity`](#class_hingejoint3d_property_motor/target_velocity)       | ``1.0``     |
| [`float`](class_float.md) | [`params/bias`](#class_hingejoint3d_property_params/bias)                           | ``0.3``     |

## 方法

| [`bool`](class_bool.md)   | [`get_flag`](#class_hingejoint3d_method_get_flag) ( flag: [Flag](#enum_hingejoint3d_flag) ) const[^const]                          |
| [`float`](class_float.md) | [`get_param`](#class_hingejoint3d_method_get_param) ( param: [Param](#enum_hingejoint3d_param) ) const[^const]                     |
| `void`                    | [`set_flag`](#class_hingejoint3d_method_set_flag) ( flag: [Flag](#enum_hingejoint3d_flag), enabled: [`bool`](class_bool.md) )      |
| `void`                    | [`set_param`](#class_hingejoint3d_method_set_param) ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_hingejoint3d_param"></div>

enum **Param**: <div id="enum_hingejoint3d_param"></div>

<div id="_class_hingejoint3d_constant_param_bias"></div>

[Param](#enum_hingejoint3d_param) **PARAM_BIAS** = ``0``

The speed with which the two bodies get pulled together when they move in different directions.

<div id="_class_hingejoint3d_constant_param_limit_upper"></div>

[Param](#enum_hingejoint3d_param) **PARAM_LIMIT_UPPER** = ``1``

The maximum rotation. Only active if [`angular_limit/enable`](#class_hingejoint3d_property_angular_limit/enable) is `true`.

<div id="_class_hingejoint3d_constant_param_limit_lower"></div>

[Param](#enum_hingejoint3d_param) **PARAM_LIMIT_LOWER** = ``2``

The minimum rotation. Only active if [`angular_limit/enable`](#class_hingejoint3d_property_angular_limit/enable) is `true`.

<div id="_class_hingejoint3d_constant_param_limit_bias"></div>

[Param](#enum_hingejoint3d_param) **PARAM_LIMIT_BIAS** = ``3``

The speed with which the rotation across the axis perpendicular to the hinge gets corrected.

<div id="_class_hingejoint3d_constant_param_limit_softness"></div>

[Param](#enum_hingejoint3d_param) **PARAM_LIMIT_SOFTNESS** = ``4``

**已弃用：** This property is never used by the engine and is kept for compatibility purpose.



<div id="_class_hingejoint3d_constant_param_limit_relaxation"></div>

[Param](#enum_hingejoint3d_param) **PARAM_LIMIT_RELAXATION** = ``5``

The lower this value, the more the rotation gets slowed down.

<div id="_class_hingejoint3d_constant_param_motor_target_velocity"></div>

[Param](#enum_hingejoint3d_param) **PARAM_MOTOR_TARGET_VELOCITY** = ``6``

Target speed for the motor.

<div id="_class_hingejoint3d_constant_param_motor_max_impulse"></div>

[Param](#enum_hingejoint3d_param) **PARAM_MOTOR_MAX_IMPULSE** = ``7``

Maximum acceleration for the motor.

<div id="_class_hingejoint3d_constant_param_max"></div>

[Param](#enum_hingejoint3d_param) **PARAM_MAX** = ``8``

Represents the size of the [Param](#enum_hingejoint3d_param) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_hingejoint3d_flag"></div>

enum **Flag**: <div id="enum_hingejoint3d_flag"></div>

<div id="_class_hingejoint3d_constant_flag_use_limit"></div>

[Flag](#enum_hingejoint3d_flag) **FLAG_USE_LIMIT** = ``0``

If `true`, the hinges maximum and minimum rotation, defined by [`angular_limit/lower`](#class_hingejoint3d_property_angular_limit/lower) and [`angular_limit/upper`](#class_hingejoint3d_property_angular_limit/upper) has effects.

<div id="_class_hingejoint3d_constant_flag_enable_motor"></div>

[Flag](#enum_hingejoint3d_flag) **FLAG_ENABLE_MOTOR** = ``1``

When activated, a motor turns the hinge.

<div id="_class_hingejoint3d_constant_flag_max"></div>

[Flag](#enum_hingejoint3d_flag) **FLAG_MAX** = ``2``

Represents the size of the [Flag](#enum_hingejoint3d_flag) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_hingejoint3d_property_angular_limit/bias"></div>

[`float`](class_float.md) **angular_limit/bias** = ``0.3`` <div id="class_hingejoint3d_property_angular_limit/bias"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

The speed with which the rotation across the axis perpendicular to the hinge gets corrected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_angular_limit/enable"></div>

[`bool`](class_bool.md) **angular_limit/enable** = ``false`` <div id="class_hingejoint3d_property_angular_limit/enable"></div>

- `void` **set_flag** ( flag: [Flag](#enum_hingejoint3d_flag), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flag](#enum_hingejoint3d_flag) ) const[^const]

If `true`, the hinges maximum and minimum rotation, defined by [`angular_limit/lower`](#class_hingejoint3d_property_angular_limit/lower) and [`angular_limit/upper`](#class_hingejoint3d_property_angular_limit/upper) has effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_angular_limit/lower"></div>

[`float`](class_float.md) **angular_limit/lower** = ``-1.5708`` <div id="class_hingejoint3d_property_angular_limit/lower"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

The minimum rotation. Only active if [`angular_limit/enable`](#class_hingejoint3d_property_angular_limit/enable) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_angular_limit/relaxation"></div>

[`float`](class_float.md) **angular_limit/relaxation** = ``1.0`` <div id="class_hingejoint3d_property_angular_limit/relaxation"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

The lower this value, the more the rotation gets slowed down.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_angular_limit/softness"></div>

[`float`](class_float.md) **angular_limit/softness** = ``0.9`` <div id="class_hingejoint3d_property_angular_limit/softness"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

**已弃用：** This property is never set by the engine and is kept for compatibility purposes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_angular_limit/upper"></div>

[`float`](class_float.md) **angular_limit/upper** = ``1.5708`` <div id="class_hingejoint3d_property_angular_limit/upper"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

The maximum rotation. Only active if [`angular_limit/enable`](#class_hingejoint3d_property_angular_limit/enable) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_motor/enable"></div>

[`bool`](class_bool.md) **motor/enable** = ``false`` <div id="class_hingejoint3d_property_motor/enable"></div>

- `void` **set_flag** ( flag: [Flag](#enum_hingejoint3d_flag), enabled: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag** ( flag: [Flag](#enum_hingejoint3d_flag) ) const[^const]

When activated, a motor turns the hinge.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_motor/max_impulse"></div>

[`float`](class_float.md) **motor/max_impulse** = ``1.0`` <div id="class_hingejoint3d_property_motor/max_impulse"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

Maximum acceleration for the motor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_motor/target_velocity"></div>

[`float`](class_float.md) **motor/target_velocity** = ``1.0`` <div id="class_hingejoint3d_property_motor/target_velocity"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

Target speed for the motor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_property_params/bias"></div>

[`float`](class_float.md) **params/bias** = ``0.3`` <div id="class_hingejoint3d_property_params/bias"></div>

- `void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]

The speed with which the two bodies get pulled together when they move in different directions.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_hingejoint3d_method_get_flag"></div>

[`bool`](class_bool.md) **get_flag** ( flag: [Flag](#enum_hingejoint3d_flag) ) const[^const]<div id="class_hingejoint3d_method_get_flag"></div>

Returns the value of the specified flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_method_get_param"></div>

[`float`](class_float.md) **get_param** ( param: [Param](#enum_hingejoint3d_param) ) const[^const]<div id="class_hingejoint3d_method_get_param"></div>

Returns the value of the specified parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_method_set_flag"></div>

`void` **set_flag** ( flag: [Flag](#enum_hingejoint3d_flag), enabled: [`bool`](class_bool.md) )<div id="class_hingejoint3d_method_set_flag"></div>

If `true`, enables the specified flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_hingejoint3d_method_set_param"></div>

`void` **set_param** ( param: [Param](#enum_hingejoint3d_param), value: [`float`](class_float.md) )<div id="class_hingejoint3d_method_set_param"></div>

Sets the value of the specified parameter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
