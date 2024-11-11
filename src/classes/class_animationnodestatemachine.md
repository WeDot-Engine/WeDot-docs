<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNodeStateMachine.xml。 -->

<div id="_class_animationnodestatemachine"></div>

# AnimationNodeStateMachine

**继承：** [`AnimationRootNode`](class_animationrootnode.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A state machine with multiple [`AnimationRootNode`](class_animationrootnode.md) s, used by [`AnimationTree`](class_animationtree.md).

## 描述

Contains multiple [`AnimationRootNode`](class_animationrootnode.md) s representing animation states, connected in a graph. State transitions can be configured to happen automatically or via code, using a shortest-path algorithm. Retrieve the [`AnimationNodeStateMachinePlayback`](class_animationnodestatemachineplayback.md) object from the [`AnimationTree`](class_animationtree.md) node to control it programmatically.



```gdscript

    var state_machine = $AnimationTree.get("parameters/playback")
    state_machine.travel("some_state")
```

```csharp

    var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback") as AnimationNodeStateMachinePlayback;
    stateMachine.Travel("some_state");
```







## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                                              | [`allow_transition_to_self`](class_animationnodestatemachine.md#class_animationnodestatemachine_property_allow_transition_to_self) | ``false`` |
| [`bool`](class_bool.md)                                              | [`reset_ends`](class_animationnodestatemachine.md#class_animationnodestatemachine_property_reset_ends)                             | ``false`` |
| [StateMachineType](#enum_animationnodestatemachine_statemachinetype) | [`state_machine_type`](class_animationnodestatemachine.md#class_animationnodestatemachine_property_state_machine_type)             | ``0``     |

## 方法

|||
|:-:|:--|
| `void`                                                                                | [`add_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_add_node) ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )                                               |
| `void`                                                                                | [`add_transition`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_add_transition) ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md), transition: [`AnimationNodeStateMachineTransition`](class_animationnodestatemachinetransition.md) ) |
| [`Vector2`](class_vector2.md)                                                         | [`get_graph_offset`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_graph_offset) ( ) const[^const]                                                                                                                                                                     |
| [`AnimationNode`](class_animationnode.md)                                             | [`get_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_node) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                           |
| [`StringName`](class_stringname.md)                                                   | [`get_node_name`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_node_name) ( node: [`AnimationNode`](class_animationnode.md) ) const[^const]                                                                                                                           |
| [`Vector2`](class_vector2.md)                                                         | [`get_node_position`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_node_position) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                         |
| [`AnimationNodeStateMachineTransition`](class_animationnodestatemachinetransition.md) | [`get_transition`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_transition) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                              |
| [`int`](class_int.md)                                                                 | [`get_transition_count`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_transition_count) ( ) const[^const]                                                                                                                                                             |
| [`StringName`](class_stringname.md)                                                   | [`get_transition_from`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_transition_from) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                    |
| [`StringName`](class_stringname.md)                                                   | [`get_transition_to`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_get_transition_to) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                        |
| [`bool`](class_bool.md)                                                               | [`has_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_has_node) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                           |
| [`bool`](class_bool.md)                                                               | [`has_transition`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_has_transition) ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md) ) const[^const]                                                                                      |
| `void`                                                                                | [`remove_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_remove_node) ( name: [`StringName`](class_stringname.md) )                                                                                                                                                   |
| `void`                                                                                | [`remove_transition`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_remove_transition) ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md) )                                                                                              |
| `void`                                                                                | [`remove_transition_by_index`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_remove_transition_by_index) ( idx: [`int`](class_int.md) )                                                                                                                                    |
| `void`                                                                                | [`rename_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_rename_node) ( name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) )                                                                                                    |
| `void`                                                                                | [`replace_node`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_replace_node) ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md) )                                                                                                |
| `void`                                                                                | [`set_graph_offset`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_set_graph_offset) ( offset: [`Vector2`](class_vector2.md) )                                                                                                                                             |
| `void`                                                                                | [`set_node_position`](class_animationnodestatemachine.md#class_animationnodestatemachine_method_set_node_position) ( name: [`StringName`](class_stringname.md), position: [`Vector2`](class_vector2.md) )                                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodestatemachine_statemachinetype"></div>

enum **StateMachineType**: <div id="enum_animationnodestatemachine_statemachinetype"></div>

<div id="_class_animationnodestatemachine_constant_state_machine_type_root"></div>

[StateMachineType](#enum_animationnodestatemachine_statemachinetype) **STATE_MACHINE_TYPE_ROOT** = ``0``

Seeking to the beginning is treated as playing from the start state. Transition to the end state is treated as exiting the state machine.

<div id="_class_animationnodestatemachine_constant_state_machine_type_nested"></div>

[StateMachineType](#enum_animationnodestatemachine_statemachinetype) **STATE_MACHINE_TYPE_NESTED** = ``1``

Seeking to the beginning is treated as seeking to the beginning of the animation in the current state. Transition to the end state, or the absence of transitions in each state, is treated as exiting the state machine.

<div id="_class_animationnodestatemachine_constant_state_machine_type_grouped"></div>

[StateMachineType](#enum_animationnodestatemachine_statemachinetype) **STATE_MACHINE_TYPE_GROUPED** = ``2``

This is a grouped state machine that can be controlled from a parent state machine. It does not work independently. There must be a state machine with [`state_machine_type`](class_animationnodestatemachine.md#class_animationnodestatemachine_property_state_machine_type) of [`STATE_MACHINE_TYPE_ROOT`](class_animationnodestatemachine.md#class_animationnodestatemachine_constant_state_machine_type_root) or [`STATE_MACHINE_TYPE_NESTED`](class_animationnodestatemachine.md#class_animationnodestatemachine_constant_state_machine_type_nested) in the parent or ancestor.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodestatemachine_property_allow_transition_to_self"></div>

[`bool`](class_bool.md) **allow_transition_to_self** = ``false`` <div id="class_animationnodestatemachine_property_allow_transition_to_self"></div>

- `void` **set_allow_transition_to_self** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_allow_transition_to_self** ( )

If `true`, allows teleport to the self state with [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel). When the reset option is enabled in [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel), the animation is restarted. If `false`, nothing happens on the teleportation to the self state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_property_reset_ends"></div>

[`bool`](class_bool.md) **reset_ends** = ``false`` <div id="class_animationnodestatemachine_property_reset_ends"></div>

- `void` **set_reset_ends** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **are_ends_reset** ( )

If `true`, treat the cross-fade to the start and end nodes as a blend with the RESET animation.

In most cases, when additional cross-fades are performed in the parent [`AnimationNode`](class_animationnode.md) of the state machine, setting this property to `false` and matching the cross-fade time of the parent [`AnimationNode`](class_animationnode.md) and the state machine's start node and end node gives good results.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_property_state_machine_type"></div>

[StateMachineType](#enum_animationnodestatemachine_statemachinetype) **state_machine_type** = ``0`` <div id="class_animationnodestatemachine_property_state_machine_type"></div>

- `void` **set_state_machine_type** ( value: [StateMachineType](#enum_animationnodestatemachine_statemachinetype) )
- [StateMachineType](#enum_animationnodestatemachine_statemachinetype) **get_state_machine_type** ( )

This property can define the process of transitions for different use cases. See also [StateMachineType](#enum_animationnodestatemachine_statemachinetype).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodestatemachine_method_add_node"></div>

`void` **add_node** ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md), position: [`Vector2`](class_vector2.md) = Vector2(0, 0) )<div id="class_animationnodestatemachine_method_add_node"></div>

Adds a new animation node to the graph. The `position` is used for display in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_add_transition"></div>

`void` **add_transition** ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md), transition: [`AnimationNodeStateMachineTransition`](class_animationnodestatemachinetransition.md) )<div id="class_animationnodestatemachine_method_add_transition"></div>

Adds a transition between the given animation nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_graph_offset"></div>

[`Vector2`](class_vector2.md) **get_graph_offset** ( ) const[^const]<div id="class_animationnodestatemachine_method_get_graph_offset"></div>

Returns the draw offset of the graph. Used for display in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_node"></div>

[`AnimationNode`](class_animationnode.md) **get_node** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_node"></div>

Returns the animation node with the given name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_node_name"></div>

[`StringName`](class_stringname.md) **get_node_name** ( node: [`AnimationNode`](class_animationnode.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_node_name"></div>

Returns the given animation node's name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_node_position"></div>

[`Vector2`](class_vector2.md) **get_node_position** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_node_position"></div>

Returns the given animation node's coordinates. Used for display in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_transition"></div>

[`AnimationNodeStateMachineTransition`](class_animationnodestatemachinetransition.md) **get_transition** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_transition"></div>

Returns the given transition.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_transition_count"></div>

[`int`](class_int.md) **get_transition_count** ( ) const[^const]<div id="class_animationnodestatemachine_method_get_transition_count"></div>

Returns the number of connections in the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_transition_from"></div>

[`StringName`](class_stringname.md) **get_transition_from** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_transition_from"></div>

Returns the given transition's start node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_get_transition_to"></div>

[`StringName`](class_stringname.md) **get_transition_to** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_animationnodestatemachine_method_get_transition_to"></div>

Returns the given transition's end node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_has_node"></div>

[`bool`](class_bool.md) **has_node** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodestatemachine_method_has_node"></div>

Returns `true` if the graph contains the given animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_has_transition"></div>

[`bool`](class_bool.md) **has_transition** ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md) ) const[^const]<div id="class_animationnodestatemachine_method_has_transition"></div>

Returns `true` if there is a transition between the given animation nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_remove_node"></div>

`void` **remove_node** ( name: [`StringName`](class_stringname.md) )<div id="class_animationnodestatemachine_method_remove_node"></div>

Deletes the given animation node from the graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_remove_transition"></div>

`void` **remove_transition** ( from: [`StringName`](class_stringname.md), to: [`StringName`](class_stringname.md) )<div id="class_animationnodestatemachine_method_remove_transition"></div>

Deletes the transition between the two specified animation nodes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_remove_transition_by_index"></div>

`void` **remove_transition_by_index** ( idx: [`int`](class_int.md) )<div id="class_animationnodestatemachine_method_remove_transition_by_index"></div>

Deletes the given transition by index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_rename_node"></div>

`void` **rename_node** ( name: [`StringName`](class_stringname.md), new_name: [`StringName`](class_stringname.md) )<div id="class_animationnodestatemachine_method_rename_node"></div>

Renames the given animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_replace_node"></div>

`void` **replace_node** ( name: [`StringName`](class_stringname.md), node: [`AnimationNode`](class_animationnode.md) )<div id="class_animationnodestatemachine_method_replace_node"></div>

Replaces the given animation node with a new animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_set_graph_offset"></div>

`void` **set_graph_offset** ( offset: [`Vector2`](class_vector2.md) )<div id="class_animationnodestatemachine_method_set_graph_offset"></div>

Sets the draw offset of the graph. Used for display in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachine_method_set_node_position"></div>

`void` **set_node_position** ( name: [`StringName`](class_stringname.md), position: [`Vector2`](class_vector2.md) )<div id="class_animationnodestatemachine_method_set_node_position"></div>

Sets the animation node's coordinates. Used for display in the editor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
