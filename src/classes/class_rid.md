<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RID.xml。 -->

<div id="_class_rid"></div>

# RID

A handle for a [`Resource`](class_resource.md)'s unique identifier.

## 描述

The RID [`Variant`](class_variant.md) type is used to access a low-level resource by its unique ID. RIDs are opaque, which means they do not grant access to the resource by themselves. They are used by the low-level server classes, such as [`DisplayServer`](class_displayserver.md), [`RenderingServer`](class_renderingserver.md), [`TextServer`](class_textserver.md), etc.

A low-level resource may correspond to a high-level [`Resource`](class_resource.md), such as [`Texture`](class_texture.md) or [`Mesh`](class_mesh.md).

 **Note:** RIDs are only useful during the current session. It won't correspond to a similar resource if sent over a network, or loaded from a file at a later time.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 构造函数

|||
|:-:|:--|
| [`RID`](class_rid.md) | [`RID`](class_rid.md#class_rid_constructor_rid) ( )                             |
| [`RID`](class_rid.md) | [`RID`](class_rid.md#class_rid_constructor_rid) ( from: [`RID`](class_rid.md) ) |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)   | [`get_id`](class_rid.md#class_rid_method_get_id) ( ) const[^const]     |
| [`bool`](class_bool.md) | [`is_valid`](class_rid.md#class_rid_method_is_valid) ( ) const[^const] |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`operator !=`](class_RID.md#operator_neq_RID) ( right: [`RID`](class_rid.md) ) |
| [`bool`](class_bool.md) | [`operator <`](class_RID.md#operator_lt_RID) ( right: [`RID`](class_rid.md) )   |
| [`bool`](class_bool.md) | [`operator <=`](class_RID.md#operator_lte_RID) ( right: [`RID`](class_rid.md) ) |
| [`bool`](class_bool.md) | [`operator ==`](class_RID.md#operator_eq_RID) ( right: [`RID`](class_rid.md) )  |
| [`bool`](class_bool.md) | [`operator >`](class_RID.md#operator_gt_RID) ( right: [`RID`](class_rid.md) )   |
| [`bool`](class_bool.md) | [`operator >=`](class_RID.md#operator_gte_RID) ( right: [`RID`](class_rid.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_rid_constructor_rid"></div>

[`RID`](class_rid.md) **RID** ( )<div id="class_rid_constructor_rid"></div>

Constructs an empty **RID** with the invalid ID `0`.

<!-- rst-class:: classref-item-separator -->

---

[`RID`](class_rid.md) **RID** ( from: [`RID`](class_rid.md) )

Constructs a **RID** as a copy of the given **RID**.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rid_method_get_id"></div>

[`int`](class_int.md) **get_id** ( ) const[^const]<div id="class_rid_method_get_id"></div>

Returns the ID of the referenced low-level resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_method_is_valid"></div>

[`bool`](class_bool.md) **is_valid** ( ) const[^const]<div id="class_rid_method_is_valid"></div>

Returns `true` if the **RID** is not `0`.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_rid_operator_neq_rid"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_neq_rid"></div>

Returns `true` if the **RID** s are not equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_operator_lt_rid"></div>

[`bool`](class_bool.md) **operator <** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_lt_rid"></div>

Returns `true` if the **RID**'s ID is less than `right`'s ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_operator_lte_rid"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_lte_rid"></div>

Returns `true` if the **RID**'s ID is less than or equal to `right`'s ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_operator_eq_rid"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_eq_rid"></div>

Returns `true` if both **RID** s are equal, which means they both refer to the same low-level resource.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_operator_gt_rid"></div>

[`bool`](class_bool.md) **operator >** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_gt_rid"></div>

Returns `true` if the **RID**'s ID is greater than `right`'s ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rid_operator_gte_rid"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`RID`](class_rid.md) ) <div id="class_rid_operator_gte_rid"></div>

Returns `true` if the **RID**'s ID is greater than or equal to `right`'s ID.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
