<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SkeletonModification2DLookAt.xml。 -->

<div id="_class_skeletonmodification2dlookat"></div>

# SkeletonModification2DLookAt

**实验性：** This class may be changed or removed in future versions.

**继承：** [`SkeletonModification2D`](class_skeletonmodification2d.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A modification that rotates a [`Bone2D`](class_bone2d.md) node to look at a target.

## 描述

This [`SkeletonModification2D`](class_skeletonmodification2d.md) rotates a bone to look a target. This is extremely helpful for moving character's head to look at the player, rotating a turret to look at a target, or any other case where you want to make a bone rotate towards something quickly and easily.

## 属性

| [`NodePath`](class_nodepath.md) | [`bone2d_node`](#class_skeletonmodification2dlookat_property_bone2d_node)         | ``NodePath("")`` |
| [`int`](class_int.md)           | [`bone_index`](#class_skeletonmodification2dlookat_property_bone_index)           | ``-1``           |
| [`NodePath`](class_nodepath.md) | [`target_nodepath`](#class_skeletonmodification2dlookat_property_target_nodepath) | ``NodePath("")`` |

## 方法

| [`float`](class_float.md) | [`get_additional_rotation`](#class_skeletonmodification2dlookat_method_get_additional_rotation) ( ) const[^const]                           |
| [`bool`](class_bool.md)   | [`get_constraint_angle_invert`](#class_skeletonmodification2dlookat_method_get_constraint_angle_invert) ( ) const[^const]                   |
| [`float`](class_float.md) | [`get_constraint_angle_max`](#class_skeletonmodification2dlookat_method_get_constraint_angle_max) ( ) const[^const]                         |
| [`float`](class_float.md) | [`get_constraint_angle_min`](#class_skeletonmodification2dlookat_method_get_constraint_angle_min) ( ) const[^const]                         |
| [`bool`](class_bool.md)   | [`get_enable_constraint`](#class_skeletonmodification2dlookat_method_get_enable_constraint) ( ) const[^const]                               |
| `void`                    | [`set_additional_rotation`](#class_skeletonmodification2dlookat_method_set_additional_rotation) ( rotation: [`float`](class_float.md) )     |
| `void`                    | [`set_constraint_angle_invert`](#class_skeletonmodification2dlookat_method_set_constraint_angle_invert) ( invert: [`bool`](class_bool.md) ) |
| `void`                    | [`set_constraint_angle_max`](#class_skeletonmodification2dlookat_method_set_constraint_angle_max) ( angle_max: [`float`](class_float.md) )  |
| `void`                    | [`set_constraint_angle_min`](#class_skeletonmodification2dlookat_method_set_constraint_angle_min) ( angle_min: [`float`](class_float.md) )  |
| `void`                    | [`set_enable_constraint`](#class_skeletonmodification2dlookat_method_set_enable_constraint) ( enable_constraint: [`bool`](class_bool.md) )  |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_skeletonmodification2dlookat_property_bone2d_node"></div>

[`NodePath`](class_nodepath.md) **bone2d_node** = ``NodePath("")`` <div id="class_skeletonmodification2dlookat_property_bone2d_node"></div>

- `void` **set_bone2d_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_bone2d_node** ( )

The [`Bone2D`](class_bone2d.md) node that the modification will operate on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_property_bone_index"></div>

[`int`](class_int.md) **bone_index** = ``-1`` <div id="class_skeletonmodification2dlookat_property_bone_index"></div>

- `void` **set_bone_index** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bone_index** ( )

The index of the [`Bone2D`](class_bone2d.md) node that the modification will operate on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_property_target_nodepath"></div>

[`NodePath`](class_nodepath.md) **target_nodepath** = ``NodePath("")`` <div id="class_skeletonmodification2dlookat_property_target_nodepath"></div>

- `void` **set_target_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_target_node** ( )

The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [`Bone2D`](class_bone2d.md) to.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_skeletonmodification2dlookat_method_get_additional_rotation"></div>

[`float`](class_float.md) **get_additional_rotation** ( ) const[^const]<div id="class_skeletonmodification2dlookat_method_get_additional_rotation"></div>

Returns the amount of additional rotation that is applied after the LookAt modification executes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_get_constraint_angle_invert"></div>

[`bool`](class_bool.md) **get_constraint_angle_invert** ( ) const[^const]<div id="class_skeletonmodification2dlookat_method_get_constraint_angle_invert"></div>

Returns whether the constraints to this modification are inverted or not.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_get_constraint_angle_max"></div>

[`float`](class_float.md) **get_constraint_angle_max** ( ) const[^const]<div id="class_skeletonmodification2dlookat_method_get_constraint_angle_max"></div>

Returns the constraint's maximum allowed angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_get_constraint_angle_min"></div>

[`float`](class_float.md) **get_constraint_angle_min** ( ) const[^const]<div id="class_skeletonmodification2dlookat_method_get_constraint_angle_min"></div>

Returns the constraint's minimum allowed angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_get_enable_constraint"></div>

[`bool`](class_bool.md) **get_enable_constraint** ( ) const[^const]<div id="class_skeletonmodification2dlookat_method_get_enable_constraint"></div>

Returns `true` if the LookAt modification is using constraints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_set_additional_rotation"></div>

`void` **set_additional_rotation** ( rotation: [`float`](class_float.md) )<div id="class_skeletonmodification2dlookat_method_set_additional_rotation"></div>

Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_set_constraint_angle_invert"></div>

`void` **set_constraint_angle_invert** ( invert: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dlookat_method_set_constraint_angle_invert"></div>

When `true`, the modification will use an inverted joint constraint.

An inverted joint constraint only constraints the [`Bone2D`](class_bone2d.md) to the angles *outside of* the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_set_constraint_angle_max"></div>

`void` **set_constraint_angle_max** ( angle_max: [`float`](class_float.md) )<div id="class_skeletonmodification2dlookat_method_set_constraint_angle_max"></div>

Sets the constraint's maximum allowed angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_set_constraint_angle_min"></div>

`void` **set_constraint_angle_min** ( angle_min: [`float`](class_float.md) )<div id="class_skeletonmodification2dlookat_method_set_constraint_angle_min"></div>

Sets the constraint's minimum allowed angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_skeletonmodification2dlookat_method_set_enable_constraint"></div>

`void` **set_enable_constraint** ( enable_constraint: [`bool`](class_bool.md) )<div id="class_skeletonmodification2dlookat_method_set_enable_constraint"></div>

Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
