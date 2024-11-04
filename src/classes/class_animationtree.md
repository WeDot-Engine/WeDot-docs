<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationTree.xml。 -->

<div id="_class_animationtree"></div>

# AnimationTree

**继承：** [`AnimationMixer`](class_animationmixer.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node used for advanced animation transitions in an [`AnimationPlayer`](class_animationplayer.md).

## 描述

A node used for advanced animation transitions in an [`AnimationPlayer`](class_animationplayer.md).

 **Note:** When linked with an [`AnimationPlayer`](class_animationplayer.md), several properties and methods of the corresponding [`AnimationPlayer`](class_animationplayer.md) will not function as expected. Playback and transitions should be handled using only the **AnimationTree** and its constituent [`AnimationNode`](class_animationnode.md) (s). The [`AnimationPlayer`](class_animationplayer.md) node should be used solely for adding, deleting, and editing animations.

## 属性

| [`NodePath`](class_nodepath.md)                                                     | [`advance_expression_base_node`](#class_animationtree_property_advance_expression_base_node) | ``NodePath(".")``                                                                           |
| [`NodePath`](class_nodepath.md)                                                     | [`anim_player`](#class_animationtree_property_anim_player)                                   | ``NodePath("")``                                                                            |
| [AnimationCallbackModeDiscrete](#enum_animationmixer_animationcallbackmodediscrete) | callback_mode_discrete                                                                       | ``2`` (overrides [`AnimationMixer`](#class_animationmixer_property_callback_mode_discrete)) |
| [`bool`](class_bool.md)                                                             | deterministic                                                                                | ``true`` (overrides [`AnimationMixer`](#class_animationmixer_property_deterministic))       |
| [`AnimationRootNode`](class_animationrootnode.md)                                   | [`tree_root`](#class_animationtree_property_tree_root)                                       |                                                                                             |

## 方法

| [AnimationProcessCallback](#enum_animationtree_animationprocesscallback) | [`get_process_callback`](#class_animationtree_method_get_process_callback) ( ) const[^const]                                                                  |
| `void`                                                                   | [`set_process_callback`](#class_animationtree_method_set_process_callback) ( mode: [AnimationProcessCallback](#enum_animationtree_animationprocesscallback) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationtree_signal_animation_player_changed"></div>

**animation_player_changed** ( ) <div id="class_animationtree_signal_animation_player_changed"></div>

Emitted when the [`anim_player`](#class_animationtree_property_anim_player) is changed.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationtree_animationprocesscallback"></div>

enum **AnimationProcessCallback**: <div id="enum_animationtree_animationprocesscallback"></div>

<div id="_class_animationtree_constant_animation_process_physics"></div>

[AnimationProcessCallback](#enum_animationtree_animationprocesscallback) **ANIMATION_PROCESS_PHYSICS** = ``0``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`](#class_animationmixer_constant_animation_callback_mode_process_physics).



<div id="_class_animationtree_constant_animation_process_idle"></div>

[AnimationProcessCallback](#enum_animationtree_animationprocesscallback) **ANIMATION_PROCESS_IDLE** = ``1``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE`](#class_animationmixer_constant_animation_callback_mode_process_idle).



<div id="_class_animationtree_constant_animation_process_manual"></div>

[AnimationProcessCallback](#enum_animationtree_animationprocesscallback) **ANIMATION_PROCESS_MANUAL** = ``2``

**已弃用：** See [`AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL`](#class_animationmixer_constant_animation_callback_mode_process_manual).



<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationtree_property_advance_expression_base_node"></div>

[`NodePath`](class_nodepath.md) **advance_expression_base_node** = ``NodePath(".")`` <div id="class_animationtree_property_advance_expression_base_node"></div>

- `void` **set_advance_expression_base_node** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_advance_expression_base_node** ( )

The path to the [`Node`](class_node.md) used to evaluate the [`AnimationNode`](class_animationnode.md) [`Expression`](class_expression.md) if one is not explicitly specified internally.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationtree_property_anim_player"></div>

[`NodePath`](class_nodepath.md) **anim_player** = ``NodePath("")`` <div id="class_animationtree_property_anim_player"></div>

- `void` **set_animation_player** ( value: [`NodePath`](class_nodepath.md) )
- [`NodePath`](class_nodepath.md) **get_animation_player** ( )

The path to the [`AnimationPlayer`](class_animationplayer.md) used for animating.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationtree_property_tree_root"></div>

[`AnimationRootNode`](class_animationrootnode.md) **tree_root** <div id="class_animationtree_property_tree_root"></div>

- `void` **set_tree_root** ( value: [`AnimationRootNode`](class_animationrootnode.md) )
- [`AnimationRootNode`](class_animationrootnode.md) **get_tree_root** ( )

The root animation node of this **AnimationTree**. See [`AnimationRootNode`](class_animationrootnode.md).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationtree_method_get_process_callback"></div>

[AnimationProcessCallback](#enum_animationtree_animationprocesscallback) **get_process_callback** ( ) const[^const]<div id="class_animationtree_method_get_process_callback"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_process`](#class_animationmixer_property_callback_mode_process) instead.

Returns the process notification in which to update animations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationtree_method_set_process_callback"></div>

`void` **set_process_callback** ( mode: [AnimationProcessCallback](#enum_animationtree_animationprocesscallback) )<div id="class_animationtree_method_set_process_callback"></div>

**已弃用：** Use [`AnimationMixer.callback_mode_process`](#class_animationmixer_property_callback_mode_process) instead.

Sets the process notification in which to update animations.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
