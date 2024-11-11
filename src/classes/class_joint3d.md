<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Joint3D.xml。 -->

<div id="_class_joint3d"></div>

# Joint3D

**继承：** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`ConeTwistJoint3D`](class_conetwistjoint3d.md), [`Generic6DOFJoint3D`](class_generic6dofjoint3d.md), [`HingeJoint3D`](class_hingejoint3d.md), [`PinJoint3D`](class_pinjoint3d.md), [`SliderJoint3D`](class_sliderjoint3d.md)

Abstract base class for all 3D physics joints.

## 描述

Abstract base class for all joints in 3D physics. 3D joints bind together two physics bodies ([`node_a`](class_joint3d.md#class_joint3d_property_node_a) and [`node_b`](class_joint3d.md#class_joint3d_property_node_b)) and apply a constraint. If only one body is defined, it is attached to a fixed [`StaticBody3D`](class_staticbody3d.md) without collision shapes.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)         | [`exclude_nodes_from_collision`](class_joint3d.md#class_joint3d_property_exclude_nodes_from_collision) | ``true``         |
| [`NodePath`](class_nodepath.md) | [`node_a`](class_joint3d.md#class_joint3d_property_node_a)                                             | ``NodePath("")`` |
| [`NodePath`](class_nodepath.md) | [`node_b`](class_joint3d.md#class_joint3d_property_node_b)                                             | ``NodePath("")`` |
| [`int`](class_int.md)           | [`solver_priority`](class_joint3d.md#class_joint3d_property_solver_priority)                           | ``1``            |

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md) | [`get_rid`](class_joint3d.md#class_joint3d_method_get_rid) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_joint3d_property_exclude_nodes_from_collision"></div>

[`bool`](class_bool.md) **exclude_nodes_from_collision** = ``true`` <div id="class_joint3d_property_exclude_nodes_from_collision"></div>

- `void` **set_exclude_nodes_from_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_exclude_nodes_from_collision** ( )

If `true`, the two bodies bound together do not collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint3d_property_node_a"></div>

[`NodePath`](class_nodepath.md) **node_a** = ``NodePath("")`` <div id="class_joint3d_property_node_a"></div>

- `void` **set_node_a** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_node_a** ( )

Path to the first node (A) attached to the joint. The node must inherit [`PhysicsBody3D`](class_physicsbody3d.md).

If left empty and [`node_b`](class_joint3d.md#class_joint3d_property_node_b) is set, the body is attached to a fixed [`StaticBody3D`](class_staticbody3d.md) without collision shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint3d_property_node_b"></div>

[`NodePath`](class_nodepath.md) **node_b** = ``NodePath("")`` <div id="class_joint3d_property_node_b"></div>

- `void` **set_node_b** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_node_b** ( )

Path to the second node (B) attached to the joint. The node must inherit [`PhysicsBody3D`](class_physicsbody3d.md).

If left empty and [`node_a`](class_joint3d.md#class_joint3d_property_node_a) is set, the body is attached to a fixed [`StaticBody3D`](class_staticbody3d.md) without collision shapes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint3d_property_solver_priority"></div>

[`int`](class_int.md) **solver_priority** = ``1`` <div id="class_joint3d_property_solver_priority"></div>

- `void` **set_solver_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_solver_priority** ( )

The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_joint3d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_joint3d_method_get_rid"></div>

Returns the joint's internal [`RID`](class_rid.md) from the [`PhysicsServer3D`](class_physicsserver3d.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
