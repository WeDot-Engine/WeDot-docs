<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Timer.xml。 -->

<div id="_class_timer"></div>

# Timer

**继承：** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A countdown timer.

## 描述

The **Timer** node is a countdown timer and is the simplest way to handle time-based logic in the engine. When a timer reaches the end of its [`wait_time`](#class_timer_property_wait_time), it will emit the [`timeout`](#class_timer_signal_timeout) signal.

After a timer enters the tree, it can be manually started with [`start`](#class_timer_method_start). A timer node is also started automatically if [`autostart`](#class_timer_property_autostart) is `true`.

Without requiring much code, a timer node can be added and configured in the editor. The [`timeout`](#class_timer_signal_timeout) signal it emits can also be connected through the Node dock in the editor:

```

    func _on_timer_timeout():
        print("Time to attack!")
```

 **Note:** To create a one-shot timer without instantiating a node, use [`SceneTree.create_timer`](#class_scenetree_method_create_timer).

 **Note:** Timers are affected by [`Engine.time_scale`](#class_engine_property_time_scale). The higher the time scale, the sooner timers will end. How often a timer processes may depend on the framerate or [`Engine.physics_ticks_per_second`](#class_engine_property_physics_ticks_per_second).



## 属性

| [`bool`](class_bool.md)                                  | [`autostart`](#class_timer_property_autostart)               | ``false`` |
| [`bool`](class_bool.md)                                  | [`one_shot`](#class_timer_property_one_shot)                 | ``false`` |
| [`bool`](class_bool.md)                                  | [`paused`](#class_timer_property_paused)                     |           |
| [TimerProcessCallback](#enum_timer_timerprocesscallback) | [`process_callback`](#class_timer_property_process_callback) | ``1``     |
| [`float`](class_float.md)                                | [`time_left`](#class_timer_property_time_left)               |           |
| [`float`](class_float.md)                                | [`wait_time`](#class_timer_property_wait_time)               | ``1.0``   |

## 方法

| [`bool`](class_bool.md) | [`is_stopped`](#class_timer_method_is_stopped) ( ) const[^const]                  |
| `void`                  | [`start`](#class_timer_method_start) ( time_sec: [`float`](class_float.md) = -1 ) |
| `void`                  | [`stop`](#class_timer_method_stop) ( )                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_timer_signal_timeout"></div>

**timeout** ( ) <div id="class_timer_signal_timeout"></div>

Emitted when the timer reaches the end.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_timer_timerprocesscallback"></div>

enum **TimerProcessCallback**: <div id="enum_timer_timerprocesscallback"></div>

<div id="_class_timer_constant_timer_process_physics"></div>

[TimerProcessCallback](#enum_timer_timerprocesscallback) **TIMER_PROCESS_PHYSICS** = ``0``

Update the timer every physics process frame (see [`Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS`](#class_node_constant_notification_internal_physics_process)).

<div id="_class_timer_constant_timer_process_idle"></div>

[TimerProcessCallback](#enum_timer_timerprocesscallback) **TIMER_PROCESS_IDLE** = ``1``

Update the timer every process (rendered) frame (see [`Node.NOTIFICATION_INTERNAL_PROCESS`](#class_node_constant_notification_internal_process)).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_timer_property_autostart"></div>

[`bool`](class_bool.md) **autostart** = ``false`` <div id="class_timer_property_autostart"></div>

- `void` **set_autostart** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **has_autostart** ( )

If `true`, the timer will start immediately when it enters the scene tree.

 **Note:** After the timer enters the tree, this property is automatically set to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_property_one_shot"></div>

[`bool`](class_bool.md) **one_shot** = ``false`` <div id="class_timer_property_one_shot"></div>

- `void` **set_one_shot** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_one_shot** ( )

If `true`, the timer will stop after reaching the end. Otherwise, as by default, the timer will automatically restart.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_property_paused"></div>

[`bool`](class_bool.md) **paused** <div id="class_timer_property_paused"></div>

- `void` **set_paused** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_paused** ( )

If `true`, the timer is paused. A paused timer does not process until this property is set back to `false`, even when [`start`](#class_timer_method_start) is called.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_property_process_callback"></div>

[TimerProcessCallback](#enum_timer_timerprocesscallback) **process_callback** = ``1`` <div id="class_timer_property_process_callback"></div>

- `void` **set_timer_process_callback** ( value: [TimerProcessCallback](#enum_timer_timerprocesscallback) )
- [TimerProcessCallback](#enum_timer_timerprocesscallback) **get_timer_process_callback** ( )

Specifies when the timer is updated during the main loop (see [TimerProcessCallback](#enum_timer_timerprocesscallback)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_property_time_left"></div>

[`float`](class_float.md) **time_left** <div id="class_timer_property_time_left"></div>

- [`float`](class_float.md) **get_time_left** ( )

The timer's remaining time in seconds. This is always `0` if the timer is stopped.

 **Note:** This property is read-only and cannot be modified. It is based on [`wait_time`](#class_timer_property_wait_time).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_property_wait_time"></div>

[`float`](class_float.md) **wait_time** = ``1.0`` <div id="class_timer_property_wait_time"></div>

- `void` **set_wait_time** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_wait_time** ( )

The time required for the timer to end, in seconds. This property can also be set every time [`start`](#class_timer_method_start) is called.

 **Note:** Timers can only process once per physics or process frame (depending on the [`process_callback`](#class_timer_property_process_callback)). An unstable framerate may cause the timer to end inconsistently, which is especially noticeable if the wait time is lower than roughly `0.05` seconds. For very short timers, it is recommended to write your own code instead of using a **Timer** node. Timers are also affected by [`Engine.time_scale`](#class_engine_property_time_scale).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_timer_method_is_stopped"></div>

[`bool`](class_bool.md) **is_stopped** ( ) const[^const]<div id="class_timer_method_is_stopped"></div>

Returns `true` if the timer is stopped or has not started.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_method_start"></div>

`void` **start** ( time_sec: [`float`](class_float.md) = -1 )<div id="class_timer_method_start"></div>

Starts the timer, if it was not started already. Fails if the timer is not inside the tree. If `time_sec` is greater than `0`, this value is used for the [`wait_time`](#class_timer_property_wait_time).

 **Note:** This method does not resume a paused timer. See [`paused`](#class_timer_property_paused).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_timer_method_stop"></div>

`void` **stop** ( )<div id="class_timer_method_stop"></div>

Stops the timer.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
