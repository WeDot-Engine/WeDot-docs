<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/MainLoop.xml。 -->

<div id="_class_mainloop"></div>

# MainLoop

**继承：** [`Object`](class_object.md)

**派生：** [`SceneTree`](class_scenetree.md)

Abstract base class for the game's main loop.

## 描述

**MainLoop** is the abstract base class for a Godot project's game loop. It is inherited by [`SceneTree`](class_scenetree.md), which is the default game loop implementation used in Godot projects, though it is also possible to write and use one's own **MainLoop** subclass instead of the scene tree.

Upon the application start, a **MainLoop** implementation must be provided to the OS; otherwise, the application will exit. This happens automatically (and a [`SceneTree`](class_scenetree.md) is created) unless a **MainLoop** [`Script`](class_script.md) is provided from the command line (with e.g. `godot -s my_loop.gd`) or the "Main Loop Type" project setting is overwritten.

Here is an example script implementing a simple **MainLoop**:



```gdscript

    class_name CustomMainLoop
    extends MainLoop
    
    var time_elapsed = 0
    
    func _initialize():
        print("Initialized:")
        print("  Starting time: %s" % str(time_elapsed))
    
    func _process(delta):
        time_elapsed += delta
        # Return true to end the main loop.
        return Input.get_mouse_button_mask() != 0 || Input.is_key_pressed(KEY_ESCAPE)
    
    func _finalize():
        print("Finalized:")
        print("  End time: %s" % str(time_elapsed))
```

```csharp

    using Godot;
    
    [GlobalClass]
    public partial class CustomMainLoop : MainLoop
    {
        private double _timeElapsed = 0;
    
        public override void _Initialize()
        {
            GD.Print("Initialized:");
            GD.Print($"  Starting Time: {_timeElapsed}");
        }
    
        public override bool _Process(double delta)
        {
            _timeElapsed += delta;
            // Return true to end the main loop.
            return Input.GetMouseButtonMask() != 0 || Input.IsKeyPressed(Key.Escape);
        }
    
        private void _Finalize()
        {
            GD.Print("Finalized:");
            GD.Print($"  End Time: {_timeElapsed}");
        }
    }
```







## 方法

|||
|:-:|:--|
| `void`                  | [`_finalize`](class_mainloop.md#class_mainloop_private_method__finalize) ( ) virtual[^virtual]                                                |
| `void`                  | [`_initialize`](class_mainloop.md#class_mainloop_private_method__initialize) ( ) virtual[^virtual]                                            |
| [`bool`](class_bool.md) | [`_physics_process`](class_mainloop.md#class_mainloop_private_method__physics_process) ( delta: [`float`](class_float.md) ) virtual[^virtual] |
| [`bool`](class_bool.md) | [`_process`](class_mainloop.md#class_mainloop_private_method__process) ( delta: [`float`](class_float.md) ) virtual[^virtual]                 |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_mainloop_signal_on_request_permissions_result"></div>

**on_request_permissions_result** ( permission: [`String`](class_string.md), granted: [`bool`](class_bool.md) ) <div id="class_mainloop_signal_on_request_permissions_result"></div>

Emitted when a user responds to a permission request.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_mainloop_constant_notification_os_memory_warning"></div>

**NOTIFICATION_OS_MEMORY_WARNING** = ``2009`` <div id="class_mainloop_constant_notification_os_memory_warning"></div>

Notification received from the OS when the application is exceeding its allocated memory.

Specific to the iOS platform.

<div id="_class_mainloop_constant_notification_translation_changed"></div>

**NOTIFICATION_TRANSLATION_CHANGED** = ``2010`` <div id="class_mainloop_constant_notification_translation_changed"></div>

Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [`Object.tr`](class_object.md#class_object_method_tr).

<div id="_class_mainloop_constant_notification_wm_about"></div>

**NOTIFICATION_WM_ABOUT** = ``2011`` <div id="class_mainloop_constant_notification_wm_about"></div>

Notification received from the OS when a request for "About" information is sent.

Specific to the macOS platform.

<div id="_class_mainloop_constant_notification_crash"></div>

**NOTIFICATION_CRASH** = ``2012`` <div id="class_mainloop_constant_notification_crash"></div>

Notification received from Godot's crash handler when the engine is about to crash.

Implemented on desktop platforms if the crash handler is enabled.

<div id="_class_mainloop_constant_notification_os_ime_update"></div>

**NOTIFICATION_OS_IME_UPDATE** = ``2013`` <div id="class_mainloop_constant_notification_os_ime_update"></div>

Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).

Specific to the macOS platform.

<div id="_class_mainloop_constant_notification_application_resumed"></div>

**NOTIFICATION_APPLICATION_RESUMED** = ``2014`` <div id="class_mainloop_constant_notification_application_resumed"></div>

Notification received from the OS when the application is resumed.

Specific to the Android and iOS platforms.

<div id="_class_mainloop_constant_notification_application_paused"></div>

**NOTIFICATION_APPLICATION_PAUSED** = ``2015`` <div id="class_mainloop_constant_notification_application_paused"></div>

Notification received from the OS when the application is paused.

Specific to the Android and iOS platforms.

 **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.

<div id="_class_mainloop_constant_notification_application_focus_in"></div>

**NOTIFICATION_APPLICATION_FOCUS_IN** = ``2016`` <div id="class_mainloop_constant_notification_application_focus_in"></div>

Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.

Implemented on desktop and mobile platforms.

<div id="_class_mainloop_constant_notification_application_focus_out"></div>

**NOTIFICATION_APPLICATION_FOCUS_OUT** = ``2017`` <div id="class_mainloop_constant_notification_application_focus_out"></div>

Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.

Implemented on desktop and mobile platforms.

<div id="_class_mainloop_constant_notification_text_server_changed"></div>

**NOTIFICATION_TEXT_SERVER_CHANGED** = ``2018`` <div id="class_mainloop_constant_notification_text_server_changed"></div>

Notification received when text server is changed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_mainloop_private_method__finalize"></div>

`void` **_finalize** ( ) virtual[^virtual]<div id="class_mainloop_private_method__finalize"></div>

Called before the program exits.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mainloop_private_method__initialize"></div>

`void` **_initialize** ( ) virtual[^virtual]<div id="class_mainloop_private_method__initialize"></div>

Called once during initialization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mainloop_private_method__physics_process"></div>

[`bool`](class_bool.md) **_physics_process** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_mainloop_private_method__physics_process"></div>

Called each physics frame with the time since the last physics frame as argument (`delta`, in seconds). Equivalent to [`Node._physics_process`](class_node.md#class_node_private_method__physics_process).

If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_mainloop_private_method__process"></div>

[`bool`](class_bool.md) **_process** ( delta: [`float`](class_float.md) ) virtual[^virtual]<div id="class_mainloop_private_method__process"></div>

Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to [`Node._process`](class_node.md#class_node_private_method__process).

If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
