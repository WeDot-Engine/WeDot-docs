<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/WorkerThreadPool.xml。 -->

<div id="_class_workerthreadpool"></div>

# WorkerThreadPool

**继承：** [`Object`](class_object.md)

A singleton that allocates some [`Thread`](class_thread.md) s on startup, used to offload tasks to these threads.

## 描述

The **WorkerThreadPool** singleton allocates a set of [`Thread`](class_thread.md) s (called worker threads) on project startup and provides methods for offloading tasks to them. This can be used for simple multithreading without having to create [`Thread`](class_thread.md) s.

Tasks hold the [`Callable`](class_callable.md) to be run by the threads. **WorkerThreadPool** can be used to create regular tasks, which will be taken by one worker thread, or group tasks, which can be distributed between multiple worker threads. Group tasks execute the [`Callable`](class_callable.md) multiple times, which makes them useful for iterating over a lot of elements, such as the enemies in an arena.

Here's a sample on how to offload an expensive function to worker threads:



```gdscript

    var enemies = [] # An array to be filled with enemies.
    
    func process_enemy_ai(enemy_index):
        var processed_enemy = enemies[enemy_index]
        # Expensive logic...
    
    func _process(delta):
        var task_id = WorkerThreadPool.add_group_task(process_enemy_ai, enemies.size())
        # Other code...
        WorkerThreadPool.wait_for_group_task_completion(task_id)
        # Other code that depends on the enemy AI already being processed.
```

```csharp

    private List<Node> _enemies = new List<Node>(); // A list to be filled with enemies.
    
    private void ProcessEnemyAI(int enemyIndex)
    {
        Node processedEnemy = _enemies[enemyIndex];
        // Expensive logic here.
    }
    
    public override void _Process(double delta)
    {
        long taskId = WorkerThreadPool.AddGroupTask(Callable.From<int>(ProcessEnemyAI), _enemies.Count);
        // Other code...
        WorkerThreadPool.WaitForGroupTaskCompletion(taskId);
        // Other code that depends on the enemy AI already being processed.
    }
```



The above code relies on the number of elements in the `enemies` array remaining constant during the multithreaded part.

 **Note:** Using this singleton could affect performance negatively if the task being distributed between threads is not computationally expensive.





## 方法

| [`int`](class_int.md)             | [`add_group_task`](#class_workerthreadpool_method_add_group_task) ( action: [`Callable`](class_callable.md), elements: [`int`](class_int.md), tasks_needed: [`int`](class_int.md) = -1, high_priority: [`bool`](class_bool.md) = false, description: [`String`](class_string.md) = "" ) |
| [`int`](class_int.md)             | [`add_task`](#class_workerthreadpool_method_add_task) ( action: [`Callable`](class_callable.md), high_priority: [`bool`](class_bool.md) = false, description: [`String`](class_string.md) = "" )                                                                                        |
| [`int`](class_int.md)             | [`get_group_processed_element_count`](#class_workerthreadpool_method_get_group_processed_element_count) ( group_id: [`int`](class_int.md) ) const[^const]                                                                                                                               |
| [`bool`](class_bool.md)           | [`is_group_task_completed`](#class_workerthreadpool_method_is_group_task_completed) ( group_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                   |
| [`bool`](class_bool.md)           | [`is_task_completed`](#class_workerthreadpool_method_is_task_completed) ( task_id: [`int`](class_int.md) ) const[^const]                                                                                                                                                                |
| `void`                            | [`wait_for_group_task_completion`](#class_workerthreadpool_method_wait_for_group_task_completion) ( group_id: [`int`](class_int.md) )                                                                                                                                                   |
| [Error](#enum_@globalscope_error) | [`wait_for_task_completion`](#class_workerthreadpool_method_wait_for_task_completion) ( task_id: [`int`](class_int.md) )                                                                                                                                                                |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_workerthreadpool_method_add_group_task"></div>

[`int`](class_int.md) **add_group_task** ( action: [`Callable`](class_callable.md), elements: [`int`](class_int.md), tasks_needed: [`int`](class_int.md) = -1, high_priority: [`bool`](class_bool.md) = false, description: [`String`](class_string.md) = "" )<div id="class_workerthreadpool_method_add_group_task"></div>

Adds `action` as a group task to be executed by the worker threads. The [`Callable`](class_callable.md) will be called a number of times based on `elements`, with the first thread calling it with the value `0` as a parameter, and each consecutive execution incrementing this value by 1 until it reaches `element - 1`.

The number of threads the task is distributed to is defined by `tasks_needed`, where the default value `-1` means it is distributed to all worker threads. `high_priority` determines if the task has a high priority or a low priority (default). You can optionally provide a `description` to help with debugging.

Returns a group task ID that can be used by other methods.

 **Warning:** Every task must be waited for completion using [`wait_for_task_completion`](#class_workerthreadpool_method_wait_for_task_completion) or [`wait_for_group_task_completion`](#class_workerthreadpool_method_wait_for_group_task_completion) at some point so that any allocated resources inside the task can be cleaned up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_add_task"></div>

[`int`](class_int.md) **add_task** ( action: [`Callable`](class_callable.md), high_priority: [`bool`](class_bool.md) = false, description: [`String`](class_string.md) = "" )<div id="class_workerthreadpool_method_add_task"></div>

Adds `action` as a task to be executed by a worker thread. `high_priority` determines if the task has a high priority or a low priority (default). You can optionally provide a `description` to help with debugging.

Returns a task ID that can be used by other methods.

 **Warning:** Every task must be waited for completion using [`wait_for_task_completion`](#class_workerthreadpool_method_wait_for_task_completion) or [`wait_for_group_task_completion`](#class_workerthreadpool_method_wait_for_group_task_completion) at some point so that any allocated resources inside the task can be cleaned up.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_get_group_processed_element_count"></div>

[`int`](class_int.md) **get_group_processed_element_count** ( group_id: [`int`](class_int.md) ) const[^const]<div id="class_workerthreadpool_method_get_group_processed_element_count"></div>

Returns how many times the [`Callable`](class_callable.md) of the group task with the given ID has already been executed by the worker threads.

 **Note:** If a thread has started executing the [`Callable`](class_callable.md) but is yet to finish, it won't be counted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_is_group_task_completed"></div>

[`bool`](class_bool.md) **is_group_task_completed** ( group_id: [`int`](class_int.md) ) const[^const]<div id="class_workerthreadpool_method_is_group_task_completed"></div>

Returns `true` if the group task with the given ID is completed.

 **Note:** You should only call this method between adding the group task and awaiting its completion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_is_task_completed"></div>

[`bool`](class_bool.md) **is_task_completed** ( task_id: [`int`](class_int.md) ) const[^const]<div id="class_workerthreadpool_method_is_task_completed"></div>

Returns `true` if the task with the given ID is completed.

 **Note:** You should only call this method between adding the task and awaiting its completion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_wait_for_group_task_completion"></div>

`void` **wait_for_group_task_completion** ( group_id: [`int`](class_int.md) )<div id="class_workerthreadpool_method_wait_for_group_task_completion"></div>

Pauses the thread that calls this method until the group task with the given ID is completed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_workerthreadpool_method_wait_for_task_completion"></div>

[Error](#enum_@globalscope_error) **wait_for_task_completion** ( task_id: [`int`](class_int.md) )<div id="class_workerthreadpool_method_wait_for_task_completion"></div>

Pauses the thread that calls this method until the task with the given ID is completed.

Returns [`@GlobalScope.OK`](#class_@globalscope_constant_ok) if the task could be successfully awaited.

Returns [`@GlobalScope.ERR_INVALID_PARAMETER`](#class_@globalscope_constant_err_invalid_parameter) if a task with the passed ID does not exist (maybe because it was already awaited and disposed of).

Returns [`@GlobalScope.ERR_BUSY`](#class_@globalscope_constant_err_busy) if the call is made from another running task and, due to task scheduling, there's potential for deadlocking (e.g., the task to await may be at a lower level in the call stack and therefore can't progress). This is an advanced situation that should only matter when some tasks depend on others (in the current implementation, the tricky case is a task trying to wait on an older one).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
