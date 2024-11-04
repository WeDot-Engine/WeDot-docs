<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/PhysicalBone2D.xml。 -->

<div id="_class_physicalbone2d"></div>

# PhysicalBone2D

**继承：** [`RigidBody2D`](class_rigidbody2d.md) **<** [`PhysicsBody2D`](class_physicsbody2d.md) **<** [`CollisionObject2D`](class_collisionobject2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A [`RigidBody2D`](class_rigidbody2d.md)-derived node used to make [`Bone2D`](class_bone2d.md) s in a [`Skeleton2D`](class_skeleton2d.md) react to physics.

## 描述

The **PhysicalBone2D** node is a [`RigidBody2D`](class_rigidbody2d.md)-based node that can be used to make [`Bone2D`](class_bone2d.md) s in a [`Skeleton2D`](class_skeleton2d.md) react to physics.

 **Note:** To make the [`Bone2D`](class_bone2d.md) s visually follow the **PhysicalBone2D** node, use a [`SkeletonModification2DPhysicalBones`](class_skeletonmodification2dphysicalbones.md) modification on the [`Skeleton2D`](class_skeleton2d.md) parent.

 **Note:** The **PhysicalBone2D** node does not automatically create a [`Joint2D`](class_joint2d.md) node to keep **PhysicalBone2D** nodes together. They must be created manually. For most cases, you want to use a [`PinJoint2D`](class_pinjoint2d.md) node. The **PhysicalBone2D** node will automatically configure the [`Joint2D`](class_joint2d.md) node once it's been added as a child node.

## 属性

| [`bool`](class_bool.md)         | [`auto_configure_joint`](#class_physicalbone2d_property_auto_configure_joint)               | ``true``         |
| [`int`](class_int.md)           | [`bone2d_index`](#class_physicalbone2d_property_bone2d_index)                               | ``-1``           |
| [`NodePath`](class_nodepath.md) | [`bone2d_nodepath`](#class_physicalbone2d_property_bone2d_nodepath)                         | ``NodePath("")`` |
| [`bool`](class_bool.md)         | [`follow_bone_when_simulating`](#class_physicalbone2d_property_follow_bone_when_simulating) | ``false``        |
| [`bool`](class_bool.md)         | [`simulate_physics`](#class_physicalbone2d_property_simulate_physics)                       | ``false``        |

## 方法

| [`Joint2D`](class_joint2d.md) | [`get_joint`](#class_physicalbone2d_method_get_joint) ( ) const[^const]                         |
| [`bool`](class_bool.md)       | [`is_simulating_physics`](#class_physicalbone2d_method_is_simulating_physics) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_physicalbone2d_property_auto_configure_joint"></div>

[`bool`](class_bool.md) **auto_configure_joint** = ``true`` <div id="class_physicalbone2d_property_auto_configure_joint"></div>

- `void` **set_auto_configure_joint** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_auto_configure_joint** ( )

If `true`, the **PhysicalBone2D** will automatically configure the first [`Joint2D`](class_joint2d.md) child node. The automatic configuration is limited to setting up the node properties and positioning the [`Joint2D`](class_joint2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone2d_property_bone2d_index"></div>

[`int`](class_int.md) **bone2d_index** = ``-1`` <div id="class_physicalbone2d_property_bone2d_index"></div>

- `void` **set_bone2d_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bone2d_index** ( )

The index of the [`Bone2D`](class_bone2d.md) that this **PhysicalBone2D** should simulate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone2d_property_bone2d_nodepath"></div>

[`NodePath`](class_nodepath.md) **bone2d_nodepath** = ``NodePath("")`` <div id="class_physicalbone2d_property_bone2d_nodepath"></div>

- `void` **set_bone2d_nodepath** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_bone2d_nodepath** ( )

The [`NodePath`](class_nodepath.md) to the [`Bone2D`](class_bone2d.md) that this **PhysicalBone2D** should simulate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone2d_property_follow_bone_when_simulating"></div>

[`bool`](class_bool.md) **follow_bone_when_simulating** = ``false`` <div id="class_physicalbone2d_property_follow_bone_when_simulating"></div>

- `void` **set_follow_bone_when_simulating** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_follow_bone_when_simulating** ( )

If `true`, the **PhysicalBone2D** will keep the transform of the bone it is bound to when simulating physics.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone2d_property_simulate_physics"></div>

[`bool`](class_bool.md) **simulate_physics** = ``false`` <div id="class_physicalbone2d_property_simulate_physics"></div>

- `void` **set_simulate_physics** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_simulate_physics** ( )

If `true`, the **PhysicalBone2D** will start simulating using physics. If `false`, the **PhysicalBone2D** will follow the transform of the [`Bone2D`](class_bone2d.md) node.

 **Note:** To have the [`Bone2D`](class_bone2d.md) s visually follow the **PhysicalBone2D**, use a [`SkeletonModification2DPhysicalBones`](class_skeletonmodification2dphysicalbones.md) modification on the [`Skeleton2D`](class_skeleton2d.md) node with the [`Bone2D`](class_bone2d.md) nodes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicalbone2d_method_get_joint"></div>

[`Joint2D`](class_joint2d.md) **get_joint** ( ) const[^const]<div id="class_physicalbone2d_method_get_joint"></div>

Returns the first [`Joint2D`](class_joint2d.md) child node, if one exists. This is mainly a helper function to make it easier to get the [`Joint2D`](class_joint2d.md) that the **PhysicalBone2D** is autoconfiguring.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbone2d_method_is_simulating_physics"></div>

[`bool`](class_bool.md) **is_simulating_physics** ( ) const[^const]<div id="class_physicalbone2d_method_is_simulating_physics"></div>

Returns a boolean that indicates whether the **PhysicalBone2D** is running and simulating using the Godot 2D physics engine. When `true`, the PhysicalBone2D node is using physics.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
