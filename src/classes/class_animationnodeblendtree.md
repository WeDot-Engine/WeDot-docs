<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeBlendTree.xml。 -->

<div id="_class_animationnodeblendtree"></div>

# AnimationNodeBlendTree

**继承：** [`AnimationRootNode`](class_animationrootnode.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A sub-tree of many type [`AnimationNode`](class_animationnode.md) s used for complex animations. Used by [`AnimationTree`](class_animationtree.md).

## 描述

This animation node may contain a sub-tree of any other type animation nodes, such as [`AnimationNodeTransition`](class_animationnodetransition.md), [`AnimationNodeBlend2`](class_animationnodeblend2.md), [`AnimationNodeBlend3`](class_animationnodeblend3.md), [`AnimationNodeOneShot`](class_animationnodeoneshot.md), etc. This is one of the most commonly used animation node roots.

An [`AnimationNodeOutput`](class_animationnodeoutput.md) node named `output` is created by default.

## 属性

| [`Vector2`](class_vector2.md) | [`graph_offset`](#class_animationnodeblendtree_property_graph_offset) | ``Vector2(0, 0)`` |

## 方法

| `void`                                    | [`add_node`](#class_animationnodeblendtree_method_add_node) ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) |
| `void`                                    | [`connect_node`](#class_animationnodeblendtree_method_connect_node) ( input_node: [`StringName`](class_stringname.md), input_index: [`int`](class_int.md), output_node: [`StringName`](class_stringname.md) )       |
| `void`                                    | [`disconnect_node`](#class_animationnodeblendtree_method_disconnect_node) ( input_node: [`StringName`](class_stringname.md), input_index: [`int`](class_int.md) )                                                   |
| [`AnimationNode`](class_animationnode.md) | [`get_node`](#class_animationnodeblendtree_method_get_node) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                             |
| [`Vector2`](class_vector2.md)             | [`get_node_position`](#class_animationnodeblendtree_method_get_node_position) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                           |
| [`bool`](class_bool.md)                   | [`has_node`](#class_animationnodeblendtree_method_has_node) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                             |
| `void`                                    | [`remove_node`](#class_animationnodeblendtree_method_remove_node) ( name: [`StringName`](class_stringname.md) )                                                                                                     |
| `void`                                    | [`rename_node`](#class_animationnodeblendtree_method_rename_node) ( name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) )                                                      |
| `void`                                    | [`set_node_position`](#class_animationnodeblendtree_method_set_node_position) ( name: [`StringName`](class_stringname.md), position: [`Vector2`](class_vector2.md) )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationnodeblendtree_signal_node_changed"></div>

**node_changed** ( node_name: [`StringName`](class_stringname.md) ) <div id="class_animationnodeblendtree_signal_node_changed"></div>

Emitted when the input port information is changed.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_animationnodeblendtree_constant_connection_ok"></div>

**CONNECTION_OK** = ``0`` <div id="class_animationnodeblendtree_constant_connection_ok"></div>

The connection was successful.

<div id="_class_animationnodeblendtree_constant_connection_error_no_input"></div>

**CONNECTION_ERROR_NO_INPUT** = ``1`` <div id="class_animationnodeblendtree_constant_connection_error_no_input"></div>

The input node is `null`.

<div id="_class_animationnodeblendtree_constant_connection_error_no_input_index"></div>

**CONNECTION_ERROR_NO_INPUT_INDEX** = ``2`` <div id="class_animationnodeblendtree_constant_connection_error_no_input_index"></div>

The specified input port is out of range.

<div id="_class_animationnodeblendtree_constant_connection_error_no_output"></div>

**CONNECTION_ERROR_NO_OUTPUT** = ``3`` <div id="class_animationnodeblendtree_constant_connection_error_no_output"></div>

The output node is `null`.

<div id="_class_animationnodeblendtree_constant_connection_error_same_node"></div>

**CONNECTION_ERROR_SAME_NODE** = ``4`` <div id="class_animationnodeblendtree_constant_connection_error_same_node"></div>

Input and output nodes are the same.

<div id="_class_animationnodeblendtree_constant_connection_error_connection_exists"></div>

**CONNECTION_ERROR_CONNECTION_EXISTS** = ``5`` <div id="class_animationnodeblendtree_constant_connection_error_connection_exists"></div>

The specified connection already exists.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodeblendtree_property_graph_offset"></div>

[`Vector2`](class_vector2.md) **graph_offset** = ``Vector2(0, 0)`` <div id="class_animationnodeblendtree_property_graph_offset"></div>

- `void` **set_graph_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_graph_offset** ( )

The global offset of all sub animation nodes.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodeblendtree_method_add_node"></div>

`void` **add_node** ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_animationnodeblendtree_method_add_node"></div>

Adds an [`AnimationNode`](class_animationnode.md) at the given `position`. The `name` is used to identify the created sub animation node later.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_connect_node"></div>

`void` **connect_node** ( input_node: [`StringName`](class_stringname.md), input_index: [`int`](class_int.md), output_node: [`StringName`](class_stringname.md) )<div id="class_animationnodeblendtree_method_connect_node"></div>

Connects the output of an [`AnimationNode`](class_animationnode.md) as input for another [`AnimationNode`](class_animationnode.md), at the input port specified by `input_index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_disconnect_node"></div>

`void` **disconnect_node** ( input_node: [`StringName`](class_stringname.md), input_index: [`int`](class_int.md) )<div id="class_animationnodeblendtree_method_disconnect_node"></div>

Disconnects the animation node connected to the specified input.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_get_node"></div>

[`AnimationNode`](class_animationnode.md) **get_node** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodeblendtree_method_get_node"></div>

Returns the sub animation node with the specified `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_get_node_position"></div>

[`Vector2`](class_vector2.md) **get_node_position** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodeblendtree_method_get_node_position"></div>

Returns the position of the sub animation node with the specified `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_has_node"></div>

[`bool`](class_bool.md) **has_node** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodeblendtree_method_has_node"></div>

Returns `true` if a sub animation node with specified `name` exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_remove_node"></div>

`void` **remove_node** ( name: [`StringName`](class_stringname.md) )<div id="class_animationnodeblendtree_method_remove_node"></div>

Removes a sub animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_rename_node"></div>

`void` **rename_node** ( name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) )<div id="class_animationnodeblendtree_method_rename_node"></div>

Changes the name of a sub animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendtree_method_set_node_position"></div>

`void` **set_node_position** ( name: [`StringName`](class_stringname.md), position: [`Vector2`](class_vector2.md) )<div id="class_animationnodeblendtree_method_set_node_position"></div>

Modifies the position of a sub animation node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
