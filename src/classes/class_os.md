<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/OS.xml。 -->

<div id="_class_os"></div>

# OS

**继承：** [`Object`](class_object.md)

Provides access to common operating system functionalities.

## 描述

The **OS** class wraps the most common functionalities for communicating with the host operating system, such as the video driver, delays, environment variables, execution of binaries, command line, etc.

 **Note:** In Godot 4, **OS** functions related to window management, clipboard, and TTS were moved to the [`DisplayServer`](class_displayserver.md) singleton (and the [`Window`](class_window.md) class). Functions related to time were removed and are only available in the [`Time`](class_time.md) class.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`delta_smoothing`](class_os.md#class_os_property_delta_smoothing)                                         | ``true``  |
| [`bool`](class_bool.md) | [`low_processor_usage_mode`](class_os.md#class_os_property_low_processor_usage_mode)                       | ``false`` |
| [`int`](class_int.md)   | [`low_processor_usage_mode_sleep_usec`](class_os.md#class_os_property_low_processor_usage_mode_sleep_usec) | ``6900``  |

## 方法

|||
|:-:|:--|
| `void`                                            | [`alert`](class_os.md#class_os_method_alert) ( text: [`String`](class_string.md), title: [`String`](class_string.md) = "Alert!" )                                                                                                                                                                                                                                                                |
| `void`                                            | [`close_midi_inputs`](class_os.md#class_os_method_close_midi_inputs) ( )                                                                                                                                                                                                                                                                                                                         |
| `void`                                            | [`crash`](class_os.md#class_os_method_crash) ( message: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                            |
| [`int`](class_int.md)                             | [`create_instance`](class_os.md#class_os_method_create_instance) ( arguments: [`PackedStringArray`](class_packedstringarray.md) )                                                                                                                                                                                                                                                                |
| [`int`](class_int.md)                             | [`create_process`](class_os.md#class_os_method_create_process) ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), open_console: [`bool`](class_bool.md) = false )                                                                                                                                                                                |
| `void`                                            | [`delay_msec`](class_os.md#class_os_method_delay_msec) ( msec: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                             |
| `void`                                            | [`delay_usec`](class_os.md#class_os_method_delay_usec) ( usec: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                             | [`execute`](class_os.md#class_os_method_execute) ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), output: [`Array`](class_array.md) = [], read_stderr: [`bool`](class_bool.md) = false, open_console: [`bool`](class_bool.md) = false )                                                                                                        |
| [`Dictionary`](class_dictionary.md)               | [`execute_with_pipe`](class_os.md#class_os_method_execute_with_pipe) ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), blocking: [`bool`](class_bool.md) = true )                                                                                                                                                                               |
| [Key](#enum_@globalscope_key)                     | [`find_keycode_from_string`](class_os.md#class_os_method_find_keycode_from_string) ( string: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                       | [`get_cache_dir`](class_os.md#class_os_method_get_cache_dir) ( ) const[^const]                                                                                                                                                                                                                                                                                                                   |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_cmdline_args`](class_os.md#class_os_method_get_cmdline_args) ( )                                                                                                                                                                                                                                                                                                                           |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_cmdline_user_args`](class_os.md#class_os_method_get_cmdline_user_args) ( )                                                                                                                                                                                                                                                                                                                 |
| [`String`](class_string.md)                       | [`get_config_dir`](class_os.md#class_os_method_get_config_dir) ( ) const[^const]                                                                                                                                                                                                                                                                                                                 |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_connected_midi_inputs`](class_os.md#class_os_method_get_connected_midi_inputs) ( )                                                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                       | [`get_data_dir`](class_os.md#class_os_method_get_data_dir) ( ) const[^const]                                                                                                                                                                                                                                                                                                                     |
| [`String`](class_string.md)                       | [`get_distribution_name`](class_os.md#class_os_method_get_distribution_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`PackedByteArray`](class_packedbytearray.md)     | [`get_entropy`](class_os.md#class_os_method_get_entropy) ( size: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                       | [`get_environment`](class_os.md#class_os_method_get_environment) ( variable: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                       | [`get_executable_path`](class_os.md#class_os_method_get_executable_path) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_granted_permissions`](class_os.md#class_os_method_get_granted_permissions) ( ) const[^const]                                                                                                                                                                                                                                                                                               |
| [`String`](class_string.md)                       | [`get_keycode_string`](class_os.md#class_os_method_get_keycode_string) ( code: [Key](#enum_@globalscope_key) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`String`](class_string.md)                       | [`get_locale`](class_os.md#class_os_method_get_locale) ( ) const[^const]                                                                                                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                       | [`get_locale_language`](class_os.md#class_os_method_get_locale_language) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`int`](class_int.md)                             | [`get_main_thread_id`](class_os.md#class_os_method_get_main_thread_id) ( ) const[^const]                                                                                                                                                                                                                                                                                                         |
| [`Dictionary`](class_dictionary.md)               | [`get_memory_info`](class_os.md#class_os_method_get_memory_info) ( ) const[^const]                                                                                                                                                                                                                                                                                                               |
| [`String`](class_string.md)                       | [`get_model_name`](class_os.md#class_os_method_get_model_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                 |
| [`String`](class_string.md)                       | [`get_name`](class_os.md#class_os_method_get_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                             | [`get_process_exit_code`](class_os.md#class_os_method_get_process_exit_code) ( pid: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                        |
| [`int`](class_int.md)                             | [`get_process_id`](class_os.md#class_os_method_get_process_id) ( ) const[^const]                                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                             | [`get_processor_count`](class_os.md#class_os_method_get_processor_count) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                       | [`get_processor_name`](class_os.md#class_os_method_get_processor_name) ( ) const[^const]                                                                                                                                                                                                                                                                                                         |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_restart_on_exit_arguments`](class_os.md#class_os_method_get_restart_on_exit_arguments) ( ) const[^const]                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                             | [`get_static_memory_peak_usage`](class_os.md#class_os_method_get_static_memory_peak_usage) ( ) const[^const]                                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                             | [`get_static_memory_usage`](class_os.md#class_os_method_get_static_memory_usage) ( ) const[^const]                                                                                                                                                                                                                                                                                               |
| [`String`](class_string.md)                       | [`get_system_ca_certificates`](class_os.md#class_os_method_get_system_ca_certificates) ( )                                                                                                                                                                                                                                                                                                       |
| [`String`](class_string.md)                       | [`get_system_dir`](class_os.md#class_os_method_get_system_dir) ( dir: [SystemDir](#enum_os_systemdir), shared_storage: [`bool`](class_bool.md) = true ) const[^const]                                                                                                                                                                                                                            |
| [`String`](class_string.md)                       | [`get_system_font_path`](class_os.md#class_os_method_get_system_font_path) ( font_name: [`String`](class_string.md), weight: [`int`](class_int.md) = 400, stretch: [`int`](class_int.md) = 100, italic: [`bool`](class_bool.md) = false ) const[^const]                                                                                                                                          |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_system_font_path_for_text`](class_os.md#class_os_method_get_system_font_path_for_text) ( font_name: [`String`](class_string.md), text: [`String`](class_string.md), locale: [`String`](class_string.md) = "", script: [`String`](class_string.md) = "", weight: [`int`](class_int.md) = 400, stretch: [`int`](class_int.md) = 100, italic: [`bool`](class_bool.md) = false ) const[^const] |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_system_fonts`](class_os.md#class_os_method_get_system_fonts) ( ) const[^const]                                                                                                                                                                                                                                                                                                             |
| [`int`](class_int.md)                             | [`get_thread_caller_id`](class_os.md#class_os_method_get_thread_caller_id) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`String`](class_string.md)                       | [`get_unique_id`](class_os.md#class_os_method_get_unique_id) ( ) const[^const]                                                                                                                                                                                                                                                                                                                   |
| [`String`](class_string.md)                       | [`get_user_data_dir`](class_os.md#class_os_method_get_user_data_dir) ( ) const[^const]                                                                                                                                                                                                                                                                                                           |
| [`String`](class_string.md)                       | [`get_version`](class_os.md#class_os_method_get_version) ( ) const[^const]                                                                                                                                                                                                                                                                                                                       |
| [`PackedStringArray`](class_packedstringarray.md) | [`get_video_adapter_driver_info`](class_os.md#class_os_method_get_video_adapter_driver_info) ( ) const[^const]                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)                           | [`has_environment`](class_os.md#class_os_method_has_environment) ( variable: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                           | [`has_feature`](class_os.md#class_os_method_has_feature) ( tag_name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                           | [`is_debug_build`](class_os.md#class_os_method_is_debug_build) ( ) const[^const]                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                           | [`is_keycode_unicode`](class_os.md#class_os_method_is_keycode_unicode) ( code: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)                           | [`is_process_running`](class_os.md#class_os_method_is_process_running) ( pid: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                           | [`is_restart_on_exit_set`](class_os.md#class_os_method_is_restart_on_exit_set) ( ) const[^const]                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)                           | [`is_sandboxed`](class_os.md#class_os_method_is_sandboxed) ( ) const[^const]                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                           | [`is_stdout_verbose`](class_os.md#class_os_method_is_stdout_verbose) ( ) const[^const]                                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)                           | [`is_userfs_persistent`](class_os.md#class_os_method_is_userfs_persistent) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [Error](#enum_@globalscope_error)                 | [`kill`](class_os.md#class_os_method_kill) ( pid: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                                        |
| [Error](#enum_@globalscope_error)                 | [`move_to_trash`](class_os.md#class_os_method_move_to_trash) ( path: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                                 |
| `void`                                            | [`open_midi_inputs`](class_os.md#class_os_method_open_midi_inputs) ( )                                                                                                                                                                                                                                                                                                                           |
| [`String`](class_string.md)                       | [`read_string_from_stdin`](class_os.md#class_os_method_read_string_from_stdin) ( )                                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                           | [`request_permission`](class_os.md#class_os_method_request_permission) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)                           | [`request_permissions`](class_os.md#class_os_method_request_permissions) ( )                                                                                                                                                                                                                                                                                                                     |
| `void`                                            | [`revoke_granted_permissions`](class_os.md#class_os_method_revoke_granted_permissions) ( )                                                                                                                                                                                                                                                                                                       |
| `void`                                            | [`set_environment`](class_os.md#class_os_method_set_environment) ( variable: [`String`](class_string.md), value: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                     |
| `void`                                            | [`set_restart_on_exit`](class_os.md#class_os_method_set_restart_on_exit) ( restart: [`bool`](class_bool.md), arguments: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray() )                                                                                                                                                                                                |
| [Error](#enum_@globalscope_error)                 | [`set_thread_name`](class_os.md#class_os_method_set_thread_name) ( name: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                           |
| `void`                                            | [`set_use_file_access_save_and_swap`](class_os.md#class_os_method_set_use_file_access_save_and_swap) ( enabled: [`bool`](class_bool.md) )                                                                                                                                                                                                                                                        |
| [Error](#enum_@globalscope_error)                 | [`shell_open`](class_os.md#class_os_method_shell_open) ( uri: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                                      |
| [Error](#enum_@globalscope_error)                 | [`shell_show_in_file_manager`](class_os.md#class_os_method_shell_show_in_file_manager) ( file_or_dir_path: [`String`](class_string.md), open_folder: [`bool`](class_bool.md) = true )                                                                                                                                                                                                            |
| `void`                                            | [`unset_environment`](class_os.md#class_os_method_unset_environment) ( variable: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_os_renderingdriver"></div>

enum **RenderingDriver**: <div id="enum_os_renderingdriver"></div>

<div id="_class_os_constant_rendering_driver_vulkan"></div>

[RenderingDriver](#enum_os_renderingdriver) **RENDERING_DRIVER_VULKAN** = ``0``

The Vulkan rendering driver. It requires Vulkan 1.0 support and automatically uses features from Vulkan 1.1 and 1.2 if available.

<div id="_class_os_constant_rendering_driver_opengl3"></div>

[RenderingDriver](#enum_os_renderingdriver) **RENDERING_DRIVER_OPENGL3** = ``1``

The OpenGL 3 rendering driver. It uses OpenGL 3.3 Core Profile on desktop platforms, OpenGL ES 3.0 on mobile devices, and WebGL 2.0 on Web.

<div id="_class_os_constant_rendering_driver_d3d12"></div>

[RenderingDriver](#enum_os_renderingdriver) **RENDERING_DRIVER_D3D12** = ``2``

The Direct3D 12 rendering driver.

<div id="_class_os_constant_rendering_driver_metal"></div>

[RenderingDriver](#enum_os_renderingdriver) **RENDERING_DRIVER_METAL** = ``3``

The Metal rendering driver.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_os_systemdir"></div>

enum **SystemDir**: <div id="enum_os_systemdir"></div>

<div id="_class_os_constant_system_dir_desktop"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_DESKTOP** = ``0``

Refers to the Desktop directory path.

<div id="_class_os_constant_system_dir_dcim"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_DCIM** = ``1``

Refers to the DCIM (Digital Camera Images) directory path.

<div id="_class_os_constant_system_dir_documents"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_DOCUMENTS** = ``2``

Refers to the Documents directory path.

<div id="_class_os_constant_system_dir_downloads"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_DOWNLOADS** = ``3``

Refers to the Downloads directory path.

<div id="_class_os_constant_system_dir_movies"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_MOVIES** = ``4``

Refers to the Movies (or Videos) directory path.

<div id="_class_os_constant_system_dir_music"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_MUSIC** = ``5``

Refers to the Music directory path.

<div id="_class_os_constant_system_dir_pictures"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_PICTURES** = ``6``

Refers to the Pictures directory path.

<div id="_class_os_constant_system_dir_ringtones"></div>

[SystemDir](#enum_os_systemdir) **SYSTEM_DIR_RINGTONES** = ``7``

Refers to the Ringtones directory path.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_os_property_delta_smoothing"></div>

[`bool`](class_bool.md) **delta_smoothing** = ``true`` <div id="class_os_property_delta_smoothing"></div>

- `void` **set_delta_smoothing** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_delta_smoothing_enabled** ( )

If `true`, the engine filters the time delta measured between each frame, and attempts to compensate for random variation. This only works on systems where V-Sync is active.

 **Note:** On start-up, this is the same as [`ProjectSettings.application/run/delta_smoothing`](class_projectsettings.md#class_projectsettings_property_application/run/delta_smoothing).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_property_low_processor_usage_mode"></div>

[`bool`](class_bool.md) **low_processor_usage_mode** = ``false`` <div id="class_os_property_low_processor_usage_mode"></div>

- `void` **set_low_processor_usage_mode** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_in_low_processor_usage_mode** ( )

If `true`, the engine optimizes for low processor usage by only refreshing the screen if needed. Can improve battery consumption on mobile.

 **Note:** On start-up, this is the same as [`ProjectSettings.application/run/low_processor_mode`](class_projectsettings.md#class_projectsettings_property_application/run/low_processor_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_property_low_processor_usage_mode_sleep_usec"></div>

[`int`](class_int.md) **low_processor_usage_mode_sleep_usec** = ``6900`` <div id="class_os_property_low_processor_usage_mode_sleep_usec"></div>

- `void` **set_low_processor_usage_mode_sleep_usec** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_low_processor_usage_mode_sleep_usec** ( )

The amount of sleeping between frames when the low-processor usage mode is enabled, in microseconds. Higher values will result in lower CPU usage. See also [`low_processor_usage_mode`](class_os.md#class_os_property_low_processor_usage_mode).

 **Note:** On start-up, this is the same as [`ProjectSettings.application/run/low_processor_mode_sleep_usec`](class_projectsettings.md#class_projectsettings_property_application/run/low_processor_mode_sleep_usec).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_os_method_alert"></div>

`void` **alert** ( text: [`String`](class_string.md), title: [`String`](class_string.md) = "Alert!" )<div id="class_os_method_alert"></div>

Displays a modal dialog box using the host platform's implementation. The engine execution is blocked until the dialog is closed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_close_midi_inputs"></div>

`void` **close_midi_inputs** ( )<div id="class_os_method_close_midi_inputs"></div>

Shuts down the system MIDI driver. Godot will no longer receive [`InputEventMIDI`](class_inputeventmidi.md). See also [`open_midi_inputs`](class_os.md#class_os_method_open_midi_inputs) and [`get_connected_midi_inputs`](class_os.md#class_os_method_get_connected_midi_inputs).

 **Note:** This method is implemented on Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_crash"></div>

`void` **crash** ( message: [`String`](class_string.md) )<div id="class_os_method_crash"></div>

Crashes the engine (or the editor if called within a `@tool` script). See also [`kill`](class_os.md#class_os_method_kill).

 **Note:** This method should *only* be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [`@GDScript.assert`](class_@gdscript.md#class_@gdscript_method_assert), [`@GlobalScope.push_error`](class_@globalscope.md#class_@globalscope_method_push_error), or [`alert`](class_os.md#class_os_method_alert).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_create_instance"></div>

[`int`](class_int.md) **create_instance** ( arguments: [`PackedStringArray`](class_packedstringarray.md) )<div id="class_os_method_create_instance"></div>

Creates a new instance of Godot that runs independently. The `arguments` are used in the given order and separated by a space.

If the process is successfully created, this method returns the new process' ID, which you can use to monitor the process (and potentially terminate it with [`kill`](class_os.md#class_os_method_kill)). If the process cannot be created, this method returns `-1`.

See [`create_process`](class_os.md#class_os_method_create_process) if you wish to run a different process.

 **Note:** This method is implemented on Android, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_create_process"></div>

[`int`](class_int.md) **create_process** ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), open_console: [`bool`](class_bool.md) = false )<div id="class_os_method_create_process"></div>

Creates a new process that runs independently of Godot. It will not terminate when Godot terminates. The path specified in `path` must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The `arguments` are used in the given order and separated by a space.

On Windows, if `open_console` is `true` and the process is a console app, a new terminal window will be opened.

If the process is successfully created, this method returns its process ID, which you can use to monitor the process (and potentially terminate it with [`kill`](class_os.md#class_os_method_kill)). Otherwise, this method returns `-1`.

For example, running another instance of the project:



```gdscript

    var pid = OS.create_process(OS.get_executable_path(), [])
```

```csharp

    var pid = OS.CreateProcess(OS.GetExecutablePath(), new string[] {});
```



See [`execute`](class_os.md#class_os_method_execute) if you wish to run an external command and retrieve the results.

 **Note:** This method is implemented on Android, Linux, macOS, and Windows.

 **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_delay_msec"></div>

`void` **delay_msec** ( msec: [`int`](class_int.md) ) const[^const]<div id="class_os_method_delay_msec"></div>

Delays execution of the current thread by `msec` milliseconds. `msec` must be greater than or equal to `0`. Otherwise, [`delay_msec`](class_os.md#class_os_method_delay_msec) does nothing and prints an error message.

 **Note:** [`delay_msec`](class_os.md#class_os_method_delay_msec) is a *blocking* way to delay code execution. To delay code execution in a non-blocking way, you may use [`SceneTree.create_timer`](class_scenetree.md#class_scenetree_method_create_timer). Awaiting with [`SceneTreeTimer`](class_scenetreetimer.md) delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [`EditorPlugin`](class_editorplugin.md) s and [`EditorScript`](class_editorscript.md) s).

 **Note:** When [`delay_msec`](class_os.md#class_os_method_delay_msec) is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [`delay_msec`](class_os.md#class_os_method_delay_msec) as part of an [`EditorPlugin`](class_editorplugin.md) or [`EditorScript`](class_editorscript.md), it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_delay_usec"></div>

`void` **delay_usec** ( usec: [`int`](class_int.md) ) const[^const]<div id="class_os_method_delay_usec"></div>

Delays execution of the current thread by `usec` microseconds. `usec` must be greater than or equal to `0`. Otherwise, [`delay_usec`](class_os.md#class_os_method_delay_usec) does nothing and prints an error message.

 **Note:** [`delay_usec`](class_os.md#class_os_method_delay_usec) is a *blocking* way to delay code execution. To delay code execution in a non-blocking way, you may use [`SceneTree.create_timer`](class_scenetree.md#class_scenetree_method_create_timer). Awaiting with a [`SceneTreeTimer`](class_scenetreetimer.md) delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [`EditorPlugin`](class_editorplugin.md) s and [`EditorScript`](class_editorscript.md) s).

 **Note:** When [`delay_usec`](class_os.md#class_os_method_delay_usec) is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [`delay_usec`](class_os.md#class_os_method_delay_usec) as part of an [`EditorPlugin`](class_editorplugin.md) or [`EditorScript`](class_editorscript.md), it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_execute"></div>

[`int`](class_int.md) **execute** ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), output: [`Array`](class_array.md) = [], read_stderr: [`bool`](class_bool.md) = false, open_console: [`bool`](class_bool.md) = false )<div id="class_os_method_execute"></div>

Executes the given process in a *blocking* way. The file specified in `path` must exist and be executable. The system path resolution will be used. The `arguments` are used in the given order, separated by spaces, and wrapped in quotes.

If an `output` array is provided, the complete shell output of the process is appended to `output` as a single [`String`](class_string.md) element. If `read_stderr` is `true`, the output to the standard error stream is also appended to the array.

On Windows, if `open_console` is `true` and the process is a console app, a new terminal window is opened.

This method returns the exit code of the command, or `-1` if the process fails to execute.

 **Note:** The main thread will be blocked until the executed command terminates. Use [`Thread`](class_thread.md) to create a separate thread that will not block the main thread, or use [`create_process`](class_os.md#class_os_method_create_process) to create a completely independent process.

For example, to retrieve a list of the working directory's contents:



```gdscript

    var output = []
    var exit_code = OS.execute("ls", ["-l", "/tmp"], output)
```

```csharp

    var output = new Godot.Collections.Array();
    int exitCode = OS.Execute("ls", new string[] {"-l", "/tmp"}, output);
```



If you wish to access a shell built-in or execute a composite command, a platform-specific shell can be invoked. For example:



```gdscript

    var output = []
    OS.execute("CMD.exe", ["/C", "cd %TEMP% && dir"], output)
```

```csharp

    var output = new Godot.Collections.Array();
    OS.Execute("CMD.exe", new string[] {"/C", "cd %TEMP% && dir"}, output);
```



 **Note:** This method is implemented on Android, Linux, macOS, and Windows.

 **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in `path`, `/c` as the first argument, and the desired command as the second argument.

 **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in `path`, `-Command` as the first argument, and the desired command as the second argument.

 **Note:** To execute a Unix shell built-in command, specify shell executable name in `path`, `-c` as the first argument, and the desired command as the second argument.

 **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export.

 **Note:** On Android, system commands such as `dumpsys` can only be run on a rooted device.









<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_execute_with_pipe"></div>

[`Dictionary`](class_dictionary.md) **execute_with_pipe** ( path: [`String`](class_string.md), arguments: [`PackedStringArray`](class_packedstringarray.md), blocking: [`bool`](class_bool.md) = true )<div id="class_os_method_execute_with_pipe"></div>

Creates a new process that runs independently of Godot with redirected IO. It will not terminate when Godot terminates. The path specified in `path` must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The `arguments` are used in the given order and separated by a space.

If `blocking` is `false`, created pipes work in non-blocking mode, i.e. read and write operations will return immediately. Use [`FileAccess.get_error`](class_fileaccess.md#class_fileaccess_method_get_error) to check if the last read/write operation was successful.

If the process cannot be created, this method returns an empty [`Dictionary`](class_dictionary.md). Otherwise, this method returns a [`Dictionary`](class_dictionary.md) with the following keys:

- `"stdio"` - [`FileAccess`](class_fileaccess.md) to access the process stdin and stdout pipes (read/write).

- `"stderr"` - [`FileAccess`](class_fileaccess.md) to access the process stderr pipe (read only).

- `"pid"` - Process ID as an [`int`](class_int.md), which you can use to monitor the process (and potentially terminate it with [`kill`](class_os.md#class_os_method_kill)).

 **Note:** This method is implemented on Android, Linux, macOS, and Windows.

 **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in `path`, `/c` as the first argument, and the desired command as the second argument.

 **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in `path`, `-Command` as the first argument, and the desired command as the second argument.

 **Note:** To execute a Unix shell built-in command, specify shell executable name in `path`, `-c` as the first argument, and the desired command as the second argument.

 **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_find_keycode_from_string"></div>

[Key](#enum_@globalscope_key) **find_keycode_from_string** ( string: [`String`](class_string.md) ) const[^const]<div id="class_os_method_find_keycode_from_string"></div>

Finds the keycode for the given string. The returned values are equivalent to the [Key](#enum_@globalscope_key) constants.



```gdscript

    print(OS.find_keycode_from_string("C"))         # Prints 67 (KEY_C)
    print(OS.find_keycode_from_string("Escape"))    # Prints 4194305 (KEY_ESCAPE)
    print(OS.find_keycode_from_string("Shift+Tab")) # Prints 37748738 (KEY_MASK_SHIFT | KEY_TAB)
    print(OS.find_keycode_from_string("Unknown"))   # Prints 0 (KEY_NONE)
```

```csharp

    GD.Print(OS.FindKeycodeFromString("C"));         // Prints C (Key.C)
    GD.Print(OS.FindKeycodeFromString("Escape"));    // Prints Escape (Key.Escape)
    GD.Print(OS.FindKeycodeFromString("Shift+Tab")); // Prints 37748738 (KeyModifierMask.MaskShift | Key.Tab)
    GD.Print(OS.FindKeycodeFromString("Unknown"));   // Prints None (Key.None)
```



See also [`get_keycode_string`](class_os.md#class_os_method_get_keycode_string).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_cache_dir"></div>

[`String`](class_string.md) **get_cache_dir** ( ) const[^const]<div id="class_os_method_get_cache_dir"></div>

Returns the *global* cache data directory according to the operating system's standards.

On the Linux/BSD platform, this path can be overridden by setting the `XDG_CACHE_HOME` environment variable before starting the project. See [*File paths in Godot projects*](../tutorials/io/data_paths) in the documentation for more information. See also [`get_config_dir`](class_os.md#class_os_method_get_config_dir) and [`get_data_dir`](class_os.md#class_os_method_get_data_dir).

Not to be confused with [`get_user_data_dir`](class_os.md#class_os_method_get_user_data_dir), which returns the *project-specific* user data path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_cmdline_args"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_cmdline_args** ( )<div id="class_os_method_get_cmdline_args"></div>

Returns the command-line arguments passed to the engine.

Command-line arguments can be written in any form, including both `--key value` and `--key=value` forms so they can be properly parsed, as long as custom command-line arguments do not conflict with engine arguments.

You can also incorporate environment variables using the [`get_environment`](class_os.md#class_os_method_get_environment) method.

You can set [`ProjectSettings.editor/run/main_run_args`](class_projectsettings.md#class_projectsettings_property_editor/run/main_run_args) to define command-line arguments to be passed by the editor when running the project.

Here's a minimal example on how to parse command-line arguments into a [`Dictionary`](class_dictionary.md) using the `--key=value` form for arguments:



```gdscript

    var arguments = {}
    for argument in OS.get_cmdline_args():
        if argument.contains("="):
            var key_value = argument.split("=")
            arguments[key_value[0].trim_prefix("--")] = key_value[1]
        else:
            # Options without an argument will be present in the dictionary,
            # with the value set to an empty string.
            arguments[argument.trim_prefix("--")] = ""
```

```csharp

    var arguments = new Dictionary<string, string>();
    foreach (var argument in OS.GetCmdlineArgs())
    {
        if (argument.Contains('='))
        {
            string[] keyValue = argument.Split("=");
            arguments[keyValue[0].TrimPrefix("--")] = keyValue[1];
        }
        else
        {
            // Options without an argument will be present in the dictionary,
            // with the value set to an empty string.
            arguments[argument.TrimPrefix("--")] = "";
        }
    }
```



 **Note:** Passing custom user arguments directly is not recommended, as the engine may discard or modify them. Instead, pass the standard UNIX double dash (`--`) and then the custom arguments, which the engine will ignore by design. These can be read via [`get_cmdline_user_args`](class_os.md#class_os_method_get_cmdline_user_args).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_cmdline_user_args"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_cmdline_user_args** ( )<div id="class_os_method_get_cmdline_user_args"></div>

Returns the command-line user arguments passed to the engine. User arguments are ignored by the engine and reserved for the user. They are passed after the double dash `--` argument. `++` may be used when `--` is intercepted by another program (such as `startx`).

```

    # Godot has been executed with the following command:
    # godot --fullscreen -- --level=2 --hardcore
    
    OS.get_cmdline_args()      # Returns ["--fullscreen", "--level=2", "--hardcore"]
    OS.get_cmdline_user_args() # Returns ["--level=2", "--hardcore"]
```

To get all passed arguments, use [`get_cmdline_args`](class_os.md#class_os_method_get_cmdline_args).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_config_dir"></div>

[`String`](class_string.md) **get_config_dir** ( ) const[^const]<div id="class_os_method_get_config_dir"></div>

Returns the *global* user configuration directory according to the operating system's standards.

On the Linux/BSD platform, this path can be overridden by setting the `XDG_CONFIG_HOME` environment variable before starting the project. See [*File paths in Godot projects*](../tutorials/io/data_paths) in the documentation for more information. See also [`get_cache_dir`](class_os.md#class_os_method_get_cache_dir) and [`get_data_dir`](class_os.md#class_os_method_get_data_dir).

Not to be confused with [`get_user_data_dir`](class_os.md#class_os_method_get_user_data_dir), which returns the *project-specific* user data path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_connected_midi_inputs"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_connected_midi_inputs** ( )<div id="class_os_method_get_connected_midi_inputs"></div>

Returns an array of connected MIDI device names, if they exist. Returns an empty array if the system MIDI driver has not previously been initialized with [`open_midi_inputs`](class_os.md#class_os_method_open_midi_inputs). See also [`close_midi_inputs`](class_os.md#class_os_method_close_midi_inputs).

 **Note:** This method is implemented on Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_data_dir"></div>

[`String`](class_string.md) **get_data_dir** ( ) const[^const]<div id="class_os_method_get_data_dir"></div>

Returns the *global* user data directory according to the operating system's standards.

On the Linux/BSD platform, this path can be overridden by setting the `XDG_DATA_HOME` environment variable before starting the project. See [*File paths in Godot projects*](../tutorials/io/data_paths) in the documentation for more information. See also [`get_cache_dir`](class_os.md#class_os_method_get_cache_dir) and [`get_config_dir`](class_os.md#class_os_method_get_config_dir).

Not to be confused with [`get_user_data_dir`](class_os.md#class_os_method_get_user_data_dir), which returns the *project-specific* user data path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_distribution_name"></div>

[`String`](class_string.md) **get_distribution_name** ( ) const[^const]<div id="class_os_method_get_distribution_name"></div>

Returns the name of the distribution for Linux and BSD platforms (e.g. "Ubuntu", "Manjaro", "OpenBSD", etc.).

Returns the same value as [`get_name`](class_os.md#class_os_method_get_name) for stock Android ROMs, but attempts to return the custom ROM name for popular Android derivatives such as "LineageOS".

Returns the same value as [`get_name`](class_os.md#class_os_method_get_name) for other platforms.

 **Note:** This method is not supported on the Web platform. It returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_entropy"></div>

[`PackedByteArray`](class_packedbytearray.md) **get_entropy** ( size: [`int`](class_int.md) )<div id="class_os_method_get_entropy"></div>

Generates a [`PackedByteArray`](class_packedbytearray.md) of cryptographically secure random bytes with given `size`.

 **Note:** Generating large quantities of bytes using this method can result in locking and entropy of lower quality on most platforms. Using [`Crypto.generate_random_bytes`](class_crypto.md#class_crypto_method_generate_random_bytes) is preferred in most cases.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_environment"></div>

[`String`](class_string.md) **get_environment** ( variable: [`String`](class_string.md) ) const[^const]<div id="class_os_method_get_environment"></div>

Returns the value of the given environment variable, or an empty string if `variable` doesn't exist.

 **Note:** Double-check the casing of `variable`. Environment variable names are case-sensitive on all platforms except Windows.

 **Note:** On macOS, applications do not have access to shell environment variables.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_executable_path"></div>

[`String`](class_string.md) **get_executable_path** ( ) const[^const]<div id="class_os_method_get_executable_path"></div>

Returns the file path to the current engine executable.

 **Note:** On macOS, if you want to launch another instance of Godot, always use [`create_instance`](class_os.md#class_os_method_create_instance) instead of relying on the executable path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_granted_permissions"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_granted_permissions** ( ) const[^const]<div id="class_os_method_get_granted_permissions"></div>

On Android devices: Returns the list of dangerous permissions that have been granted.

On macOS: Returns the list of user selected folders accessible to the application (sandboxed applications only). Use the native file dialog to request folder access permission.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_keycode_string"></div>

[`String`](class_string.md) **get_keycode_string** ( code: [Key](#enum_@globalscope_key) ) const[^const]<div id="class_os_method_get_keycode_string"></div>

Returns the given keycode as a [`String`](class_string.md).



```gdscript

    print(OS.get_keycode_string(KEY_C))                    # Prints "C"
    print(OS.get_keycode_string(KEY_ESCAPE))               # Prints "Escape"
    print(OS.get_keycode_string(KEY_MASK_SHIFT | KEY_TAB)) # Prints "Shift+Tab"
```

```csharp

    GD.Print(OS.GetKeycodeString(Key.C));                                    // Prints "C"
    GD.Print(OS.GetKeycodeString(Key.Escape));                               // Prints "Escape"
    GD.Print(OS.GetKeycodeString((Key)KeyModifierMask.MaskShift | Key.Tab)); // Prints "Shift+Tab"
```



See also [`find_keycode_from_string`](class_os.md#class_os_method_find_keycode_from_string), [`InputEventKey.keycode`](class_inputeventkey.md#class_inputeventkey_property_keycode), and [`InputEventKey.get_keycode_with_modifiers`](class_inputeventkey.md#class_inputeventkey_method_get_keycode_with_modifiers).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_locale"></div>

[`String`](class_string.md) **get_locale** ( ) const[^const]<div id="class_os_method_get_locale"></div>

Returns the host OS locale as a [`String`](class_string.md) of the form `language_Script_COUNTRY_VARIANT@extra`. Every substring after `language` is optional and may not exist.

- `language` - 2 or 3-letter [*language code*](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), in lower case.

- `Script` - 4-letter [*script code*](https://en.wikipedia.org/wiki/ISO_15924), in title case.

- `COUNTRY` - 2 or 3-letter [*country code*](https://en.wikipedia.org/wiki/ISO_3166-1), in upper case.

- `VARIANT` - language variant, region and sort order. The variant can have any number of underscored keywords.

- `extra` - semicolon separated list of additional key words. This may include currency, calendar, sort order and numbering system information.

If you want only the language code and not the fully specified locale from the OS, you can use [`get_locale_language`](class_os.md#class_os_method_get_locale_language).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_locale_language"></div>

[`String`](class_string.md) **get_locale_language** ( ) const[^const]<div id="class_os_method_get_locale_language"></div>

Returns the host OS locale's 2 or 3-letter [*language code*](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) as a string which should be consistent on all platforms. This is equivalent to extracting the `language` part of the [`get_locale`](class_os.md#class_os_method_get_locale) string.

This can be used to narrow down fully specified locale strings to only the "common" language code, when you don't need the additional information about country code or variants. For example, for a French Canadian user with `fr_CA` locale, this would return `fr`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_main_thread_id"></div>

[`int`](class_int.md) **get_main_thread_id** ( ) const[^const]<div id="class_os_method_get_main_thread_id"></div>

Returns the ID of the main thread. See [`get_thread_caller_id`](class_os.md#class_os_method_get_thread_caller_id).

 **Note:** Thread IDs are not deterministic and may be reused across application restarts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_memory_info"></div>

[`Dictionary`](class_dictionary.md) **get_memory_info** ( ) const[^const]<div id="class_os_method_get_memory_info"></div>

Returns a [`Dictionary`](class_dictionary.md) containing information about the current memory with the following entries:

- `"physical"` - total amount of usable physical memory in bytes. This value can be slightly less than the actual physical memory amount, since it does not include memory reserved by the kernel and devices.

- `"free"` - amount of physical memory, that can be immediately allocated without disk access or other costly operations, in bytes. The process might be able to allocate more physical memory, but this action will require moving inactive pages to disk, which can be expensive.

- `"available"` - amount of memory that can be allocated without extending the swap file(s), in bytes. This value includes both physical memory and swap.

- `"stack"` - size of the current thread stack in bytes.

 **Note:** Each entry's value may be `-1` if it is unknown.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_model_name"></div>

[`String`](class_string.md) **get_model_name** ( ) const[^const]<div id="class_os_method_get_model_name"></div>

Returns the model name of the current device.

 **Note:** This method is implemented on Android and iOS. Returns `"GenericDevice"` on unsupported platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_name"></div>

[`String`](class_string.md) **get_name** ( ) const[^const]<div id="class_os_method_get_name"></div>

Returns the name of the host platform.

- On Windows, this is `"Windows"`.

- On macOS, this is `"macOS"`.

- On Linux-based operating systems, this is `"Linux"`.

- On BSD-based operating systems, this is `"FreeBSD"`, `"NetBSD"`, `"OpenBSD"`, or `"BSD"` as a fallback.

- On Android, this is `"Android"`.

- On iOS, this is `"iOS"`.

- On Web, this is `"Web"`.

 **Note:** Custom builds of the engine may support additional platforms, such as consoles, possibly returning other names.



```gdscript

    match OS.get_name():
        "Windows":
            print("Welcome to Windows!")
        "macOS":
            print("Welcome to macOS!")
        "Linux", "FreeBSD", "NetBSD", "OpenBSD", "BSD":
            print("Welcome to Linux/BSD!")
        "Android":
            print("Welcome to Android!")
        "iOS":
            print("Welcome to iOS!")
        "Web":
            print("Welcome to the Web!")
```

```csharp

    switch (OS.GetName())
    {
        case "Windows":
            GD.Print("Welcome to Windows");
            break;
        case "macOS":
            GD.Print("Welcome to macOS!");
            break;
        case "Linux":
        case "FreeBSD":
        case "NetBSD":
        case "OpenBSD":
        case "BSD":
            GD.Print("Welcome to Linux/BSD!");
            break;
        case "Android":
            GD.Print("Welcome to Android!");
            break;
        case "iOS":
            GD.Print("Welcome to iOS!");
            break;
        case "Web":
            GD.Print("Welcome to the Web!");
            break;
    }
```



 **Note:** On Web platforms, it is still possible to determine the host platform's OS with feature tags. See [`has_feature`](class_os.md#class_os_method_has_feature).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_process_exit_code"></div>

[`int`](class_int.md) **get_process_exit_code** ( pid: [`int`](class_int.md) ) const[^const]<div id="class_os_method_get_process_exit_code"></div>

Returns the exit code of a spawned process once it has finished running (see [`is_process_running`](class_os.md#class_os_method_is_process_running)).

Returns `-1` if the `pid` is not a PID of a spawned child process, the process is still running, or the method is not implemented for the current platform.

 **Note:** Returns `-1` if the `pid` is a macOS bundled app process.

 **Note:** This method is implemented on Android, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_process_id"></div>

[`int`](class_int.md) **get_process_id** ( ) const[^const]<div id="class_os_method_get_process_id"></div>

Returns the number used by the host machine to uniquely identify this application.

 **Note:** This method is implemented on Android, iOS, Linux, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_processor_count"></div>

[`int`](class_int.md) **get_processor_count** ( ) const[^const]<div id="class_os_method_get_processor_count"></div>

Returns the number of *logical* CPU cores available on the host machine. On CPUs with HyperThreading enabled, this number will be greater than the number of *physical* CPU cores.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_processor_name"></div>

[`String`](class_string.md) **get_processor_name** ( ) const[^const]<div id="class_os_method_get_processor_name"></div>

Returns the full name of the CPU model on the host machine (e.g. `"Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz"`).

 **Note:** This method is only implemented on Windows, macOS, Linux and iOS. On Android and Web, [`get_processor_name`](class_os.md#class_os_method_get_processor_name) returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_restart_on_exit_arguments"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_restart_on_exit_arguments** ( ) const[^const]<div id="class_os_method_get_restart_on_exit_arguments"></div>

Returns the list of command line arguments that will be used when the project automatically restarts using [`set_restart_on_exit`](class_os.md#class_os_method_set_restart_on_exit). See also [`is_restart_on_exit_set`](class_os.md#class_os_method_is_restart_on_exit_set).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_static_memory_peak_usage"></div>

[`int`](class_int.md) **get_static_memory_peak_usage** ( ) const[^const]<div id="class_os_method_get_static_memory_peak_usage"></div>

Returns the maximum amount of static memory used. Only works in debug builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_static_memory_usage"></div>

[`int`](class_int.md) **get_static_memory_usage** ( ) const[^const]<div id="class_os_method_get_static_memory_usage"></div>

Returns the amount of static memory being used by the program in bytes. Only works in debug builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_system_ca_certificates"></div>

[`String`](class_string.md) **get_system_ca_certificates** ( )<div id="class_os_method_get_system_ca_certificates"></div>

Returns the list of certification authorities trusted by the operating system as a string of concatenated certificates in PEM format.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_system_dir"></div>

[`String`](class_string.md) **get_system_dir** ( dir: [SystemDir](#enum_os_systemdir), shared_storage: [`bool`](class_bool.md) = true ) const[^const]<div id="class_os_method_get_system_dir"></div>

Returns the path to commonly used folders across different platforms, as defined by `dir`. See the [SystemDir](#enum_os_systemdir) constants for available locations.

 **Note:** This method is implemented on Android, Linux, macOS and Windows.

 **Note:** Shared storage is implemented on Android and allows to differentiate between app specific and shared directories, if `shared_storage` is `true`. Shared directories have additional restrictions on Android.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_system_font_path"></div>

[`String`](class_string.md) **get_system_font_path** ( font_name: [`String`](class_string.md), weight: [`int`](class_int.md) = 400, stretch: [`int`](class_int.md) = 100, italic: [`bool`](class_bool.md) = false ) const[^const]<div id="class_os_method_get_system_font_path"></div>

Returns the path to the system font file with `font_name` and style. Returns an empty string if no matching fonts found.

The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".

 **Note:** Returned font might have different style if the requested style is not available.

 **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_system_font_path_for_text"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_system_font_path_for_text** ( font_name: [`String`](class_string.md), text: [`String`](class_string.md), locale: [`String`](class_string.md) = "", script: [`String`](class_string.md) = "", weight: [`int`](class_int.md) = 400, stretch: [`int`](class_int.md) = 100, italic: [`bool`](class_bool.md) = false ) const[^const]<div id="class_os_method_get_system_font_path_for_text"></div>

Returns an array of the system substitute font file paths, which are similar to the font with `font_name` and style for the specified text, locale, and script. Returns an empty array if no matching fonts found.

The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".

 **Note:** Depending on OS, it's not guaranteed that any of the returned fonts will be suitable for rendering specified text. Fonts should be loaded and checked in the order they are returned, and the first suitable one used.

 **Note:** Returned fonts might have different style if the requested style is not available or belong to a different font family.

 **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_system_fonts"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_system_fonts** ( ) const[^const]<div id="class_os_method_get_system_fonts"></div>

Returns the list of font family names available.

 **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_thread_caller_id"></div>

[`int`](class_int.md) **get_thread_caller_id** ( ) const[^const]<div id="class_os_method_get_thread_caller_id"></div>

Returns the ID of the current thread. This can be used in logs to ease debugging of multi-threaded applications.

 **Note:** Thread IDs are not deterministic and may be reused across application restarts.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_unique_id"></div>

[`String`](class_string.md) **get_unique_id** ( ) const[^const]<div id="class_os_method_get_unique_id"></div>

Returns a string that is unique to the device.

 **Note:** This string may change without notice if the user reinstalls their operating system, upgrades it, or modifies their hardware. This means it should generally not be used to encrypt persistent data, as the data saved before an unexpected ID change would become inaccessible. The returned string may also be falsified using external programs, so do not rely on the string returned by this method for security purposes.

 **Note:** On Web, returns an empty string and generates an error, as this method cannot be implemented for security reasons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_user_data_dir"></div>

[`String`](class_string.md) **get_user_data_dir** ( ) const[^const]<div id="class_os_method_get_user_data_dir"></div>

Returns the absolute directory path where user data is written (the `user://` directory in Godot). The path depends on the project name and [`ProjectSettings.application/config/use_custom_user_dir`](class_projectsettings.md#class_projectsettings_property_application/config/use_custom_user_dir).

- On Windows, this is `%AppData%\Godot\app_userdata\[project_name]`, or `%AppData%\[custom_name]` if `use_custom_user_dir` is set. `%AppData%` expands to `%UserProfile%\AppData\Roaming`.

- On macOS, this is `~/Library/Application Support/Godot/app_userdata/[project_name]`, or `~/Library/Application Support/[custom_name]` if `use_custom_user_dir` is set.

- On Linux and BSD, this is `~/.local/share/godot/app_userdata/[project_name]`, or `~/.local/share/[custom_name]` if `use_custom_user_dir` is set.

- On Android and iOS, this is a sandboxed directory in either internal or external storage, depending on the user's configuration.

- On Web, this is a virtual directory managed by the browser.

If the project name is empty, `[project_name]` falls back to `[unnamed project]`.

Not to be confused with [`get_data_dir`](class_os.md#class_os_method_get_data_dir), which returns the *global* (non-project-specific) user home directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_version"></div>

[`String`](class_string.md) **get_version** ( ) const[^const]<div id="class_os_method_get_version"></div>

Returns the exact production and build version of the operating system. This is different from the branded version used in marketing. This helps to distinguish between different releases of operating systems, including minor versions, and insider and custom builds.

- For Windows, the major and minor version are returned, as well as the build number. For example, the returned string may look like `10.0.9926` for a build of Windows 10, and it may look like `6.1.7601` for a build of Windows 7 SP1.

- For rolling distributions, such as Arch Linux, an empty string is returned.

- For macOS and iOS, the major and minor version are returned, as well as the patch number.

- For Android, the SDK version and the incremental build number are returned. If it's a custom ROM, it attempts to return its version instead.

 **Note:** This method is not supported on the Web platform. It returns an empty string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_get_video_adapter_driver_info"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_video_adapter_driver_info** ( ) const[^const]<div id="class_os_method_get_video_adapter_driver_info"></div>

Returns the video adapter driver name and version for the user's currently active graphics card, as a [`PackedStringArray`](class_packedstringarray.md). See also [`RenderingServer.get_video_adapter_api_version`](class_renderingserver.md#class_renderingserver_method_get_video_adapter_api_version).

The first element holds the driver name, such as `nvidia`, `amdgpu`, etc.

The second element holds the driver version. For example, on the `nvidia` driver on a Linux/BSD platform, the version is in the format `510.85.02`. For Windows, the driver's format is `31.0.15.1659`.

 **Note:** This method is only supported on Linux/BSD and Windows when not running in headless mode. On other platforms, it returns an empty array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_has_environment"></div>

[`bool`](class_bool.md) **has_environment** ( variable: [`String`](class_string.md) ) const[^const]<div id="class_os_method_has_environment"></div>

Returns `true` if the environment variable with the name `variable` exists.

 **Note:** Double-check the casing of `variable`. Environment variable names are case-sensitive on all platforms except Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_has_feature"></div>

[`bool`](class_bool.md) **has_feature** ( tag_name: [`String`](class_string.md) ) const[^const]<div id="class_os_method_has_feature"></div>

Returns `true` if the feature for the given feature tag is supported in the currently running instance, depending on the platform, build, etc. Can be used to check whether you're currently running a debug build, on a certain platform or arch, etc. Refer to the [*Feature Tags*](../tutorials/export/feature_tags) documentation for more details.

 **Note:** Tag names are case-sensitive.

 **Note:** On the Web platform, one of the following additional tags is defined to indicate the host platform: `web_android`, `web_ios`, `web_linuxbsd`, `web_macos`, or `web_windows`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_debug_build"></div>

[`bool`](class_bool.md) **is_debug_build** ( ) const[^const]<div id="class_os_method_is_debug_build"></div>

Returns `true` if the Godot binary used to run the project is a *debug* export template, or when running in the editor.

Returns `false` if the Godot binary used to run the project is a *release* export template.

 **Note:** To check whether the Godot binary used to run the project is an export template (debug or release), use `OS.has_feature("template")` instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_keycode_unicode"></div>

[`bool`](class_bool.md) **is_keycode_unicode** ( code: [`int`](class_int.md) ) const[^const]<div id="class_os_method_is_keycode_unicode"></div>

Returns `true` if the input keycode corresponds to a Unicode character. For a list of codes, see the [Key](#enum_@globalscope_key) constants.



```gdscript

    print(OS.is_keycode_unicode(KEY_G))      # Prints true
    print(OS.is_keycode_unicode(KEY_KP_4))   # Prints true
    print(OS.is_keycode_unicode(KEY_TAB))    # Prints false
    print(OS.is_keycode_unicode(KEY_ESCAPE)) # Prints false
```

```csharp

    GD.Print(OS.IsKeycodeUnicode((long)Key.G));      // Prints true
    GD.Print(OS.IsKeycodeUnicode((long)Key.Kp4));    // Prints true
    GD.Print(OS.IsKeycodeUnicode((long)Key.Tab));    // Prints false
    GD.Print(OS.IsKeycodeUnicode((long)Key.Escape)); // Prints false
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_process_running"></div>

[`bool`](class_bool.md) **is_process_running** ( pid: [`int`](class_int.md) ) const[^const]<div id="class_os_method_is_process_running"></div>

Returns `true` if the child process ID (`pid`) is still running or `false` if it has terminated. `pid` must be a valid ID generated from [`create_process`](class_os.md#class_os_method_create_process).

 **Note:** This method is implemented on Android, iOS, Linux, macOS, and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_restart_on_exit_set"></div>

[`bool`](class_bool.md) **is_restart_on_exit_set** ( ) const[^const]<div id="class_os_method_is_restart_on_exit_set"></div>

Returns `true` if the project will automatically restart when it exits for any reason, `false` otherwise. See also [`set_restart_on_exit`](class_os.md#class_os_method_set_restart_on_exit) and [`get_restart_on_exit_arguments`](class_os.md#class_os_method_get_restart_on_exit_arguments).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_sandboxed"></div>

[`bool`](class_bool.md) **is_sandboxed** ( ) const[^const]<div id="class_os_method_is_sandboxed"></div>

Returns `true` if the application is running in the sandbox.

 **Note:** This method is only implemented on macOS and Linux.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_stdout_verbose"></div>

[`bool`](class_bool.md) **is_stdout_verbose** ( ) const[^const]<div id="class_os_method_is_stdout_verbose"></div>

Returns `true` if the engine was executed with the `--verbose` or `-v` command line argument, or if [`ProjectSettings.debug/settings/stdout/verbose_stdout`](class_projectsettings.md#class_projectsettings_property_debug/settings/stdout/verbose_stdout) is `true`. See also [`@GlobalScope.print_verbose`](class_@globalscope.md#class_@globalscope_method_print_verbose).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_is_userfs_persistent"></div>

[`bool`](class_bool.md) **is_userfs_persistent** ( ) const[^const]<div id="class_os_method_is_userfs_persistent"></div>

Returns `true` if the `user://` file system is persistent, that is, its state is the same after a player quits and starts the game again. Relevant to the Web platform, where this persistence may be unavailable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_kill"></div>

[Error](#enum_@globalscope_error) **kill** ( pid: [`int`](class_int.md) )<div id="class_os_method_kill"></div>

Kill (terminate) the process identified by the given process ID (`pid`), such as the ID returned by [`execute`](class_os.md#class_os_method_execute) in non-blocking mode. See also [`crash`](class_os.md#class_os_method_crash).

 **Note:** This method can also be used to kill processes that were not spawned by the engine.

 **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_move_to_trash"></div>

[Error](#enum_@globalscope_error) **move_to_trash** ( path: [`String`](class_string.md) ) const[^const]<div id="class_os_method_move_to_trash"></div>

Moves the file or directory at the given `path` to the system's recycle bin. See also [`DirAccess.remove`](class_diraccess.md#class_diraccess_method_remove).

The method takes only global paths, so you may need to use [`ProjectSettings.globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path). Do not use it for files in `res://` as it will not work in exported projects.

Returns [`@GlobalScope.FAILED`](class_@globalscope.md#class_@globalscope_constant_failed) if the file or directory cannot be found, or the system does not support this method.



```gdscript

    var file_to_remove = "user://slot1.save"
    OS.move_to_trash(ProjectSettings.globalize_path(file_to_remove))
```

```csharp

    var fileToRemove = "user://slot1.save";
    OS.MoveToTrash(ProjectSettings.GlobalizePath(fileToRemove));
```



 **Note:** This method is implemented on Android, Linux, macOS and Windows.

 **Note:** If the user has disabled the recycle bin on their system, the file will be permanently deleted instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_open_midi_inputs"></div>

`void` **open_midi_inputs** ( )<div id="class_os_method_open_midi_inputs"></div>

Initializes the singleton for the system MIDI driver, allowing Godot to receive [`InputEventMIDI`](class_inputeventmidi.md). See also [`get_connected_midi_inputs`](class_os.md#class_os_method_get_connected_midi_inputs) and [`close_midi_inputs`](class_os.md#class_os_method_close_midi_inputs).

 **Note:** This method is implemented on Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_read_string_from_stdin"></div>

[`String`](class_string.md) **read_string_from_stdin** ( )<div id="class_os_method_read_string_from_stdin"></div>

Reads a user input string from the standard input (usually the terminal). This operation is *blocking*, which causes the window to freeze if [`read_string_from_stdin`](class_os.md#class_os_method_read_string_from_stdin) is called on the main thread. The thread calling [`read_string_from_stdin`](class_os.md#class_os_method_read_string_from_stdin) will block until the program receives a line break in standard input (usually by the user pressing <i class="fa fa-gamepad"></i>`Enter`).

 **Note:** This method is implemented on Linux, macOS and Windows.

 **Note:** On exported Windows builds, run the console wrapper executable to access the terminal. Otherwise, the standard input will not work correctly. If you need a single executable with console support, use a custom build compiled with the `windows_subsystem=console` flag.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_request_permission"></div>

[`bool`](class_bool.md) **request_permission** ( name: [`String`](class_string.md) )<div id="class_os_method_request_permission"></div>

Requests permission from the OS for the given `name`. Returns `true` if the permission has been successfully granted.

 **Note:** This method is currently only implemented on Android, to specifically request permission for `"RECORD_AUDIO"` by `AudioDriverOpenSL`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_request_permissions"></div>

[`bool`](class_bool.md) **request_permissions** ( )<div id="class_os_method_request_permissions"></div>

Requests *dangerous* permissions from the OS. Returns `true` if permissions have been successfully granted.

 **Note:** This method is only implemented on Android. Normal permissions are automatically granted at install time in Android applications.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_revoke_granted_permissions"></div>

`void` **revoke_granted_permissions** ( )<div id="class_os_method_revoke_granted_permissions"></div>

On macOS (sandboxed applications only), this function clears list of user selected folders accessible to the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_set_environment"></div>

`void` **set_environment** ( variable: [`String`](class_string.md), value: [`String`](class_string.md) ) const[^const]<div id="class_os_method_set_environment"></div>

Sets the value of the environment variable `variable` to `value`. The environment variable will be set for the Godot process and any process executed with [`execute`](class_os.md#class_os_method_execute) after running [`set_environment`](class_os.md#class_os_method_set_environment). The environment variable will *not* persist to processes run after the Godot process was terminated.

 **Note:** Environment variable names are case-sensitive on all platforms except Windows. The `variable` name cannot be empty or include the `=` character. On Windows, there is a 32767 characters limit for the combined length of `variable`, `value`, and the `=` and null terminator characters that will be registered in the environment block.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_set_restart_on_exit"></div>

`void` **set_restart_on_exit** ( restart: [`bool`](class_bool.md), arguments: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray() )<div id="class_os_method_set_restart_on_exit"></div>

If `restart` is `true`, restarts the project automatically when it is exited with [`SceneTree.quit`](class_scenetree.md#class_scenetree_method_quit) or [`Node.NOTIFICATION_WM_CLOSE_REQUEST`](class_node.md#class_node_constant_notification_wm_close_request). Command-line `arguments` can be supplied. To restart the project with the same command line arguments as originally used to run the project, pass [`get_cmdline_args`](class_os.md#class_os_method_get_cmdline_args) as the value for `arguments`.

This method can be used to apply setting changes that require a restart. See also [`is_restart_on_exit_set`](class_os.md#class_os_method_is_restart_on_exit_set) and [`get_restart_on_exit_arguments`](class_os.md#class_os_method_get_restart_on_exit_arguments).

 **Note:** This method is only effective on desktop platforms, and only when the project isn't started from the editor. It will have no effect on mobile and Web platforms, or when the project is started from the editor.

 **Note:** If the project process crashes or is *killed* by the user (by sending `SIGKILL` instead of the usual `SIGTERM`), the project won't restart automatically.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_set_thread_name"></div>

[Error](#enum_@globalscope_error) **set_thread_name** ( name: [`String`](class_string.md) )<div id="class_os_method_set_thread_name"></div>

Assigns the given name to the current thread. Returns [`@GlobalScope.ERR_UNAVAILABLE`](class_@globalscope.md#class_@globalscope_constant_err_unavailable) if unavailable on the current platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_set_use_file_access_save_and_swap"></div>

`void` **set_use_file_access_save_and_swap** ( enabled: [`bool`](class_bool.md) )<div id="class_os_method_set_use_file_access_save_and_swap"></div>

If `enabled` is `true`, when opening a file for writing, a temporary file is used in its place. When closed, it is automatically applied to the target file.

This can useful when files may be opened by other applications, such as antiviruses, text editors, or even the Godot editor itself.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_shell_open"></div>

[Error](#enum_@globalscope_error) **shell_open** ( uri: [`String`](class_string.md) )<div id="class_os_method_shell_open"></div>

Requests the OS to open a resource identified by `uri` with the most appropriate program. For example:

- `OS.shell_open("C:\\Users\name\Downloads")` on Windows opens the file explorer at the user's Downloads folder.

- `OS.shell_open("https://godotengine.org")` opens the default web browser on the official Godot website.

- `OS.shell_open("mailto:example@example.com")` opens the default email client with the "To" field set to `example@example.com`. See [*RFC 2368 - The [code]mailto[/code] URL scheme*](https://datatracker.ietf.org/doc/html/rfc2368) for a list of fields that can be added.

Use [`ProjectSettings.globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path) to convert a `res://` or `user://` project path into a system path for use with this method.

 **Note:** Use [`String.uri_encode`](class_string.md#class_string_method_uri_encode) to encode characters within URLs in a URL-safe, portable way. This is especially required for line breaks. Otherwise, [`shell_open`](class_os.md#class_os_method_shell_open) may not work correctly in a project exported to the Web platform.

 **Note:** This method is implemented on Android, iOS, Web, Linux, macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_shell_show_in_file_manager"></div>

[Error](#enum_@globalscope_error) **shell_show_in_file_manager** ( file_or_dir_path: [`String`](class_string.md), open_folder: [`bool`](class_bool.md) = true )<div id="class_os_method_shell_show_in_file_manager"></div>

Requests the OS to open the file manager, navigate to the given `file_or_dir_path` and select the target file or folder.

If `open_folder` is `true` and `file_or_dir_path` is a valid directory path, the OS will open the file manager and navigate to the target folder without selecting anything.

Use [`ProjectSettings.globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path) to convert a `res://` or `user://` project path into a system path to use with this method.

 **Note:** This method is currently only implemented on Windows and macOS. On other platforms, it will fallback to [`shell_open`](class_os.md#class_os_method_shell_open) with a directory path of `file_or_dir_path` prefixed with `file://`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_os_method_unset_environment"></div>

`void` **unset_environment** ( variable: [`String`](class_string.md) ) const[^const]<div id="class_os_method_unset_environment"></div>

Removes the given environment variable from the current environment, if it exists. The `variable` name cannot be empty or include the `=` character. The environment variable will be removed for the Godot process and any process executed with [`execute`](class_os.md#class_os_method_execute) after running [`unset_environment`](class_os.md#class_os_method_unset_environment). The removal of the environment variable will *not* persist to processes run after the Godot process was terminated.

 **Note:** Environment variable names are case-sensitive on all platforms except Windows.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
