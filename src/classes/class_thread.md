<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Thread.xml。 -->

<div id="_class_thread"></div>

# Thread

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A unit of execution in a process.

## 描述

A unit of execution in a process. Can run methods on [`Object`](class_object.md) s simultaneously. The use of synchronization via [`Mutex`](class_mutex.md) or [`Semaphore`](class_semaphore.md) is advised if working with shared objects.

 **Warning:** 

To ensure proper cleanup without crashes or deadlocks, when a **Thread**'s reference count reaches zero and it is therefore destroyed, the following conditions must be met:

- It must not have any [`Mutex`](class_mutex.md) objects locked.

- It must not be waiting on any [`Semaphore`](class_semaphore.md) objects.

- [`wait_to_finish`](class_thread.md#class_thread_method_wait_to_finish) should have been called on it.

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)       | [`get_id`](class_thread.md#class_thread_method_get_id) ( ) const[^const]                                                                                        |
| [`bool`](class_bool.md)           | [`is_alive`](class_thread.md#class_thread_method_is_alive) ( ) const[^const]                                                                                    |
| [`bool`](class_bool.md)           | [`is_started`](class_thread.md#class_thread_method_is_started) ( ) const[^const]                                                                                |
| `void`                            | [`set_thread_safety_checks_enabled`](class_thread.md#class_thread_method_set_thread_safety_checks_enabled) ( enabled: [`bool`](class_bool.md) ) static[^static] |
| [Error](#enum_@globalscope_error) | [`start`](class_thread.md#class_thread_method_start) ( callable: [`Callable`](class_callable.md), priority: [Priority](#enum_thread_priority) = 1 )             |
| [`Variant`](class_variant.md)     | [`wait_to_finish`](class_thread.md#class_thread_method_wait_to_finish) ( )                                                                                      |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_thread_priority"></div>

enum **Priority**: <div id="enum_thread_priority"></div>

<div id="_class_thread_constant_priority_low"></div>

[Priority](#enum_thread_priority) **PRIORITY_LOW** = ``0``

A thread running with lower priority than normally.

<div id="_class_thread_constant_priority_normal"></div>

[Priority](#enum_thread_priority) **PRIORITY_NORMAL** = ``1``

A thread with a standard priority.

<div id="_class_thread_constant_priority_high"></div>

[Priority](#enum_thread_priority) **PRIORITY_HIGH** = ``2``

A thread running with higher priority than normally.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_thread_method_get_id"></div>

[`String`](class_string.md) **get_id** ( ) const[^const]<div id="class_thread_method_get_id"></div>

Returns the current **Thread**'s ID, uniquely identifying it among all threads. If the **Thread** has not started running or if [`wait_to_finish`](class_thread.md#class_thread_method_wait_to_finish) has been called, this returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_thread_method_is_alive"></div>

[`bool`](class_bool.md) **is_alive** ( ) const[^const]<div id="class_thread_method_is_alive"></div>

Returns `true` if this **Thread** is currently running the provided function. This is useful for determining if [`wait_to_finish`](class_thread.md#class_thread_method_wait_to_finish) can be called without blocking the calling thread.

To check if a **Thread** is joinable, use [`is_started`](class_thread.md#class_thread_method_is_started).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_thread_method_is_started"></div>

[`bool`](class_bool.md) **is_started** ( ) const[^const]<div id="class_thread_method_is_started"></div>

Returns `true` if this **Thread** has been started. Once started, this will return `true` until it is joined using [`wait_to_finish`](class_thread.md#class_thread_method_wait_to_finish). For checking if a **Thread** is still executing its task, use [`is_alive`](class_thread.md#class_thread_method_is_alive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_thread_method_set_thread_safety_checks_enabled"></div>

`void` **set_thread_safety_checks_enabled** ( enabled: [`bool`](class_bool.md) ) static[^static]<div id="class_thread_method_set_thread_safety_checks_enabled"></div>

Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [`Node`](class_node.md)) should happen **on the current thread**.

The default, for every thread, is that they are enabled (as if called with `enabled` being `true`).

Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.

Because of that, there may be cases where the user may want to disable them (`enabled` being `false`) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [`Mutex`](class_mutex.md)) for those objects that are otherwise protected by the engine.

 **Note:** This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.

 **Note:** This is useful for scripts running on either arbitrary **Thread** objects or tasks submitted to the [`WorkerThreadPool`](class_workerthreadpool.md). It doesn't apply to code running during [`Node`](class_node.md) group processing, where the checks will be always performed.

 **Note:** Even in the case of having disabled the checks in a [`WorkerThreadPool`](class_workerthreadpool.md) task, there's no need to re-enable them at the end. The engine will do so.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_thread_method_start"></div>

[Error](#enum_@globalscope_error) **start** ( callable: [`Callable`](class_callable.md), priority: [Priority](#enum_thread_priority) = 1 )<div id="class_thread_method_start"></div>

Starts a new **Thread** that calls `callable`.

If the method takes some arguments, you can pass them using [`Callable.bind`](class_callable.md#class_callable_method_bind).

The `priority` of the **Thread** can be changed by passing a value from the [Priority](#enum_thread_priority) enum.

Returns [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success, or [`@GlobalScope.ERR_CANT_CREATE`](class_@globalscope.md#class_@globalscope_constant_err_cant_create) on failure.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_thread_method_wait_to_finish"></div>

[`Variant`](class_variant.md) **wait_to_finish** ( )<div id="class_thread_method_wait_to_finish"></div>

Joins the **Thread** and waits for it to finish. Returns the output of the [`Callable`](class_callable.md) passed to [`start`](class_thread.md#class_thread_method_start).

Should either be used when you want to retrieve the value returned from the method called by the **Thread** or before freeing the instance that contains the **Thread**.

To determine if this can be called without blocking the calling thread, check if [`is_alive`](class_thread.md#class_thread_method_is_alive) is `false`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
