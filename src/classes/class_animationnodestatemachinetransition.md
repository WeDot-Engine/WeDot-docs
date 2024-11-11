<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNodeStateMachineTransition.xml。 -->

<div id="_class_animationnodestatemachinetransition"></div>

# AnimationNodeStateMachineTransition

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A transition within an [`AnimationNodeStateMachine`](class_animationnodestatemachine.md) connecting two [`AnimationRootNode`](class_animationrootnode.md) s.

## 描述

The path generated when using [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel) is limited to the nodes connected by **AnimationNodeStateMachineTransition**.

You can set the timing and conditions of the transition in detail.

## 属性

|||
|:-:|:--|
| [`StringName`](class_stringname.md)                                  | [`advance_condition`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_condition)   | ``&""``   |
| [`String`](class_string.md)                                          | [`advance_expression`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_expression) | ``""``    |
| [AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) | [`advance_mode`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_mode)             | ``1``     |
| [`bool`](class_bool.md)                                              | [`break_loop_at_end`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_break_loop_at_end)   | ``false`` |
| [`int`](class_int.md)                                                | [`priority`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_priority)                     | ``1``     |
| [`bool`](class_bool.md)                                              | [`reset`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_reset)                           | ``true``  |
| [SwitchMode](#enum_animationnodestatemachinetransition_switchmode)   | [`switch_mode`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_switch_mode)               | ``0``     |
| [`Curve`](class_curve.md)                                            | [`xfade_curve`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_xfade_curve)               |           |
| [`float`](class_float.md)                                            | [`xfade_time`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_xfade_time)                 | ``0.0``   |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationnodestatemachinetransition_signal_advance_condition_changed"></div>

**advance_condition_changed** ( ) <div id="class_animationnodestatemachinetransition_signal_advance_condition_changed"></div>

Emitted when [`advance_condition`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_condition) is changed.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodestatemachinetransition_switchmode"></div>

enum **SwitchMode**: <div id="enum_animationnodestatemachinetransition_switchmode"></div>

<div id="_class_animationnodestatemachinetransition_constant_switch_mode_immediate"></div>

[SwitchMode](#enum_animationnodestatemachinetransition_switchmode) **SWITCH_MODE_IMMEDIATE** = ``0``

Switch to the next state immediately. The current state will end and blend into the beginning of the new one.

<div id="_class_animationnodestatemachinetransition_constant_switch_mode_sync"></div>

[SwitchMode](#enum_animationnodestatemachinetransition_switchmode) **SWITCH_MODE_SYNC** = ``1``

Switch to the next state immediately, but will seek the new state to the playback position of the old state.

<div id="_class_animationnodestatemachinetransition_constant_switch_mode_at_end"></div>

[SwitchMode](#enum_animationnodestatemachinetransition_switchmode) **SWITCH_MODE_AT_END** = ``2``

Wait for the current state playback to end, then switch to the beginning of the next state animation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_animationnodestatemachinetransition_advancemode"></div>

enum **AdvanceMode**: <div id="enum_animationnodestatemachinetransition_advancemode"></div>

<div id="_class_animationnodestatemachinetransition_constant_advance_mode_disabled"></div>

[AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) **ADVANCE_MODE_DISABLED** = ``0``

Don't use this transition.

<div id="_class_animationnodestatemachinetransition_constant_advance_mode_enabled"></div>

[AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) **ADVANCE_MODE_ENABLED** = ``1``

Only use this transition during [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel).

<div id="_class_animationnodestatemachinetransition_constant_advance_mode_auto"></div>

[AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) **ADVANCE_MODE_AUTO** = ``2``

Automatically use this transition if the [`advance_condition`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_condition) and [`advance_expression`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_expression) checks are true (if assigned).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodestatemachinetransition_property_advance_condition"></div>

[`StringName`](class_stringname.md) **advance_condition** = ``&""`` <div id="class_animationnodestatemachinetransition_property_advance_condition"></div>

- `void` **set_advance_condition** ( value: [`StringName`](class_stringname.md) )
- [`StringName`](class_stringname.md) **get_advance_condition** ( )

Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the [`AnimationTree`](class_animationtree.md) that can be controlled from code (see [*Using AnimationTree*](../tutorials/animation/animation_tree.md#controlling-from-code)). For example, if [`AnimationTree.tree_root`](class_animationtree.md#class_animationtree_property_tree_root) is an [`AnimationNodeStateMachine`](class_animationnodestatemachine.md) and [`advance_condition`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_condition) is set to `"idle"`:



```gdscript

    $animation_tree.set("parameters/conditions/idle", is_on_floor and (linear_velocity.x == 0))
```

```csharp

    GetNode<AnimationTree>("animation_tree").Set("parameters/conditions/idle", IsOnFloor && (LinearVelocity.X == 0));
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_advance_expression"></div>

[`String`](class_string.md) **advance_expression** = ``""`` <div id="class_animationnodestatemachinetransition_property_advance_expression"></div>

- `void` **set_advance_expression** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_advance_expression** ( )

Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_advance_mode"></div>

[AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) **advance_mode** = ``1`` <div id="class_animationnodestatemachinetransition_property_advance_mode"></div>

- `void` **set_advance_mode** ( value: [AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) )
- [AdvanceMode](#enum_animationnodestatemachinetransition_advancemode) **get_advance_mode** ( )

Determines whether the transition should disabled, enabled when using [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel), or traversed automatically if the [`advance_condition`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_condition) and [`advance_expression`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_expression) checks are true (if assigned).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_break_loop_at_end"></div>

[`bool`](class_bool.md) **break_loop_at_end** = ``false`` <div id="class_animationnodestatemachinetransition_property_break_loop_at_end"></div>

- `void` **set_break_loop_at_end** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_loop_broken_at_end** ( )

If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_priority"></div>

[`int`](class_int.md) **priority** = ``1`` <div id="class_animationnodestatemachinetransition_property_priority"></div>

- `void` **set_priority** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_priority** ( )

Lower priority transitions are preferred when travelling through the tree via [`AnimationNodeStateMachinePlayback.travel`](class_animationnodestatemachineplayback.md#class_animationnodestatemachineplayback_method_travel) or [`advance_mode`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_advance_mode) is set to [`ADVANCE_MODE_AUTO`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_constant_advance_mode_auto).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_reset"></div>

[`bool`](class_bool.md) **reset** = ``true`` <div id="class_animationnodestatemachinetransition_property_reset"></div>

- `void` **set_reset** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_reset** ( )

If `true`, the destination animation is played back from the beginning when switched.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_switch_mode"></div>

[SwitchMode](#enum_animationnodestatemachinetransition_switchmode) **switch_mode** = ``0`` <div id="class_animationnodestatemachinetransition_property_switch_mode"></div>

- `void` **set_switch_mode** ( value: [SwitchMode](#enum_animationnodestatemachinetransition_switchmode) )
- [SwitchMode](#enum_animationnodestatemachinetransition_switchmode) **get_switch_mode** ( )

The transition type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_xfade_curve"></div>

[`Curve`](class_curve.md) **xfade_curve** <div id="class_animationnodestatemachinetransition_property_xfade_curve"></div>

- `void` **set_xfade_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_xfade_curve** ( )

Ease curve for better control over cross-fade between this state and the next.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodestatemachinetransition_property_xfade_time"></div>

[`float`](class_float.md) **xfade_time** = ``0.0`` <div id="class_animationnodestatemachinetransition_property_xfade_time"></div>

- `void` **set_xfade_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_xfade_time** ( )

The time to cross-fade between this state and the next.

 **Note:** [`AnimationNodeStateMachine`](class_animationnodestatemachine.md) transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When [`AnimationNodeOutput`](class_animationnodeoutput.md) is considered as the most upstream, so the [`xfade_time`](class_animationnodestatemachinetransition.md#class_animationnodestatemachinetransition_property_xfade_time) is not scaled depending on the downstream delta. See also [`AnimationNodeOneShot.fadeout_time`](class_animationnodeoneshot.md#class_animationnodeoneshot_property_fadeout_time).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
