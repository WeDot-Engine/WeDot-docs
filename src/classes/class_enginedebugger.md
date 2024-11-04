<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EngineDebugger.xml。 -->

<div id="_class_enginedebugger"></div>

# EngineDebugger

**继承：** [`Object`](class_object.md)

Exposes the internal debugger.

## 描述

**EngineDebugger** handles the communication between the editor and the running game. It is active in the running game. Messages can be sent/received through it. It also manages the profilers.

## 方法

| `void`                  | [`clear_breakpoints`](#class_enginedebugger_method_clear_breakpoints) ( )                                                                                                                                                 |
| `void`                  | [`debug`](#class_enginedebugger_method_debug) ( can_continue: [`bool`](class_bool.md) = true, is_error_breakpoint: [`bool`](class_bool.md) = false )                                                                      |
| [`int`](class_int.md)   | [`get_depth`](#class_enginedebugger_method_get_depth) ( ) const[^const]                                                                                                                                                   |
| [`int`](class_int.md)   | [`get_lines_left`](#class_enginedebugger_method_get_lines_left) ( ) const[^const]                                                                                                                                         |
| [`bool`](class_bool.md) | [`has_capture`](#class_enginedebugger_method_has_capture) ( name: [`StringName`](class_stringname.md) )                                                                                                                   |
| [`bool`](class_bool.md) | [`has_profiler`](#class_enginedebugger_method_has_profiler) ( name: [`StringName`](class_stringname.md) )                                                                                                                 |
| `void`                  | [`insert_breakpoint`](#class_enginedebugger_method_insert_breakpoint) ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) )                                                                        |
| [`bool`](class_bool.md) | [`is_active`](#class_enginedebugger_method_is_active) ( )                                                                                                                                                                 |
| [`bool`](class_bool.md) | [`is_breakpoint`](#class_enginedebugger_method_is_breakpoint) ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) ) const[^const]                                                                  |
| [`bool`](class_bool.md) | [`is_profiling`](#class_enginedebugger_method_is_profiling) ( name: [`StringName`](class_stringname.md) )                                                                                                                 |
| [`bool`](class_bool.md) | [`is_skipping_breakpoints`](#class_enginedebugger_method_is_skipping_breakpoints) ( ) const[^const]                                                                                                                       |
| `void`                  | [`line_poll`](#class_enginedebugger_method_line_poll) ( )                                                                                                                                                                 |
| `void`                  | [`profiler_add_frame_data`](#class_enginedebugger_method_profiler_add_frame_data) ( name: [`StringName`](class_stringname.md), data: [`Array`](class_array.md) )                                                          |
| `void`                  | [`profiler_enable`](#class_enginedebugger_method_profiler_enable) ( name: [`StringName`](class_stringname.md), enable: [`bool`](class_bool.md), arguments: [`Array`](class_array.md) = [] )                               |
| `void`                  | [`register_message_capture`](#class_enginedebugger_method_register_message_capture) ( name: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) )                                              |
| `void`                  | [`register_profiler`](#class_enginedebugger_method_register_profiler) ( name: [`StringName`](class_stringname.md), profiler: [`EngineProfiler`](class_engineprofiler.md) )                                                |
| `void`                  | [`remove_breakpoint`](#class_enginedebugger_method_remove_breakpoint) ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) )                                                                        |
| `void`                  | [`script_debug`](#class_enginedebugger_method_script_debug) ( language: [`ScriptLanguage`](class_scriptlanguage.md), can_continue: [`bool`](class_bool.md) = true, is_error_breakpoint: [`bool`](class_bool.md) = false ) |
| `void`                  | [`send_message`](#class_enginedebugger_method_send_message) ( message: [`String`](class_string.md), data: [`Array`](class_array.md) )                                                                                     |
| `void`                  | [`set_depth`](#class_enginedebugger_method_set_depth) ( depth: [`int`](class_int.md) )                                                                                                                                    |
| `void`                  | [`set_lines_left`](#class_enginedebugger_method_set_lines_left) ( lines: [`int`](class_int.md) )                                                                                                                          |
| `void`                  | [`unregister_message_capture`](#class_enginedebugger_method_unregister_message_capture) ( name: [`StringName`](class_stringname.md) )                                                                                     |
| `void`                  | [`unregister_profiler`](#class_enginedebugger_method_unregister_profiler) ( name: [`StringName`](class_stringname.md) )                                                                                                   |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_enginedebugger_method_clear_breakpoints"></div>

`void` **clear_breakpoints** ( )<div id="class_enginedebugger_method_clear_breakpoints"></div>

Clears all breakpoints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_debug"></div>

`void` **debug** ( can_continue: [`bool`](class_bool.md) = true, is_error_breakpoint: [`bool`](class_bool.md) = false )<div id="class_enginedebugger_method_debug"></div>

Starts a debug break in script execution, optionally specifying whether the program can continue based on `can_continue` and whether the break was due to a breakpoint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_get_depth"></div>

[`int`](class_int.md) **get_depth** ( ) const[^const]<div id="class_enginedebugger_method_get_depth"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Returns the current debug depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_get_lines_left"></div>

[`int`](class_int.md) **get_lines_left** ( ) const[^const]<div id="class_enginedebugger_method_get_lines_left"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Returns the number of lines that remain.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_has_capture"></div>

[`bool`](class_bool.md) **has_capture** ( name: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_has_capture"></div>

Returns `true` if a capture with the given name is present otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_has_profiler"></div>

[`bool`](class_bool.md) **has_profiler** ( name: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_has_profiler"></div>

Returns `true` if a profiler with the given name is present otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_insert_breakpoint"></div>

`void` **insert_breakpoint** ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_insert_breakpoint"></div>

Inserts a new breakpoint with the given `source` and `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_is_active"></div>

[`bool`](class_bool.md) **is_active** ( )<div id="class_enginedebugger_method_is_active"></div>

Returns `true` if the debugger is active otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_is_breakpoint"></div>

[`bool`](class_bool.md) **is_breakpoint** ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) ) const[^const]<div id="class_enginedebugger_method_is_breakpoint"></div>

Returns `true` if the given `source` and `line` represent an existing breakpoint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_is_profiling"></div>

[`bool`](class_bool.md) **is_profiling** ( name: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_is_profiling"></div>

Returns `true` if a profiler with the given name is present and active otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_is_skipping_breakpoints"></div>

[`bool`](class_bool.md) **is_skipping_breakpoints** ( ) const[^const]<div id="class_enginedebugger_method_is_skipping_breakpoints"></div>

Returns `true` if the debugger is skipping breakpoints otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_line_poll"></div>

`void` **line_poll** ( )<div id="class_enginedebugger_method_line_poll"></div>

Forces a processing loop of debugger events. The purpose of this method is just processing events every now and then when the script might get too busy, so that bugs like infinite loops can be caught

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_profiler_add_frame_data"></div>

`void` **profiler_add_frame_data** ( name: [`StringName`](class_stringname.md), data: [`Array`](class_array.md) )<div id="class_enginedebugger_method_profiler_add_frame_data"></div>

Calls the `add` callable of the profiler with given `name` and `data`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_profiler_enable"></div>

`void` **profiler_enable** ( name: [`StringName`](class_stringname.md), enable: [`bool`](class_bool.md), arguments: [`Array`](class_array.md) = [] )<div id="class_enginedebugger_method_profiler_enable"></div>

Calls the `toggle` callable of the profiler with given `name` and `arguments`. Enables/Disables the same profiler depending on `enable` argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_register_message_capture"></div>

`void` **register_message_capture** ( name: [`StringName`](class_stringname.md), callable: [`Callable`](class_callable.md) )<div id="class_enginedebugger_method_register_message_capture"></div>

Registers a message capture with given `name`. If `name` is "my_message" then messages starting with "my_message:" will be called with the given callable.

Callable must accept a message string and a data array as argument. If the message and data are valid then callable must return `true` otherwise `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_register_profiler"></div>

`void` **register_profiler** ( name: [`StringName`](class_stringname.md), profiler: [`EngineProfiler`](class_engineprofiler.md) )<div id="class_enginedebugger_method_register_profiler"></div>

Registers a profiler with the given `name`. See [`EngineProfiler`](class_engineprofiler.md) for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_remove_breakpoint"></div>

`void` **remove_breakpoint** ( line: [`int`](class_int.md), source: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_remove_breakpoint"></div>

Removes a breakpoint with the given `source` and `line`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_script_debug"></div>

`void` **script_debug** ( language: [`ScriptLanguage`](class_scriptlanguage.md), can_continue: [`bool`](class_bool.md) = true, is_error_breakpoint: [`bool`](class_bool.md) = false )<div id="class_enginedebugger_method_script_debug"></div>

Starts a debug break in script execution, optionally specifying whether the program can continue based on `can_continue` and whether the break was due to a breakpoint.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_send_message"></div>

`void` **send_message** ( message: [`String`](class_string.md), data: [`Array`](class_array.md) )<div id="class_enginedebugger_method_send_message"></div>

Sends a message with given `message` and `data` array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_set_depth"></div>

`void` **set_depth** ( depth: [`int`](class_int.md) )<div id="class_enginedebugger_method_set_depth"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Sets the current debugging depth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_set_lines_left"></div>

`void` **set_lines_left** ( lines: [`int`](class_int.md) )<div id="class_enginedebugger_method_set_lines_left"></div>

**实验性：** 未来版本中可能会修改或移除该方法。

Sets the current debugging lines that remain.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_unregister_message_capture"></div>

`void` **unregister_message_capture** ( name: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_unregister_message_capture"></div>

Unregisters the message capture with given `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enginedebugger_method_unregister_profiler"></div>

`void` **unregister_profiler** ( name: [`StringName`](class_stringname.md) )<div id="class_enginedebugger_method_unregister_profiler"></div>

Unregisters a profiler with given `name`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
