<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/SkeletonModification2DJiggle.xml。 -->

<div id="_class_skeletonmodification2djiggle"></div>

# SkeletonModification2DJiggle

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that jiggles [`Bone2D`](class_bone2d.md) nodes as they move towards a target.

## 描述

This modification moves a series of bones, typically called a bone chain, towards a target. What makes this modification special is that it calculates the velocity and acceleration for each bone in the bone chain, and runs a very light physics-like calculation using the inputted values. This allows the bones to overshoot the target and "jiggle" around. It can be configured to act more like a spring, or sway around like cloth might.

This modification is useful for adding additional motion to things like hair, the edges of clothing, and more. It has several settings to that allow control over how the joint moves when the target moves.

 **Note:** The Jiggle modifier has `jiggle_joints`, which are the data objects that hold the data for each joint in the Jiggle chain. This is different from than [`Bone2D`](class_bone2d.md) nodes! Jiggle joints hold the data needed for each [`Bone2D`](class_bone2d.md) in the bone chain used by the Jiggle modification.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)       | [`damping`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_damping)                                   | ``0.75``          |
| [`Vector2`](class_vector2.md)   | [`gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_gravity)                                   | ``Vector2(0, 6)`` |
| [`int`](class_int.md)           | [`jiggle_data_chain_length`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_jiggle_data_chain_length) | ``0``             |
| [`float`](class_float.md)       | [`mass`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_mass)                                         | ``0.75``          |
| [`float`](class_float.md)       | [`stiffness`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_stiffness)                               | ``3.0``           |
| [`NodePath`](class_nodepath.md) | [`target_nodepath`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_target_nodepath)                   | ``NodePath("")``  |
| [`bool`](class_bool.md)         | [`use_gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_use_gravity)                           | ``false``         |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)           | [`get_collision_mask`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_collision_mask) ( ) const[^const]                                                                                      |
| [`NodePath`](class_nodepath.md) | [`get_jiggle_joint_bone2d_node`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_bone2d_node) ( joint_idx: [`int`](class_int.md) ) const[^const]                                 |
| [`int`](class_int.md)           | [`get_jiggle_joint_bone_index`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_bone_index) ( joint_idx: [`int`](class_int.md) ) const[^const]                                   |
| [`float`](class_float.md)       | [`get_jiggle_joint_damping`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_damping) ( joint_idx: [`int`](class_int.md) ) const[^const]                                         |
| [`Vector2`](class_vector2.md)   | [`get_jiggle_joint_gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_gravity) ( joint_idx: [`int`](class_int.md) ) const[^const]                                         |
| [`float`](class_float.md)       | [`get_jiggle_joint_mass`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_mass) ( joint_idx: [`int`](class_int.md) ) const[^const]                                               |
| [`bool`](class_bool.md)         | [`get_jiggle_joint_override`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_override) ( joint_idx: [`int`](class_int.md) ) const[^const]                                       |
| [`float`](class_float.md)       | [`get_jiggle_joint_stiffness`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_stiffness) ( joint_idx: [`int`](class_int.md) ) const[^const]                                     |
| [`bool`](class_bool.md)         | [`get_jiggle_joint_use_gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_jiggle_joint_use_gravity) ( joint_idx: [`int`](class_int.md) ) const[^const]                                 |
| [`bool`](class_bool.md)         | [`get_use_colliders`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_get_use_colliders) ( ) const[^const]                                                                                        |
| `void`                          | [`set_collision_mask`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_collision_mask) ( collision_mask: [`int`](class_int.md) )                                                              |
| `void`                          | [`set_jiggle_joint_bone2d_node`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_bone2d_node) ( joint_idx: [`int`](class_int.md), bone2d_node: [`NodePath`](class_nodepath.md) ) |
| `void`                          | [`set_jiggle_joint_bone_index`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_bone_index) ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )                |
| `void`                          | [`set_jiggle_joint_damping`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_damping) ( joint_idx: [`int`](class_int.md), damping: [`float`](class_float.md) )                   |
| `void`                          | [`set_jiggle_joint_gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_gravity) ( joint_idx: [`int`](class_int.md), gravity: [`Vector2`](class_vector2.md) )               |
| `void`                          | [`set_jiggle_joint_mass`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_mass) ( joint_idx: [`int`](class_int.md), mass: [`float`](class_float.md) )                            |
| `void`                          | [`set_jiggle_joint_override`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_override) ( joint_idx: [`int`](class_int.md), override: [`bool`](class_bool.md) )                  |
| `void`                          | [`set_jiggle_joint_stiffness`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_stiffness) ( joint_idx: [`int`](class_int.md), stiffness: [`float`](class_float.md) )             |
| `void`                          | [`set_jiggle_joint_use_gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_jiggle_joint_use_gravity) ( joint_idx: [`int`](class_int.md), use_gravity: [`bool`](class_bool.md) )         |
| `void`                          | [`set_use_colliders`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_method_set_use_colliders) ( use_colliders: [`bool`](class_bool.md) )                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2djiggle_property_damping"></div>

[`float`](class_float.md) **damping** = ``0.75`` <div id="class_skeletonmodification2djiggle_property_damping"></div>

- `void` **set_damping** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_damping** ( )

The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_gravity"></div>

[`Vector2`](class_vector2.md) **gravity** = ``Vector2(0, 6)`` <div id="class_skeletonmodification2djiggle_property_gravity"></div>

- `void` **set_gravity** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_gravity** ( )

The default amount of gravity applied to the Jiggle joints, if they are not overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_jiggle_data_chain_length"></div>

[`int`](class_int.md) **jiggle_data_chain_length** = ``0`` <div id="class_skeletonmodification2djiggle_property_jiggle_data_chain_length"></div>

- `void` **set_jiggle_data_chain_length** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_jiggle_data_chain_length** ( )

The amount of Jiggle joints in the Jiggle modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_mass"></div>

[`float`](class_float.md) **mass** = ``0.75`` <div id="class_skeletonmodification2djiggle_property_mass"></div>

- `void` **set_mass** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_mass** ( )

The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_stiffness"></div>

[`float`](class_float.md) **stiffness** = ``3.0`` <div id="class_skeletonmodification2djiggle_property_stiffness"></div>

- `void` **set_stiffness** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_stiffness** ( )

The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_target_nodepath"></div>

[`NodePath`](class_nodepath.md) **target_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2djiggle_property_target_nodepath"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_property_use_gravity"></div>

[`bool`](class_bool.md) **use_gravity** = ``false`` <div id="class_skeletonmodification2djiggle_property_use_gravity"></div>

- `void` **set_use_gravity** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_use_gravity** ( )

Whether the gravity vector, [`gravity`](class_skeletonmodification2djiggle.md#class_skeletonmodification2djiggle_property_gravity), should be applied to the Jiggle joints, assuming they are not overriding the default settings.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2djiggle_method_get_collision_mask"></div>

[`int`](class_int.md) **get_collision_mask** ( ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_collision_mask"></div>

Returns the collision mask used by the Jiggle modifier when collisions are enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **get_jiggle_joint_bone2d_node** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_bone2d_node"></div>

Returns the [`Bone2D`](class_bone2d.md) node assigned to the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_bone_index"></div>

[`int`](class_int.md) **get_jiggle_joint_bone_index** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_bone_index"></div>

Returns the index of the [`Bone2D`](class_bone2d.md) node assigned to the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_damping"></div>

[`float`](class_float.md) **get_jiggle_joint_damping** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_damping"></div>

Returns the amount of damping of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_gravity"></div>

[`Vector2`](class_vector2.md) **get_jiggle_joint_gravity** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_gravity"></div>

Returns a [`Vector2`](class_vector2.md) representing the amount of gravity the Jiggle joint at `joint_idx` is influenced by.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_mass"></div>

[`float`](class_float.md) **get_jiggle_joint_mass** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_mass"></div>

Returns the amount of mass of the jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_override"></div>

[`bool`](class_bool.md) **get_jiggle_joint_override** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_override"></div>

Returns a boolean that indicates whether the joint at `joint_idx` is overriding the default Jiggle joint data defined in the modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_stiffness"></div>

[`float`](class_float.md) **get_jiggle_joint_stiffness** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_stiffness"></div>

Returns the stiffness of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_jiggle_joint_use_gravity"></div>

[`bool`](class_bool.md) **get_jiggle_joint_use_gravity** ( joint_idx: [`int`](class_int.md) ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_jiggle_joint_use_gravity"></div>

Returns a boolean that indicates whether the joint at `joint_idx` is using gravity or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_get_use_colliders"></div>

[`bool`](class_bool.md) **get_use_colliders** ( ) const[^const]<div id="class_skeletonmodification2djiggle_method_get_use_colliders"></div>

Returns whether the jiggle modifier is taking physics colliders into account when solving.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_collision_mask"></div>

`void` **set_collision_mask** ( collision_mask: [`int`](class_int.md) )<div id="class_skeletonmodification2djiggle_method_set_collision_mask"></div>

Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_bone2d_node"></div>

`void` **set_jiggle_joint_bone2d_node** ( joint_idx: [`int`](class_int.md), bone2d_node: [`NodePath`](class_nodepath.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_bone2d_node"></div>

Sets the [`Bone2D`](class_bone2d.md) node assigned to the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_bone_index"></div>

`void` **set_jiggle_joint_bone_index** ( joint_idx: [`int`](class_int.md), bone_idx: [`int`](class_int.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_bone_index"></div>

Sets the bone index, `bone_idx`, of the Jiggle joint at `joint_idx`. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_damping"></div>

`void` **set_jiggle_joint_damping** ( joint_idx: [`int`](class_int.md), damping: [`float`](class_float.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_damping"></div>

Sets the amount of damping of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_gravity"></div>

`void` **set_jiggle_joint_gravity** ( joint_idx: [`int`](class_int.md), gravity: [`Vector2`](class_vector2.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_gravity"></div>

Sets the gravity vector of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_mass"></div>

`void` **set_jiggle_joint_mass** ( joint_idx: [`int`](class_int.md), mass: [`float`](class_float.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_mass"></div>

Sets the of mass of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_override"></div>

`void` **set_jiggle_joint_override** ( joint_idx: [`int`](class_int.md), override: [`bool`](class_bool.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_override"></div>

Sets whether the Jiggle joint at `joint_idx` should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_stiffness"></div>

`void` **set_jiggle_joint_stiffness** ( joint_idx: [`int`](class_int.md), stiffness: [`float`](class_float.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_stiffness"></div>

Sets the of stiffness of the Jiggle joint at `joint_idx`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_jiggle_joint_use_gravity"></div>

`void` **set_jiggle_joint_use_gravity** ( joint_idx: [`int`](class_int.md), use_gravity: [`bool`](class_bool.md) )<div id="class_skeletonmodification2djiggle_method_set_jiggle_joint_use_gravity"></div>

Sets whether the Jiggle joint at `joint_idx` should use gravity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2djiggle_method_set_use_colliders"></div>

`void` **set_use_colliders** ( use_colliders: [`bool`](class_bool.md) )<div id="class_skeletonmodification2djiggle_method_set_use_colliders"></div>

If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
