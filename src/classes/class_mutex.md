<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Mutex.xml。 -->

<div id="_class_mutex"></div>

# Mutex

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A binary [`Semaphore`](class_semaphore.md) for synchronization of multiple [`Thread`](class_thread.md) s.

## 描述

A synchronization mutex (mutual exclusion). This is used to synchronize multiple [`Thread`](class_thread.md) s, and is equivalent to a binary [`Semaphore`](class_semaphore.md). It guarantees that only one thread can access a critical section at a time.

This is a reentrant mutex, meaning that it can be locked multiple times by one thread, provided it also unlocks it as many times.

 **Warning:** Mutexes must be used carefully to avoid deadlocks.

 **Warning:** To ensure proper cleanup without crashes or deadlocks, the following conditions must be met:

- When a **Mutex**'s reference count reaches zero and it is therefore destroyed, no threads (including the one on which the destruction will happen) must have it locked.

- When a [`Thread`](class_thread.md)'s reference count reaches zero and it is therefore destroyed, it must not have any mutex locked.

## 方法

| `void`                  | [`lock`](#class_mutex_method_lock) ( )         |
| [`bool`](class_bool.md) | [`try_lock`](#class_mutex_method_try_lock) ( ) |
| `void`                  | [`unlock`](#class_mutex_method_unlock) ( )     |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_mutex_method_lock"></div>

`void` **lock** ( )<div id="class_mutex_method_lock"></div>

Locks this **Mutex**, blocks until it is unlocked by the current owner.

 **Note:** This function returns without blocking if the thread already has ownership of the mutex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mutex_method_try_lock"></div>

[`bool`](class_bool.md) **try_lock** ( )<div id="class_mutex_method_try_lock"></div>

Tries locking this **Mutex**, but does not block. Returns `true` on success, `false` otherwise.

 **Note:** This function returns `true` if the thread already has ownership of the mutex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mutex_method_unlock"></div>

`void` **unlock** ( )<div id="class_mutex_method_unlock"></div>

Unlocks this **Mutex**, leaving it to other threads.

 **Note:** If a thread called [`lock`](#class_mutex_method_lock) or [`try_lock`](#class_mutex_method_try_lock) multiple times while already having ownership of the mutex, it must also call [`unlock`](#class_mutex_method_unlock) the same number of times in order to unlock it correctly.

 **Warning:** Calling [`unlock`](#class_mutex_method_unlock) more times that [`lock`](#class_mutex_method_lock) on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
