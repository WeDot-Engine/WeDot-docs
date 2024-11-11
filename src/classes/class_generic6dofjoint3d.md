<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Generic6DOFJoint3D.xml。 -->

<div id="_class_generic6dofjoint3d"></div>

# Generic6DOFJoint3D

**继承：** [`Joint3D`](class_joint3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A physics joint that allows for complex movement and rotation between two 3D physics bodies.

## 描述

The **Generic6DOFJoint3D** (6 Degrees Of Freedom) joint allows for implementing custom types of joints by locking the rotation and translation of certain axes.

The first 3 DOF represent the linear motion of the physics bodies and the last 3 DOF represent the angular motion of the physics bodies. Each axis can be either locked, or limited.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`angular_limit_x/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/damping)                       | ``1.0``   |
| [`bool`](class_bool.md)   | [`angular_limit_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/enabled)                       | ``true``  |
| [`float`](class_float.md) | [`angular_limit_x/erp`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/erp)                               | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_x/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/force_limit)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_x/lower_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/lower_angle)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_x/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/restitution)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_x/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/softness)                     | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_x/upper_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_x/upper_angle)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_y/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/damping)                       | ``1.0``   |
| [`bool`](class_bool.md)   | [`angular_limit_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/enabled)                       | ``true``  |
| [`float`](class_float.md) | [`angular_limit_y/erp`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/erp)                               | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_y/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/force_limit)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_y/lower_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/lower_angle)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_y/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/restitution)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_y/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/softness)                     | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_y/upper_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_y/upper_angle)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_z/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/damping)                       | ``1.0``   |
| [`bool`](class_bool.md)   | [`angular_limit_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/enabled)                       | ``true``  |
| [`float`](class_float.md) | [`angular_limit_z/erp`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/erp)                               | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_z/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/force_limit)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_z/lower_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/lower_angle)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_z/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/restitution)               | ``0.0``   |
| [`float`](class_float.md) | [`angular_limit_z/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/softness)                     | ``0.5``   |
| [`float`](class_float.md) | [`angular_limit_z/upper_angle`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_limit_z/upper_angle)               | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_motor_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_x/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`angular_motor_x/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_x/force_limit)               | ``300.0`` |
| [`float`](class_float.md) | [`angular_motor_x/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_x/target_velocity)       | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_motor_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_y/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`angular_motor_y/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_y/force_limit)               | ``300.0`` |
| [`float`](class_float.md) | [`angular_motor_y/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_y/target_velocity)       | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_motor_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_z/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`angular_motor_z/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_z/force_limit)               | ``300.0`` |
| [`float`](class_float.md) | [`angular_motor_z/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_motor_z/target_velocity)       | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_x/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_x/damping)                     | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_spring_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_x/enabled)                     | ``false`` |
| [`float`](class_float.md) | [`angular_spring_x/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_x/equilibrium_point) | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_x/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_x/stiffness)                 | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_y/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_y/damping)                     | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_spring_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_y/enabled)                     | ``false`` |
| [`float`](class_float.md) | [`angular_spring_y/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_y/equilibrium_point) | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_y/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_y/stiffness)                 | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_z/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_z/damping)                     | ``0.0``   |
| [`bool`](class_bool.md)   | [`angular_spring_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_z/enabled)                     | ``false`` |
| [`float`](class_float.md) | [`angular_spring_z/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_z/equilibrium_point) | ``0.0``   |
| [`float`](class_float.md) | [`angular_spring_z/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_angular_spring_z/stiffness)                 | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_x/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/damping)                         | ``1.0``   |
| [`bool`](class_bool.md)   | [`linear_limit_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/enabled)                         | ``true``  |
| [`float`](class_float.md) | [`linear_limit_x/lower_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/lower_distance)           | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_x/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/restitution)                 | ``0.5``   |
| [`float`](class_float.md) | [`linear_limit_x/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/softness)                       | ``0.7``   |
| [`float`](class_float.md) | [`linear_limit_x/upper_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_x/upper_distance)           | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_y/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/damping)                         | ``1.0``   |
| [`bool`](class_bool.md)   | [`linear_limit_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/enabled)                         | ``true``  |
| [`float`](class_float.md) | [`linear_limit_y/lower_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/lower_distance)           | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_y/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/restitution)                 | ``0.5``   |
| [`float`](class_float.md) | [`linear_limit_y/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/softness)                       | ``0.7``   |
| [`float`](class_float.md) | [`linear_limit_y/upper_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_y/upper_distance)           | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_z/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/damping)                         | ``1.0``   |
| [`bool`](class_bool.md)   | [`linear_limit_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/enabled)                         | ``true``  |
| [`float`](class_float.md) | [`linear_limit_z/lower_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/lower_distance)           | ``0.0``   |
| [`float`](class_float.md) | [`linear_limit_z/restitution`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/restitution)                 | ``0.5``   |
| [`float`](class_float.md) | [`linear_limit_z/softness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/softness)                       | ``0.7``   |
| [`float`](class_float.md) | [`linear_limit_z/upper_distance`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_limit_z/upper_distance)           | ``0.0``   |
| [`bool`](class_bool.md)   | [`linear_motor_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_x/enabled)                         | ``false`` |
| [`float`](class_float.md) | [`linear_motor_x/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_x/force_limit)                 | ``0.0``   |
| [`float`](class_float.md) | [`linear_motor_x/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_x/target_velocity)         | ``0.0``   |
| [`bool`](class_bool.md)   | [`linear_motor_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_y/enabled)                         | ``false`` |
| [`float`](class_float.md) | [`linear_motor_y/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_y/force_limit)                 | ``0.0``   |
| [`float`](class_float.md) | [`linear_motor_y/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_y/target_velocity)         | ``0.0``   |
| [`bool`](class_bool.md)   | [`linear_motor_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_z/enabled)                         | ``false`` |
| [`float`](class_float.md) | [`linear_motor_z/force_limit`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_z/force_limit)                 | ``0.0``   |
| [`float`](class_float.md) | [`linear_motor_z/target_velocity`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_motor_z/target_velocity)         | ``0.0``   |
| [`float`](class_float.md) | [`linear_spring_x/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_x/damping)                       | ``0.01``  |
| [`bool`](class_bool.md)   | [`linear_spring_x/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_x/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`linear_spring_x/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_x/equilibrium_point)   | ``0.0``   |
| [`float`](class_float.md) | [`linear_spring_x/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_x/stiffness)                   | ``0.01``  |
| [`float`](class_float.md) | [`linear_spring_y/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_y/damping)                       | ``0.01``  |
| [`bool`](class_bool.md)   | [`linear_spring_y/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_y/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`linear_spring_y/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_y/equilibrium_point)   | ``0.0``   |
| [`float`](class_float.md) | [`linear_spring_y/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_y/stiffness)                   | ``0.01``  |
| [`float`](class_float.md) | [`linear_spring_z/damping`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_z/damping)                       | ``0.01``  |
| [`bool`](class_bool.md)   | [`linear_spring_z/enabled`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_z/enabled)                       | ``false`` |
| [`float`](class_float.md) | [`linear_spring_z/equilibrium_point`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_z/equilibrium_point)   | ``0.0``   |
| [`float`](class_float.md) | [`linear_spring_z/stiffness`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_property_linear_spring_z/stiffness)                   | ``0.01``  |

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`get_flag_x`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_flag_x) ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]                          |
| [`bool`](class_bool.md)   | [`get_flag_y`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_flag_y) ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]                          |
| [`bool`](class_bool.md)   | [`get_flag_z`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_flag_z) ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]                          |
| [`float`](class_float.md) | [`get_param_x`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_param_x) ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]                     |
| [`float`](class_float.md) | [`get_param_y`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_param_y) ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]                     |
| [`float`](class_float.md) | [`get_param_z`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_get_param_z) ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]                     |
| `void`                    | [`set_flag_x`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_flag_x) ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )        |
| `void`                    | [`set_flag_y`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_flag_y) ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )        |
| `void`                    | [`set_flag_z`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_flag_z) ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )        |
| `void`                    | [`set_param_x`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_param_x) ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) ) |
| `void`                    | [`set_param_y`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_param_y) ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) ) |
| `void`                    | [`set_param_z`](class_generic6dofjoint3d.md#class_generic6dofjoint3d_method_set_param_z) ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_generic6dofjoint3d_param"></div>

enum **Param**: <div id="enum_generic6dofjoint3d_param"></div>

<div id="_class_generic6dofjoint3d_constant_param_linear_lower_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_LOWER_LIMIT** = ``0``

The minimum difference between the pivot points' axes.

<div id="_class_generic6dofjoint3d_constant_param_linear_upper_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_UPPER_LIMIT** = ``1``

The maximum difference between the pivot points' axes.

<div id="_class_generic6dofjoint3d_constant_param_linear_limit_softness"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_LIMIT_SOFTNESS** = ``2``

A factor applied to the movement across the axes. The lower, the slower the movement.

<div id="_class_generic6dofjoint3d_constant_param_linear_restitution"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_RESTITUTION** = ``3``

The amount of restitution on the axes' movement. The lower, the more momentum gets lost.

<div id="_class_generic6dofjoint3d_constant_param_linear_damping"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_DAMPING** = ``4``

The amount of damping that happens at the linear motion across the axes.

<div id="_class_generic6dofjoint3d_constant_param_linear_motor_target_velocity"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_MOTOR_TARGET_VELOCITY** = ``5``

The velocity the linear motor will try to reach.

<div id="_class_generic6dofjoint3d_constant_param_linear_motor_force_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_MOTOR_FORCE_LIMIT** = ``6``

The maximum force the linear motor will apply while trying to reach the velocity target.

<div id="_class_generic6dofjoint3d_constant_param_linear_spring_stiffness"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_SPRING_STIFFNESS** = ``7``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_linear_spring_damping"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_SPRING_DAMPING** = ``8``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_linear_spring_equilibrium_point"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT** = ``9``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_angular_lower_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_LOWER_LIMIT** = ``10``

The minimum rotation in negative direction to break loose and rotate around the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_upper_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_UPPER_LIMIT** = ``11``

The minimum rotation in positive direction to break loose and rotate around the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_limit_softness"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_LIMIT_SOFTNESS** = ``12``

The speed of all rotations across the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_damping"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_DAMPING** = ``13``

The amount of rotational damping across the axes. The lower, the more damping occurs.

<div id="_class_generic6dofjoint3d_constant_param_angular_restitution"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_RESTITUTION** = ``14``

The amount of rotational restitution across the axes. The lower, the more restitution occurs.

<div id="_class_generic6dofjoint3d_constant_param_angular_force_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_FORCE_LIMIT** = ``15``

The maximum amount of force that can occur, when rotating around the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_erp"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_ERP** = ``16``

When rotating across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.

<div id="_class_generic6dofjoint3d_constant_param_angular_motor_target_velocity"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_MOTOR_TARGET_VELOCITY** = ``17``

Target speed for the motor at the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_motor_force_limit"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_MOTOR_FORCE_LIMIT** = ``18``

Maximum acceleration for the motor at the axes.

<div id="_class_generic6dofjoint3d_constant_param_angular_spring_stiffness"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_SPRING_STIFFNESS** = ``19``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_angular_spring_damping"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_SPRING_DAMPING** = ``20``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_angular_spring_equilibrium_point"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT** = ``21``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_param_max"></div>

[Param](#enum_generic6dofjoint3d_param) **PARAM_MAX** = ``22``

Represents the size of the [Param](#enum_generic6dofjoint3d_param) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_generic6dofjoint3d_flag"></div>

enum **Flag**: <div id="enum_generic6dofjoint3d_flag"></div>

<div id="_class_generic6dofjoint3d_constant_flag_enable_linear_limit"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_LINEAR_LIMIT** = ``0``

If enabled, linear motion is possible within the given limits.

<div id="_class_generic6dofjoint3d_constant_flag_enable_angular_limit"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_ANGULAR_LIMIT** = ``1``

If enabled, rotational motion is possible within the given limits.

<div id="_class_generic6dofjoint3d_constant_flag_enable_linear_spring"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_LINEAR_SPRING** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_flag_enable_angular_spring"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_ANGULAR_SPRING** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_generic6dofjoint3d_constant_flag_enable_motor"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_MOTOR** = ``4``

If enabled, there is a rotational motor across these axes.

<div id="_class_generic6dofjoint3d_constant_flag_enable_linear_motor"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_ENABLE_LINEAR_MOTOR** = ``5``

If enabled, there is a linear motor across these axes.

<div id="_class_generic6dofjoint3d_constant_flag_max"></div>

[Flag](#enum_generic6dofjoint3d_flag) **FLAG_MAX** = ``6``

Represents the size of the [Flag](#enum_generic6dofjoint3d_flag) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_generic6dofjoint3d_property_angular_limit_x/damping"></div>

[`float`](class_float.md) **angular_limit_x/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_angular_limit_x/damping"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational damping across the X axis.

The lower, the longer an impulse from one side takes to travel to the other side.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/enabled"></div>

[`bool`](class_bool.md) **angular_limit_x/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_angular_limit_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, rotation across the X axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/erp"></div>

[`float`](class_float.md) **angular_limit_x/erp** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_x/erp"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

When rotating across the X axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/force_limit"></div>

[`float`](class_float.md) **angular_limit_x/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_x/force_limit"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum amount of force that can occur, when rotating around the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/lower_angle"></div>

[`float`](class_float.md) **angular_limit_x/lower_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_x/lower_angle"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in negative direction to break loose and rotate around the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/restitution"></div>

[`float`](class_float.md) **angular_limit_x/restitution** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_x/restitution"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational restitution across the X axis. The lower, the more restitution occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/softness"></div>

[`float`](class_float.md) **angular_limit_x/softness** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_x/softness"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed of all rotations across the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_x/upper_angle"></div>

[`float`](class_float.md) **angular_limit_x/upper_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_x/upper_angle"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in positive direction to break loose and rotate around the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/damping"></div>

[`float`](class_float.md) **angular_limit_y/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_angular_limit_y/damping"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational damping across the Y axis. The lower, the more damping occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/enabled"></div>

[`bool`](class_bool.md) **angular_limit_y/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_angular_limit_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, rotation across the Y axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/erp"></div>

[`float`](class_float.md) **angular_limit_y/erp** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_y/erp"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

When rotating across the Y axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/force_limit"></div>

[`float`](class_float.md) **angular_limit_y/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_y/force_limit"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum amount of force that can occur, when rotating around the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/lower_angle"></div>

[`float`](class_float.md) **angular_limit_y/lower_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_y/lower_angle"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in negative direction to break loose and rotate around the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/restitution"></div>

[`float`](class_float.md) **angular_limit_y/restitution** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_y/restitution"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational restitution across the Y axis. The lower, the more restitution occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/softness"></div>

[`float`](class_float.md) **angular_limit_y/softness** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_y/softness"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed of all rotations across the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_y/upper_angle"></div>

[`float`](class_float.md) **angular_limit_y/upper_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_y/upper_angle"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in positive direction to break loose and rotate around the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/damping"></div>

[`float`](class_float.md) **angular_limit_z/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_angular_limit_z/damping"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational damping across the Z axis. The lower, the more damping occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/enabled"></div>

[`bool`](class_bool.md) **angular_limit_z/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_angular_limit_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, rotation across the Z axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/erp"></div>

[`float`](class_float.md) **angular_limit_z/erp** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_z/erp"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

When rotating across the Z axis, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/force_limit"></div>

[`float`](class_float.md) **angular_limit_z/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_z/force_limit"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum amount of force that can occur, when rotating around the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/lower_angle"></div>

[`float`](class_float.md) **angular_limit_z/lower_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_z/lower_angle"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in negative direction to break loose and rotate around the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/restitution"></div>

[`float`](class_float.md) **angular_limit_z/restitution** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_z/restitution"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of rotational restitution across the Z axis. The lower, the more restitution occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/softness"></div>

[`float`](class_float.md) **angular_limit_z/softness** = ``0.5`` <div id="class_generic6dofjoint3d_property_angular_limit_z/softness"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed of all rotations across the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_limit_z/upper_angle"></div>

[`float`](class_float.md) **angular_limit_z/upper_angle** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_limit_z/upper_angle"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum rotation in positive direction to break loose and rotate around the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_x/enabled"></div>

[`bool`](class_bool.md) **angular_motor_x/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_motor_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, a rotating motor at the X axis is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_x/force_limit"></div>

[`float`](class_float.md) **angular_motor_x/force_limit** = ``300.0`` <div id="class_generic6dofjoint3d_property_angular_motor_x/force_limit"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Maximum acceleration for the motor at the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_x/target_velocity"></div>

[`float`](class_float.md) **angular_motor_x/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_motor_x/target_velocity"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Target speed for the motor at the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_y/enabled"></div>

[`bool`](class_bool.md) **angular_motor_y/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_motor_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, a rotating motor at the Y axis is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_y/force_limit"></div>

[`float`](class_float.md) **angular_motor_y/force_limit** = ``300.0`` <div id="class_generic6dofjoint3d_property_angular_motor_y/force_limit"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Maximum acceleration for the motor at the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_y/target_velocity"></div>

[`float`](class_float.md) **angular_motor_y/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_motor_y/target_velocity"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Target speed for the motor at the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_z/enabled"></div>

[`bool`](class_bool.md) **angular_motor_z/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_motor_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, a rotating motor at the Z axis is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_z/force_limit"></div>

[`float`](class_float.md) **angular_motor_z/force_limit** = ``300.0`` <div id="class_generic6dofjoint3d_property_angular_motor_z/force_limit"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Maximum acceleration for the motor at the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_motor_z/target_velocity"></div>

[`float`](class_float.md) **angular_motor_z/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_motor_z/target_velocity"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

Target speed for the motor at the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_x/damping"></div>

[`float`](class_float.md) **angular_spring_x/damping** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_x/damping"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_x/enabled"></div>

[`bool`](class_bool.md) **angular_spring_x/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_spring_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_x/equilibrium_point"></div>

[`float`](class_float.md) **angular_spring_x/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_x/equilibrium_point"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_x/stiffness"></div>

[`float`](class_float.md) **angular_spring_x/stiffness** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_x/stiffness"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_y/damping"></div>

[`float`](class_float.md) **angular_spring_y/damping** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_y/damping"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_y/enabled"></div>

[`bool`](class_bool.md) **angular_spring_y/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_spring_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_y/equilibrium_point"></div>

[`float`](class_float.md) **angular_spring_y/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_y/equilibrium_point"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_y/stiffness"></div>

[`float`](class_float.md) **angular_spring_y/stiffness** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_y/stiffness"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_z/damping"></div>

[`float`](class_float.md) **angular_spring_z/damping** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_z/damping"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_z/enabled"></div>

[`bool`](class_bool.md) **angular_spring_z/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_angular_spring_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_z/equilibrium_point"></div>

[`float`](class_float.md) **angular_spring_z/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_z/equilibrium_point"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_angular_spring_z/stiffness"></div>

[`float`](class_float.md) **angular_spring_z/stiffness** = ``0.0`` <div id="class_generic6dofjoint3d_property_angular_spring_z/stiffness"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/damping"></div>

[`float`](class_float.md) **linear_limit_x/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_linear_limit_x/damping"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of damping that happens at the X motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/enabled"></div>

[`bool`](class_bool.md) **linear_limit_x/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_linear_limit_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, the linear motion across the X axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/lower_distance"></div>

[`float`](class_float.md) **linear_limit_x/lower_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_x/lower_distance"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum difference between the pivot points' X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/restitution"></div>

[`float`](class_float.md) **linear_limit_x/restitution** = ``0.5`` <div id="class_generic6dofjoint3d_property_linear_limit_x/restitution"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of restitution on the X axis movement. The lower, the more momentum gets lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/softness"></div>

[`float`](class_float.md) **linear_limit_x/softness** = ``0.7`` <div id="class_generic6dofjoint3d_property_linear_limit_x/softness"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

A factor applied to the movement across the X axis. The lower, the slower the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_x/upper_distance"></div>

[`float`](class_float.md) **linear_limit_x/upper_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_x/upper_distance"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum difference between the pivot points' X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/damping"></div>

[`float`](class_float.md) **linear_limit_y/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_linear_limit_y/damping"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of damping that happens at the Y motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/enabled"></div>

[`bool`](class_bool.md) **linear_limit_y/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_linear_limit_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, the linear motion across the Y axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/lower_distance"></div>

[`float`](class_float.md) **linear_limit_y/lower_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_y/lower_distance"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum difference between the pivot points' Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/restitution"></div>

[`float`](class_float.md) **linear_limit_y/restitution** = ``0.5`` <div id="class_generic6dofjoint3d_property_linear_limit_y/restitution"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of restitution on the Y axis movement. The lower, the more momentum gets lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/softness"></div>

[`float`](class_float.md) **linear_limit_y/softness** = ``0.7`` <div id="class_generic6dofjoint3d_property_linear_limit_y/softness"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

A factor applied to the movement across the Y axis. The lower, the slower the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_y/upper_distance"></div>

[`float`](class_float.md) **linear_limit_y/upper_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_y/upper_distance"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum difference between the pivot points' Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/damping"></div>

[`float`](class_float.md) **linear_limit_z/damping** = ``1.0`` <div id="class_generic6dofjoint3d_property_linear_limit_z/damping"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of damping that happens at the Z motion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/enabled"></div>

[`bool`](class_bool.md) **linear_limit_z/enabled** = ``true`` <div id="class_generic6dofjoint3d_property_linear_limit_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, the linear motion across the Z axis is limited.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/lower_distance"></div>

[`float`](class_float.md) **linear_limit_z/lower_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_z/lower_distance"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The minimum difference between the pivot points' Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/restitution"></div>

[`float`](class_float.md) **linear_limit_z/restitution** = ``0.5`` <div id="class_generic6dofjoint3d_property_linear_limit_z/restitution"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The amount of restitution on the Z axis movement. The lower, the more momentum gets lost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/softness"></div>

[`float`](class_float.md) **linear_limit_z/softness** = ``0.7`` <div id="class_generic6dofjoint3d_property_linear_limit_z/softness"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

A factor applied to the movement across the Z axis. The lower, the slower the movement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_limit_z/upper_distance"></div>

[`float`](class_float.md) **linear_limit_z/upper_distance** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_limit_z/upper_distance"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum difference between the pivot points' Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_x/enabled"></div>

[`bool`](class_bool.md) **linear_motor_x/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_motor_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, then there is a linear motor on the X axis. It will attempt to reach the target velocity while staying within the force limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_x/force_limit"></div>

[`float`](class_float.md) **linear_motor_x/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_x/force_limit"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum force the linear motor can apply on the X axis while trying to reach the target velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_x/target_velocity"></div>

[`float`](class_float.md) **linear_motor_x/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_x/target_velocity"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed that the linear motor will attempt to reach on the X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_y/enabled"></div>

[`bool`](class_bool.md) **linear_motor_y/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_motor_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, then there is a linear motor on the Y axis. It will attempt to reach the target velocity while staying within the force limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_y/force_limit"></div>

[`float`](class_float.md) **linear_motor_y/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_y/force_limit"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum force the linear motor can apply on the Y axis while trying to reach the target velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_y/target_velocity"></div>

[`float`](class_float.md) **linear_motor_y/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_y/target_velocity"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed that the linear motor will attempt to reach on the Y axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_z/enabled"></div>

[`bool`](class_bool.md) **linear_motor_z/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_motor_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

If `true`, then there is a linear motor on the Z axis. It will attempt to reach the target velocity while staying within the force limits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_z/force_limit"></div>

[`float`](class_float.md) **linear_motor_z/force_limit** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_z/force_limit"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The maximum force the linear motor can apply on the Z axis while trying to reach the target velocity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_motor_z/target_velocity"></div>

[`float`](class_float.md) **linear_motor_z/target_velocity** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_motor_z/target_velocity"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

The speed that the linear motor will attempt to reach on the Z axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_x/damping"></div>

[`float`](class_float.md) **linear_spring_x/damping** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_x/damping"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_x/enabled"></div>

[`bool`](class_bool.md) **linear_spring_x/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_spring_x/enabled"></div>

- `void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_x/equilibrium_point"></div>

[`float`](class_float.md) **linear_spring_x/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_spring_x/equilibrium_point"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_x/stiffness"></div>

[`float`](class_float.md) **linear_spring_x/stiffness** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_x/stiffness"></div>

- `void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_y/damping"></div>

[`float`](class_float.md) **linear_spring_y/damping** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_y/damping"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_y/enabled"></div>

[`bool`](class_bool.md) **linear_spring_y/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_spring_y/enabled"></div>

- `void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_y/equilibrium_point"></div>

[`float`](class_float.md) **linear_spring_y/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_spring_y/equilibrium_point"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_y/stiffness"></div>

[`float`](class_float.md) **linear_spring_y/stiffness** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_y/stiffness"></div>

- `void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_z/damping"></div>

[`float`](class_float.md) **linear_spring_z/damping** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_z/damping"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_z/enabled"></div>

[`bool`](class_bool.md) **linear_spring_z/enabled** = ``false`` <div id="class_generic6dofjoint3d_property_linear_spring_z/enabled"></div>

- `void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_z/equilibrium_point"></div>

[`float`](class_float.md) **linear_spring_z/equilibrium_point** = ``0.0`` <div id="class_generic6dofjoint3d_property_linear_spring_z/equilibrium_point"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_property_linear_spring_z/stiffness"></div>

[`float`](class_float.md) **linear_spring_z/stiffness** = ``0.01`` <div id="class_generic6dofjoint3d_property_linear_spring_z/stiffness"></div>

- `void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_generic6dofjoint3d_method_get_flag_x"></div>

[`bool`](class_bool.md) **get_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]<div id="class_generic6dofjoint3d_method_get_flag_x"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_get_flag_y"></div>

[`bool`](class_bool.md) **get_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]<div id="class_generic6dofjoint3d_method_get_flag_y"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_get_flag_z"></div>

[`bool`](class_bool.md) **get_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag) ) const[^const]<div id="class_generic6dofjoint3d_method_get_flag_z"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_get_param_x"></div>

[`float`](class_float.md) **get_param_x** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]<div id="class_generic6dofjoint3d_method_get_param_x"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_get_param_y"></div>

[`float`](class_float.md) **get_param_y** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]<div id="class_generic6dofjoint3d_method_get_param_y"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_get_param_z"></div>

[`float`](class_float.md) **get_param_z** ( param: [Param](#enum_generic6dofjoint3d_param) ) const[^const]<div id="class_generic6dofjoint3d_method_get_param_z"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_flag_x"></div>

`void` **set_flag_x** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )<div id="class_generic6dofjoint3d_method_set_flag_x"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_flag_y"></div>

`void` **set_flag_y** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )<div id="class_generic6dofjoint3d_method_set_flag_y"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_flag_z"></div>

`void` **set_flag_z** ( flag: [Flag](#enum_generic6dofjoint3d_flag), value: [`bool`](class_bool.md) )<div id="class_generic6dofjoint3d_method_set_flag_z"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_param_x"></div>

`void` **set_param_x** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )<div id="class_generic6dofjoint3d_method_set_param_x"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_param_y"></div>

`void` **set_param_y** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )<div id="class_generic6dofjoint3d_method_set_param_y"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_generic6dofjoint3d_method_set_param_z"></div>

`void` **set_param_z** ( param: [Param](#enum_generic6dofjoint3d_param), value: [`float`](class_float.md) )<div id="class_generic6dofjoint3d_method_set_param_z"></div>

该方法目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
