<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeStateMachinePlayback.xml。 -->

<div id="_class_animationnodestatemachineplayback"></div>

# AnimationNodeStateMachinePlayback

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Provides playback control for an [`AnimationNodeStateMachine`](class_animationnodestatemachine.md).

## 描述

Allows control of [`AnimationTree`](class_animationtree.md) state machines created with [`AnimationNodeStateMachine`](class_animationnodestatemachine.md). Retrieve with `$AnimationTree.get("parameters/playback")`.

 **Example:** 



```gdscript

    var state_machine = $AnimationTree.get("parameters/playback")
    state_machine.travel("some_state")
```

```csharp

    var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback").As<AnimationNodeStateMachinePlayback>();
    stateMachine.Travel("some_state");
```







## 属性

| [`bool`](class_bool.md) | resource_local_to_scene | ``true`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |

## 方法

| [`float`](class_float.md)                                   | [`get_current_length`](#class_animationnodestatemachineplayback_method_get_current_length) ( ) const[^const]                                                           |
| [`StringName`](class_stringname.md)                         | [`get_current_node`](#class_animationnodestatemachineplayback_method_get_current_node) ( ) const[^const]                                                               |
| [`float`](class_float.md)                                   | [`get_current_play_position`](#class_animationnodestatemachineplayback_method_get_current_play_position) ( ) const[^const]                                             |
| [`StringName`](class_stringname.md)                         | [`get_fading_from_node`](#class_animationnodestatemachineplayback_method_get_fading_from_node) ( ) const[^const]                                                       |
| [Array](class_array.md) [`StringName`](class_stringname.md) | [`get_travel_path`](#class_animationnodestatemachineplayback_method_get_travel_path) ( ) const[^const]                                                                 |
| [`bool`](class_bool.md)                                     | [`is_playing`](#class_animationnodestatemachineplayback_method_is_playing) ( ) const[^const]                                                                           |
| `void`                                                      | [`next`](#class_animationnodestatemachineplayback_method_next) ( )                                                                                                     |
| `void`                                                      | [`start`](#class_animationnodestatemachineplayback_method_start) ( node: [`StringName`](class_stringname.md), reset: [`bool`](class_bool.md) = true )                  |
| `void`                                                      | [`stop`](#class_animationnodestatemachineplayback_method_stop) ( )                                                                                                     |
| `void`                                                      | [`travel`](#class_animationnodestatemachineplayback_method_travel) ( to_node: [`StringName`](class_stringname.md), reset_on_teleport: [`bool`](class_bool.md) = true ) |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodestatemachineplayback_method_get_current_length"></div>

[`float`](class_float.md) **get_current_length** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_get_current_length"></div>

Returns the current state length.

 **Note:** It is possible that any [`AnimationRootNode`](class_animationrootnode.md) can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_get_current_node"></div>

[`StringName`](class_stringname.md) **get_current_node** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_get_current_node"></div>

Returns the currently playing animation state.

 **Note:** When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_get_current_play_position"></div>

[`float`](class_float.md) **get_current_play_position** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_get_current_play_position"></div>

Returns the playback position within the current animation state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_get_fading_from_node"></div>

[`StringName`](class_stringname.md) **get_fading_from_node** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_get_fading_from_node"></div>

Returns the starting state of currently fading animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_get_travel_path"></div>

[Array](class_array.md) [`StringName`](class_stringname.md) **get_travel_path** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_get_travel_path"></div>

Returns the current travel path as computed internally by the A\* algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_is_playing"></div>

[`bool`](class_bool.md) **is_playing** ( ) const[^const]<div id="class_animationnodestatemachineplayback_method_is_playing"></div>

Returns `true` if an animation is playing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_next"></div>

`void` **next** ( )<div id="class_animationnodestatemachineplayback_method_next"></div>

If there is a next path by travel or auto advance, immediately transitions from the current state to the next state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_start"></div>

`void` **start** ( node: [`StringName`](class_stringname.md), reset: [`bool`](class_bool.md) = true )<div id="class_animationnodestatemachineplayback_method_start"></div>

Starts playing the given animation.

If `reset` is `true`, the animation is played from the beginning.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_stop"></div>

`void` **stop** ( )<div id="class_animationnodestatemachineplayback_method_stop"></div>

Stops the currently playing animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachineplayback_method_travel"></div>

`void` **travel** ( to_node: [`StringName`](class_stringname.md), reset_on_teleport: [`bool`](class_bool.md) = true )<div id="class_animationnodestatemachineplayback_method_travel"></div>

Transitions from the current state to another one, following the shortest path.

If the path does not connect from the current state, the animation will play after the state teleports.

If `reset_on_teleport` is `true`, the animation is played from the beginning when the travel cause a teleportation.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
