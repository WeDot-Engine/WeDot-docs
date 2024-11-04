<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Semaphore.xml。 -->

<div id="_class_semaphore"></div>

# Semaphore

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A synchronization mechanism used to control access to a shared resource by [`Thread`](class_thread.md) s.

## 描述

A synchronization semaphore that can be used to synchronize multiple [`Thread`](class_thread.md) s. Initialized to zero on creation. For a binary version, see [`Mutex`](class_mutex.md).

 **Warning:** Semaphores must be used carefully to avoid deadlocks.

 **Warning:** To guarantee that the operating system is able to perform proper cleanup (no crashes, no deadlocks), these conditions must be met:

- When a **Semaphore**'s reference count reaches zero and it is therefore destroyed, no threads must be waiting on it.

- When a [`Thread`](class_thread.md)'s reference count reaches zero and it is therefore destroyed, it must not be waiting on any semaphore.

## 方法

| `void`                  | [`post`](#class_semaphore_method_post) ( )         |
| [`bool`](class_bool.md) | [`try_wait`](#class_semaphore_method_try_wait) ( ) |
| `void`                  | [`wait`](#class_semaphore_method_wait) ( )         |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_semaphore_method_post"></div>

`void` **post** ( )<div id="class_semaphore_method_post"></div>

Lowers the **Semaphore**, allowing one more thread in.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_semaphore_method_try_wait"></div>

[`bool`](class_bool.md) **try_wait** ( )<div id="class_semaphore_method_try_wait"></div>

Like [`wait`](#class_semaphore_method_wait), but won't block, so if the value is zero, fails immediately and returns `false`. If non-zero, it returns `true` to report success.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_semaphore_method_wait"></div>

`void` **wait** ( )<div id="class_semaphore_method_wait"></div>

Waits for the **Semaphore**, if its value is zero, blocks until non-zero.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
