<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Engine.xml。 -->

<div id="_class_engine"></div>

# Engine

**继承：** [`Object`](class_object.md)

Provides access to engine properties.

## 描述

The **Engine** singleton allows you to query and modify the project's run-time parameters, such as frames per second, time scale, and others. It also stores information about the current build of Godot, such as the current version.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)     | [`max_fps`](class_engine.md#class_engine_property_max_fps)                                         | ``0``    |
| [`int`](class_int.md)     | [`max_physics_steps_per_frame`](class_engine.md#class_engine_property_max_physics_steps_per_frame) | ``8``    |
| [`float`](class_float.md) | [`physics_jitter_fix`](class_engine.md#class_engine_property_physics_jitter_fix)                   | ``0.5``  |
| [`int`](class_int.md)     | [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second)       | ``60``   |
| [`bool`](class_bool.md)   | [`print_error_messages`](class_engine.md#class_engine_property_print_error_messages)               | ``true`` |
| [`bool`](class_bool.md)   | [`print_to_stdout`](class_engine.md#class_engine_property_print_to_stdout)                         | ``true`` |
| [`float`](class_float.md) | [`time_scale`](class_engine.md#class_engine_property_time_scale)                                   | ``1.0``  |

## 方法

|||
|:-:|:--|
| [`String`](class_string.md)                                 | [`get_architecture_name`](class_engine.md#class_engine_method_get_architecture_name) ( ) const[^const]                                                              |
| [`Dictionary`](class_dictionary.md)                         | [`get_author_info`](class_engine.md#class_engine_method_get_author_info) ( ) const[^const]                                                                          |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_copyright_info`](class_engine.md#class_engine_method_get_copyright_info) ( ) const[^const]                                                                    |
| [`Dictionary`](class_dictionary.md)                         | [`get_donor_info`](class_engine.md#class_engine_method_get_donor_info) ( ) const[^const]                                                                            |
| [`int`](class_int.md)                                       | [`get_frames_drawn`](class_engine.md#class_engine_method_get_frames_drawn) ( )                                                                                      |
| [`float`](class_float.md)                                   | [`get_frames_per_second`](class_engine.md#class_engine_method_get_frames_per_second) ( ) const[^const]                                                              |
| [`Dictionary`](class_dictionary.md)                         | [`get_license_info`](class_engine.md#class_engine_method_get_license_info) ( ) const[^const]                                                                        |
| [`String`](class_string.md)                                 | [`get_license_text`](class_engine.md#class_engine_method_get_license_text) ( ) const[^const]                                                                        |
| [`MainLoop`](class_mainloop.md)                             | [`get_main_loop`](class_engine.md#class_engine_method_get_main_loop) ( ) const[^const]                                                                              |
| [`int`](class_int.md)                                       | [`get_physics_frames`](class_engine.md#class_engine_method_get_physics_frames) ( ) const[^const]                                                                    |
| [`float`](class_float.md)                                   | [`get_physics_interpolation_fraction`](class_engine.md#class_engine_method_get_physics_interpolation_fraction) ( ) const[^const]                                    |
| [`int`](class_int.md)                                       | [`get_process_frames`](class_engine.md#class_engine_method_get_process_frames) ( ) const[^const]                                                                    |
| [`ScriptLanguage`](class_scriptlanguage.md)                 | [`get_script_language`](class_engine.md#class_engine_method_get_script_language) ( index: [`int`](class_int.md) ) const[^const]                                     |
| [`int`](class_int.md)                                       | [`get_script_language_count`](class_engine.md#class_engine_method_get_script_language_count) ( )                                                                    |
| [`Object`](class_object.md)                                 | [`get_singleton`](class_engine.md#class_engine_method_get_singleton) ( name: [`StringName`](class_stringname.md) ) const[^const]                                    |
| [`PackedStringArray`](class_packedstringarray.md)           | [`get_singleton_list`](class_engine.md#class_engine_method_get_singleton_list) ( ) const[^const]                                                                    |
| [`Dictionary`](class_dictionary.md)                         | [`get_version_info`](class_engine.md#class_engine_method_get_version_info) ( ) const[^const]                                                                        |
| [`String`](class_string.md)                                 | [`get_write_movie_path`](class_engine.md#class_engine_method_get_write_movie_path) ( ) const[^const]                                                                |
| [`bool`](class_bool.md)                                     | [`has_singleton`](class_engine.md#class_engine_method_has_singleton) ( name: [`StringName`](class_stringname.md) ) const[^const]                                    |
| [`bool`](class_bool.md)                                     | [`is_editor_hint`](class_engine.md#class_engine_method_is_editor_hint) ( ) const[^const]                                                                            |
| [`bool`](class_bool.md)                                     | [`is_in_physics_frame`](class_engine.md#class_engine_method_is_in_physics_frame) ( ) const[^const]                                                                  |
| [Error](#enum_@globalscope_error)                           | [`register_script_language`](class_engine.md#class_engine_method_register_script_language) ( language: [`ScriptLanguage`](class_scriptlanguage.md) )                |
| `void`                                                      | [`register_singleton`](class_engine.md#class_engine_method_register_singleton) ( name: [`StringName`](class_stringname.md), instance: [`Object`](class_object.md) ) |
| [Error](#enum_@globalscope_error)                           | [`unregister_script_language`](class_engine.md#class_engine_method_unregister_script_language) ( language: [`ScriptLanguage`](class_scriptlanguage.md) )            |
| `void`                                                      | [`unregister_singleton`](class_engine.md#class_engine_method_unregister_singleton) ( name: [`StringName`](class_stringname.md) )                                    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_engine_property_max_fps"></div>

[`int`](class_int.md) **max_fps** = ``0`` <div id="class_engine_property_max_fps"></div>

- `void` **set_max_fps** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_fps** ( )

The maximum number of frames that can be rendered every second (FPS). A value of `0` means the framerate is uncapped.

Limiting the FPS can be useful to reduce the host machine's power consumption, which reduces heat, noise emissions, and improves battery life.

If [`ProjectSettings.display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is **Enabled** or **Adaptive**, the setting takes precedence and the max FPS number cannot exceed the monitor's refresh rate.

If [`ProjectSettings.display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is **Enabled**, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using an FPS limit a few frames lower than the monitor's refresh rate will [*reduce input lag while avoiding tearing*](https://blurbusters.com/howto-low-lag-vsync-on/).

See also [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second) and [`ProjectSettings.application/run/max_fps`](class_projectsettings.md#class_projectsettings_property_application/run/max_fps).

 **Note:** The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project's logic and rendering.

 **Note:** If [`ProjectSettings.display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is **Disabled**, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_max_physics_steps_per_frame"></div>

[`int`](class_int.md) **max_physics_steps_per_frame** = ``8`` <div id="class_engine_property_max_physics_steps_per_frame"></div>

- `void` **set_max_physics_steps_per_frame** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_max_physics_steps_per_frame** ( )

The maximum number of physics steps that can be simulated each rendered frame.

 **Note:** The default value is tuned to prevent expensive physics simulations from triggering even more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second). This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase [`max_physics_steps_per_frame`](class_engine.md#class_engine_property_max_physics_steps_per_frame) if you have increased [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second) significantly above its default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_physics_jitter_fix"></div>

[`float`](class_float.md) **physics_jitter_fix** = ``0.5`` <div id="class_engine_property_physics_jitter_fix"></div>

- `void` **set_physics_jitter_fix** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_physics_jitter_fix** ( )

How much physics ticks are synchronized with real time. If `0` or less, the ticks are fully synchronized. Higher values cause the in-game clock to deviate more from the real clock, but they smooth out framerate jitters.

 **Note:** The default value of `0.5` should be good enough for most cases; values above `2` could cause the game to react to dropped frames with a noticeable delay and are not recommended.

 **Note:** When using a custom physics interpolation solution, or within a network game, it's recommended to disable the physics jitter fix by setting this property to `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_physics_ticks_per_second"></div>

[`int`](class_int.md) **physics_ticks_per_second** = ``60`` <div id="class_engine_property_physics_ticks_per_second"></div>

- `void` **set_physics_ticks_per_second** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_physics_ticks_per_second** ( )

The number of fixed iterations per second. This controls how often physics simulation and [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) methods are run. This value should generally always be set to `60` or above, as Godot doesn't interpolate the physics step. As a result, values lower than `60` will look stuttery. This value can be increased to make input more reactive or work around collision tunneling issues, but keep in mind doing so will increase CPU usage. See also [`max_fps`](class_engine.md#class_engine_property_max_fps) and [`ProjectSettings.physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second).

 **Note:** Only [`max_physics_steps_per_frame`](class_engine.md#class_engine_property_max_physics_steps_per_frame) physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [`max_physics_steps_per_frame`](class_engine.md#class_engine_property_max_physics_steps_per_frame) if increasing [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second) significantly above its default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_print_error_messages"></div>

[`bool`](class_bool.md) **print_error_messages** = ``true`` <div id="class_engine_property_print_error_messages"></div>

- `void` **set_print_error_messages** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_printing_error_messages** ( )

If `false`, stops printing error and warning messages to the console and editor Output log. This can be used to hide error and warning messages during unit test suite runs. This property is equivalent to the [`ProjectSettings.application/run/disable_stderr`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stderr) project setting.

 **Note:** This property does not impact the editor's Errors tab when running a project from the editor.

 **Warning:** If set to `false` anywhere in the project, important error messages may be hidden even if they are emitted from other scripts. In a `@tool` script, this will also impact the editor itself. Do *not* report bugs before ensuring error messages are enabled (as they are by default).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_print_to_stdout"></div>

[`bool`](class_bool.md) **print_to_stdout** = ``true`` <div id="class_engine_property_print_to_stdout"></div>

- `void` **set_print_to_stdout** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_printing_to_stdout** ( )

If `false`, stops printing messages (for example using [`@GlobalScope.print`](class_@globalscope.md#class_@globalscope_method_print)) to the console, log files, and editor Output log. This property is equivalent to the [`ProjectSettings.application/run/disable_stdout`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stdout) project setting.

 **Note:** This does not stop printing errors or warnings produced by scripts to the console or log files, for more details see [`print_error_messages`](class_engine.md#class_engine_property_print_error_messages).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_property_time_scale"></div>

[`float`](class_float.md) **time_scale** = ``1.0`` <div id="class_engine_property_time_scale"></div>

- `void` **set_time_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_time_scale** ( )

The speed multiplier at which the in-game clock updates, compared to real time. For example, if set to `2.0` the game runs twice as fast, and if set to `0.5` the game runs half as fast.

This value affects [`Timer`](class_timer.md), [`SceneTreeTimer`](class_scenetreetimer.md), and all other simulations that make use of `delta` time (such as [`Node._process`](class_node.md#class_node_private_method__process) and [`Node._physics_process`](class_node.md#class_node_private_method__physics_process)).

 **Note:** It's recommended to keep this property above `0.0`, as the game may behave unexpectedly otherwise.

 **Note:** This does not affect audio playback speed. Use [`AudioServer.playback_speed_scale`](class_audioserver.md#class_audioserver_property_playback_speed_scale) to adjust audio playback speed independently of [`time_scale`](class_engine.md#class_engine_property_time_scale).

 **Note:** This does not automatically adjust [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second). With values above `1.0` physics simulation may become less precise, as each physics tick will stretch over a larger period of engine time. If you're modifying [`time_scale`](class_engine.md#class_engine_property_time_scale) to speed up simulation by a large factor, consider also increasing [`physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second) to make the simulation more reliable.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_engine_method_get_architecture_name"></div>

[`String`](class_string.md) **get_architecture_name** ( ) const[^const]<div id="class_engine_method_get_architecture_name"></div>

Returns the name of the CPU architecture the Godot binary was built for. Possible return values include `"x86_64"`, `"x86_32"`, `"arm64"`, `"arm32"`, `"rv64"`, `"riscv"`, `"ppc64"`, `"ppc"`, `"wasm64"`, and `"wasm32"`.

To detect whether the current build is 64-bit, you can use the fact that all 64-bit architecture names contain `64` in their name:



```gdscript

    if "64" in Engine.get_architecture_name():
        print("Running a 64-bit build of Godot.")
    else:
        print("Running a 32-bit build of Godot.")
```

```csharp

    if (Engine.GetArchitectureName().Contains("64"))
        GD.Print("Running a 64-bit build of Godot.");
    else
        GD.Print("Running a 32-bit build of Godot.");
```



 **Note:** This method does *not* return the name of the system's CPU architecture (like [`OS.get_processor_name`](class_os.md#class_os_method_get_processor_name)). For example, when running an `x86_32` Godot binary on an `x86_64` system, the returned value will still be `"x86_32"`.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_author_info"></div>

[`Dictionary`](class_dictionary.md) **get_author_info** ( ) const[^const]<div id="class_engine_method_get_author_info"></div>

Returns the engine author information as a [`Dictionary`](class_dictionary.md), where each entry is an [`Array`](class_array.md) of strings with the names of notable contributors to the Godot Engine: `lead_developers`, `founders`, `project_managers`, and `developers`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_copyright_info"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_copyright_info** ( ) const[^const]<div id="class_engine_method_get_copyright_info"></div>

Returns an [`Array`](class_array.md) of dictionaries with copyright information for every component of Godot's source code.

Every [`Dictionary`](class_dictionary.md) contains a `name` identifier, and a `parts` array of dictionaries. It describes the component in detail with the following entries:

- `files` - [`Array`](class_array.md) of file paths from the source code affected by this component;

- `copyright` - [`Array`](class_array.md) of owners of this component;

- `license` - The license applied to this component (such as "[*Expat*](https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants)" or "[*CC-BY-4.0*](https://creativecommons.org/licenses/by/4.0/)").

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_donor_info"></div>

[`Dictionary`](class_dictionary.md) **get_donor_info** ( ) const[^const]<div id="class_engine_method_get_donor_info"></div>

Returns a [`Dictionary`](class_dictionary.md) of categorized donor names. Each entry is an [`Array`](class_array.md) of strings:

{`platinum_sponsors`, `gold_sponsors`, `silver_sponsors`, `bronze_sponsors`, `mini_sponsors`, `gold_donors`, `silver_donors`, `bronze_donors`}

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_frames_drawn"></div>

[`int`](class_int.md) **get_frames_drawn** ( )<div id="class_engine_method_get_frames_drawn"></div>

Returns the total number of frames drawn since the engine started.

 **Note:** On headless platforms, or if rendering is disabled with `--disable-render-loop` via command line, this method always returns `0`. See also [`get_process_frames`](class_engine.md#class_engine_method_get_process_frames).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_frames_per_second"></div>

[`float`](class_float.md) **get_frames_per_second** ( ) const[^const]<div id="class_engine_method_get_frames_per_second"></div>

Returns the average frames rendered every second (FPS), also known as the framerate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_license_info"></div>

[`Dictionary`](class_dictionary.md) **get_license_info** ( ) const[^const]<div id="class_engine_method_get_license_info"></div>

Returns a [`Dictionary`](class_dictionary.md) of licenses used by Godot and included third party components. Each entry is a license name (such as "[*Expat*](https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants)") and its associated text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_license_text"></div>

[`String`](class_string.md) **get_license_text** ( ) const[^const]<div id="class_engine_method_get_license_text"></div>

Returns the full Godot license text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_main_loop"></div>

[`MainLoop`](class_mainloop.md) **get_main_loop** ( ) const[^const]<div id="class_engine_method_get_main_loop"></div>

Returns the instance of the [`MainLoop`](class_mainloop.md). This is usually the main [`SceneTree`](class_scenetree.md) and is the same as [`Node.get_tree`](class_node.md#class_node_method_get_tree).

 **Note:** The type instantiated as the main loop can changed with [`ProjectSettings.application/run/main_loop_type`](class_projectsettings.md#class_projectsettings_property_application/run/main_loop_type).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_physics_frames"></div>

[`int`](class_int.md) **get_physics_frames** ( ) const[^const]<div id="class_engine_method_get_physics_frames"></div>

Returns the total number of frames passed since the engine started. This number is increased every **physics frame**. See also [`get_process_frames`](class_engine.md#class_engine_method_get_process_frames).

This method can be used to run expensive logic less often without relying on a [`Timer`](class_timer.md):



```gdscript

    func _physics_process(_delta):
        if Engine.get_physics_frames() % 2 == 0:
            pass # Run expensive logic only once every 2 physics frames here.
```

```csharp

    public override void _PhysicsProcess(double delta)
    {
        base._PhysicsProcess(delta);
    
        if (Engine.GetPhysicsFrames() % 2 == 0)
        {
            // Run expensive logic only once every 2 physics frames here.
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_physics_interpolation_fraction"></div>

[`float`](class_float.md) **get_physics_interpolation_fraction** ( ) const[^const]<div id="class_engine_method_get_physics_interpolation_fraction"></div>

Returns the fraction through the current physics tick we are at the time of rendering the frame. This can be used to implement fixed timestep interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_process_frames"></div>

[`int`](class_int.md) **get_process_frames** ( ) const[^const]<div id="class_engine_method_get_process_frames"></div>

Returns the total number of frames passed since the engine started. This number is increased every **process frame**, regardless of whether the render loop is enabled. See also [`get_frames_drawn`](class_engine.md#class_engine_method_get_frames_drawn) and [`get_physics_frames`](class_engine.md#class_engine_method_get_physics_frames).

This method can be used to run expensive logic less often without relying on a [`Timer`](class_timer.md):



```gdscript

    func _process(_delta):
        if Engine.get_process_frames() % 5 == 0:
            pass # Run expensive logic only once every 5 process (render) frames here.
```

```csharp

    public override void _Process(double delta)
    {
        base._Process(delta);
    
        if (Engine.GetProcessFrames() % 5 == 0)
        {
            // Run expensive logic only once every 5 process (render) frames here.
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_script_language"></div>

[`ScriptLanguage`](class_scriptlanguage.md) **get_script_language** ( index: [`int`](class_int.md) ) const[^const]<div id="class_engine_method_get_script_language"></div>

Returns an instance of a [`ScriptLanguage`](class_scriptlanguage.md) with the given `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_script_language_count"></div>

[`int`](class_int.md) **get_script_language_count** ( )<div id="class_engine_method_get_script_language_count"></div>

Returns the number of available script languages. Use with [`get_script_language`](class_engine.md#class_engine_method_get_script_language).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_singleton"></div>

[`Object`](class_object.md) **get_singleton** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_engine_method_get_singleton"></div>

Returns the global singleton with the given `name`, or `null` if it does not exist. Often used for plugins. See also [`has_singleton`](class_engine.md#class_engine_method_has_singleton) and [`get_singleton_list`](class_engine.md#class_engine_method_get_singleton_list).

 **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_singleton_list"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_singleton_list** ( ) const[^const]<div id="class_engine_method_get_singleton_list"></div>

Returns a list of names of all available global singletons. See also [`get_singleton`](class_engine.md#class_engine_method_get_singleton).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_version_info"></div>

[`Dictionary`](class_dictionary.md) **get_version_info** ( ) const[^const]<div id="class_engine_method_get_version_info"></div>

Returns the current engine version information as a [`Dictionary`](class_dictionary.md) containing the following entries:

- `major` - Major version number as an int;

- `minor` - Minor version number as an int;

- `patch` - Patch version number as an int;

- `hex` - Full version encoded as a hexadecimal int with one byte (2 hex digits) per number (see example below);

- `status` - Status (such as "beta", "rc1", "rc2", "stable", etc.) as a String;

- `build` - Build name (e.g. "custom_build") as a String;

- `hash` - Full Git commit hash as a String;

- `timestamp` - Holds the Git commit date UNIX timestamp in seconds as an int, or `0` if unavailable;

- `string` - `major`, `minor`, `patch`, `status`, and `build` in a single String.

The `hex` value is encoded as follows, from left to right: one byte for the major, one byte for the minor, one byte for the patch version. For example, "3.1.12" would be `0x03010C`.

 **Note:** The `hex` value is still an [`int`](class_int.md) internally, and printing it will give you its decimal representation, which is not particularly meaningful. Use hexadecimal literals for quick version comparisons from code:



```gdscript

    if Engine.get_version_info().hex >= 0x040100:
        pass # Do things specific to version 4.1 or later.
    else:
        pass # Do things specific to versions before 4.1.
```

```csharp

    if ((int)Engine.GetVersionInfo()["hex"] >= 0x040100)
    {
        // Do things specific to version 4.1 or later.
    }
    else
    {
        // Do things specific to versions before 4.1.
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_get_write_movie_path"></div>

[`String`](class_string.md) **get_write_movie_path** ( ) const[^const]<div id="class_engine_method_get_write_movie_path"></div>

Returns the path to the [`MovieWriter`](class_moviewriter.md)'s output file, or an empty string if the engine wasn't started in Movie Maker mode. The default path can be changed in [`ProjectSettings.editor/movie_writer/movie_file`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/movie_file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_has_singleton"></div>

[`bool`](class_bool.md) **has_singleton** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_engine_method_has_singleton"></div>

Returns `true` if a singleton with the given `name` exists in the global scope. See also [`get_singleton`](class_engine.md#class_engine_method_get_singleton).



```gdscript

    print(Engine.has_singleton("OS"))          # Prints true
    print(Engine.has_singleton("Engine"))      # Prints true
    print(Engine.has_singleton("AudioServer")) # Prints true
    print(Engine.has_singleton("Unknown"))     # Prints false
```

```csharp

    GD.Print(Engine.HasSingleton("OS"));          // Prints true
    GD.Print(Engine.HasSingleton("Engine"));      // Prints true
    GD.Print(Engine.HasSingleton("AudioServer")); // Prints true
    GD.Print(Engine.HasSingleton("Unknown"));     // Prints false
```



 **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_is_editor_hint"></div>

[`bool`](class_bool.md) **is_editor_hint** ( ) const[^const]<div id="class_engine_method_is_editor_hint"></div>

Returns `true` if the script is currently running inside the editor, otherwise returns `false`. This is useful for `@tool` scripts to conditionally draw editor helpers, or prevent accidentally running "game" code that would affect the scene state while in the editor:



```gdscript

    if Engine.is_editor_hint():
        draw_gizmos()
    else:
        simulate_physics()
```

```csharp

    if (Engine.IsEditorHint())
        DrawGizmos();
    else
        SimulatePhysics();
```



See [*Running code in the editor*](../tutorials/plugins/running_code_in_the_editor) in the documentation for more information.

 **Note:** To detect whether the script is running on an editor *build* (such as when pressing <i class="fa fa-gamepad"></i>`F5`), use [`OS.has_feature`](class_os.md#class_os_method_has_feature) with the `"editor"` argument instead. `OS.has_feature("editor")` evaluate to `true` both when the script is running in the editor and when running the project from the editor, but returns `false` when run from an exported project.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_is_in_physics_frame"></div>

[`bool`](class_bool.md) **is_in_physics_frame** ( ) const[^const]<div id="class_engine_method_is_in_physics_frame"></div>

Returns `true` if the engine is inside the fixed physics process step of the main loop.

```

    func _enter_tree():
        # Depending on when the node is added to the tree,
        # prints either "true" or "false".
        print(Engine.is_in_physics_frame())
    
    func _process(delta):
        print(Engine.is_in_physics_frame()) # Prints false
    
    func _physics_process(delta):
        print(Engine.is_in_physics_frame()) # Prints true
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_register_script_language"></div>

[Error](#enum_@globalscope_error) **register_script_language** ( language: [`ScriptLanguage`](class_scriptlanguage.md) )<div id="class_engine_method_register_script_language"></div>

Registers a [`ScriptLanguage`](class_scriptlanguage.md) instance to be available with `ScriptServer`.

Returns:

- [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success;

- [`@GlobalScope.ERR_UNAVAILABLE`](class_@globalscope.md#class_@globalscope_constant_err_unavailable) if `ScriptServer` has reached the limit and cannot register any new language;

- [`@GlobalScope.ERR_ALREADY_EXISTS`](class_@globalscope.md#class_@globalscope_constant_err_already_exists) if `ScriptServer` already contains a language with similar extension/name/type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_register_singleton"></div>

`void` **register_singleton** ( name: [`StringName`](class_stringname.md), instance: [`Object`](class_object.md) )<div id="class_engine_method_register_singleton"></div>

Registers the given [`Object`](class_object.md) `instance` as a singleton, available globally under `name`. Useful for plugins.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_unregister_script_language"></div>

[Error](#enum_@globalscope_error) **unregister_script_language** ( language: [`ScriptLanguage`](class_scriptlanguage.md) )<div id="class_engine_method_unregister_script_language"></div>

Unregisters the [`ScriptLanguage`](class_scriptlanguage.md) instance from `ScriptServer`.

Returns:

- [`@GlobalScope.OK`](class_@globalscope.md#class_@globalscope_constant_ok) on success;

- [`@GlobalScope.ERR_DOES_NOT_EXIST`](class_@globalscope.md#class_@globalscope_constant_err_does_not_exist) if the language is not registered in `ScriptServer`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_engine_method_unregister_singleton"></div>

`void` **unregister_singleton** ( name: [`StringName`](class_stringname.md) )<div id="class_engine_method_unregister_singleton"></div>

Removes the singleton registered under `name`. The singleton object is *not* freed. Only works with user-defined singletons registered with [`register_singleton`](class_engine.md#class_engine_method_register_singleton).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
