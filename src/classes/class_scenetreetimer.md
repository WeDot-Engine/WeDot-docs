<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/SceneTreeTimer.xml。 -->

<div id="_class_scenetreetimer"></div>

# SceneTreeTimer

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

One-shot timer.

## 描述

A one-shot timer managed by the scene tree, which emits [`timeout`](#class_scenetreetimer_signal_timeout) on completion. See also [`SceneTree.create_timer`](#class_scenetree_method_create_timer).

As opposed to [`Timer`](class_timer.md), it does not require the instantiation of a node. Commonly used to create a one-shot delay timer as in the following example:



```gdscript

    func some_function():
        print("Timer started.")
        await get_tree().create_timer(1.0).timeout
        print("Timer ended.")
```

```csharp

    public async Task SomeFunction()
    {
        GD.Print("Timer started.");
        await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
        GD.Print("Timer ended.");
    }
```



The timer will be dereferenced after its time elapses. To preserve the timer, you can keep a reference to it. See [`RefCounted`](class_refcounted.md).

 **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's [`Node._process`](#class_node_private_method__process) method would be called before the timer (or [`Node._physics_process`](#class_node_private_method__physics_process) if `process_in_physics` in [`SceneTree.create_timer`](#class_scenetree_method_create_timer) has been set to `true`).





## 属性

| [`float`](class_float.md) | [`time_left`](#class_scenetreetimer_property_time_left) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_scenetreetimer_signal_timeout"></div>

**timeout** ( ) <div id="class_scenetreetimer_signal_timeout"></div>

Emitted when the timer reaches 0.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_scenetreetimer_property_time_left"></div>

[`float`](class_float.md) **time_left** <div id="class_scenetreetimer_property_time_left"></div>

- `void` **set_time_left** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_time_left** ( )

The time remaining (in seconds).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
