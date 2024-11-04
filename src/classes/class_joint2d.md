<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Joint2D.xml。 -->

<div id="_class_joint2d"></div>

# Joint2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

**派生：** [`DampedSpringJoint2D`](class_dampedspringjoint2d.md), [`GrooveJoint2D`](class_groovejoint2d.md), [`PinJoint2D`](class_pinjoint2d.md)

Abstract base class for all 2D physics joints.

## 描述

Abstract base class for all joints in 2D physics. 2D joints bind together two physics bodies ([`node_a`](#class_joint2d_property_node_a) and [`node_b`](#class_joint2d_property_node_b)) and apply a constraint.

## 属性

| [`float`](class_float.md)       | [`bias`](#class_joint2d_property_bias)                           | ``0.0``          |
| [`bool`](class_bool.md)         | [`disable_collision`](#class_joint2d_property_disable_collision) | ``true``         |
| [`NodePath`](class_nodepath.md) | [`node_a`](#class_joint2d_property_node_a)                       | ``NodePath("")`` |
| [`NodePath`](class_nodepath.md) | [`node_b`](#class_joint2d_property_node_b)                       | ``NodePath("")`` |

## 方法

| [`RID`](class_rid.md) | [`get_rid`](#class_joint2d_method_get_rid) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_joint2d_property_bias"></div>

[`float`](class_float.md) **bias** = ``0.0`` <div id="class_joint2d_property_bias"></div>

- `void` **set_bias** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bias** ( )

When [`node_a`](#class_joint2d_property_node_a) and [`node_b`](#class_joint2d_property_node_b) move in different directions the [`bias`](#class_joint2d_property_bias) controls how fast the joint pulls them back to their original position. The lower the [`bias`](#class_joint2d_property_bias) the more the two bodies can pull on the joint.

When set to `0`, the default value from [`ProjectSettings.physics/2d/solver/default_constraint_bias`](#class_projectsettings_property_physics/2d/solver/default_constraint_bias) is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint2d_property_disable_collision"></div>

[`bool`](class_bool.md) **disable_collision** = ``true`` <div id="class_joint2d_property_disable_collision"></div>

- `void` **set_exclude_nodes_from_collision** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_exclude_nodes_from_collision** ( )

If `true`, the two bodies bound together do not collide with each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint2d_property_node_a"></div>

[`NodePath`](class_nodepath.md) **node_a** = ``NodePath("")`` <div id="class_joint2d_property_node_a"></div>

- `void` **set_node_a** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_node_a** ( )

Path to the first body (A) attached to the joint. The node must inherit [`PhysicsBody2D`](class_physicsbody2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_joint2d_property_node_b"></div>

[`NodePath`](class_nodepath.md) **node_b** = ``NodePath("")`` <div id="class_joint2d_property_node_b"></div>

- `void` **set_node_b** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_node_b** ( )

Path to the second body (B) attached to the joint. The node must inherit [`PhysicsBody2D`](class_physicsbody2d.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_joint2d_method_get_rid"></div>

[`RID`](class_rid.md) **get_rid** ( ) const[^const]<div id="class_joint2d_method_get_rid"></div>

Returns the joint's internal [`RID`](class_rid.md) from the [`PhysicsServer2D`](class_physicsserver2d.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
