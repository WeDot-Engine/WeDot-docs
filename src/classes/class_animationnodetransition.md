<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeTransition.xml。 -->

<div id="_class_animationnodetransition"></div>

# AnimationNodeTransition

**继承：** [`AnimationNodeSync`](class_animationnodesync.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A transition within an [`AnimationTree`](class_animationtree.md) connecting two [`AnimationNode`](class_animationnode.md) s.

## 描述

Simple state machine for cases which don't require a more advanced [`AnimationNodeStateMachine`](class_animationnodestatemachine.md). Animations can be connected to the inputs and transition times can be specified.

After setting the request and changing the animation playback, the transition node automatically clears the request on the next process frame by setting its `transition_request` value to empty.

 **Note:** When using a cross-fade, `current_state` and `current_index` change to the next state immediately after the cross-fade begins.



```gdscript

    # Play child animation connected to "state_2" port.
    animation_tree.set("parameters/Transition/transition_request", "state_2")
    # Alternative syntax (same result as above).
    animation_tree["parameters/Transition/transition_request"] = "state_2"
    
    # Get current state name (read-only).
    animation_tree.get("parameters/Transition/current_state")
    # Alternative syntax (same result as above).
    animation_tree["parameters/Transition/current_state"]
    
    # Get current state index (read-only).
    animation_tree.get("parameters/Transition/current_index")
    # Alternative syntax (same result as above).
    animation_tree["parameters/Transition/current_index"]
```

```csharp

    // Play child animation connected to "state_2" port.
    animationTree.Set("parameters/Transition/transition_request", "state_2");
    
    // Get current state name (read-only).
    animationTree.Get("parameters/Transition/current_state");
    
    // Get current state index (read-only).
    animationTree.Get("parameters/Transition/current_index");
```







## 属性

| [`bool`](class_bool.md)   | [`allow_transition_to_self`](#class_animationnodetransition_property_allow_transition_to_self) | ``false`` |
| [`int`](class_int.md)     | [`input_count`](#class_animationnodetransition_property_input_count)                           | ``0``     |
| [`Curve`](class_curve.md) | [`xfade_curve`](#class_animationnodetransition_property_xfade_curve)                           |           |
| [`float`](class_float.md) | [`xfade_time`](#class_animationnodetransition_property_xfade_time)                             | ``0.0``   |

## 方法

| [`bool`](class_bool.md) | [`is_input_loop_broken_at_end`](#class_animationnodetransition_method_is_input_loop_broken_at_end) ( input: [`int`](class_int.md) ) const[^const]                    |
| [`bool`](class_bool.md) | [`is_input_reset`](#class_animationnodetransition_method_is_input_reset) ( input: [`int`](class_int.md) ) const[^const]                                              |
| [`bool`](class_bool.md) | [`is_input_set_as_auto_advance`](#class_animationnodetransition_method_is_input_set_as_auto_advance) ( input: [`int`](class_int.md) ) const[^const]                  |
| `void`                  | [`set_input_as_auto_advance`](#class_animationnodetransition_method_set_input_as_auto_advance) ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) )     |
| `void`                  | [`set_input_break_loop_at_end`](#class_animationnodetransition_method_set_input_break_loop_at_end) ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) ) |
| `void`                  | [`set_input_reset`](#class_animationnodetransition_method_set_input_reset) ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) )                         |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodetransition_property_allow_transition_to_self"></div>

[`bool`](class_bool.md) **allow_transition_to_self** = ``false`` <div id="class_animationnodetransition_property_allow_transition_to_self"></div>

- `void` **set_allow_transition_to_self** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_allow_transition_to_self** ( )

If `true`, allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If `false`, nothing happens on the transition to the self state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_property_input_count"></div>

[`int`](class_int.md) **input_count** = ``0`` <div id="class_animationnodetransition_property_input_count"></div>

- `void` **set_input_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_input_count** ( )

The number of enabled input ports for this animation node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_property_xfade_curve"></div>

[`Curve`](class_curve.md) **xfade_curve** <div id="class_animationnodetransition_property_xfade_curve"></div>

- `void` **set_xfade_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_xfade_curve** ( )

Determines how cross-fading between animations is eased. If empty, the transition will be linear.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_property_xfade_time"></div>

[`float`](class_float.md) **xfade_time** = ``0.0`` <div id="class_animationnodetransition_property_xfade_time"></div>

- `void` **set_xfade_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_xfade_time** ( )

Cross-fading time (in seconds) between each animation connected to the inputs.

 **Note:** **AnimationNodeTransition** transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When [`AnimationNodeOutput`](class_animationnodeoutput.md) is considered as the most upstream, so the [`xfade_time`](#class_animationnodetransition_property_xfade_time) is not scaled depending on the downstream delta. See also [`AnimationNodeOneShot.fadeout_time`](#class_animationnodeoneshot_property_fadeout_time).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodetransition_method_is_input_loop_broken_at_end"></div>

[`bool`](class_bool.md) **is_input_loop_broken_at_end** ( input: [`int`](class_int.md) ) const[^const]<div id="class_animationnodetransition_method_is_input_loop_broken_at_end"></div>

Returns whether the animation breaks the loop at the end of the loop cycle for transition.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_method_is_input_reset"></div>

[`bool`](class_bool.md) **is_input_reset** ( input: [`int`](class_int.md) ) const[^const]<div id="class_animationnodetransition_method_is_input_reset"></div>

Returns whether the animation restarts when the animation transitions from the other animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_method_is_input_set_as_auto_advance"></div>

[`bool`](class_bool.md) **is_input_set_as_auto_advance** ( input: [`int`](class_int.md) ) const[^const]<div id="class_animationnodetransition_method_is_input_set_as_auto_advance"></div>

Returns `true` if auto-advance is enabled for the given `input` index.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_method_set_input_as_auto_advance"></div>

`void` **set_input_as_auto_advance** ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_animationnodetransition_method_set_input_as_auto_advance"></div>

Enables or disables auto-advance for the given `input` index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_method_set_input_break_loop_at_end"></div>

`void` **set_input_break_loop_at_end** ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_animationnodetransition_method_set_input_break_loop_at_end"></div>

If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodetransition_method_set_input_reset"></div>

`void` **set_input_reset** ( input: [`int`](class_int.md), enable: [`bool`](class_bool.md) )<div id="class_animationnodetransition_method_set_input_reset"></div>

If `true`, the destination animation is restarted when the animation transitions.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
