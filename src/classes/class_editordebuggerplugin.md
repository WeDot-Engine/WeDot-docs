<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorDebuggerPlugin.xml。 -->

<div id="_class_editordebuggerplugin"></div>

# EditorDebuggerPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A base class to implement debugger plugins.

## 描述

**EditorDebuggerPlugin** provides functions related to the editor side of the debugger.

To interact with the debugger, an instance of this class must be added to the editor via [`EditorPlugin.add_debugger_plugin`](#class_editorplugin_method_add_debugger_plugin).

Once added, the [`_setup_session`](#class_editordebuggerplugin_private_method__setup_session) callback will be called for every [`EditorDebuggerSession`](class_editordebuggersession.md) available to the plugin, and when new ones are created (the sessions may be inactive during this stage).

You can retrieve the available [`EditorDebuggerSession`](class_editordebuggersession.md) s via [`get_sessions`](#class_editordebuggerplugin_method_get_sessions) or get a specific one via [`get_session`](#class_editordebuggerplugin_method_get_session).



```gdscript

    @tool
    extends EditorPlugin
    
    class ExampleEditorDebugger extends EditorDebuggerPlugin:
    
        func _has_capture(prefix):
            # Return true if you wish to handle message with this prefix.
            return prefix == "my_plugin"
    
        func _capture(message, data, session_id):
            if message == "my_plugin:ping":
                get_session(session_id).send_message("my_plugin:echo", data)
    
        func _setup_session(session_id):
            # Add a new tab in the debugger session UI containing a label.
            var label = Label.new()
            label.name = "Example plugin"
            label.text = "Example plugin"
            var session = get_session(session_id)
            # Listens to the session started and stopped signals.
            session.started.connect(func (): print("Session started"))
            session.stopped.connect(func (): print("Session stopped"))
            session.add_session_tab(label)
    
    var debugger = ExampleEditorDebugger.new()
    
    func _enter_tree():
        add_debugger_plugin(debugger)
    
    func _exit_tree():
        remove_debugger_plugin(debugger)
```





## 方法

| `void`                                                    | [`_breakpoint_set_in_tree`](#class_editordebuggerplugin_private_method__breakpoint_set_in_tree) ( script: [`Script`](class_script.md), line: [`int`](class_int.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual] |
| `void`                                                    | [`_breakpoints_cleared_in_tree`](#class_editordebuggerplugin_private_method__breakpoints_cleared_in_tree) ( ) virtual[^virtual]                                                                                          |
| [`bool`](class_bool.md)                                   | [`_capture`](#class_editordebuggerplugin_private_method__capture) ( message: [`String`](class_string.md), data: [`Array`](class_array.md), session_id: [`int`](class_int.md) ) virtual[^virtual]                         |
| `void`                                                    | [`_goto_script_line`](#class_editordebuggerplugin_private_method__goto_script_line) ( script: [`Script`](class_script.md), line: [`int`](class_int.md) ) virtual[^virtual]                                               |
| [`bool`](class_bool.md)                                   | [`_has_capture`](#class_editordebuggerplugin_private_method__has_capture) ( capture: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                       |
| `void`                                                    | [`_setup_session`](#class_editordebuggerplugin_private_method__setup_session) ( session_id: [`int`](class_int.md) ) virtual[^virtual]                                                                                    |
| [`EditorDebuggerSession`](class_editordebuggersession.md) | [`get_session`](#class_editordebuggerplugin_method_get_session) ( id: [`int`](class_int.md) )                                                                                                                            |
| [`Array`](class_array.md)                                 | [`get_sessions`](#class_editordebuggerplugin_method_get_sessions) ( )                                                                                                                                                    |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editordebuggerplugin_private_method__breakpoint_set_in_tree"></div>

`void` **_breakpoint_set_in_tree** ( script: [`Script`](class_script.md), line: [`int`](class_int.md), enabled: [`bool`](class_bool.md) ) virtual[^virtual]<div id="class_editordebuggerplugin_private_method__breakpoint_set_in_tree"></div>

Override this method to be notified when a breakpoint is set in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_private_method__breakpoints_cleared_in_tree"></div>

`void` **_breakpoints_cleared_in_tree** ( ) virtual[^virtual]<div id="class_editordebuggerplugin_private_method__breakpoints_cleared_in_tree"></div>

Override this method to be notified when all breakpoints are cleared in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_private_method__capture"></div>

[`bool`](class_bool.md) **_capture** ( message: [`String`](class_string.md), data: [`Array`](class_array.md), session_id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editordebuggerplugin_private_method__capture"></div>

Override this method to process incoming messages. The `session_id` is the ID of the [`EditorDebuggerSession`](class_editordebuggersession.md) that received the message (which you can retrieve via [`get_session`](#class_editordebuggerplugin_method_get_session)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_private_method__goto_script_line"></div>

`void` **_goto_script_line** ( script: [`Script`](class_script.md), line: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editordebuggerplugin_private_method__goto_script_line"></div>

Override this method to be notified when a breakpoint line has been clicked in the debugger breakpoint panel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_private_method__has_capture"></div>

[`bool`](class_bool.md) **_has_capture** ( capture: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editordebuggerplugin_private_method__has_capture"></div>

Override this method to enable receiving messages from the debugger. If `capture` is "my_message" then messages starting with "my_message:" will be passes to the [`_capture`](#class_editordebuggerplugin_private_method__capture) method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_private_method__setup_session"></div>

`void` **_setup_session** ( session_id: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editordebuggerplugin_private_method__setup_session"></div>

Override this method to be notified whenever a new [`EditorDebuggerSession`](class_editordebuggersession.md) is created (the session may be inactive during this stage).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_method_get_session"></div>

[`EditorDebuggerSession`](class_editordebuggersession.md) **get_session** ( id: [`int`](class_int.md) )<div id="class_editordebuggerplugin_method_get_session"></div>

Returns the [`EditorDebuggerSession`](class_editordebuggersession.md) with the given `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editordebuggerplugin_method_get_sessions"></div>

[`Array`](class_array.md) **get_sessions** ( )<div id="class_editordebuggerplugin_method_get_sessions"></div>

Returns an array of [`EditorDebuggerSession`](class_editordebuggersession.md) currently available to this debugger plugin.

 **Note:** Sessions in the array may be inactive, check their state via [`EditorDebuggerSession.is_active`](#class_editordebuggersession_method_is_active).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
