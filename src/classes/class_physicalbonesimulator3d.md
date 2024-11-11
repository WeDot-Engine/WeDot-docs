<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PhysicalBoneSimulator3D.xml。 -->

<div id="_class_physicalbonesimulator3d"></div>

# PhysicalBoneSimulator3D

**继承：** [`SkeletonModifier3D`](class_skeletonmodifier3d.md) **<** [`Node3D`](class_node3d.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Node that can be the parent of [`PhysicalBone3D`](class_physicalbone3d.md) and can apply the simulation results to [`Skeleton3D`](class_skeleton3d.md).

## 描述

Node that can be the parent of [`PhysicalBone3D`](class_physicalbone3d.md) and can apply the simulation results to [`Skeleton3D`](class_skeleton3d.md).

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`is_simulating_physics`](class_physicalbonesimulator3d.md#class_physicalbonesimulator3d_method_is_simulating_physics) ( ) const[^const]                                                                               |
| `void`                  | [`physical_bones_add_collision_exception`](class_physicalbonesimulator3d.md#class_physicalbonesimulator3d_method_physical_bones_add_collision_exception) ( exception: [`RID`](class_rid.md) )                          |
| `void`                  | [`physical_bones_remove_collision_exception`](class_physicalbonesimulator3d.md#class_physicalbonesimulator3d_method_physical_bones_remove_collision_exception) ( exception: [`RID`](class_rid.md) )                    |
| `void`                  | [`physical_bones_start_simulation`](class_physicalbonesimulator3d.md#class_physicalbonesimulator3d_method_physical_bones_start_simulation) ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] ) |
| `void`                  | [`physical_bones_stop_simulation`](class_physicalbonesimulator3d.md#class_physicalbonesimulator3d_method_physical_bones_stop_simulation) ( )                                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_physicalbonesimulator3d_method_is_simulating_physics"></div>

[`bool`](class_bool.md) **is_simulating_physics** ( ) const[^const]<div id="class_physicalbonesimulator3d_method_is_simulating_physics"></div>

Returns a boolean that indicates whether the **PhysicalBoneSimulator3D** is running and simulating.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbonesimulator3d_method_physical_bones_add_collision_exception"></div>

`void` **physical_bones_add_collision_exception** ( exception: [`RID`](class_rid.md) )<div id="class_physicalbonesimulator3d_method_physical_bones_add_collision_exception"></div>

Adds a collision exception to the physical bone.

Works just like the [`RigidBody3D`](class_rigidbody3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbonesimulator3d_method_physical_bones_remove_collision_exception"></div>

`void` **physical_bones_remove_collision_exception** ( exception: [`RID`](class_rid.md) )<div id="class_physicalbonesimulator3d_method_physical_bones_remove_collision_exception"></div>

Removes a collision exception to the physical bone.

Works just like the [`RigidBody3D`](class_rigidbody3d.md) node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbonesimulator3d_method_physical_bones_start_simulation"></div>

`void` **physical_bones_start_simulation** ( bones: [Array](class_array.md) [`StringName`](class_stringname.md) = [] )<div id="class_physicalbonesimulator3d_method_physical_bones_start_simulation"></div>

Tells the [`PhysicalBone3D`](class_physicalbone3d.md) nodes in the Skeleton to start simulating and reacting to the physics world.

Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_physicalbonesimulator3d_method_physical_bones_stop_simulation"></div>

`void` **physical_bones_stop_simulation** ( )<div id="class_physicalbonesimulator3d_method_physical_bones_stop_simulation"></div>

Tells the [`PhysicalBone3D`](class_physicalbone3d.md) nodes in the Skeleton to stop simulating.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
