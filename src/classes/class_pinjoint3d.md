<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PinJoint3D.xml。 -->

<div id="_class_pinjoint3d"></div>

# PinJoint3D

**继承：** [`Joint3D`](class_joint3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.

## 描述

A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate. For example, a [`RigidBody3D`](class_rigidbody3d.md) can be attached to a [`StaticBody3D`](class_staticbody3d.md) to create a pendulum or a seesaw.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`params/bias`](class_pinjoint3d.md#class_pinjoint3d_property_params/bias)                   | ``0.3`` |
| [`float`](class_float.md) | [`params/damping`](class_pinjoint3d.md#class_pinjoint3d_property_params/damping)             | ``1.0`` |
| [`float`](class_float.md) | [`params/impulse_clamp`](class_pinjoint3d.md#class_pinjoint3d_property_params/impulse_clamp) | ``0.0`` |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md) | [`get_param`](class_pinjoint3d.md#class_pinjoint3d_method_get_param) ( param: [Param](#enum_pinjoint3d_param) ) const[^const]                     |
| `void`                    | [`set_param`](class_pinjoint3d.md#class_pinjoint3d_method_set_param) ( param: [Param](#enum_pinjoint3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_pinjoint3d_param"></div>

enum **Param**: <div id="enum_pinjoint3d_param"></div>

<div id="_class_pinjoint3d_constant_param_bias"></div>

[Param](#enum_pinjoint3d_param) **PARAM_BIAS** = ``0``

The force with which the pinned objects stay in positional relation to each other. The higher, the stronger.

<div id="_class_pinjoint3d_constant_param_damping"></div>

[Param](#enum_pinjoint3d_param) **PARAM_DAMPING** = ``1``

The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger.

<div id="_class_pinjoint3d_constant_param_impulse_clamp"></div>

[Param](#enum_pinjoint3d_param) **PARAM_IMPULSE_CLAMP** = ``2``

If above 0, this value is the maximum value for an impulse that this Joint3D produces.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_pinjoint3d_property_params/bias"></div>

[`float`](class_float.md) **params/bias** = ``0.3`` <div id="class_pinjoint3d_property_params/bias"></div>

- `void` **set_param** ( param: [Param](#enum_pinjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_pinjoint3d_param) ) const[^const]

The force with which the pinned objects stay in positional relation to each other. The higher, the stronger.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint3d_property_params/damping"></div>

[`float`](class_float.md) **params/damping** = ``1.0`` <div id="class_pinjoint3d_property_params/damping"></div>

- `void` **set_param** ( param: [Param](#enum_pinjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_pinjoint3d_param) ) const[^const]

The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint3d_property_params/impulse_clamp"></div>

[`float`](class_float.md) **params/impulse_clamp** = ``0.0`` <div id="class_pinjoint3d_property_params/impulse_clamp"></div>

- `void` **set_param** ( param: [Param](#enum_pinjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_pinjoint3d_param) ) const[^const]

If above 0, this value is the maximum value for an impulse that this Joint3D produces.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_pinjoint3d_method_get_param"></div>

[`float`](class_float.md) **get_param** ( param: [Param](#enum_pinjoint3d_param) ) const[^const]<div id="class_pinjoint3d_method_get_param"></div>

Returns the value of the specified parameter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pinjoint3d_method_set_param"></div>

`void` **set_param** ( param: [Param](#enum_pinjoint3d_param), value: [`float`](class_float.md) )<div id="class_pinjoint3d_method_set_param"></div>

Sets the value of the specified parameter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
