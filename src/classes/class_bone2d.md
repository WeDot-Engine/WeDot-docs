<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Bone2D.xml。 -->

<div id="_class_bone2d"></div>

# Bone2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A joint used with [`Skeleton2D`](class_skeleton2d.md) to control and animate other nodes.

## 描述

A hierarchy of **Bone2D** s can be bound to a [`Skeleton2D`](class_skeleton2d.md) to control and animate other [`Node2D`](class_node2d.md) nodes.

You can use **Bone2D** and [`Skeleton2D`](class_skeleton2d.md) nodes to animate 2D meshes created with the [`Polygon2D`](class_polygon2d.md) UV editor.

Each bone has a [`rest`](#class_bone2d_property_rest) transform that you can reset to with [`apply_rest`](#class_bone2d_method_apply_rest). These rest poses are relative to the bone's parent.

If in the editor, you can set the rest pose of an entire skeleton using a menu option, from the code, you need to iterate over the bones to set their individual rest poses.

## 属性

| [`Transform2D`](class_transform2d.md) | [`rest`](#class_bone2d_property_rest) | ``Transform2D(0, 0, 0, 0, 0, 0)`` |

## 方法

| `void`                                | [`apply_rest`](#class_bone2d_method_apply_rest) ( )                                                                                         |
| [`bool`](class_bool.md)               | [`get_autocalculate_length_and_angle`](#class_bone2d_method_get_autocalculate_length_and_angle) ( ) const[^const]                           |
| [`float`](class_float.md)             | [`get_bone_angle`](#class_bone2d_method_get_bone_angle) ( ) const[^const]                                                                   |
| [`int`](class_int.md)                 | [`get_index_in_skeleton`](#class_bone2d_method_get_index_in_skeleton) ( ) const[^const]                                                     |
| [`float`](class_float.md)             | [`get_length`](#class_bone2d_method_get_length) ( ) const[^const]                                                                           |
| [`Transform2D`](class_transform2d.md) | [`get_skeleton_rest`](#class_bone2d_method_get_skeleton_rest) ( ) const[^const]                                                             |
| `void`                                | [`set_autocalculate_length_and_angle`](#class_bone2d_method_set_autocalculate_length_and_angle) ( auto_calculate: [`bool`](class_bool.md) ) |
| `void`                                | [`set_bone_angle`](#class_bone2d_method_set_bone_angle) ( angle: [`float`](class_float.md) )                                                |
| `void`                                | [`set_length`](#class_bone2d_method_set_length) ( length: [`float`](class_float.md) )                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_bone2d_property_rest"></div>

[`Transform2D`](class_transform2d.md) **rest** = ``Transform2D(0, 0, 0, 0, 0, 0)`` <div id="class_bone2d_property_rest"></div>

- `void` **set_rest** ( value: [`Transform2D`](class_transform2d.md) )
- [`Transform2D`](class_transform2d.md) **get_rest** ( )

Rest transform of the bone. You can reset the node's transforms to this value using [`apply_rest`](#class_bone2d_method_apply_rest).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_bone2d_method_apply_rest"></div>

`void` **apply_rest** ( )<div id="class_bone2d_method_apply_rest"></div>

Resets the bone to the rest pose. This is equivalent to setting [`Node2D.transform`](#class_node2d_property_transform) to [`rest`](#class_bone2d_property_rest).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_get_autocalculate_length_and_angle"></div>

[`bool`](class_bool.md) **get_autocalculate_length_and_angle** ( ) const[^const]<div id="class_bone2d_method_get_autocalculate_length_and_angle"></div>

Returns whether this **Bone2D** is going to autocalculate its length and bone angle using its first **Bone2D** child node, if one exists. If there are no **Bone2D** children, then it cannot autocalculate these values and will print a warning.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_get_bone_angle"></div>

[`float`](class_float.md) **get_bone_angle** ( ) const[^const]<div id="class_bone2d_method_get_bone_angle"></div>

Returns the angle of the bone in the **Bone2D**.

 **Note:** This is different from the **Bone2D**'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the **Bone2D**'s [`Node2D.transform`](#class_node2d_property_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_get_index_in_skeleton"></div>

[`int`](class_int.md) **get_index_in_skeleton** ( ) const[^const]<div id="class_bone2d_method_get_index_in_skeleton"></div>

Returns the node's index as part of the entire skeleton. See [`Skeleton2D`](class_skeleton2d.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_get_length"></div>

[`float`](class_float.md) **get_length** ( ) const[^const]<div id="class_bone2d_method_get_length"></div>

Returns the length of the bone in the **Bone2D** node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_get_skeleton_rest"></div>

[`Transform2D`](class_transform2d.md) **get_skeleton_rest** ( ) const[^const]<div id="class_bone2d_method_get_skeleton_rest"></div>

Returns the node's [`rest`](#class_bone2d_property_rest) [`Transform2D`](class_transform2d.md) if it doesn't have a parent, or its rest pose relative to its parent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_set_autocalculate_length_and_angle"></div>

`void` **set_autocalculate_length_and_angle** ( auto_calculate: [`bool`](class_bool.md) )<div id="class_bone2d_method_set_autocalculate_length_and_angle"></div>

When set to `true`, the **Bone2D** node will attempt to automatically calculate the bone angle and length using the first child **Bone2D** node, if one exists. If none exist, the **Bone2D** cannot automatically calculate these values and will print a warning.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_set_bone_angle"></div>

`void` **set_bone_angle** ( angle: [`float`](class_float.md) )<div id="class_bone2d_method_set_bone_angle"></div>

Sets the bone angle for the **Bone2D**. This is typically set to the rotation from the **Bone2D** to a child **Bone2D** node.

 **Note:** This is different from the **Bone2D**'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the **Bone2D**'s [`Node2D.transform`](#class_node2d_property_transform).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bone2d_method_set_length"></div>

`void` **set_length** ( length: [`float`](class_float.md) )<div id="class_bone2d_method_set_length"></div>

Sets the length of the bone in the **Bone2D**.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
