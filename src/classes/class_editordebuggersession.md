<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorDebuggerSession.xml。 -->

<div id="_class_editordebuggersession"></div>

# EditorDebuggerSession

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A class to interact with the editor debugger.

## 描述

This class cannot be directly instantiated and must be retrieved via a [`EditorDebuggerPlugin`](class_editordebuggerplugin.md).

You can add tabs to the session UI via [`add_session_tab`](class_editordebuggersession.md#class_editordebuggersession_method_add_session_tab), send messages via [`send_message`](class_editordebuggersession.md#class_editordebuggersession_method_send_message), and toggle [`EngineProfiler`](class_engineprofiler.md) s via [`toggle_profiler`](class_editordebuggersession.md#class_editordebuggersession_method_toggle_profiler).

## 方法

|||
|:-:|:--|
| `void`                  | [`add_session_tab`](class_editordebuggersession.md#class_editordebuggersession_method_add_session_tab) ( control: [`Control`](class_control.md) )                                                                       |
| [`bool`](class_bool.md) | [`is_active`](class_editordebuggersession.md#class_editordebuggersession_method_is_active) ( )                                                                                                                          |
| [`bool`](class_bool.md) | [`is_breaked`](class_editordebuggersession.md#class_editordebuggersession_method_is_breaked) ( )                                                                                                                        |
| [`bool`](class_bool.md) | [`is_debuggable`](class_editordebuggersession.md#class_editordebuggersession_method_is_debuggable) ( )                                                                                                                  |
| `void`                  | [`remove_session_tab`](class_editordebuggersession.md#class_editordebuggersession_method_remove_session_tab) ( control: [`Control`](class_control.md) )                                                                 |
| `void`                  | [`send_message`](class_editordebuggersession.md#class_editordebuggersession_method_send_message) ( message: [`String`](class_string.md), data: [`Array`](class_array.md) = [] )                                         |
| `void`                  | [`set_breakpoint`](class_editordebuggersession.md#class_editordebuggersession_method_set_breakpoint) ( path: [`String`](class_string.md), line: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )               |
| `void`                  | [`toggle_profiler`](class_editordebuggersession.md#class_editordebuggersession_method_toggle_profiler) ( profiler: [`String`](class_string.md), enable: [`bool`](class_bool.md), data: [`Array`](class_array.md) = [] ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_editordebuggersession_signal_breaked"></div>

**breaked** ( can_debug: [`bool`](class_bool.md) ) <div id="class_editordebuggersession_signal_breaked"></div>

Emitted when the attached remote instance enters a break state. If `can_debug` is `true`, the remote instance will enter the debug loop.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editordebuggersession_signal_continued"></div>

**continued** ( ) <div id="class_editordebuggersession_signal_continued"></div>

Emitted when the attached remote instance exits a break state.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editordebuggersession_signal_started"></div>

**started** ( ) <div id="class_editordebuggersession_signal_started"></div>

Emitted when a remote instance is attached to this session (i.e. the session becomes active).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_class_editordebuggersession_signal_stopped"></div>

**stopped** ( ) <div id="class_editordebuggersession_signal_stopped"></div>

Emitted when a remote instance is detached from this session (i.e. the session becomes inactive).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editordebuggersession_method_add_session_tab"></div>

`void` **add_session_tab** ( control: [`Control`](class_control.md) )<div id="class_editordebuggersession_method_add_session_tab"></div>

Adds the given `control` to the debug session UI in the debugger bottom panel. The `control`'s node name will be used as the tab title.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_is_active"></div>

[`bool`](class_bool.md) **is_active** ( )<div id="class_editordebuggersession_method_is_active"></div>

Returns `true` if the debug session is currently attached to a remote instance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_is_breaked"></div>

[`bool`](class_bool.md) **is_breaked** ( )<div id="class_editordebuggersession_method_is_breaked"></div>

Returns `true` if the attached remote instance is currently in the debug loop.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_is_debuggable"></div>

[`bool`](class_bool.md) **is_debuggable** ( )<div id="class_editordebuggersession_method_is_debuggable"></div>

Returns `true` if the attached remote instance can be debugged.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_remove_session_tab"></div>

`void` **remove_session_tab** ( control: [`Control`](class_control.md) )<div id="class_editordebuggersession_method_remove_session_tab"></div>

Removes the given `control` from the debug session UI in the debugger bottom panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_send_message"></div>

`void` **send_message** ( message: [`String`](class_string.md), data: [`Array`](class_array.md) = [] )<div id="class_editordebuggersession_method_send_message"></div>

Sends the given `message` to the attached remote instance, optionally passing additionally `data`. See [`EngineDebugger`](class_enginedebugger.md) for how to retrieve those messages.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_set_breakpoint"></div>

`void` **set_breakpoint** ( path: [`String`](class_string.md), line: [`int`](class_int.md), enabled: [`bool`](class_bool.md) )<div id="class_editordebuggersession_method_set_breakpoint"></div>

Enables or disables a specific breakpoint based on `enabled`, updating the Editor Breakpoint Panel accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggersession_method_toggle_profiler"></div>

`void` **toggle_profiler** ( profiler: [`String`](class_string.md), enable: [`bool`](class_bool.md), data: [`Array`](class_array.md) = [] )<div id="class_editordebuggersession_method_toggle_profiler"></div>

Toggle the given `profiler` on the attached remote instance, optionally passing additionally `data`. See [`EngineProfiler`](class_engineprofiler.md) for more details.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
