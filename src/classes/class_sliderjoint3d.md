<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SliderJoint3D.xml。 -->

<div id="_class_sliderjoint3d"></div>

# SliderJoint3D

**继承：** [`Joint3D`](class_joint3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body.

## 描述

A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body. For example, Body A could be a [`StaticBody3D`](class_staticbody3d.md) representing a piston base, while Body B could be a [`RigidBody3D`](class_rigidbody3d.md) representing the piston head, moving up and down.

## 属性

| [`float`](class_float.md) | [`angular_limit/damping`](#class_sliderjoint3d_property_angular_limit/damping)             | ``0.0``  |
| [`float`](class_float.md) | [`angular_limit/lower_angle`](#class_sliderjoint3d_property_angular_limit/lower_angle)     | ``0.0``  |
| [`float`](class_float.md) | [`angular_limit/restitution`](#class_sliderjoint3d_property_angular_limit/restitution)     | ``0.7``  |
| [`float`](class_float.md) | [`angular_limit/softness`](#class_sliderjoint3d_property_angular_limit/softness)           | ``1.0``  |
| [`float`](class_float.md) | [`angular_limit/upper_angle`](#class_sliderjoint3d_property_angular_limit/upper_angle)     | ``0.0``  |
| [`float`](class_float.md) | [`angular_motion/damping`](#class_sliderjoint3d_property_angular_motion/damping)           | ``1.0``  |
| [`float`](class_float.md) | [`angular_motion/restitution`](#class_sliderjoint3d_property_angular_motion/restitution)   | ``0.7``  |
| [`float`](class_float.md) | [`angular_motion/softness`](#class_sliderjoint3d_property_angular_motion/softness)         | ``1.0``  |
| [`float`](class_float.md) | [`angular_ortho/damping`](#class_sliderjoint3d_property_angular_ortho/damping)             | ``1.0``  |
| [`float`](class_float.md) | [`angular_ortho/restitution`](#class_sliderjoint3d_property_angular_ortho/restitution)     | ``0.7``  |
| [`float`](class_float.md) | [`angular_ortho/softness`](#class_sliderjoint3d_property_angular_ortho/softness)           | ``1.0``  |
| [`float`](class_float.md) | [`linear_limit/damping`](#class_sliderjoint3d_property_linear_limit/damping)               | ``1.0``  |
| [`float`](class_float.md) | [`linear_limit/lower_distance`](#class_sliderjoint3d_property_linear_limit/lower_distance) | ``-1.0`` |
| [`float`](class_float.md) | [`linear_limit/restitution`](#class_sliderjoint3d_property_linear_limit/restitution)       | ``0.7``  |
| [`float`](class_float.md) | [`linear_limit/softness`](#class_sliderjoint3d_property_linear_limit/softness)             | ``1.0``  |
| [`float`](class_float.md) | [`linear_limit/upper_distance`](#class_sliderjoint3d_property_linear_limit/upper_distance) | ``1.0``  |
| [`float`](class_float.md) | [`linear_motion/damping`](#class_sliderjoint3d_property_linear_motion/damping)             | ``0.0``  |
| [`float`](class_float.md) | [`linear_motion/restitution`](#class_sliderjoint3d_property_linear_motion/restitution)     | ``0.7``  |
| [`float`](class_float.md) | [`linear_motion/softness`](#class_sliderjoint3d_property_linear_motion/softness)           | ``1.0``  |
| [`float`](class_float.md) | [`linear_ortho/damping`](#class_sliderjoint3d_property_linear_ortho/damping)               | ``1.0``  |
| [`float`](class_float.md) | [`linear_ortho/restitution`](#class_sliderjoint3d_property_linear_ortho/restitution)       | ``0.7``  |
| [`float`](class_float.md) | [`linear_ortho/softness`](#class_sliderjoint3d_property_linear_ortho/softness)             | ``1.0``  |

## 方法

| [`float`](class_float.md) | [`get_param`](#class_sliderjoint3d_method_get_param) ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]                     |
| `void`                    | [`set_param`](#class_sliderjoint3d_method_set_param) ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_sliderjoint3d_param"></div>

enum **Param**: <div id="enum_sliderjoint3d_param"></div>

<div id="_class_sliderjoint3d_constant_param_linear_limit_upper"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_LIMIT_UPPER** = ``0``

Constant for accessing [`linear_limit/upper_distance`](#class_sliderjoint3d_property_linear_limit/upper_distance). The maximum difference between the pivot points on their X axis before damping happens.

<div id="_class_sliderjoint3d_constant_param_linear_limit_lower"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_LIMIT_LOWER** = ``1``

Constant for accessing [`linear_limit/lower_distance`](#class_sliderjoint3d_property_linear_limit/lower_distance). The minimum difference between the pivot points on their X axis before damping happens.

<div id="_class_sliderjoint3d_constant_param_linear_limit_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_LIMIT_SOFTNESS** = ``2``

Constant for accessing [`linear_limit/softness`](#class_sliderjoint3d_property_linear_limit/softness). A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.

<div id="_class_sliderjoint3d_constant_param_linear_limit_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_LIMIT_RESTITUTION** = ``3``

Constant for accessing [`linear_limit/restitution`](#class_sliderjoint3d_property_linear_limit/restitution). The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.

<div id="_class_sliderjoint3d_constant_param_linear_limit_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_LIMIT_DAMPING** = ``4``

Constant for accessing [`linear_limit/damping`](#class_sliderjoint3d_property_linear_limit/damping). The amount of damping once the slider limits are surpassed.

<div id="_class_sliderjoint3d_constant_param_linear_motion_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_MOTION_SOFTNESS** = ``5``

Constant for accessing [`linear_motion/softness`](#class_sliderjoint3d_property_linear_motion/softness). A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.

<div id="_class_sliderjoint3d_constant_param_linear_motion_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_MOTION_RESTITUTION** = ``6``

Constant for accessing [`linear_motion/restitution`](#class_sliderjoint3d_property_linear_motion/restitution). The amount of restitution inside the slider limits.

<div id="_class_sliderjoint3d_constant_param_linear_motion_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_MOTION_DAMPING** = ``7``

Constant for accessing [`linear_motion/damping`](#class_sliderjoint3d_property_linear_motion/damping). The amount of damping inside the slider limits.

<div id="_class_sliderjoint3d_constant_param_linear_orthogonal_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_ORTHOGONAL_SOFTNESS** = ``8``

Constant for accessing [`linear_ortho/softness`](#class_sliderjoint3d_property_linear_ortho/softness). A factor applied to the movement across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_linear_orthogonal_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_ORTHOGONAL_RESTITUTION** = ``9``

Constant for accessing [`linear_motion/restitution`](#class_sliderjoint3d_property_linear_motion/restitution). The amount of restitution when movement is across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_linear_orthogonal_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_LINEAR_ORTHOGONAL_DAMPING** = ``10``

Constant for accessing [`linear_motion/damping`](#class_sliderjoint3d_property_linear_motion/damping). The amount of damping when movement is across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_angular_limit_upper"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_LIMIT_UPPER** = ``11``

Constant for accessing [`angular_limit/upper_angle`](#class_sliderjoint3d_property_angular_limit/upper_angle). The upper limit of rotation in the slider.

<div id="_class_sliderjoint3d_constant_param_angular_limit_lower"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_LIMIT_LOWER** = ``12``

Constant for accessing [`angular_limit/lower_angle`](#class_sliderjoint3d_property_angular_limit/lower_angle). The lower limit of rotation in the slider.

<div id="_class_sliderjoint3d_constant_param_angular_limit_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_LIMIT_SOFTNESS** = ``13``

Constant for accessing [`angular_limit/softness`](#class_sliderjoint3d_property_angular_limit/softness). A factor applied to the all rotation once the limit is surpassed.

<div id="_class_sliderjoint3d_constant_param_angular_limit_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_LIMIT_RESTITUTION** = ``14``

Constant for accessing [`angular_limit/restitution`](#class_sliderjoint3d_property_angular_limit/restitution). The amount of restitution of the rotation when the limit is surpassed.

<div id="_class_sliderjoint3d_constant_param_angular_limit_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_LIMIT_DAMPING** = ``15``

Constant for accessing [`angular_limit/damping`](#class_sliderjoint3d_property_angular_limit/damping). The amount of damping of the rotation when the limit is surpassed.

<div id="_class_sliderjoint3d_constant_param_angular_motion_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_MOTION_SOFTNESS** = ``16``

Constant for accessing [`angular_motion/softness`](#class_sliderjoint3d_property_angular_motion/softness). A factor applied to the all rotation in the limits.

<div id="_class_sliderjoint3d_constant_param_angular_motion_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_MOTION_RESTITUTION** = ``17``

Constant for accessing [`angular_motion/restitution`](#class_sliderjoint3d_property_angular_motion/restitution). The amount of restitution of the rotation in the limits.

<div id="_class_sliderjoint3d_constant_param_angular_motion_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_MOTION_DAMPING** = ``18``

Constant for accessing [`angular_motion/damping`](#class_sliderjoint3d_property_angular_motion/damping). The amount of damping of the rotation in the limits.

<div id="_class_sliderjoint3d_constant_param_angular_orthogonal_softness"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_ORTHOGONAL_SOFTNESS** = ``19``

Constant for accessing [`angular_ortho/softness`](#class_sliderjoint3d_property_angular_ortho/softness). A factor applied to the all rotation across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_angular_orthogonal_restitution"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_ORTHOGONAL_RESTITUTION** = ``20``

Constant for accessing [`angular_ortho/restitution`](#class_sliderjoint3d_property_angular_ortho/restitution). The amount of restitution of the rotation across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_angular_orthogonal_damping"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_ANGULAR_ORTHOGONAL_DAMPING** = ``21``

Constant for accessing [`angular_ortho/damping`](#class_sliderjoint3d_property_angular_ortho/damping). The amount of damping of the rotation across axes orthogonal to the slider.

<div id="_class_sliderjoint3d_constant_param_max"></div>

[Param](#enum_sliderjoint3d_param) **PARAM_MAX** = ``22``

Represents the size of the [Param](#enum_sliderjoint3d_param) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_sliderjoint3d_property_angular_limit/damping"></div>

[`float`](class_float.md) **angular_limit/damping** = ``0.0`` <div id="class_sliderjoint3d_property_angular_limit/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping of the rotation when the limit is surpassed.

A lower damping value allows a rotation initiated by body A to travel to body B slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_limit/lower_angle"></div>

[`float`](class_float.md) **angular_limit/lower_angle** = ``0.0`` <div id="class_sliderjoint3d_property_angular_limit/lower_angle"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The lower limit of rotation in the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_limit/restitution"></div>

[`float`](class_float.md) **angular_limit/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_angular_limit/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution of the rotation when the limit is surpassed.

Does not affect damping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_limit/softness"></div>

[`float`](class_float.md) **angular_limit/softness** = ``1.0`` <div id="class_sliderjoint3d_property_angular_limit/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the all rotation once the limit is surpassed.

Makes all rotation slower when between 0 and 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_limit/upper_angle"></div>

[`float`](class_float.md) **angular_limit/upper_angle** = ``0.0`` <div id="class_sliderjoint3d_property_angular_limit/upper_angle"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The upper limit of rotation in the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_motion/damping"></div>

[`float`](class_float.md) **angular_motion/damping** = ``1.0`` <div id="class_sliderjoint3d_property_angular_motion/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping of the rotation in the limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_motion/restitution"></div>

[`float`](class_float.md) **angular_motion/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_angular_motion/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution of the rotation in the limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_motion/softness"></div>

[`float`](class_float.md) **angular_motion/softness** = ``1.0`` <div id="class_sliderjoint3d_property_angular_motion/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the all rotation in the limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_ortho/damping"></div>

[`float`](class_float.md) **angular_ortho/damping** = ``1.0`` <div id="class_sliderjoint3d_property_angular_ortho/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping of the rotation across axes orthogonal to the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_ortho/restitution"></div>

[`float`](class_float.md) **angular_ortho/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_angular_ortho/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution of the rotation across axes orthogonal to the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_angular_ortho/softness"></div>

[`float`](class_float.md) **angular_ortho/softness** = ``1.0`` <div id="class_sliderjoint3d_property_angular_ortho/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the all rotation across axes orthogonal to the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_limit/damping"></div>

[`float`](class_float.md) **linear_limit/damping** = ``1.0`` <div id="class_sliderjoint3d_property_linear_limit/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping that happens once the limit defined by [`linear_limit/lower_distance`](#class_sliderjoint3d_property_linear_limit/lower_distance) and [`linear_limit/upper_distance`](#class_sliderjoint3d_property_linear_limit/upper_distance) is surpassed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_limit/lower_distance"></div>

[`float`](class_float.md) **linear_limit/lower_distance** = ``-1.0`` <div id="class_sliderjoint3d_property_linear_limit/lower_distance"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The minimum difference between the pivot points on their X axis before damping happens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_limit/restitution"></div>

[`float`](class_float.md) **linear_limit/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_linear_limit/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_limit/softness"></div>

[`float`](class_float.md) **linear_limit/softness** = ``1.0`` <div id="class_sliderjoint3d_property_linear_limit/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_limit/upper_distance"></div>

[`float`](class_float.md) **linear_limit/upper_distance** = ``1.0`` <div id="class_sliderjoint3d_property_linear_limit/upper_distance"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The maximum difference between the pivot points on their X axis before damping happens.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_motion/damping"></div>

[`float`](class_float.md) **linear_motion/damping** = ``0.0`` <div id="class_sliderjoint3d_property_linear_motion/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping inside the slider limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_motion/restitution"></div>

[`float`](class_float.md) **linear_motion/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_linear_motion/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution inside the slider limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_motion/softness"></div>

[`float`](class_float.md) **linear_motion/softness** = ``1.0`` <div id="class_sliderjoint3d_property_linear_motion/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_ortho/damping"></div>

[`float`](class_float.md) **linear_ortho/damping** = ``1.0`` <div id="class_sliderjoint3d_property_linear_ortho/damping"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of damping when movement is across axes orthogonal to the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_ortho/restitution"></div>

[`float`](class_float.md) **linear_ortho/restitution** = ``0.7`` <div id="class_sliderjoint3d_property_linear_ortho/restitution"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

The amount of restitution when movement is across axes orthogonal to the slider.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_property_linear_ortho/softness"></div>

[`float`](class_float.md) **linear_ortho/softness** = ``1.0`` <div id="class_sliderjoint3d_property_linear_ortho/softness"></div>

- `void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]

A factor applied to the movement across axes orthogonal to the slider.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_sliderjoint3d_method_get_param"></div>

[`float`](class_float.md) **get_param** ( param: [Param](#enum_sliderjoint3d_param) ) const[^const]<div id="class_sliderjoint3d_method_get_param"></div>

Returns the value of the given parameter (see [Param](#enum_sliderjoint3d_param) constants).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_sliderjoint3d_method_set_param"></div>

`void` **set_param** ( param: [Param](#enum_sliderjoint3d_param), value: [`float`](class_float.md) )<div id="class_sliderjoint3d_method_set_param"></div>

Assigns `value` to the given parameter (see [Param](#enum_sliderjoint3d_param) constants).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
