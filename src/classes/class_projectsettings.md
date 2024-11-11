<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/ProjectSettings.xml。 -->

<div id="_class_projectsettings"></div>

# ProjectSettings

**继承：** [`Object`](class_object.md)

Stores globally-accessible variables.

## 描述

Stores variables that can be accessed from everywhere. Use [`get_setting`](class_projectsettings.md#class_projectsettings_method_get_setting), [`set_setting`](class_projectsettings.md#class_projectsettings_method_set_setting) or [`has_setting`](class_projectsettings.md#class_projectsettings_method_has_setting) to access them. Variables stored in `project.godot` are also loaded into **ProjectSettings**, making this object very useful for reading custom game configuration options.

When naming a Project Settings property, use the full path to the setting including the category. For example, `"application/config/name"` for the project name. Category and property names can be viewed in the Project Settings dialog.

 **Feature tags:** Project settings can be overridden for specific platforms and configurations (debug, release, ...) using [*feature tags*](../tutorials/export/feature_tags).

 **Overriding:** Any project setting can be overridden by creating a file named `override.cfg` in the project's root directory. This can also be used in exported projects by placing this file in the same directory as the project binary. Overriding will still take the base project settings' [*feature tags*](../tutorials/export/feature_tags) in account. Therefore, make sure to *also* override the setting with the desired feature tags if you want them to override base project settings on all platforms and configurations.

## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)                           | [`animation/warnings/check_angle_interpolation_type_conflicting`](class_projectsettings.md#class_projectsettings_property_animation/warnings/check_angle_interpolation_type_conflicting)                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`animation/warnings/check_invalid_track_paths`](class_projectsettings.md#class_projectsettings_property_animation/warnings/check_invalid_track_paths)                                                                           | ``true``                                                                                         |
| [`Color`](class_color.md)                         | [`application/boot_splash/bg_color`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/bg_color)                                                                                                   | ``Color(0.14, 0.14, 0.14, 1)``                                                                   |
| [`bool`](class_bool.md)                           | [`application/boot_splash/fullsize`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/fullsize)                                                                                                   | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`application/boot_splash/image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/image)                                                                                                         | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`application/boot_splash/minimum_display_time`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/minimum_display_time)                                                                           | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`application/boot_splash/show_image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/show_image)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`application/boot_splash/use_filter`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/use_filter)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`application/config/auto_accept_quit`](class_projectsettings.md#class_projectsettings_property_application/config/auto_accept_quit)                                                                                             | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`application/config/custom_user_dir_name`](class_projectsettings.md#class_projectsettings_property_application/config/custom_user_dir_name)                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/description`](class_projectsettings.md#class_projectsettings_property_application/config/description)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/icon`](class_projectsettings.md#class_projectsettings_property_application/config/icon)                                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/macos_native_icon`](class_projectsettings.md#class_projectsettings_property_application/config/macos_native_icon)                                                                                           | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/name`](class_projectsettings.md#class_projectsettings_property_application/config/name)                                                                                                                     | ``""``                                                                                           |
| [`Dictionary`](class_dictionary.md)               | [`application/config/name_localized`](class_projectsettings.md#class_projectsettings_property_application/config/name_localized)                                                                                                 | ``{}``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/project_settings_override`](class_projectsettings.md#class_projectsettings_property_application/config/project_settings_override)                                                                           | ``""``                                                                                           |
| [`bool`](class_bool.md)                           | [`application/config/quit_on_go_back`](class_projectsettings.md#class_projectsettings_property_application/config/quit_on_go_back)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`application/config/use_custom_user_dir`](class_projectsettings.md#class_projectsettings_property_application/config/use_custom_user_dir)                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`application/config/use_hidden_project_data_directory`](class_projectsettings.md#class_projectsettings_property_application/config/use_hidden_project_data_directory)                                                           | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`application/config/version`](class_projectsettings.md#class_projectsettings_property_application/config/version)                                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`application/config/windows_native_icon`](class_projectsettings.md#class_projectsettings_property_application/config/windows_native_icon)                                                                                       | ``""``                                                                                           |
| [`bool`](class_bool.md)                           | [`application/run/delta_smoothing`](class_projectsettings.md#class_projectsettings_property_application/run/delta_smoothing)                                                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`application/run/disable_stderr`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stderr)                                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`application/run/disable_stdout`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stdout)                                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`application/run/enable_alt_space_menu`](class_projectsettings.md#class_projectsettings_property_application/run/enable_alt_space_menu)                                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`application/run/flush_stdout_on_print`](class_projectsettings.md#class_projectsettings_property_application/run/flush_stdout_on_print)                                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`application/run/flush_stdout_on_print.debug`](class_projectsettings.md#class_projectsettings_property_application/run/flush_stdout_on_print.debug)                                                                             | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`application/run/frame_delay_msec`](class_projectsettings.md#class_projectsettings_property_application/run/frame_delay_msec)                                                                                                   | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`application/run/low_processor_mode`](class_projectsettings.md#class_projectsettings_property_application/run/low_processor_mode)                                                                                               | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`application/run/low_processor_mode_sleep_usec`](class_projectsettings.md#class_projectsettings_property_application/run/low_processor_mode_sleep_usec)                                                                         | ``6900``                                                                                         |
| [`String`](class_string.md)                       | [`application/run/main_loop_type`](class_projectsettings.md#class_projectsettings_property_application/run/main_loop_type)                                                                                                       | ``"SceneTree"``                                                                                  |
| [`String`](class_string.md)                       | [`application/run/main_scene`](class_projectsettings.md#class_projectsettings_property_application/run/main_scene)                                                                                                               | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`application/run/max_fps`](class_projectsettings.md#class_projectsettings_property_application/run/max_fps)                                                                                                                     | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`application/run/print_header`](class_projectsettings.md#class_projectsettings_property_application/run/print_header)                                                                                                           | ``true``                                                                                         |
| [`float`](class_float.md)                         | [`audio/buses/channel_disable_threshold_db`](class_projectsettings.md#class_projectsettings_property_audio/buses/channel_disable_threshold_db)                                                                                   | ``-60.0``                                                                                        |
| [`float`](class_float.md)                         | [`audio/buses/channel_disable_time`](class_projectsettings.md#class_projectsettings_property_audio/buses/channel_disable_time)                                                                                                   | ``2.0``                                                                                          |
| [`String`](class_string.md)                       | [`audio/buses/default_bus_layout`](class_projectsettings.md#class_projectsettings_property_audio/buses/default_bus_layout)                                                                                                       | ``"res://default_bus_layout.tres"``                                                              |
| [`String`](class_string.md)                       | [`audio/driver/driver`](class_projectsettings.md#class_projectsettings_property_audio/driver/driver)                                                                                                                             |                                                                                                  |
| [`bool`](class_bool.md)                           | [`audio/driver/enable_input`](class_projectsettings.md#class_projectsettings_property_audio/driver/enable_input)                                                                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`audio/driver/mix_rate`](class_projectsettings.md#class_projectsettings_property_audio/driver/mix_rate)                                                                                                                         | ``44100``                                                                                        |
| [`int`](class_int.md)                             | [`audio/driver/mix_rate.web`](class_projectsettings.md#class_projectsettings_property_audio/driver/mix_rate.web)                                                                                                                 | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`audio/driver/output_latency`](class_projectsettings.md#class_projectsettings_property_audio/driver/output_latency)                                                                                                             | ``15``                                                                                           |
| [`int`](class_int.md)                             | [`audio/driver/output_latency.web`](class_projectsettings.md#class_projectsettings_property_audio/driver/output_latency.web)                                                                                                     | ``50``                                                                                           |
| [`float`](class_float.md)                         | [`audio/general/2d_panning_strength`](class_projectsettings.md#class_projectsettings_property_audio/general/2d_panning_strength)                                                                                                 | ``0.5``                                                                                          |
| [`float`](class_float.md)                         | [`audio/general/3d_panning_strength`](class_projectsettings.md#class_projectsettings_property_audio/general/3d_panning_strength)                                                                                                 | ``0.5``                                                                                          |
| [`int`](class_int.md)                             | [`audio/general/default_playback_type`](class_projectsettings.md#class_projectsettings_property_audio/general/default_playback_type)                                                                                             | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`audio/general/default_playback_type.web`](class_projectsettings.md#class_projectsettings_property_audio/general/default_playback_type.web)                                                                                     | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`audio/general/ios/mix_with_others`](class_projectsettings.md#class_projectsettings_property_audio/general/ios/mix_with_others)                                                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`audio/general/ios/session_category`](class_projectsettings.md#class_projectsettings_property_audio/general/ios/session_category)                                                                                               | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`audio/general/text_to_speech`](class_projectsettings.md#class_projectsettings_property_audio/general/text_to_speech)                                                                                                           | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`audio/video/video_delay_compensation_ms`](class_projectsettings.md#class_projectsettings_property_audio/video/video_delay_compensation_ms)                                                                                     | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`collada/use_ambient`](class_projectsettings.md#class_projectsettings_property_collada/use_ambient)                                                                                                                             | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`compression/formats/gzip/compression_level`](class_projectsettings.md#class_projectsettings_property_compression/formats/gzip/compression_level)                                                                               | ``-1``                                                                                           |
| [`int`](class_int.md)                             | [`compression/formats/zlib/compression_level`](class_projectsettings.md#class_projectsettings_property_compression/formats/zlib/compression_level)                                                                               | ``-1``                                                                                           |
| [`int`](class_int.md)                             | [`compression/formats/zstd/compression_level`](class_projectsettings.md#class_projectsettings_property_compression/formats/zstd/compression_level)                                                                               | ``3``                                                                                            |
| [`bool`](class_bool.md)                           | [`compression/formats/zstd/long_distance_matching`](class_projectsettings.md#class_projectsettings_property_compression/formats/zstd/long_distance_matching)                                                                     | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`compression/formats/zstd/window_log_size`](class_projectsettings.md#class_projectsettings_property_compression/formats/zstd/window_log_size)                                                                                   | ``27``                                                                                           |
| [`Color`](class_color.md)                         | [`debug/canvas_items/debug_redraw_color`](class_projectsettings.md#class_projectsettings_property_debug/canvas_items/debug_redraw_color)                                                                                         | ``Color(1, 0.2, 0.2, 0.5)``                                                                      |
| [`float`](class_float.md)                         | [`debug/canvas_items/debug_redraw_time`](class_projectsettings.md#class_projectsettings_property_debug/canvas_items/debug_redraw_time)                                                                                           | ``1.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`debug/file_logging/enable_file_logging`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/enable_file_logging)                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`debug/file_logging/enable_file_logging.pc`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/enable_file_logging.pc)                                                                                 | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`debug/file_logging/log_path`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/log_path)                                                                                                             | ``"user://logs/godot.log"``                                                                      |
| [`int`](class_int.md)                             | [`debug/file_logging/max_log_files`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/max_log_files)                                                                                                   | ``5``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/assert_always_false`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/assert_always_false)                                                                             | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/assert_always_true`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/assert_always_true)                                                                               | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/confusable_capture_reassignment`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/confusable_capture_reassignment)                                                     | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/confusable_identifier`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/confusable_identifier)                                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/confusable_local_declaration`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/confusable_local_declaration)                                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/confusable_local_usage`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/confusable_local_usage)                                                                       | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/constant_used_as_function`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/constant_used_as_function)                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/deprecated_keyword`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/deprecated_keyword)                                                                               | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/empty_file`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/empty_file)                                                                                               | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`debug/gdscript/warnings/enable`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/enable)                                                                                                       | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/enum_variable_without_default`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/enum_variable_without_default)                                                         | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`debug/gdscript/warnings/exclude_addons`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/exclude_addons)                                                                                       | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/function_used_as_property`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/function_used_as_property)                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/get_node_default_without_onready`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/get_node_default_without_onready)                                                   | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/incompatible_ternary`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/incompatible_ternary)                                                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/inference_on_variant`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/inference_on_variant)                                                                           | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/inferred_declaration`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/inferred_declaration)                                                                           | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/int_as_enum_without_cast`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_cast)                                                                   | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/int_as_enum_without_match`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_match)                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/integer_division`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/integer_division)                                                                                   | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/missing_tool`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/missing_tool)                                                                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/narrowing_conversion`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/narrowing_conversion)                                                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/native_method_override`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/native_method_override)                                                                       | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/onready_with_export`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/onready_with_export)                                                                             | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/property_used_as_function`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/property_used_as_function)                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/redundant_await`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/redundant_await)                                                                                     | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/redundant_static_unload`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/redundant_static_unload)                                                                     | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`debug/gdscript/warnings/renamed_in_godot_4_hint`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/renamed_in_godot_4_hint)                                                                     | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/return_value_discarded`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/return_value_discarded)                                                                       | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/shadowed_global_identifier`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/shadowed_global_identifier)                                                               | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/shadowed_variable`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/shadowed_variable)                                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/shadowed_variable_base_class`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/shadowed_variable_base_class)                                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/standalone_expression`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/standalone_expression)                                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/standalone_ternary`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/standalone_ternary)                                                                               | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/static_called_on_instance`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/static_called_on_instance)                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unassigned_variable`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unassigned_variable)                                                                             | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unassigned_variable_op_assign`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unassigned_variable_op_assign)                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unreachable_code`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unreachable_code)                                                                                   | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unreachable_pattern`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unreachable_pattern)                                                                             | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unsafe_call_argument`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unsafe_call_argument)                                                                           | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unsafe_cast`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unsafe_cast)                                                                                             | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unsafe_method_access`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unsafe_method_access)                                                                           | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unsafe_property_access`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unsafe_property_access)                                                                       | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unsafe_void_return`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unsafe_void_return)                                                                               | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/untyped_declaration`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/untyped_declaration)                                                                             | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unused_local_constant`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unused_local_constant)                                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unused_parameter`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unused_parameter)                                                                                   | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unused_private_class_variable`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unused_private_class_variable)                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unused_signal`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unused_signal)                                                                                         | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`debug/gdscript/warnings/unused_variable`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/unused_variable)                                                                                     | ``1``                                                                                            |
| [`String`](class_string.md)                       | [`debug/settings/crash_handler/message`](class_projectsettings.md#class_projectsettings_property_debug/settings/crash_handler/message)                                                                                           | ``"Please include this when reporting the bug to the project developer."``                       |
| [`String`](class_string.md)                       | [`debug/settings/crash_handler/message.editor`](class_projectsettings.md#class_projectsettings_property_debug/settings/crash_handler/message.editor)                                                                             | ``"Please include this when reporting the bug on: https://github.com/godotengine/godot/issues"`` |
| [`int`](class_int.md)                             | [`debug/settings/gdscript/max_call_stack`](class_projectsettings.md#class_projectsettings_property_debug/settings/gdscript/max_call_stack)                                                                                       | ``1024``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/settings/physics_interpolation/enable_warnings`](class_projectsettings.md#class_projectsettings_property_debug/settings/physics_interpolation/enable_warnings)                                                           | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`debug/settings/profiler/max_functions`](class_projectsettings.md#class_projectsettings_property_debug/settings/profiler/max_functions)                                                                                         | ``16384``                                                                                        |
| [`int`](class_int.md)                             | [`debug/settings/profiler/max_timestamp_query_elements`](class_projectsettings.md#class_projectsettings_property_debug/settings/profiler/max_timestamp_query_elements)                                                           | ``256``                                                                                          |
| [`bool`](class_bool.md)                           | [`debug/settings/stdout/print_fps`](class_projectsettings.md#class_projectsettings_property_debug/settings/stdout/print_fps)                                                                                                     | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`debug/settings/stdout/print_gpu_profile`](class_projectsettings.md#class_projectsettings_property_debug/settings/stdout/print_gpu_profile)                                                                                     | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`debug/settings/stdout/verbose_stdout`](class_projectsettings.md#class_projectsettings_property_debug/settings/stdout/verbose_stdout)                                                                                           | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/device_limit_exceeded`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/device_limit_exceeded)                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/enable`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/enable)                                                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/float_comparison`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/float_comparison)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/formatting_error`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/formatting_error)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/magic_position_write`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/magic_position_write)                                                             | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/treat_warnings_as_errors`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/treat_warnings_as_errors)                                                     | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_constant`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_constant)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_function`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_function)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_local_variable`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_local_variable)                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_struct`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_struct)                                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_uniform`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_uniform)                                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shader_language/warnings/unused_varying`](class_projectsettings.md#class_projectsettings_property_debug/shader_language/warnings/unused_varying)                                                                         | ``true``                                                                                         |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/agents_radius_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/agents_radius_color)                                                                               | ``Color(1, 1, 0, 0.25)``                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/avoidance/enable_agents_radius`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/enable_agents_radius)                                                                             | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/avoidance/enable_obstacles_radius`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_radius)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/avoidance/enable_obstacles_static`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_static)                                                                       | ``true``                                                                                         |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/obstacles_radius_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/obstacles_radius_color)                                                                         | ``Color(1, 0.5, 0, 0.25)``                                                                       |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/obstacles_static_edge_pushin_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushin_color)                                                 | ``Color(1, 0, 0, 1)``                                                                            |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/obstacles_static_edge_pushout_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushout_color)                                               | ``Color(1, 1, 0, 1)``                                                                            |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/obstacles_static_face_pushin_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushin_color)                                                 | ``Color(1, 0, 0, 0)``                                                                            |
| [`Color`](class_color.md)                         | [`debug/shapes/avoidance/obstacles_static_face_pushout_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushout_color)                                               | ``Color(1, 1, 0, 0.5)``                                                                          |
| [`Color`](class_color.md)                         | [`debug/shapes/collision/contact_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/collision/contact_color)                                                                                           | ``Color(1, 0.2, 0.1, 0.8)``                                                                      |
| [`bool`](class_bool.md)                           | [`debug/shapes/collision/draw_2d_outlines`](class_projectsettings.md#class_projectsettings_property_debug/shapes/collision/draw_2d_outlines)                                                                                     | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`debug/shapes/collision/max_contacts_displayed`](class_projectsettings.md#class_projectsettings_property_debug/shapes/collision/max_contacts_displayed)                                                                         | ``10000``                                                                                        |
| [`Color`](class_color.md)                         | [`debug/shapes/collision/shape_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/collision/shape_color)                                                                                               | ``Color(0, 0.6, 0.7, 0.42)``                                                                     |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/agent_path_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/agent_path_color)                                                                                   | ``Color(1, 0, 0, 1)``                                                                            |
| [`float`](class_float.md)                         | [`debug/shapes/navigation/agent_path_point_size`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/agent_path_point_size)                                                                         | ``4.0``                                                                                          |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/edge_connection_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/edge_connection_color)                                                                         | ``Color(1, 0, 1, 1)``                                                                            |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_agent_paths`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_agent_paths)                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_agent_paths_xray`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_agent_paths_xray)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_edge_connections`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_edge_connections)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_edge_connections_xray`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_edge_connections_xray)                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_edge_lines`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_edge_lines)                                                                                 | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_edge_lines_xray`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_edge_lines_xray)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_geometry_face_random_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_geometry_face_random_color)                                                 | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_link_connections`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_link_connections)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`debug/shapes/navigation/enable_link_connections_xray`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/enable_link_connections_xray)                                                           | ``true``                                                                                         |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/geometry_edge_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/geometry_edge_color)                                                                             | ``Color(0.5, 1, 1, 1)``                                                                          |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/geometry_edge_disabled_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/geometry_edge_disabled_color)                                                           | ``Color(0.5, 0.5, 0.5, 1)``                                                                      |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/geometry_face_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/geometry_face_color)                                                                             | ``Color(0.5, 1, 1, 0.4)``                                                                        |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/geometry_face_disabled_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/geometry_face_disabled_color)                                                           | ``Color(0.5, 0.5, 0.5, 0.4)``                                                                    |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/link_connection_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/link_connection_color)                                                                         | ``Color(1, 0.5, 1, 1)``                                                                          |
| [`Color`](class_color.md)                         | [`debug/shapes/navigation/link_connection_disabled_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/navigation/link_connection_disabled_color)                                                       | ``Color(0.5, 0.5, 0.5, 1)``                                                                      |
| [`Color`](class_color.md)                         | [`debug/shapes/paths/geometry_color`](class_projectsettings.md#class_projectsettings_property_debug/shapes/paths/geometry_color)                                                                                                 | ``Color(0.1, 1, 0.7, 0.4)``                                                                      |
| [`float`](class_float.md)                         | [`debug/shapes/paths/geometry_width`](class_projectsettings.md#class_projectsettings_property_debug/shapes/paths/geometry_width)                                                                                                 | ``2.0``                                                                                          |
| [`String`](class_string.md)                       | [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver)                                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`display/display_server/driver.android`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver.android)                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`display/display_server/driver.ios`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver.ios)                                                                                                 |                                                                                                  |
| [`String`](class_string.md)                       | [`display/display_server/driver.linuxbsd`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver.linuxbsd)                                                                                       |                                                                                                  |
| [`String`](class_string.md)                       | [`display/display_server/driver.macos`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver.macos)                                                                                             |                                                                                                  |
| [`String`](class_string.md)                       | [`display/display_server/driver.windows`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver.windows)                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`display/mouse_cursor/custom_image`](class_projectsettings.md#class_projectsettings_property_display/mouse_cursor/custom_image)                                                                                                 | ``""``                                                                                           |
| [`Vector2`](class_vector2.md)                     | [`display/mouse_cursor/custom_image_hotspot`](class_projectsettings.md#class_projectsettings_property_display/mouse_cursor/custom_image_hotspot)                                                                                 | ``Vector2(0, 0)``                                                                                |
| [`Vector2`](class_vector2.md)                     | [`display/mouse_cursor/tooltip_position_offset`](class_projectsettings.md#class_projectsettings_property_display/mouse_cursor/tooltip_position_offset)                                                                           | ``Vector2(10, 10)``                                                                              |
| [`bool`](class_bool.md)                           | [`display/window/dpi/allow_hidpi`](class_projectsettings.md#class_projectsettings_property_display/window/dpi/allow_hidpi)                                                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/energy_saving/keep_screen_on`](class_projectsettings.md#class_projectsettings_property_display/window/energy_saving/keep_screen_on)                                                                             | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/frame_pacing/android/enable_frame_pacing`](class_projectsettings.md#class_projectsettings_property_display/window/frame_pacing/android/enable_frame_pacing)                                                     | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`display/window/frame_pacing/android/swappy_mode`](class_projectsettings.md#class_projectsettings_property_display/window/frame_pacing/android/swappy_mode)                                                                     | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`display/window/handheld/orientation`](class_projectsettings.md#class_projectsettings_property_display/window/handheld/orientation)                                                                                             | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`display/window/ios/allow_high_refresh_rate`](class_projectsettings.md#class_projectsettings_property_display/window/ios/allow_high_refresh_rate)                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/ios/hide_home_indicator`](class_projectsettings.md#class_projectsettings_property_display/window/ios/hide_home_indicator)                                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/ios/hide_status_bar`](class_projectsettings.md#class_projectsettings_property_display/window/ios/hide_status_bar)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/ios/suppress_ui_gesture`](class_projectsettings.md#class_projectsettings_property_display/window/ios/suppress_ui_gesture)                                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/per_pixel_transparency/allowed`](class_projectsettings.md#class_projectsettings_property_display/window/per_pixel_transparency/allowed)                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`display/window/size/always_on_top`](class_projectsettings.md#class_projectsettings_property_display/window/size/always_on_top)                                                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`display/window/size/borderless`](class_projectsettings.md#class_projectsettings_property_display/window/size/borderless)                                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`display/window/size/extend_to_title`](class_projectsettings.md#class_projectsettings_property_display/window/size/extend_to_title)                                                                                             | ``false``                                                                                        |
| [`Vector2i`](class_vector2i.md)                   | [`display/window/size/initial_position`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_position)                                                                                           | ``Vector2i(0, 0)``                                                                               |
| [`int`](class_int.md)                             | [`display/window/size/initial_position_type`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_position_type)                                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`display/window/size/initial_screen`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_screen)                                                                                               | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`display/window/size/mode`](class_projectsettings.md#class_projectsettings_property_display/window/size/mode)                                                                                                                   | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`display/window/size/no_focus`](class_projectsettings.md#class_projectsettings_property_display/window/size/no_focus)                                                                                                           | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`display/window/size/resizable`](class_projectsettings.md#class_projectsettings_property_display/window/size/resizable)                                                                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`display/window/size/sharp_corners`](class_projectsettings.md#class_projectsettings_property_display/window/size/sharp_corners)                                                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`display/window/size/transparent`](class_projectsettings.md#class_projectsettings_property_display/window/size/transparent)                                                                                                     | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height)                                                                                             | ``648``                                                                                          |
| [`int`](class_int.md)                             | [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width)                                                                                               | ``1152``                                                                                         |
| [`int`](class_int.md)                             | [`display/window/size/window_height_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_height_override)                                                                               | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`display/window/size/window_width_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_width_override)                                                                                 | ``0``                                                                                            |
| [`String`](class_string.md)                       | [`display/window/stretch/aspect`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/aspect)                                                                                                         | ``"keep"``                                                                                       |
| [`String`](class_string.md)                       | [`display/window/stretch/mode`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/mode)                                                                                                             | ``"disabled"``                                                                                   |
| [`float`](class_float.md)                         | [`display/window/stretch/scale`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/scale)                                                                                                           | ``1.0``                                                                                          |
| [`String`](class_string.md)                       | [`display/window/stretch/scale_mode`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/scale_mode)                                                                                                 | ``"fractional"``                                                                                 |
| [`bool`](class_bool.md)                           | [`display/window/subwindows/embed_subwindows`](class_projectsettings.md#class_projectsettings_property_display/window/subwindows/embed_subwindows)                                                                               | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode)                                                                                                     | ``1``                                                                                            |
| [`String`](class_string.md)                       | [`dotnet/project/assembly_name`](class_projectsettings.md#class_projectsettings_property_dotnet/project/assembly_name)                                                                                                           | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`dotnet/project/assembly_reload_attempts`](class_projectsettings.md#class_projectsettings_property_dotnet/project/assembly_reload_attempts)                                                                                     | ``3``                                                                                            |
| [`String`](class_string.md)                       | [`dotnet/project/solution_directory`](class_projectsettings.md#class_projectsettings_property_dotnet/project/solution_directory)                                                                                                 | ``""``                                                                                           |
| [`bool`](class_bool.md)                           | [`editor/export/convert_text_resources_to_binary`](class_projectsettings.md#class_projectsettings_property_editor/export/convert_text_resources_to_binary)                                                                       | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`editor/import/atlas_max_width`](class_projectsettings.md#class_projectsettings_property_editor/import/atlas_max_width)                                                                                                         | ``2048``                                                                                         |
| [`bool`](class_bool.md)                           | [`editor/import/reimport_missing_imported_files`](class_projectsettings.md#class_projectsettings_property_editor/import/reimport_missing_imported_files)                                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`editor/import/use_multiple_threads`](class_projectsettings.md#class_projectsettings_property_editor/import/use_multiple_threads)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`editor/movie_writer/disable_vsync`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/disable_vsync)                                                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`editor/movie_writer/fps`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/fps)                                                                                                                     | ``60``                                                                                           |
| [`int`](class_int.md)                             | [`editor/movie_writer/mix_rate`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/mix_rate)                                                                                                           | ``48000``                                                                                        |
| [`float`](class_float.md)                         | [`editor/movie_writer/mjpeg_quality`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/mjpeg_quality)                                                                                                 | ``0.75``                                                                                         |
| [`String`](class_string.md)                       | [`editor/movie_writer/movie_file`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/movie_file)                                                                                                       | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`editor/movie_writer/speaker_mode`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/speaker_mode)                                                                                                   | ``0``                                                                                            |
| [`String`](class_string.md)                       | [`editor/naming/default_signal_callback_name`](class_projectsettings.md#class_projectsettings_property_editor/naming/default_signal_callback_name)                                                                               | ``"_on_{node_name}_{signal_name}"``                                                              |
| [`String`](class_string.md)                       | [`editor/naming/default_signal_callback_to_self_name`](class_projectsettings.md#class_projectsettings_property_editor/naming/default_signal_callback_to_self_name)                                                               | ``"_on_{signal_name}"``                                                                          |
| [`int`](class_int.md)                             | [`editor/naming/node_name_casing`](class_projectsettings.md#class_projectsettings_property_editor/naming/node_name_casing)                                                                                                       | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`editor/naming/node_name_num_separator`](class_projectsettings.md#class_projectsettings_property_editor/naming/node_name_num_separator)                                                                                         | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`editor/naming/scene_name_casing`](class_projectsettings.md#class_projectsettings_property_editor/naming/scene_name_casing)                                                                                                     | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`editor/naming/script_name_casing`](class_projectsettings.md#class_projectsettings_property_editor/naming/script_name_casing)                                                                                                   | ``0``                                                                                            |
| [`String`](class_string.md)                       | [`editor/run/main_run_args`](class_projectsettings.md#class_projectsettings_property_editor/run/main_run_args)                                                                                                                   | ``""``                                                                                           |
| [`PackedStringArray`](class_packedstringarray.md) | [`editor/script/search_in_file_extensions`](class_projectsettings.md#class_projectsettings_property_editor/script/search_in_file_extensions)                                                                                     |                                                                                                  |
| [`String`](class_string.md)                       | [`editor/script/templates_search_path`](class_projectsettings.md#class_projectsettings_property_editor/script/templates_search_path)                                                                                             | ``"res://script_templates"``                                                                     |
| [`bool`](class_bool.md)                           | [`editor/version_control/autoload_on_startup`](class_projectsettings.md#class_projectsettings_property_editor/version_control/autoload_on_startup)                                                                               | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`editor/version_control/plugin_name`](class_projectsettings.md#class_projectsettings_property_editor/version_control/plugin_name)                                                                                               | ``""``                                                                                           |
| [`bool`](class_bool.md)                           | [`filesystem/import/blender/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled)                                                                                                 | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`filesystem/import/blender/enabled.android`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled.android)                                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`filesystem/import/blender/enabled.web`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled.web)                                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`filesystem/import/fbx2gltf/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/fbx2gltf/enabled)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`filesystem/import/fbx2gltf/enabled.android`](class_projectsettings.md#class_projectsettings_property_filesystem/import/fbx2gltf/enabled.android)                                                                               | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`filesystem/import/fbx2gltf/enabled.web`](class_projectsettings.md#class_projectsettings_property_filesystem/import/fbx2gltf/enabled.web)                                                                                       | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`gui/common/default_scroll_deadzone`](class_projectsettings.md#class_projectsettings_property_gui/common/default_scroll_deadzone)                                                                                               | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`gui/common/snap_controls_to_pixels`](class_projectsettings.md#class_projectsettings_property_gui/common/snap_controls_to_pixels)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`gui/common/swap_cancel_ok`](class_projectsettings.md#class_projectsettings_property_gui/common/swap_cancel_ok)                                                                                                                 |                                                                                                  |
| [`int`](class_int.md)                             | [`gui/common/text_edit_undo_stack_max_size`](class_projectsettings.md#class_projectsettings_property_gui/common/text_edit_undo_stack_max_size)                                                                                   | ``1024``                                                                                         |
| [`bool`](class_bool.md)                           | [`gui/fonts/dynamic_fonts/use_oversampling`](class_projectsettings.md#class_projectsettings_property_gui/fonts/dynamic_fonts/use_oversampling)                                                                                   | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`gui/theme/custom`](class_projectsettings.md#class_projectsettings_property_gui/theme/custom)                                                                                                                                   | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`gui/theme/custom_font`](class_projectsettings.md#class_projectsettings_property_gui/theme/custom_font)                                                                                                                         | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`gui/theme/default_font_antialiasing`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_antialiasing)                                                                                             | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`gui/theme/default_font_generate_mipmaps`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_generate_mipmaps)                                                                                     | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`gui/theme/default_font_hinting`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_hinting)                                                                                                       | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`gui/theme/default_font_multichannel_signed_distance_field`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field)                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`gui/theme/default_font_subpixel_positioning`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_subpixel_positioning)                                                                             | ``1``                                                                                            |
| [`float`](class_float.md)                         | [`gui/theme/default_theme_scale`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_theme_scale)                                                                                                         | ``1.0``                                                                                          |
| [`int`](class_int.md)                             | [`gui/theme/lcd_subpixel_layout`](class_projectsettings.md#class_projectsettings_property_gui/theme/lcd_subpixel_layout)                                                                                                         | ``1``                                                                                            |
| [`float`](class_float.md)                         | [`gui/timers/button_shortcut_feedback_highlight_time`](class_projectsettings.md#class_projectsettings_property_gui/timers/button_shortcut_feedback_highlight_time)                                                               | ``0.2``                                                                                          |
| [`int`](class_int.md)                             | [`gui/timers/incremental_search_max_interval_msec`](class_projectsettings.md#class_projectsettings_property_gui/timers/incremental_search_max_interval_msec)                                                                     | ``2000``                                                                                         |
| [`float`](class_float.md)                         | [`gui/timers/text_edit_idle_detect_sec`](class_projectsettings.md#class_projectsettings_property_gui/timers/text_edit_idle_detect_sec)                                                                                           | ``3``                                                                                            |
| [`float`](class_float.md)                         | [`gui/timers/tooltip_delay_sec`](class_projectsettings.md#class_projectsettings_property_gui/timers/tooltip_delay_sec)                                                                                                           | ``0.5``                                                                                          |
| [`float`](class_float.md)                         | [`gui/timers/tooltip_delay_sec.editor_hint`](class_projectsettings.md#class_projectsettings_property_gui/timers/tooltip_delay_sec.editor_hint)                                                                                   | ``0.5``                                                                                          |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_accept`](class_projectsettings.md#class_projectsettings_property_input/ui_accept)                                                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_cancel`](class_projectsettings.md#class_projectsettings_property_input/ui_cancel)                                                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_copy`](class_projectsettings.md#class_projectsettings_property_input/ui_copy)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_cut`](class_projectsettings.md#class_projectsettings_property_input/ui_cut)                                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_down`](class_projectsettings.md#class_projectsettings_property_input/ui_down)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_end`](class_projectsettings.md#class_projectsettings_property_input/ui_end)                                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_filedialog_refresh`](class_projectsettings.md#class_projectsettings_property_input/ui_filedialog_refresh)                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_filedialog_show_hidden`](class_projectsettings.md#class_projectsettings_property_input/ui_filedialog_show_hidden)                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_filedialog_up_one_level`](class_projectsettings.md#class_projectsettings_property_input/ui_filedialog_up_one_level)                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_focus_next`](class_projectsettings.md#class_projectsettings_property_input/ui_focus_next)                                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_focus_prev`](class_projectsettings.md#class_projectsettings_property_input/ui_focus_prev)                                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_graph_delete`](class_projectsettings.md#class_projectsettings_property_input/ui_graph_delete)                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_graph_duplicate`](class_projectsettings.md#class_projectsettings_property_input/ui_graph_duplicate)                                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_home`](class_projectsettings.md#class_projectsettings_property_input/ui_home)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_left`](class_projectsettings.md#class_projectsettings_property_input/ui_left)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_menu`](class_projectsettings.md#class_projectsettings_property_input/ui_menu)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_page_down`](class_projectsettings.md#class_projectsettings_property_input/ui_page_down)                                                                                                                               |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_page_up`](class_projectsettings.md#class_projectsettings_property_input/ui_page_up)                                                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_paste`](class_projectsettings.md#class_projectsettings_property_input/ui_paste)                                                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_redo`](class_projectsettings.md#class_projectsettings_property_input/ui_redo)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_right`](class_projectsettings.md#class_projectsettings_property_input/ui_right)                                                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_select`](class_projectsettings.md#class_projectsettings_property_input/ui_select)                                                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_swap_input_direction`](class_projectsettings.md#class_projectsettings_property_input/ui_swap_input_direction)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_add_selection_for_next_occurrence`](class_projectsettings.md#class_projectsettings_property_input/ui_text_add_selection_for_next_occurrence)                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_backspace`](class_projectsettings.md#class_projectsettings_property_input/ui_text_backspace)                                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_backspace_all_to_left`](class_projectsettings.md#class_projectsettings_property_input/ui_text_backspace_all_to_left)                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_backspace_all_to_left.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_backspace_all_to_left.macos)                                                                                 |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_backspace_word`](class_projectsettings.md#class_projectsettings_property_input/ui_text_backspace_word)                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_backspace_word.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_backspace_word.macos)                                                                                               |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_add_above`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_add_above)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_add_above.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_add_above.macos)                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_add_below`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_add_below)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_add_below.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_add_below.macos)                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_document_end`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_document_end)                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_document_end.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_document_end.macos)                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_document_start`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_document_start)                                                                                               |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_document_start.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_document_start.macos)                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_down`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_down)                                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_left`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_left)                                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_line_end`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_line_end)                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_line_end.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_line_end.macos)                                                                                               |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_line_start`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_line_start)                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_line_start.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_line_start.macos)                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_page_down`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_page_down)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_page_up`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_page_up)                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_right`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_right)                                                                                                                 |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_up`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_up)                                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_word_left`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_word_left)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_word_left.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_word_left.macos)                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_word_right`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_word_right)                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_caret_word_right.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_caret_word_right.macos)                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_clear_carets_and_selection`](class_projectsettings.md#class_projectsettings_property_input/ui_text_clear_carets_and_selection)                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_completion_accept`](class_projectsettings.md#class_projectsettings_property_input/ui_text_completion_accept)                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_completion_query`](class_projectsettings.md#class_projectsettings_property_input/ui_text_completion_query)                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_completion_replace`](class_projectsettings.md#class_projectsettings_property_input/ui_text_completion_replace)                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_dedent`](class_projectsettings.md#class_projectsettings_property_input/ui_text_dedent)                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_delete`](class_projectsettings.md#class_projectsettings_property_input/ui_text_delete)                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_delete_all_to_right`](class_projectsettings.md#class_projectsettings_property_input/ui_text_delete_all_to_right)                                                                                                 |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_delete_all_to_right.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_delete_all_to_right.macos)                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_delete_word`](class_projectsettings.md#class_projectsettings_property_input/ui_text_delete_word)                                                                                                                 |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_delete_word.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_delete_word.macos)                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_indent`](class_projectsettings.md#class_projectsettings_property_input/ui_text_indent)                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_newline`](class_projectsettings.md#class_projectsettings_property_input/ui_text_newline)                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_newline_above`](class_projectsettings.md#class_projectsettings_property_input/ui_text_newline_above)                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_newline_blank`](class_projectsettings.md#class_projectsettings_property_input/ui_text_newline_blank)                                                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_scroll_down`](class_projectsettings.md#class_projectsettings_property_input/ui_text_scroll_down)                                                                                                                 |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_scroll_down.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_scroll_down.macos)                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_scroll_up`](class_projectsettings.md#class_projectsettings_property_input/ui_text_scroll_up)                                                                                                                     |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_scroll_up.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_scroll_up.macos)                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_select_all`](class_projectsettings.md#class_projectsettings_property_input/ui_text_select_all)                                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_select_word_under_caret`](class_projectsettings.md#class_projectsettings_property_input/ui_text_select_word_under_caret)                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_select_word_under_caret.macos`](class_projectsettings.md#class_projectsettings_property_input/ui_text_select_word_under_caret.macos)                                                                             |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_skip_selection_for_next_occurrence`](class_projectsettings.md#class_projectsettings_property_input/ui_text_skip_selection_for_next_occurrence)                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_submit`](class_projectsettings.md#class_projectsettings_property_input/ui_text_submit)                                                                                                                           |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_text_toggle_insert_mode`](class_projectsettings.md#class_projectsettings_property_input/ui_text_toggle_insert_mode)                                                                                                   |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_undo`](class_projectsettings.md#class_projectsettings_property_input/ui_undo)                                                                                                                                         |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_unicode_start`](class_projectsettings.md#class_projectsettings_property_input/ui_unicode_start)                                                                                                                       |                                                                                                  |
| [`Dictionary`](class_dictionary.md)               | [`input/ui_up`](class_projectsettings.md#class_projectsettings_property_input/ui_up)                                                                                                                                             |                                                                                                  |
| [`bool`](class_bool.md)                           | [`input_devices/buffering/agile_event_flushing`](class_projectsettings.md#class_projectsettings_property_input_devices/buffering/agile_event_flushing)                                                                           | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/compatibility/legacy_just_pressed_behavior`](class_projectsettings.md#class_projectsettings_property_input_devices/compatibility/legacy_just_pressed_behavior)                                                   | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`input_devices/pen_tablet/driver`](class_projectsettings.md#class_projectsettings_property_input_devices/pen_tablet/driver)                                                                                                     |                                                                                                  |
| [`String`](class_string.md)                       | [`input_devices/pen_tablet/driver.windows`](class_projectsettings.md#class_projectsettings_property_input_devices/pen_tablet/driver.windows)                                                                                     |                                                                                                  |
| [`bool`](class_bool.md)                           | [`input_devices/pointing/android/enable_long_press_as_right_click`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/android/enable_long_press_as_right_click)                                     | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/pointing/android/enable_pan_and_scale_gestures`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/android/enable_pan_and_scale_gestures)                                           | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`input_devices/pointing/android/rotary_input_scroll_axis`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/android/rotary_input_scroll_axis)                                                     | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`input_devices/pointing/emulate_mouse_from_touch`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_mouse_from_touch)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`input_devices/pointing/emulate_touch_from_mouse`](class_projectsettings.md#class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse)                                                                     | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/sensors/enable_accelerometer`](class_projectsettings.md#class_projectsettings_property_input_devices/sensors/enable_accelerometer)                                                                               | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/sensors/enable_gravity`](class_projectsettings.md#class_projectsettings_property_input_devices/sensors/enable_gravity)                                                                                           | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/sensors/enable_gyroscope`](class_projectsettings.md#class_projectsettings_property_input_devices/sensors/enable_gyroscope)                                                                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`input_devices/sensors/enable_magnetometer`](class_projectsettings.md#class_projectsettings_property_input_devices/sensors/enable_magnetometer)                                                                                 | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`internationalization/locale/fallback`](class_projectsettings.md#class_projectsettings_property_internationalization/locale/fallback)                                                                                           | ``"en"``                                                                                         |
| [`bool`](class_bool.md)                           | [`internationalization/locale/include_text_server_data`](class_projectsettings.md#class_projectsettings_property_internationalization/locale/include_text_server_data)                                                           | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`internationalization/locale/test`](class_projectsettings.md#class_projectsettings_property_internationalization/locale/test)                                                                                                   | ``""``                                                                                           |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/double_vowels`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/double_vowels)                                                         | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`internationalization/pseudolocalization/expansion_ratio`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/expansion_ratio)                                                     | ``0.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/fake_bidi`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/fake_bidi)                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/override`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/override)                                                                   | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`internationalization/pseudolocalization/prefix`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/prefix)                                                                       | ``"["``                                                                                          |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/replace_with_accents`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/replace_with_accents)                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/skip_placeholders`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/skip_placeholders)                                                 | ``true``                                                                                         |
| [`String`](class_string.md)                       | [`internationalization/pseudolocalization/suffix`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/suffix)                                                                       | ``"]"``                                                                                          |
| [`bool`](class_bool.md)                           | [`internationalization/pseudolocalization/use_pseudolocalization`](class_projectsettings.md#class_projectsettings_property_internationalization/pseudolocalization/use_pseudolocalization)                                       | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`internationalization/rendering/force_right_to_left_layout_direction`](class_projectsettings.md#class_projectsettings_property_internationalization/rendering/force_right_to_left_layout_direction)                             | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`internationalization/rendering/root_node_auto_translate`](class_projectsettings.md#class_projectsettings_property_internationalization/rendering/root_node_auto_translate)                                                     | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`internationalization/rendering/root_node_layout_direction`](class_projectsettings.md#class_projectsettings_property_internationalization/rendering/root_node_layout_direction)                                                 | ``0``                                                                                            |
| [`String`](class_string.md)                       | [`internationalization/rendering/text_driver`](class_projectsettings.md#class_projectsettings_property_internationalization/rendering/text_driver)                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_1)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_2)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_3)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_4)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_5)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_6)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_7)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_8)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_9)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_10)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_11)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_12)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_13)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_14)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_15)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_16)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_17)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_18)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_19)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_20)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_21`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_21)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_22`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_22)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_23`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_23)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_24`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_24)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_25`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_25)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_26`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_26)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_27`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_27)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_28`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_28)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_29`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_29)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_30`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_30)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_31`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_31)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_navigation/layer_32`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_navigation/layer_32)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_1)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_2)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_3)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_4)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_5)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_6)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_7)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_8)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_9)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_10)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_11)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_12)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_13)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_14)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_15)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_16)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_17)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_18)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_19)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_20)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_21`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_21)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_22`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_22)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_23`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_23)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_24`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_24)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_25`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_25)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_26`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_26)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_27`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_27)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_28`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_28)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_29`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_29)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_30`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_30)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_31`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_31)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_physics/layer_32`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_physics/layer_32)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_1)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_2)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_3)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_4)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_5)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_6)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_7)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_8)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_9)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_10)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_11)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_12)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_13)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_14)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_15)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_16)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_17)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_18)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_19)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/2d_render/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/2d_render/layer_20)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_1)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_2)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_3)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_4)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_5)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_6)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_7)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_8)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_9)                                                                                                 | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_10)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_11)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_12)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_13)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_14)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_15)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_16)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_17)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_18)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_19)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_20)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_21`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_21)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_22`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_22)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_23`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_23)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_24`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_24)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_25`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_25)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_26`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_26)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_27`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_27)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_28`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_28)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_29`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_29)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_30`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_30)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_31`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_31)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_navigation/layer_32`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_navigation/layer_32)                                                                                               | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_1)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_2)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_3)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_4)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_5)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_6)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_7)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_8)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_9)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_10)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_11)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_12)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_13)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_14)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_15)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_16)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_17)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_18)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_19)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_20)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_21`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_21)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_22`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_22)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_23`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_23)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_24`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_24)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_25`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_25)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_26`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_26)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_27`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_27)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_28`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_28)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_29`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_29)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_30`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_30)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_31`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_31)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_physics/layer_32`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_physics/layer_32)                                                                                                     | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_1)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_2)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_3)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_4)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_5)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_6)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_7)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_8)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_9)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_10)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_11)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_12)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_13)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_14)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_15)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_16)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_17)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_18)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_19)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/3d_render/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/3d_render/layer_20)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_1`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_1)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_2`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_2)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_3`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_3)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_4`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_4)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_5`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_5)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_6`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_6)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_7`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_7)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_8`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_8)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_9`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_9)                                                                                                         | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_10`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_10)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_11`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_11)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_12`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_12)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_13`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_13)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_14`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_14)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_15`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_15)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_16`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_16)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_17`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_17)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_18`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_18)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_19`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_19)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_20`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_20)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_21`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_21)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_22`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_22)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_23`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_23)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_24`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_24)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_25`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_25)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_26`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_26)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_27`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_27)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_28`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_28)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_29`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_29)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_30`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_30)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_31`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_31)                                                                                                       | ``""``                                                                                           |
| [`String`](class_string.md)                       | [`layer_names/avoidance/layer_32`](class_projectsettings.md#class_projectsettings_property_layer_names/avoidance/layer_32)                                                                                                       | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`memory/limits/message_queue/max_size_mb`](class_projectsettings.md#class_projectsettings_property_memory/limits/message_queue/max_size_mb)                                                                                     | ``32``                                                                                           |
| [`float`](class_float.md)                         | [`navigation/2d/default_cell_size`](class_projectsettings.md#class_projectsettings_property_navigation/2d/default_cell_size)                                                                                                     | ``1.0``                                                                                          |
| [`float`](class_float.md)                         | [`navigation/2d/default_edge_connection_margin`](class_projectsettings.md#class_projectsettings_property_navigation/2d/default_edge_connection_margin)                                                                           | ``1.0``                                                                                          |
| [`float`](class_float.md)                         | [`navigation/2d/default_link_connection_radius`](class_projectsettings.md#class_projectsettings_property_navigation/2d/default_link_connection_radius)                                                                           | ``4.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`navigation/2d/use_edge_connections`](class_projectsettings.md#class_projectsettings_property_navigation/2d/use_edge_connections)                                                                                               | ``true``                                                                                         |
| [`float`](class_float.md)                         | [`navigation/3d/default_cell_height`](class_projectsettings.md#class_projectsettings_property_navigation/3d/default_cell_height)                                                                                                 | ``0.25``                                                                                         |
| [`float`](class_float.md)                         | [`navigation/3d/default_cell_size`](class_projectsettings.md#class_projectsettings_property_navigation/3d/default_cell_size)                                                                                                     | ``0.25``                                                                                         |
| [`float`](class_float.md)                         | [`navigation/3d/default_edge_connection_margin`](class_projectsettings.md#class_projectsettings_property_navigation/3d/default_edge_connection_margin)                                                                           | ``0.25``                                                                                         |
| [`float`](class_float.md)                         | [`navigation/3d/default_link_connection_radius`](class_projectsettings.md#class_projectsettings_property_navigation/3d/default_link_connection_radius)                                                                           | ``1.0``                                                                                          |
| [`Vector3`](class_vector3.md)                     | [`navigation/3d/default_up`](class_projectsettings.md#class_projectsettings_property_navigation/3d/default_up)                                                                                                                   | ``Vector3(0, 1, 0)``                                                                             |
| [`float`](class_float.md)                         | [`navigation/3d/merge_rasterizer_cell_scale`](class_projectsettings.md#class_projectsettings_property_navigation/3d/merge_rasterizer_cell_scale)                                                                                 | ``1.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`navigation/3d/use_edge_connections`](class_projectsettings.md#class_projectsettings_property_navigation/3d/use_edge_connections)                                                                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`navigation/avoidance/thread_model/avoidance_use_high_priority_threads`](class_projectsettings.md#class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_high_priority_threads)                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`navigation/avoidance/thread_model/avoidance_use_multiple_threads`](class_projectsettings.md#class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_multiple_threads)                                   | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`navigation/baking/thread_model/baking_use_high_priority_threads`](class_projectsettings.md#class_projectsettings_property_navigation/baking/thread_model/baking_use_high_priority_threads)                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`navigation/baking/thread_model/baking_use_multiple_threads`](class_projectsettings.md#class_projectsettings_property_navigation/baking/thread_model/baking_use_multiple_threads)                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`navigation/baking/use_crash_prevention_checks`](class_projectsettings.md#class_projectsettings_property_navigation/baking/use_crash_prevention_checks)                                                                         | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`network/limits/debugger/max_chars_per_second`](class_projectsettings.md#class_projectsettings_property_network/limits/debugger/max_chars_per_second)                                                                           | ``32768``                                                                                        |
| [`int`](class_int.md)                             | [`network/limits/debugger/max_errors_per_second`](class_projectsettings.md#class_projectsettings_property_network/limits/debugger/max_errors_per_second)                                                                         | ``400``                                                                                          |
| [`int`](class_int.md)                             | [`network/limits/debugger/max_queued_messages`](class_projectsettings.md#class_projectsettings_property_network/limits/debugger/max_queued_messages)                                                                             | ``2048``                                                                                         |
| [`int`](class_int.md)                             | [`network/limits/debugger/max_warnings_per_second`](class_projectsettings.md#class_projectsettings_property_network/limits/debugger/max_warnings_per_second)                                                                     | ``400``                                                                                          |
| [`int`](class_int.md)                             | [`network/limits/packet_peer_stream/max_buffer_po2`](class_projectsettings.md#class_projectsettings_property_network/limits/packet_peer_stream/max_buffer_po2)                                                                   | ``16``                                                                                           |
| [`int`](class_int.md)                             | [`network/limits/tcp/connect_timeout_seconds`](class_projectsettings.md#class_projectsettings_property_network/limits/tcp/connect_timeout_seconds)                                                                               | ``30``                                                                                           |
| [`int`](class_int.md)                             | [`network/limits/webrtc/max_channel_in_buffer_kb`](class_projectsettings.md#class_projectsettings_property_network/limits/webrtc/max_channel_in_buffer_kb)                                                                       | ``64``                                                                                           |
| [`String`](class_string.md)                       | [`network/tls/certificate_bundle_override`](class_projectsettings.md#class_projectsettings_property_network/tls/certificate_bundle_override)                                                                                     | ``""``                                                                                           |
| [`float`](class_float.md)                         | [`physics/2d/default_angular_damp`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_angular_damp)                                                                                                     | ``1.0``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/default_gravity`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_gravity)                                                                                                               | ``980.0``                                                                                        |
| [`Vector2`](class_vector2.md)                     | [`physics/2d/default_gravity_vector`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_gravity_vector)                                                                                                 | ``Vector2(0, 1)``                                                                                |
| [`float`](class_float.md)                         | [`physics/2d/default_linear_damp`](class_projectsettings.md#class_projectsettings_property_physics/2d/default_linear_damp)                                                                                                       | ``0.1``                                                                                          |
| [`String`](class_string.md)                       | [`physics/2d/physics_engine`](class_projectsettings.md#class_projectsettings_property_physics/2d/physics_engine)                                                                                                                 | ``"DEFAULT"``                                                                                    |
| [`bool`](class_bool.md)                           | [`physics/2d/run_on_separate_thread`](class_projectsettings.md#class_projectsettings_property_physics/2d/run_on_separate_thread)                                                                                                 | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`physics/2d/sleep_threshold_angular`](class_projectsettings.md#class_projectsettings_property_physics/2d/sleep_threshold_angular)                                                                                               | ``0.139626``                                                                                     |
| [`float`](class_float.md)                         | [`physics/2d/sleep_threshold_linear`](class_projectsettings.md#class_projectsettings_property_physics/2d/sleep_threshold_linear)                                                                                                 | ``2.0``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/solver/contact_max_allowed_penetration`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/contact_max_allowed_penetration)                                                                 | ``0.3``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/solver/contact_max_separation`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/contact_max_separation)                                                                                   | ``1.5``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/solver/contact_recycle_radius`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/contact_recycle_radius)                                                                                   | ``1.0``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/solver/default_constraint_bias`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/default_constraint_bias)                                                                                 | ``0.2``                                                                                          |
| [`float`](class_float.md)                         | [`physics/2d/solver/default_contact_bias`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/default_contact_bias)                                                                                       | ``0.8``                                                                                          |
| [`int`](class_int.md)                             | [`physics/2d/solver/solver_iterations`](class_projectsettings.md#class_projectsettings_property_physics/2d/solver/solver_iterations)                                                                                             | ``16``                                                                                           |
| [`float`](class_float.md)                         | [`physics/2d/time_before_sleep`](class_projectsettings.md#class_projectsettings_property_physics/2d/time_before_sleep)                                                                                                           | ``0.5``                                                                                          |
| [`float`](class_float.md)                         | [`physics/3d/default_angular_damp`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_angular_damp)                                                                                                     | ``0.1``                                                                                          |
| [`float`](class_float.md)                         | [`physics/3d/default_gravity`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_gravity)                                                                                                               | ``9.8``                                                                                          |
| [`Vector3`](class_vector3.md)                     | [`physics/3d/default_gravity_vector`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_gravity_vector)                                                                                                 | ``Vector3(0, -1, 0)``                                                                            |
| [`float`](class_float.md)                         | [`physics/3d/default_linear_damp`](class_projectsettings.md#class_projectsettings_property_physics/3d/default_linear_damp)                                                                                                       | ``0.1``                                                                                          |
| [`String`](class_string.md)                       | [`physics/3d/physics_engine`](class_projectsettings.md#class_projectsettings_property_physics/3d/physics_engine)                                                                                                                 | ``"DEFAULT"``                                                                                    |
| [`bool`](class_bool.md)                           | [`physics/3d/run_on_separate_thread`](class_projectsettings.md#class_projectsettings_property_physics/3d/run_on_separate_thread)                                                                                                 | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`physics/3d/sleep_threshold_angular`](class_projectsettings.md#class_projectsettings_property_physics/3d/sleep_threshold_angular)                                                                                               | ``0.139626``                                                                                     |
| [`float`](class_float.md)                         | [`physics/3d/sleep_threshold_linear`](class_projectsettings.md#class_projectsettings_property_physics/3d/sleep_threshold_linear)                                                                                                 | ``0.1``                                                                                          |
| [`float`](class_float.md)                         | [`physics/3d/solver/contact_max_allowed_penetration`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/contact_max_allowed_penetration)                                                                 | ``0.01``                                                                                         |
| [`float`](class_float.md)                         | [`physics/3d/solver/contact_max_separation`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/contact_max_separation)                                                                                   | ``0.05``                                                                                         |
| [`float`](class_float.md)                         | [`physics/3d/solver/contact_recycle_radius`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/contact_recycle_radius)                                                                                   | ``0.01``                                                                                         |
| [`float`](class_float.md)                         | [`physics/3d/solver/default_contact_bias`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/default_contact_bias)                                                                                       | ``0.8``                                                                                          |
| [`int`](class_int.md)                             | [`physics/3d/solver/solver_iterations`](class_projectsettings.md#class_projectsettings_property_physics/3d/solver/solver_iterations)                                                                                             | ``16``                                                                                           |
| [`float`](class_float.md)                         | [`physics/3d/time_before_sleep`](class_projectsettings.md#class_projectsettings_property_physics/3d/time_before_sleep)                                                                                                           | ``0.5``                                                                                          |
| [`bool`](class_bool.md)                           | [`physics/common/enable_object_picking`](class_projectsettings.md#class_projectsettings_property_physics/common/enable_object_picking)                                                                                           | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`physics/common/max_physics_steps_per_frame`](class_projectsettings.md#class_projectsettings_property_physics/common/max_physics_steps_per_frame)                                                                               | ``8``                                                                                            |
| [`bool`](class_bool.md)                           | [`physics/common/physics_interpolation`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_interpolation)                                                                                           | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`physics/common/physics_jitter_fix`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_jitter_fix)                                                                                                 | ``0.5``                                                                                          |
| [`int`](class_int.md)                             | [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second)                                                                                     | ``60``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/2d/batching/item_buffer_size`](class_projectsettings.md#class_projectsettings_property_rendering/2d/batching/item_buffer_size)                                                                                       | ``16384``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/2d/batching/uniform_set_cache_size`](class_projectsettings.md#class_projectsettings_property_rendering/2d/batching/uniform_set_cache_size)                                                                           | ``256``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/2d/sdf/oversize`](class_projectsettings.md#class_projectsettings_property_rendering/2d/sdf/oversize)                                                                                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/2d/sdf/scale`](class_projectsettings.md#class_projectsettings_property_rendering/2d/sdf/scale)                                                                                                                       | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/2d/shadow_atlas/size`](class_projectsettings.md#class_projectsettings_property_rendering/2d/shadow_atlas/size)                                                                                                       | ``2048``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/2d/snap/snap_2d_transforms_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel)                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/2d/snap/snap_2d_vertices_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel)                                                                             | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/anti_aliasing/quality/msaa_2d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_2d)                                                                                     | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/anti_aliasing/quality/msaa_3d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d)                                                                                     | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/anti_aliasing/quality/screen_space_aa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa)                                                                     | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/anti_aliasing/quality/use_debanding`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_debanding)                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/anti_aliasing/quality/use_taa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa)                                                                                     | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`rendering/anti_aliasing/screen_space_roughness_limiter/amount`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/amount)                                         | ``0.25``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/anti_aliasing/screen_space_roughness_limiter/enabled`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/enabled)                                       | ``true``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/anti_aliasing/screen_space_roughness_limiter/limit`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/limit)                                           | ``0.18``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/camera/depth_of_field/depth_of_field_bokeh_quality`](class_projectsettings.md#class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_quality)                                           | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/camera/depth_of_field/depth_of_field_bokeh_shape`](class_projectsettings.md#class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_shape)                                               | ``1``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/camera/depth_of_field/depth_of_field_use_jitter`](class_projectsettings.md#class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_use_jitter)                                                 | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`rendering/driver/depth_prepass/disable_for_vendors`](class_projectsettings.md#class_projectsettings_property_rendering/driver/depth_prepass/disable_for_vendors)                                                               | ``"PowerVR,Mali,Adreno,Apple"``                                                                  |
| [`bool`](class_bool.md)                           | [`rendering/driver/depth_prepass/enable`](class_projectsettings.md#class_projectsettings_property_rendering/driver/depth_prepass/enable)                                                                                         | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/driver/threads/thread_model`](class_projectsettings.md#class_projectsettings_property_rendering/driver/threads/thread_model)                                                                                         | ``1``                                                                                            |
| [`Color`](class_color.md)                         | [`rendering/environment/defaults/default_clear_color`](class_projectsettings.md#class_projectsettings_property_rendering/environment/defaults/default_clear_color)                                                               | ``Color(0.3, 0.3, 0.3, 1)``                                                                      |
| [`String`](class_string.md)                       | [`rendering/environment/defaults/default_environment`](class_projectsettings.md#class_projectsettings_property_rendering/environment/defaults/default_environment)                                                               | ``""``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/environment/glow/upscale_mode`](class_projectsettings.md#class_projectsettings_property_rendering/environment/glow/upscale_mode)                                                                                     | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/environment/glow/upscale_mode.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/environment/glow/upscale_mode.mobile)                                                                       | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/environment/screen_space_reflection/roughness_quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/screen_space_reflection/roughness_quality)                                     | ``1``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/ssao/adaptive_target`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/adaptive_target)                                                                               | ``0.5``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/environment/ssao/blur_passes`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/blur_passes)                                                                                       | ``2``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/ssao/fadeout_from`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/fadeout_from)                                                                                     | ``50.0``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/environment/ssao/fadeout_to`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/fadeout_to)                                                                                         | ``300.0``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/environment/ssao/half_size`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/half_size)                                                                                           | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/environment/ssao/quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/quality)                                                                                               | ``2``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/ssil/adaptive_target`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/adaptive_target)                                                                               | ``0.5``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/environment/ssil/blur_passes`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/blur_passes)                                                                                       | ``4``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/ssil/fadeout_from`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/fadeout_from)                                                                                     | ``50.0``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/environment/ssil/fadeout_to`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/fadeout_to)                                                                                         | ``300.0``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/environment/ssil/half_size`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/half_size)                                                                                           | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/environment/ssil/quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/quality)                                                                                               | ``2``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale`](class_projectsettings.md#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale)         | ``0.01``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/environment/subsurface_scattering/subsurface_scattering_quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_quality)                 | ``1``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/environment/subsurface_scattering/subsurface_scattering_scale`](class_projectsettings.md#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale)                     | ``0.05``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/environment/volumetric_fog/use_filter`](class_projectsettings.md#class_projectsettings_property_rendering/environment/volumetric_fog/use_filter)                                                                     | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/environment/volumetric_fog/volume_depth`](class_projectsettings.md#class_projectsettings_property_rendering/environment/volumetric_fog/volume_depth)                                                                 | ``64``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/environment/volumetric_fog/volume_size`](class_projectsettings.md#class_projectsettings_property_rendering/environment/volumetric_fog/volume_size)                                                                   | ``64``                                                                                           |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver)                                                                                                 |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.android`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.android)                                                                                 |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.ios`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.ios)                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.linuxbsd`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.linuxbsd)                                                                               |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.macos`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.macos)                                                                                     |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.web`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.web)                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/gl_compatibility/driver.windows`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver.windows)                                                                                 |                                                                                                  |
| [`bool`](class_bool.md)                           | [`rendering/gl_compatibility/fallback_to_angle`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/fallback_to_angle)                                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/gl_compatibility/fallback_to_gles`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/fallback_to_gles)                                                                             | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/gl_compatibility/fallback_to_native`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/fallback_to_native)                                                                         | ``true``                                                                                         |
| [`Array`](class_array.md)                         | [`rendering/gl_compatibility/force_angle_on_devices`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/force_angle_on_devices)                                                                 |                                                                                                  |
| [`int`](class_int.md)                             | [`rendering/gl_compatibility/item_buffer_size`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/item_buffer_size)                                                                             | ``16384``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/gl_compatibility/nvidia_disable_threaded_optimization`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/nvidia_disable_threaded_optimization)                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/global_illumination/gi/use_half_resolution`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution)                                                           | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/global_illumination/sdfgi/frames_to_converge`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge)                                                       | ``5``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/global_illumination/sdfgi/frames_to_update_lights`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights)                                             | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/global_illumination/sdfgi/probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count)                                                             | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/global_illumination/voxel_gi/quality`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/voxel_gi/quality)                                                                       | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_performance/max_rays_per_pass`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_pass)                                                 | ``32``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_performance/max_rays_per_probe_pass`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_probe_pass)                                     | ``64``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_performance/region_size`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_performance/region_size)                                                             | ``512``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/high_quality_probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_probe_ray_count)                                   | ``512``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/high_quality_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_ray_count)                                               | ``512``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/low_quality_probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_probe_ray_count)                                     | ``64``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/low_quality_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_ray_count)                                                 | ``32``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/medium_quality_probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_probe_ray_count)                               | ``256``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/medium_quality_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_ray_count)                                           | ``128``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count)                                 | ``2048``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lightmapping/bake_quality/ultra_quality_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_ray_count)                                             | ``2048``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lightmapping/denoising/denoiser`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/denoising/denoiser)                                                                                 | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/lightmapping/lightmap_gi/use_bicubic_filter`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/lightmap_gi/use_bicubic_filter)                                                         | ``true``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/lightmapping/primitive_meshes/texel_size`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/primitive_meshes/texel_size)                                                               | ``0.2``                                                                                          |
| [`float`](class_float.md)                         | [`rendering/lightmapping/probe_capture/update_speed`](class_projectsettings.md#class_projectsettings_property_rendering/lightmapping/probe_capture/update_speed)                                                                 | ``15``                                                                                           |
| [`bool`](class_bool.md)                           | [`rendering/lights_and_shadows/directional_shadow/16_bits`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/16_bits)                                                     | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/directional_shadow/size`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size)                                                           | ``4096``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/directional_shadow/size.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size.mobile)                                             | ``2048``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality)               | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile) | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/lights_and_shadows/positional_shadow/atlas_16_bits`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_16_bits)                                           | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv)                       | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv)                       | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv)                       | ``3``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv)                       | ``4``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_size`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size)                                                 | ``4096``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/atlas_size.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size.mobile)                                   | ``2048``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality)                 | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile)   | ``0``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/lights_and_shadows/tighter_shadow_caster_culling`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/tighter_shadow_caster_culling)                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/lights_and_shadows/use_physical_light_units`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units)                                                         | ``false``                                                                                        |
| [`float`](class_float.md)                         | [`rendering/limits/cluster_builder/max_clustered_elements`](class_projectsettings.md#class_projectsettings_property_rendering/limits/cluster_builder/max_clustered_elements)                                                     | ``512``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/limits/global_shader_variables/buffer_size`](class_projectsettings.md#class_projectsettings_property_rendering/limits/global_shader_variables/buffer_size)                                                           | ``65536``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/limits/opengl/max_lights_per_object`](class_projectsettings.md#class_projectsettings_property_rendering/limits/opengl/max_lights_per_object)                                                                         | ``8``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/limits/opengl/max_renderable_elements`](class_projectsettings.md#class_projectsettings_property_rendering/limits/opengl/max_renderable_elements)                                                                     | ``65536``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/limits/opengl/max_renderable_lights`](class_projectsettings.md#class_projectsettings_property_rendering/limits/opengl/max_renderable_lights)                                                                         | ``32``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/limits/spatial_indexer/threaded_cull_minimum_instances`](class_projectsettings.md#class_projectsettings_property_rendering/limits/spatial_indexer/threaded_cull_minimum_instances)                                   | ``1000``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/limits/spatial_indexer/update_iterations_per_frame`](class_projectsettings.md#class_projectsettings_property_rendering/limits/spatial_indexer/update_iterations_per_frame)                                           | ``10``                                                                                           |
| [`float`](class_float.md)                         | [`rendering/limits/time/time_rollover_secs`](class_projectsettings.md#class_projectsettings_property_rendering/limits/time/time_rollover_secs)                                                                                   | ``3600``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/mesh_lod/lod_change/threshold_pixels`](class_projectsettings.md#class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels)                                                                       | ``1.0``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/occlusion_culling/bvh_build_quality`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/bvh_build_quality)                                                                         | ``2``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/occlusion_culling/jitter_projection`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/jitter_projection)                                                                         | ``true``                                                                                         |
| [`int`](class_int.md)                             | [`rendering/occlusion_culling/occlusion_rays_per_thread`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/occlusion_rays_per_thread)                                                         | ``512``                                                                                          |
| [`bool`](class_bool.md)                           | [`rendering/occlusion_culling/use_occlusion_culling`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling)                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/reflections/reflection_atlas/reflection_count`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_count)                                                     | ``64``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/reflections/reflection_atlas/reflection_size`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size)                                                       | ``256``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/reflections/reflection_atlas/reflection_size.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size.mobile)                                         | ``128``                                                                                          |
| [`bool`](class_bool.md)                           | [`rendering/reflections/sky_reflections/fast_filter_high_quality`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/fast_filter_high_quality)                                       | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/reflections/sky_reflections/ggx_samples`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples)                                                                 | ``32``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/reflections/sky_reflections/ggx_samples.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples.mobile)                                                   | ``16``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/reflections/sky_reflections/roughness_layers`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers)                                                       | ``8``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/reflections/sky_reflections/texture_array_reflections`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections)                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/reflections/sky_reflections/texture_array_reflections.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections.mobile)                       | ``false``                                                                                        |
| [`String`](class_string.md)                       | [`rendering/renderer/rendering_method`](class_projectsettings.md#class_projectsettings_property_rendering/renderer/rendering_method)                                                                                             | ``"forward_plus"``                                                                               |
| [`String`](class_string.md)                       | [`rendering/renderer/rendering_method.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/renderer/rendering_method.mobile)                                                                               | ``"mobile"``                                                                                     |
| [`String`](class_string.md)                       | [`rendering/renderer/rendering_method.web`](class_projectsettings.md#class_projectsettings_property_rendering/renderer/rendering_method.web)                                                                                     | ``"gl_compatibility"``                                                                           |
| [`int`](class_int.md)                             | [`rendering/rendering_device/d3d12/agility_sdk_version`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/d3d12/agility_sdk_version)                                                           | ``613``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/rendering_device/d3d12/max_misc_descriptors_per_frame`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/d3d12/max_misc_descriptors_per_frame)                                     | ``512``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/rendering_device/d3d12/max_resource_descriptors_per_frame`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/d3d12/max_resource_descriptors_per_frame)                             | ``16384``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame)                               | ``1024``                                                                                         |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver)                                                                                                 |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver.android`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver.android)                                                                                 |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver.ios`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver.ios)                                                                                         |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver.linuxbsd`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver.linuxbsd)                                                                               |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver.macos`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver.macos)                                                                                     |                                                                                                  |
| [`String`](class_string.md)                       | [`rendering/rendering_device/driver.windows`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver.windows)                                                                                 |                                                                                                  |
| [`bool`](class_bool.md)                           | [`rendering/rendering_device/fallback_to_d3d12`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/fallback_to_d3d12)                                                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/rendering_device/fallback_to_opengl3`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/fallback_to_opengl3)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/rendering_device/fallback_to_vulkan`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/fallback_to_vulkan)                                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/rendering_device/pipeline_cache/enable`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/pipeline_cache/enable)                                                                   | ``true``                                                                                         |
| [`float`](class_float.md)                         | [`rendering/rendering_device/pipeline_cache/save_chunk_size_mb`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/pipeline_cache/save_chunk_size_mb)                                           | ``3.0``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/rendering_device/staging_buffer/block_size_kb`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/staging_buffer/block_size_kb)                                                     | ``256``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/rendering_device/staging_buffer/max_size_mb`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/staging_buffer/max_size_mb)                                                         | ``128``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/rendering_device/staging_buffer/texture_upload_region_size_px`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/staging_buffer/texture_upload_region_size_px)                     | ``64``                                                                                           |
| [`int`](class_int.md)                             | [`rendering/rendering_device/vsync/frame_queue_size`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/vsync/frame_queue_size)                                                                 | ``2``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/rendering_device/vsync/swapchain_image_count`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/vsync/swapchain_image_count)                                                       | ``3``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/rendering_device/vulkan/max_descriptors_per_pool`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/vulkan/max_descriptors_per_pool)                                               | ``64``                                                                                           |
| [`float`](class_float.md)                         | [`rendering/scaling_3d/fsr_sharpness`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/fsr_sharpness)                                                                                               | ``0.2``                                                                                          |
| [`int`](class_int.md)                             | [`rendering/scaling_3d/mode`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/mode)                                                                                                                 | ``0``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/scaling_3d/scale`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/scale)                                                                                                               | ``1.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`rendering/shader_compiler/shader_cache/compress`](class_projectsettings.md#class_projectsettings_property_rendering/shader_compiler/shader_cache/compress)                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/shader_compiler/shader_cache/enabled`](class_projectsettings.md#class_projectsettings_property_rendering/shader_compiler/shader_cache/enabled)                                                                       | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/shader_compiler/shader_cache/strip_debug`](class_projectsettings.md#class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug)                                                               | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/shader_compiler/shader_cache/strip_debug.release`](class_projectsettings.md#class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug.release)                                               | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/shader_compiler/shader_cache/use_zstd_compression`](class_projectsettings.md#class_projectsettings_property_rendering/shader_compiler/shader_cache/use_zstd_compression)                                             | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/shading/overrides/force_lambert_over_burley`](class_projectsettings.md#class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley)                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/shading/overrides/force_lambert_over_burley.mobile`](class_projectsettings.md#class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley.mobile)                                           | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/shading/overrides/force_vertex_shading`](class_projectsettings.md#class_projectsettings_property_rendering/shading/overrides/force_vertex_shading)                                                                   | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/textures/canvas_textures/default_texture_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/canvas_textures/default_texture_filter)                                                 | ``1``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/textures/canvas_textures/default_texture_repeat`](class_projectsettings.md#class_projectsettings_property_rendering/textures/canvas_textures/default_texture_repeat)                                                 | ``0``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/textures/decals/filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/decals/filter)                                                                                                   | ``3``                                                                                            |
| [`int`](class_int.md)                             | [`rendering/textures/default_filters/anisotropic_filtering_level`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level)                                       | ``2``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/textures/default_filters/texture_mipmap_bias`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias)                                                       | ``0.0``                                                                                          |
| [`bool`](class_bool.md)                           | [`rendering/textures/default_filters/use_nearest_mipmap_filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter)                                           | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/textures/light_projectors/filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/light_projectors/filter)                                                                               | ``3``                                                                                            |
| [`bool`](class_bool.md)                           | [`rendering/textures/lossless_compression/force_png`](class_projectsettings.md#class_projectsettings_property_rendering/textures/lossless_compression/force_png)                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/textures/vram_compression/cache_gpu_compressor`](class_projectsettings.md#class_projectsettings_property_rendering/textures/vram_compression/cache_gpu_compressor)                                                   | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/textures/vram_compression/compress_with_gpu`](class_projectsettings.md#class_projectsettings_property_rendering/textures/vram_compression/compress_with_gpu)                                                         | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`rendering/textures/vram_compression/import_etc2_astc`](class_projectsettings.md#class_projectsettings_property_rendering/textures/vram_compression/import_etc2_astc)                                                           | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/textures/vram_compression/import_s3tc_bptc`](class_projectsettings.md#class_projectsettings_property_rendering/textures/vram_compression/import_s3tc_bptc)                                                           | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/textures/webp_compression/compression_method`](class_projectsettings.md#class_projectsettings_property_rendering/textures/webp_compression/compression_method)                                                       | ``2``                                                                                            |
| [`float`](class_float.md)                         | [`rendering/textures/webp_compression/lossless_compression_factor`](class_projectsettings.md#class_projectsettings_property_rendering/textures/webp_compression/lossless_compression_factor)                                     | ``25``                                                                                           |
| [`bool`](class_bool.md)                           | [`rendering/viewport/hdr_2d`](class_projectsettings.md#class_projectsettings_property_rendering/viewport/hdr_2d)                                                                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`rendering/viewport/transparent_background`](class_projectsettings.md#class_projectsettings_property_rendering/viewport/transparent_background)                                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`rendering/vrs/mode`](class_projectsettings.md#class_projectsettings_property_rendering/vrs/mode)                                                                                                                               | ``0``                                                                                            |
| [`String`](class_string.md)                       | [`rendering/vrs/texture`](class_projectsettings.md#class_projectsettings_property_rendering/vrs/texture)                                                                                                                         | ``""``                                                                                           |
| [`float`](class_float.md)                         | [`threading/worker_pool/low_priority_thread_ratio`](class_projectsettings.md#class_projectsettings_property_threading/worker_pool/low_priority_thread_ratio)                                                                     | ``0.3``                                                                                          |
| [`int`](class_int.md)                             | [`threading/worker_pool/max_threads`](class_projectsettings.md#class_projectsettings_property_threading/worker_pool/max_threads)                                                                                                 | ``-1``                                                                                           |
| [`String`](class_string.md)                       | [`xr/openxr/default_action_map`](class_projectsettings.md#class_projectsettings_property_xr/openxr/default_action_map)                                                                                                           | ``"res://openxr_action_map.tres"``                                                               |
| [`bool`](class_bool.md)                           | [`xr/openxr/enabled`](class_projectsettings.md#class_projectsettings_property_xr/openxr/enabled)                                                                                                                                 | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`xr/openxr/environment_blend_mode`](class_projectsettings.md#class_projectsettings_property_xr/openxr/environment_blend_mode)                                                                                                   | ``"0"``                                                                                          |
| [`int`](class_int.md)                             | [`xr/openxr/extensions/debug_message_types`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/debug_message_types)                                                                                   | ``"15"``                                                                                         |
| [`int`](class_int.md)                             | [`xr/openxr/extensions/debug_utils`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/debug_utils)                                                                                                   | ``"0"``                                                                                          |
| [`bool`](class_bool.md)                           | [`xr/openxr/extensions/eye_gaze_interaction`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/eye_gaze_interaction)                                                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`xr/openxr/extensions/hand_interaction_profile`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_interaction_profile)                                                                         | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`xr/openxr/extensions/hand_tracking`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking)                                                                                               | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`xr/openxr/extensions/hand_tracking_controller_data_source`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking_controller_data_source)                                                 | ``false``                                                                                        |
| [`bool`](class_bool.md)                           | [`xr/openxr/extensions/hand_tracking_unobstructed_data_source`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking_unobstructed_data_source)                                             | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`xr/openxr/form_factor`](class_projectsettings.md#class_projectsettings_property_xr/openxr/form_factor)                                                                                                                         | ``"0"``                                                                                          |
| [`bool`](class_bool.md)                           | [`xr/openxr/foveation_dynamic`](class_projectsettings.md#class_projectsettings_property_xr/openxr/foveation_dynamic)                                                                                                             | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`xr/openxr/foveation_level`](class_projectsettings.md#class_projectsettings_property_xr/openxr/foveation_level)                                                                                                                 | ``"0"``                                                                                          |
| [`int`](class_int.md)                             | [`xr/openxr/reference_space`](class_projectsettings.md#class_projectsettings_property_xr/openxr/reference_space)                                                                                                                 | ``"1"``                                                                                          |
| [`bool`](class_bool.md)                           | [`xr/openxr/startup_alert`](class_projectsettings.md#class_projectsettings_property_xr/openxr/startup_alert)                                                                                                                     | ``true``                                                                                         |
| [`bool`](class_bool.md)                           | [`xr/openxr/submit_depth_buffer`](class_projectsettings.md#class_projectsettings_property_xr/openxr/submit_depth_buffer)                                                                                                         | ``false``                                                                                        |
| [`int`](class_int.md)                             | [`xr/openxr/view_configuration`](class_projectsettings.md#class_projectsettings_property_xr/openxr/view_configuration)                                                                                                           | ``"1"``                                                                                          |
| [`bool`](class_bool.md)                           | [`xr/shaders/enabled`](class_projectsettings.md#class_projectsettings_property_xr/shaders/enabled)                                                                                                                               | ``false``                                                                                        |

## 方法

|||
|:-:|:--|
| `void`                                                      | [`add_property_info`](class_projectsettings.md#class_projectsettings_method_add_property_info) ( hint: [`Dictionary`](class_dictionary.md) )                                                                             |
| `void`                                                      | [`clear`](class_projectsettings.md#class_projectsettings_method_clear) ( name: [`String`](class_string.md) )                                                                                                             |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_global_class_list`](class_projectsettings.md#class_projectsettings_method_get_global_class_list) ( )                                                                                                               |
| [`int`](class_int.md)                                       | [`get_order`](class_projectsettings.md#class_projectsettings_method_get_order) ( name: [`String`](class_string.md) ) const[^const]                                                                                       |
| [`Variant`](class_variant.md)                               | [`get_setting`](class_projectsettings.md#class_projectsettings_method_get_setting) ( name: [`String`](class_string.md), default_value: [`Variant`](class_variant.md) = null ) const[^const]                              |
| [`Variant`](class_variant.md)                               | [`get_setting_with_override`](class_projectsettings.md#class_projectsettings_method_get_setting_with_override) ( name: [`StringName`](class_stringname.md) ) const[^const]                                               |
| [`String`](class_string.md)                                 | [`globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path) ( path: [`String`](class_string.md) ) const[^const]                                                                             |
| [`bool`](class_bool.md)                                     | [`has_setting`](class_projectsettings.md#class_projectsettings_method_has_setting) ( name: [`String`](class_string.md) ) const[^const]                                                                                   |
| [`bool`](class_bool.md)                                     | [`load_resource_pack`](class_projectsettings.md#class_projectsettings_method_load_resource_pack) ( pack: [`String`](class_string.md), replace_files: [`bool`](class_bool.md) = true, offset: [`int`](class_int.md) = 0 ) |
| [`String`](class_string.md)                                 | [`localize_path`](class_projectsettings.md#class_projectsettings_method_localize_path) ( path: [`String`](class_string.md) ) const[^const]                                                                               |
| [Error](#enum_@globalscope_error)                           | [`save`](class_projectsettings.md#class_projectsettings_method_save) ( )                                                                                                                                                 |
| [Error](#enum_@globalscope_error)                           | [`save_custom`](class_projectsettings.md#class_projectsettings_method_save_custom) ( file: [`String`](class_string.md) )                                                                                                 |
| `void`                                                      | [`set_as_basic`](class_projectsettings.md#class_projectsettings_method_set_as_basic) ( name: [`String`](class_string.md), basic: [`bool`](class_bool.md) )                                                               |
| `void`                                                      | [`set_as_internal`](class_projectsettings.md#class_projectsettings_method_set_as_internal) ( name: [`String`](class_string.md), internal: [`bool`](class_bool.md) )                                                      |
| `void`                                                      | [`set_initial_value`](class_projectsettings.md#class_projectsettings_method_set_initial_value) ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                               |
| `void`                                                      | [`set_order`](class_projectsettings.md#class_projectsettings_method_set_order) ( name: [`String`](class_string.md), position: [`int`](class_int.md) )                                                                    |
| `void`                                                      | [`set_restart_if_changed`](class_projectsettings.md#class_projectsettings_method_set_restart_if_changed) ( name: [`String`](class_string.md), restart: [`bool`](class_bool.md) )                                         |
| `void`                                                      | [`set_setting`](class_projectsettings.md#class_projectsettings_method_set_setting) ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )                                                           |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_projectsettings_signal_settings_changed"></div>

**settings_changed** ( ) <div id="class_projectsettings_signal_settings_changed"></div>

Emitted when any setting is changed, up to once per process frame.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_projectsettings_property_animation/warnings/check_angle_interpolation_type_conflicting"></div>

[`bool`](class_bool.md) **animation/warnings/check_angle_interpolation_type_conflicting** = ``true`` <div id="class_projectsettings_property_animation/warnings/check_angle_interpolation_type_conflicting"></div>

If `true`, [`AnimationMixer`](class_animationmixer.md) prints the warning of interpolation being forced to choose the shortest rotation path due to multiple angle interpolation types being mixed in the [`AnimationMixer`](class_animationmixer.md) cache.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_animation/warnings/check_invalid_track_paths"></div>

[`bool`](class_bool.md) **animation/warnings/check_invalid_track_paths** = ``true`` <div id="class_projectsettings_property_animation/warnings/check_invalid_track_paths"></div>

If `true`, [`AnimationMixer`](class_animationmixer.md) prints the warning of no matching object of the track path in the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/bg_color"></div>

[`Color`](class_color.md) **application/boot_splash/bg_color** = ``Color(0.14, 0.14, 0.14, 1)`` <div id="class_projectsettings_property_application/boot_splash/bg_color"></div>

Background color for the boot splash.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/fullsize"></div>

[`bool`](class_bool.md) **application/boot_splash/fullsize** = ``true`` <div id="class_projectsettings_property_application/boot_splash/fullsize"></div>

If `true`, scale the boot splash image to the full window size (preserving the aspect ratio) when the engine starts. If `false`, the engine will leave it at the default pixel size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/image"></div>

[`String`](class_string.md) **application/boot_splash/image** = ``""`` <div id="class_projectsettings_property_application/boot_splash/image"></div>

Path to an image used as the boot splash. If left empty, the default Godot Engine splash will be displayed instead.

 **Note:** Only effective if [`application/boot_splash/show_image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/show_image) is `true`.

 **Note:** The only supported format is PNG. Using another image format will result in an error.

 **Note:** The image will also show when opening the project in the editor. If you want to display the default splash image in the editor, add an empty override for `editor_hint` feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/minimum_display_time"></div>

[`int`](class_int.md) **application/boot_splash/minimum_display_time** = ``0`` <div id="class_projectsettings_property_application/boot_splash/minimum_display_time"></div>

Minimum boot splash display time (in milliseconds). It is not recommended to set too high values for this setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/show_image"></div>

[`bool`](class_bool.md) **application/boot_splash/show_image** = ``true`` <div id="class_projectsettings_property_application/boot_splash/show_image"></div>

If `true`, displays the image specified in [`application/boot_splash/image`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/image) when the engine starts. If `false`, only displays the plain color specified in [`application/boot_splash/bg_color`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/bg_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/boot_splash/use_filter"></div>

[`bool`](class_bool.md) **application/boot_splash/use_filter** = ``true`` <div id="class_projectsettings_property_application/boot_splash/use_filter"></div>

If `true`, applies linear filtering when scaling the image (recommended for high-resolution artwork). If `false`, uses nearest-neighbor interpolation (recommended for pixel art).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/auto_accept_quit"></div>

[`bool`](class_bool.md) **application/config/auto_accept_quit** = ``true`` <div id="class_projectsettings_property_application/config/auto_accept_quit"></div>

If `true`, the application automatically accepts quitting requests.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/custom_user_dir_name"></div>

[`String`](class_string.md) **application/config/custom_user_dir_name** = ``""`` <div id="class_projectsettings_property_application/config/custom_user_dir_name"></div>

This user directory is used for storing persistent data (`user://` filesystem). If a custom directory name is defined, this name will be appended to the system-specific user data directory (same parent folder as the Godot configuration folder documented in [`OS.get_user_data_dir`](class_os.md#class_os_method_get_user_data_dir)).

The [`application/config/use_custom_user_dir`](class_projectsettings.md#class_projectsettings_property_application/config/use_custom_user_dir) setting must be enabled for this to take effect.

 **Note:** If [`application/config/custom_user_dir_name`](class_projectsettings.md#class_projectsettings_property_application/config/custom_user_dir_name) contains trailing periods, they will be stripped as folder names ending with a period are not allowed on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/description"></div>

[`String`](class_string.md) **application/config/description** = ``""`` <div id="class_projectsettings_property_application/config/description"></div>

The project's description, displayed as a tooltip in the Project Manager when hovering the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/icon"></div>

[`String`](class_string.md) **application/config/icon** = ``""`` <div id="class_projectsettings_property_application/config/icon"></div>

Icon used for the project, set when project loads. Exporters will also use this icon as a fallback if necessary.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/macos_native_icon"></div>

[`String`](class_string.md) **application/config/macos_native_icon** = ``""`` <div id="class_projectsettings_property_application/config/macos_native_icon"></div>

Icon set in `.icns` format used on macOS to set the game's icon. This is done automatically on start by calling [`DisplayServer.set_native_icon`](class_displayserver.md#class_displayserver_method_set_native_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/name"></div>

[`String`](class_string.md) **application/config/name** = ``""`` <div id="class_projectsettings_property_application/config/name"></div>

The project's name. It is used both by the Project Manager and by exporters. The project name can be translated by translating its value in localization files. The window title will be set to match the project name automatically on startup.

 **Note:** Changing this value will also change the user data folder's path if [`application/config/use_custom_user_dir`](class_projectsettings.md#class_projectsettings_property_application/config/use_custom_user_dir) is `false`. After renaming the project, you will no longer be able to access existing data in `user://` unless you rename the old folder to match the new project name. See [*Data paths*](../tutorials/io/data_paths) in the documentation for more information.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/name_localized"></div>

[`Dictionary`](class_dictionary.md) **application/config/name_localized** = ``{}`` <div id="class_projectsettings_property_application/config/name_localized"></div>

Translations of the project's name. This setting is used by OS tools to translate application name on Android, iOS and macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/project_settings_override"></div>

[`String`](class_string.md) **application/config/project_settings_override** = ``""`` <div id="class_projectsettings_property_application/config/project_settings_override"></div>

Specifies a file to override project settings. For example: `user://custom_settings.cfg`. See "Overriding" in the **ProjectSettings** class description at the top for more information.

 **Note:** Regardless of this setting's value, `res://override.cfg` will still be read to override the project settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/quit_on_go_back"></div>

[`bool`](class_bool.md) **application/config/quit_on_go_back** = ``true`` <div id="class_projectsettings_property_application/config/quit_on_go_back"></div>

If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/use_custom_user_dir"></div>

[`bool`](class_bool.md) **application/config/use_custom_user_dir** = ``false`` <div id="class_projectsettings_property_application/config/use_custom_user_dir"></div>

If `true`, the project will save user data to its own user directory. If [`application/config/custom_user_dir_name`](class_projectsettings.md#class_projectsettings_property_application/config/custom_user_dir_name) is empty, `<OS user data directory>/<project name>` directory will be used. If `false`, the project will save user data to `<OS user data directory>/Godot/app_userdata/<project name>`.

See also [*File paths in Godot projects*](../tutorials/io/data_paths.md#accessing-persistent-user-data-user). This setting is only effective on desktop platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/use_hidden_project_data_directory"></div>

[`bool`](class_bool.md) **application/config/use_hidden_project_data_directory** = ``true`` <div id="class_projectsettings_property_application/config/use_hidden_project_data_directory"></div>

If `true`, the project will use a hidden directory (`.godot`) for storing project-specific data (metadata, shader cache, etc.).

If `false`, a non-hidden directory (`godot`) will be used instead.

 **Note:** Restart the application after changing this setting.

 **Note:** Changing this value can help on platforms or with third-party tools where hidden directory patterns are disallowed. Only modify this setting if you know that your environment requires it, as changing the default can impact compatibility with some external tools or plugins which expect the default `.godot` folder.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/version"></div>

[`String`](class_string.md) **application/config/version** = ``""`` <div id="class_projectsettings_property_application/config/version"></div>

The project's human-readable version identifier. This is used by exporters if the version identifier isn't overridden there. If [`application/config/version`](class_projectsettings.md#class_projectsettings_property_application/config/version) is an empty string and the version identifier isn't overridden in an exporter, the exporter will use `1.0.0` as a version identifier.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/config/windows_native_icon"></div>

[`String`](class_string.md) **application/config/windows_native_icon** = ``""`` <div id="class_projectsettings_property_application/config/windows_native_icon"></div>

Icon set in `.ico` format used on Windows to set the game's icon. This is done automatically on start by calling [`DisplayServer.set_native_icon`](class_displayserver.md#class_displayserver_method_set_native_icon).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/delta_smoothing"></div>

[`bool`](class_bool.md) **application/run/delta_smoothing** = ``true`` <div id="class_projectsettings_property_application/run/delta_smoothing"></div>

Time samples for frame deltas are subject to random variation introduced by the platform, even when frames are displayed at regular intervals thanks to V-Sync. This can lead to jitter. Delta smoothing can often give a better result by filtering the input deltas to correct for minor fluctuations from the refresh rate.

 **Note:** Delta smoothing is only attempted when [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is set to `enabled`, as it does not work well without V-Sync.

It may take several seconds at a stable frame rate before the smoothing is initially activated. It will only be active on machines where performance is adequate to render frames at the refresh rate.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/disable_stderr"></div>

[`bool`](class_bool.md) **application/run/disable_stderr** = ``false`` <div id="class_projectsettings_property_application/run/disable_stderr"></div>

If `true`, disables printing to standard error. If `true`, this also hides error and warning messages printed by [`@GlobalScope.push_error`](class_@globalscope.md#class_@globalscope_method_push_error) and [`@GlobalScope.push_warning`](class_@globalscope.md#class_@globalscope_method_push_warning). See also [`application/run/disable_stdout`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stdout).

Changes to this setting will only be applied upon restarting the application. To control this at runtime, use [`Engine.print_error_messages`](class_engine.md#class_engine_property_print_error_messages).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/disable_stdout"></div>

[`bool`](class_bool.md) **application/run/disable_stdout** = ``false`` <div id="class_projectsettings_property_application/run/disable_stdout"></div>

If `true`, disables printing to standard output. This is equivalent to starting the editor or project with the `--quiet` [*command line argument*](../tutorials/editor/command_line_tutorial). See also [`application/run/disable_stderr`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stderr).

Changes to this setting will only be applied upon restarting the application. To control this at runtime, use [`Engine.print_to_stdout`](class_engine.md#class_engine_property_print_to_stdout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/enable_alt_space_menu"></div>

[`bool`](class_bool.md) **application/run/enable_alt_space_menu** = ``false`` <div id="class_projectsettings_property_application/run/enable_alt_space_menu"></div>

If `true`, allows the <i class="fa fa-gamepad"></i>`Alt + Space` keys to display the window menu. This menu allows the user to perform various window management operations such as moving, resizing, or minimizing the window.

 **Note:** When the menu is displayed, project execution will pause until the menu is *fully* closed due to Windows behavior. Consider this when enabling this setting in a networked multiplayer game. The menu is only considered fully closed when an option is selected, when the user clicks outside, or when <i class="fa fa-gamepad"></i>`Escape` is pressed after bringing up the window menu *and* another key is pressed afterwards.

 **Note:** This setting is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/flush_stdout_on_print"></div>

[`bool`](class_bool.md) **application/run/flush_stdout_on_print** = ``false`` <div id="class_projectsettings_property_application/run/flush_stdout_on_print"></div>

If `true`, flushes the standard output stream every time a line is printed. This affects both terminal logging and file logging.

When running a project, this setting must be enabled if you want logs to be collected by service managers such as systemd/journalctl. This setting is disabled by default on release builds, since flushing on every printed line will negatively affect performance if lots of lines are printed in a rapid succession. Also, if this setting is enabled, logged files will still be written successfully if the application crashes or is otherwise killed by the user (without being closed "normally").

 **Note:** Regardless of this setting, the standard error stream (`stderr`) is always flushed when a line is printed to it.

Changes to this setting will only be applied upon restarting the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/flush_stdout_on_print.debug"></div>

[`bool`](class_bool.md) **application/run/flush_stdout_on_print.debug** = ``true`` <div id="class_projectsettings_property_application/run/flush_stdout_on_print.debug"></div>

Debug build override for [`application/run/flush_stdout_on_print`](class_projectsettings.md#class_projectsettings_property_application/run/flush_stdout_on_print), as performance is less important during debugging.

Changes to this setting will only be applied upon restarting the application.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/frame_delay_msec"></div>

[`int`](class_int.md) **application/run/frame_delay_msec** = ``0`` <div id="class_projectsettings_property_application/run/frame_delay_msec"></div>

Forces a *constant* delay between frames in the main loop (in milliseconds). In most situations, [`application/run/max_fps`](class_projectsettings.md#class_projectsettings_property_application/run/max_fps) should be preferred as an FPS limiter as it's more precise.

This setting can be overridden using the `--frame-delay <ms;>` command line argument.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/low_processor_mode"></div>

[`bool`](class_bool.md) **application/run/low_processor_mode** = ``false`` <div id="class_projectsettings_property_application/run/low_processor_mode"></div>

If `true`, enables low-processor usage mode. When enabled, the engine takes longer to redraw, but only redraws the screen if necessary. This may lower power consumption, and is intended for editors or mobile applications. For most games, because the screen needs to be redrawn every frame, it is recommended to keep this setting disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/low_processor_mode_sleep_usec"></div>

[`int`](class_int.md) **application/run/low_processor_mode_sleep_usec** = ``6900`` <div id="class_projectsettings_property_application/run/low_processor_mode_sleep_usec"></div>

Amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/main_loop_type"></div>

[`String`](class_string.md) **application/run/main_loop_type** = ``"SceneTree"`` <div id="class_projectsettings_property_application/run/main_loop_type"></div>

The name of the type implementing the engine's main loop.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/main_scene"></div>

[`String`](class_string.md) **application/run/main_scene** = ``""`` <div id="class_projectsettings_property_application/run/main_scene"></div>

Path to the main scene file that will be loaded when the project runs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/max_fps"></div>

[`int`](class_int.md) **application/run/max_fps** = ``0`` <div id="class_projectsettings_property_application/run/max_fps"></div>

Maximum number of frames per second allowed. A value of `0` means "no limit". The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project logic and rendering.

Limiting the FPS can be useful to reduce system power consumption, which reduces heat and noise emissions (and improves battery life on mobile devices).

If [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is set to `Enabled` or `Adaptive`, it takes precedence and the forced FPS number cannot exceed the monitor's refresh rate.

If [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is `Enabled`, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using an FPS limit a few frames lower than the monitor's refresh rate will [*reduce input lag while avoiding tearing*](https://blurbusters.com/howto-low-lag-vsync-on/).

If [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) is `Disabled`, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.

See also [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second).

This setting can be overridden using the `--max-fps <fps>` command line argument (including with a value of `0` for unlimited framerate).

 **Note:** This property is only read when the project starts. To change the rendering FPS cap at runtime, set [`Engine.max_fps`](class_engine.md#class_engine_property_max_fps) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_application/run/print_header"></div>

[`bool`](class_bool.md) **application/run/print_header** = ``true`` <div id="class_projectsettings_property_application/run/print_header"></div>

If `true`, the engine header is printed in the console on startup. This header describes the current version of the engine, as well as the renderer being used. This behavior can also be disabled on the command line with the `--no-header` option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/buses/channel_disable_threshold_db"></div>

[`float`](class_float.md) **audio/buses/channel_disable_threshold_db** = ``-60.0`` <div id="class_projectsettings_property_audio/buses/channel_disable_threshold_db"></div>

Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/buses/channel_disable_time"></div>

[`float`](class_float.md) **audio/buses/channel_disable_time** = ``2.0`` <div id="class_projectsettings_property_audio/buses/channel_disable_time"></div>

Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/buses/default_bus_layout"></div>

[`String`](class_string.md) **audio/buses/default_bus_layout** = ``"res://default_bus_layout.tres"`` <div id="class_projectsettings_property_audio/buses/default_bus_layout"></div>

Default [`AudioBusLayout`](class_audiobuslayout.md) resource file to use in the project, unless overridden by the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/driver"></div>

[`String`](class_string.md) **audio/driver/driver** <div id="class_projectsettings_property_audio/driver/driver"></div>

Specifies the audio driver to use. This setting is platform-dependent as each platform supports different audio drivers. If left empty, the default audio driver will be used.

The `Dummy` audio driver disables all audio playback and recording, which is useful for non-game applications as it reduces CPU usage. It also prevents the engine from appearing as an application playing audio in the OS' audio mixer.

To query the value that is being used at run-time (which may be overridden by command-line arguments or headless mode), use [`AudioServer.get_driver_name`](class_audioserver.md#class_audioserver_method_get_driver_name).

 **Note:** The driver in use can be overridden at runtime via the `--audio-driver` [*command line argument*](../tutorials/editor/command_line_tutorial).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/enable_input"></div>

[`bool`](class_bool.md) **audio/driver/enable_input** = ``false`` <div id="class_projectsettings_property_audio/driver/enable_input"></div>

If `true`, microphone input will be allowed. This requires appropriate permissions to be set when exporting to Android or iOS.

 **Note:** If the operating system blocks access to audio input devices (due to the user's privacy settings), audio capture will only return silence. On Windows 10 and later, make sure that apps are allowed to access the microphone in the OS' privacy settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/mix_rate"></div>

[`int`](class_int.md) **audio/driver/mix_rate** = ``44100`` <div id="class_projectsettings_property_audio/driver/mix_rate"></div>

The mixing rate used for audio (in Hz). In general, it's better to not touch this and leave it to the host operating system.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/mix_rate.web"></div>

[`int`](class_int.md) **audio/driver/mix_rate.web** = ``0`` <div id="class_projectsettings_property_audio/driver/mix_rate.web"></div>

Safer override for [`audio/driver/mix_rate`](class_projectsettings.md#class_projectsettings_property_audio/driver/mix_rate) in the Web platform. Here `0` means "let the browser choose" (since some browsers do not like forcing the mix rate).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/output_latency"></div>

[`int`](class_int.md) **audio/driver/output_latency** = ``15`` <div id="class_projectsettings_property_audio/driver/output_latency"></div>

Specifies the preferred output latency in milliseconds for audio. Lower values will result in lower audio latency at the cost of increased CPU usage. Low values may result in audible crackling on slower hardware.

Audio output latency may be constrained by the host operating system and audio hardware drivers. If the host can not provide the specified audio output latency then Godot will attempt to use the nearest latency allowed by the host. As such you should always use [`AudioServer.get_output_latency`](class_audioserver.md#class_audioserver_method_get_output_latency) to determine the actual audio output latency.

Audio output latency can be overridden using the `--audio-output-latency <ms>` command line argument.

 **Note:** This setting is ignored on Android, and on all versions of Windows prior to Windows 10.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/driver/output_latency.web"></div>

[`int`](class_int.md) **audio/driver/output_latency.web** = ``50`` <div id="class_projectsettings_property_audio/driver/output_latency.web"></div>

Safer override for [`audio/driver/output_latency`](class_projectsettings.md#class_projectsettings_property_audio/driver/output_latency) in the Web platform, to avoid audio issues especially on mobile devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/2d_panning_strength"></div>

[`float`](class_float.md) **audio/general/2d_panning_strength** = ``0.5`` <div id="class_projectsettings_property_audio/general/2d_panning_strength"></div>

The base strength of the panning effect for all [`AudioStreamPlayer2D`](class_audiostreamplayer2d.md) nodes. The panning strength can be further scaled on each Node using [`AudioStreamPlayer2D.panning_strength`](class_audiostreamplayer2d.md#class_audiostreamplayer2d_property_panning_strength). A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.

The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/3d_panning_strength"></div>

[`float`](class_float.md) **audio/general/3d_panning_strength** = ``0.5`` <div id="class_projectsettings_property_audio/general/3d_panning_strength"></div>

The base strength of the panning effect for all [`AudioStreamPlayer3D`](class_audiostreamplayer3d.md) nodes. The panning strength can be further scaled on each Node using [`AudioStreamPlayer3D.panning_strength`](class_audiostreamplayer3d.md#class_audiostreamplayer3d_property_panning_strength). A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.

The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/default_playback_type"></div>

[`int`](class_int.md) **audio/general/default_playback_type** = ``0`` <div id="class_projectsettings_property_audio/general/default_playback_type"></div>

**实验性：** 未来版本中可能会修改或移除该属性。

Specifies the default playback type of the platform.

The default value is set to **Stream**, as most platforms have no issues mixing streams.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/default_playback_type.web"></div>

[`int`](class_int.md) **audio/general/default_playback_type.web** = ``1`` <div id="class_projectsettings_property_audio/general/default_playback_type.web"></div>

**实验性：** 未来版本中可能会修改或移除该属性。

Specifies the default playback type of the Web platform.

The default value is set to **Sample** as the Web platform is not suited to mix audio streams outside of the Web Audio API, especially when exporting a single-threaded game. **Sample** allows for lower latency on the web platform at the cost of flexibility ([`AudioEffect`](class_audioeffect.md) s are not supported).

 **Warning:** Forcing **Stream** on the Web platform may cause high audio latency and crackling, especially when exporting a multi-threaded game.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/ios/mix_with_others"></div>

[`bool`](class_bool.md) **audio/general/ios/mix_with_others** = ``false`` <div id="class_projectsettings_property_audio/general/ios/mix_with_others"></div>

Sets the [*mixWithOthers*](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers) option for the AVAudioSession on iOS. This will override the mix behavior, if the category is set to `Play and Record`, `Playback`, or `Multi Route`.

 `Ambient` always has this set per default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/ios/session_category"></div>

[`int`](class_int.md) **audio/general/ios/session_category** = ``0`` <div id="class_projectsettings_property_audio/general/ios/session_category"></div>

Sets the [*AVAudioSessionCategory*](https://developer.apple.com/documentation/avfaudio/avaudiosessioncategory) on iOS. Use the `Playback` category to get sound output, even if the phone is in silent mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/general/text_to_speech"></div>

[`bool`](class_bool.md) **audio/general/text_to_speech** = ``false`` <div id="class_projectsettings_property_audio/general/text_to_speech"></div>

If `true`, text-to-speech support is enabled, see [`DisplayServer.tts_get_voices`](class_displayserver.md#class_displayserver_method_tts_get_voices) and [`DisplayServer.tts_speak`](class_displayserver.md#class_displayserver_method_tts_speak).

 **Note:** Enabling TTS can cause addition idle CPU usage and interfere with the sleep mode, so consider disabling it if TTS is not used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_audio/video/video_delay_compensation_ms"></div>

[`int`](class_int.md) **audio/video/video_delay_compensation_ms** = ``0`` <div id="class_projectsettings_property_audio/video/video_delay_compensation_ms"></div>

Setting to hardcode audio delay when playing video. Best to leave this unchanged unless you know what you are doing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_collada/use_ambient"></div>

[`bool`](class_bool.md) **collada/use_ambient** = ``false`` <div id="class_projectsettings_property_collada/use_ambient"></div>

If `true`, ambient lights will be imported from COLLADA models as [`DirectionalLight3D`](class_directionallight3d.md). If `false`, ambient lights will be ignored.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_compression/formats/gzip/compression_level"></div>

[`int`](class_int.md) **compression/formats/gzip/compression_level** = ``-1`` <div id="class_projectsettings_property_compression/formats/gzip/compression_level"></div>

The default compression level for gzip. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. `-1` uses the default gzip compression level, which is identical to `6` but could change in the future due to underlying zlib updates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_compression/formats/zlib/compression_level"></div>

[`int`](class_int.md) **compression/formats/zlib/compression_level** = ``-1`` <div id="class_projectsettings_property_compression/formats/zlib/compression_level"></div>

The default compression level for Zlib. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. `-1` uses the default gzip compression level, which is identical to `6` but could change in the future due to underlying zlib updates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_compression/formats/zstd/compression_level"></div>

[`int`](class_int.md) **compression/formats/zstd/compression_level** = ``3`` <div id="class_projectsettings_property_compression/formats/zstd/compression_level"></div>

The default compression level for Zstandard. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_compression/formats/zstd/long_distance_matching"></div>

[`bool`](class_bool.md) **compression/formats/zstd/long_distance_matching** = ``false`` <div id="class_projectsettings_property_compression/formats/zstd/long_distance_matching"></div>

Enables [*long-distance matching*](https://github.com/facebook/zstd/releases/tag/v1.3.2) in Zstandard.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_compression/formats/zstd/window_log_size"></div>

[`int`](class_int.md) **compression/formats/zstd/window_log_size** = ``27`` <div id="class_projectsettings_property_compression/formats/zstd/window_log_size"></div>

Largest size limit (in power of 2) allowed when compressing using long-distance matching with Zstandard. Higher values can result in better compression, but will require more memory when compressing and decompressing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/canvas_items/debug_redraw_color"></div>

[`Color`](class_color.md) **debug/canvas_items/debug_redraw_color** = ``Color(1, 0.2, 0.2, 0.5)`` <div id="class_projectsettings_property_debug/canvas_items/debug_redraw_color"></div>

If canvas item redraw debugging is active, this color will be flashed on canvas items when they redraw.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/canvas_items/debug_redraw_time"></div>

[`float`](class_float.md) **debug/canvas_items/debug_redraw_time** = ``1.0`` <div id="class_projectsettings_property_debug/canvas_items/debug_redraw_time"></div>

If canvas item redraw debugging is active, this will be the time the flash will last each time they redraw.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/file_logging/enable_file_logging"></div>

[`bool`](class_bool.md) **debug/file_logging/enable_file_logging** = ``false`` <div id="class_projectsettings_property_debug/file_logging/enable_file_logging"></div>

If `true`, logs all output and error messages to files. See also [`debug/file_logging/log_path`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/log_path), [`debug/file_logging/max_log_files`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/max_log_files), and [`application/run/flush_stdout_on_print`](class_projectsettings.md#class_projectsettings_property_application/run/flush_stdout_on_print).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/file_logging/enable_file_logging.pc"></div>

[`bool`](class_bool.md) **debug/file_logging/enable_file_logging.pc** = ``true`` <div id="class_projectsettings_property_debug/file_logging/enable_file_logging.pc"></div>

Desktop override for [`debug/file_logging/enable_file_logging`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/enable_file_logging), as log files are not readily accessible on mobile/Web platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/file_logging/log_path"></div>

[`String`](class_string.md) **debug/file_logging/log_path** = ``"user://logs/godot.log"`` <div id="class_projectsettings_property_debug/file_logging/log_path"></div>

Path at which to store log files for the project. Using a path under `user://` is recommended.

This can be specified manually on the command line using the `--log-file <file>` [*command line argument*](../tutorials/editor/command_line_tutorial). If this command line argument is specified, log rotation is automatically disabled (see [`debug/file_logging/max_log_files`](class_projectsettings.md#class_projectsettings_property_debug/file_logging/max_log_files)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/file_logging/max_log_files"></div>

[`int`](class_int.md) **debug/file_logging/max_log_files** = ``5`` <div id="class_projectsettings_property_debug/file_logging/max_log_files"></div>

Specifies the maximum number of log files allowed (used for rotation). Set to `1` to disable log file rotation.

If the `--log-file <file>` [*command line argument*](../tutorials/editor/command_line_tutorial) is used, log rotation is always disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/assert_always_false"></div>

[`int`](class_int.md) **debug/gdscript/warnings/assert_always_false** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/assert_always_false"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an `assert` call always evaluates to false.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/assert_always_true"></div>

[`int`](class_int.md) **debug/gdscript/warnings/assert_always_true** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/assert_always_true"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an `assert` call always evaluates to true.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/confusable_capture_reassignment"></div>

[`int`](class_int.md) **debug/gdscript/warnings/confusable_capture_reassignment** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/confusable_capture_reassignment"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a local variable captured by a lambda is reassigned, since this does not modify the outer local variable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/confusable_identifier"></div>

[`int`](class_int.md) **debug/gdscript/warnings/confusable_identifier** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/confusable_identifier"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an identifier contains characters that can be confused with something else, like when mixing different alphabets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/confusable_local_declaration"></div>

[`int`](class_int.md) **debug/gdscript/warnings/confusable_local_declaration** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/confusable_local_declaration"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an identifier declared in the nested block has the same name as an identifier declared below in the parent block.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/confusable_local_usage"></div>

[`int`](class_int.md) **debug/gdscript/warnings/confusable_local_usage** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/confusable_local_usage"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an identifier that will be shadowed below in the block is used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/constant_used_as_function"></div>

[`int`](class_int.md) **debug/gdscript/warnings/constant_used_as_function** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/constant_used_as_function"></div>

**已弃用：** This warning is never produced. Instead, an error is generated if the expression type is known at compile time.

When set to `warn` or `error`, produces a warning or an error respectively when a constant is used as a function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/deprecated_keyword"></div>

[`int`](class_int.md) **debug/gdscript/warnings/deprecated_keyword** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/deprecated_keyword"></div>

When set to `warn` or `error`, produces a warning or an error respectively when deprecated keywords are used.

 **Note:** There are currently no deprecated keywords, so this warning is never produced.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/empty_file"></div>

[`int`](class_int.md) **debug/gdscript/warnings/empty_file** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/empty_file"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an empty file is parsed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/enable"></div>

[`bool`](class_bool.md) **debug/gdscript/warnings/enable** = ``true`` <div id="class_projectsettings_property_debug/gdscript/warnings/enable"></div>

If `true`, enables specific GDScript warnings (see `debug/gdscript/warnings/*` settings). If `false`, disables all GDScript warnings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/enum_variable_without_default"></div>

[`int`](class_int.md) **debug/gdscript/warnings/enum_variable_without_default** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/enum_variable_without_default"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a variable has an enum type but no explicit default value, but only if the enum does not contain `0` as a valid value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/exclude_addons"></div>

[`bool`](class_bool.md) **debug/gdscript/warnings/exclude_addons** = ``true`` <div id="class_projectsettings_property_debug/gdscript/warnings/exclude_addons"></div>

If `true`, scripts in the `res://addons` folder will not generate warnings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/function_used_as_property"></div>

[`int`](class_int.md) **debug/gdscript/warnings/function_used_as_property** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/function_used_as_property"></div>

**已弃用：** This warning is never produced. When a function is used as a property, a [`Callable`](class_callable.md) is returned.

When set to `warn` or `error`, produces a warning or an error respectively when using a function as if it is a property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/get_node_default_without_onready"></div>

[`int`](class_int.md) **debug/gdscript/warnings/get_node_default_without_onready** = ``2`` <div id="class_projectsettings_property_debug/gdscript/warnings/get_node_default_without_onready"></div>

When set to `warn` or `error`, produces a warning or an error respectively when [`Node.get_node`](class_node.md#class_node_method_get_node) (or the shorthand `$`) is used as default value of a class variable without the `@onready` annotation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/incompatible_ternary"></div>

[`int`](class_int.md) **debug/gdscript/warnings/incompatible_ternary** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/incompatible_ternary"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a ternary operator may emit values with incompatible types.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/inference_on_variant"></div>

[`int`](class_int.md) **debug/gdscript/warnings/inference_on_variant** = ``2`` <div id="class_projectsettings_property_debug/gdscript/warnings/inference_on_variant"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a static inferred type uses a [`Variant`](class_variant.md) as initial value, which makes the static type to also be Variant.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/inferred_declaration"></div>

[`int`](class_int.md) **debug/gdscript/warnings/inferred_declaration** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/inferred_declaration"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a variable, constant, or parameter has an implicitly inferred static type.

 **Note:** This warning is recommended *in addition* to [`debug/gdscript/warnings/untyped_declaration`](class_projectsettings.md#class_projectsettings_property_debug/gdscript/warnings/untyped_declaration) if you want to always specify the type explicitly. Having `INFERRED_DECLARATION` warning level higher than `UNTYPED_DECLARATION` warning level makes little sense and is not recommended.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_cast"></div>

[`int`](class_int.md) **debug/gdscript/warnings/int_as_enum_without_cast** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_cast"></div>

When set to `warn` or `error`, produces a warning or an error respectively when trying to use an integer as an enum without an explicit cast.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_match"></div>

[`int`](class_int.md) **debug/gdscript/warnings/int_as_enum_without_match** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/int_as_enum_without_match"></div>

When set to `warn` or `error`, produces a warning or an error respectively when trying to use an integer as an enum when there is no matching enum member for that numeric value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/integer_division"></div>

[`int`](class_int.md) **debug/gdscript/warnings/integer_division** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/integer_division"></div>

When set to `warn` or `error`, produces a warning or an error respectively when dividing an integer by another integer (the decimal part will be discarded).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/missing_tool"></div>

[`int`](class_int.md) **debug/gdscript/warnings/missing_tool** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/missing_tool"></div>

When set to `warn` or `error`, produces a warning or an error respectively when the base class script has the `@tool` annotation, but the current class script does not have it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/narrowing_conversion"></div>

[`int`](class_int.md) **debug/gdscript/warnings/narrowing_conversion** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/narrowing_conversion"></div>

When set to `warn` or `error`, produces a warning or an error respectively when passing a floating-point value to a function that expects an integer (it will be converted and lose precision).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/native_method_override"></div>

[`int`](class_int.md) **debug/gdscript/warnings/native_method_override** = ``2`` <div id="class_projectsettings_property_debug/gdscript/warnings/native_method_override"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a method in the script overrides a native method, because it may not behave as expected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/onready_with_export"></div>

[`int`](class_int.md) **debug/gdscript/warnings/onready_with_export** = ``2`` <div id="class_projectsettings_property_debug/gdscript/warnings/onready_with_export"></div>

When set to `warn` or `error`, produces a warning or an error respectively when the `@onready` annotation is used together with the `@export` annotation, since it may not behave as expected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/property_used_as_function"></div>

[`int`](class_int.md) **debug/gdscript/warnings/property_used_as_function** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/property_used_as_function"></div>

**已弃用：** This warning is never produced. Instead, an error is generated if the expression type is known at compile time.

When set to `warn` or `error`, produces a warning or an error respectively when using a property as if it is a function.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/redundant_await"></div>

[`int`](class_int.md) **debug/gdscript/warnings/redundant_await** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/redundant_await"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a function that is not a coroutine is called with await.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/redundant_static_unload"></div>

[`int`](class_int.md) **debug/gdscript/warnings/redundant_static_unload** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/redundant_static_unload"></div>

When set to `warn` or `error`, produces a warning or an error respectively when the `@static_unload` annotation is used in a script without any static variables.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/renamed_in_godot_4_hint"></div>

[`bool`](class_bool.md) **debug/gdscript/warnings/renamed_in_godot_4_hint** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/renamed_in_godot_4_hint"></div>

When enabled, using a property, enum, or function that was renamed since Godot 3 will produce a hint if an error occurs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/return_value_discarded"></div>

[`int`](class_int.md) **debug/gdscript/warnings/return_value_discarded** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/return_value_discarded"></div>

When set to `warn` or `error`, produces a warning or an error respectively when calling a function without using its return value (by assigning it to a variable or using it as a function argument). These return values are sometimes used to indicate possible errors using the [Error](#enum_@globalscope_error) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/shadowed_global_identifier"></div>

[`int`](class_int.md) **debug/gdscript/warnings/shadowed_global_identifier** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/shadowed_global_identifier"></div>

When set to `warn` or `error`, produces a warning or an error respectively when defining a local or member variable, signal, or enum that would have the same name as a built-in function or global class name, thus shadowing it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/shadowed_variable"></div>

[`int`](class_int.md) **debug/gdscript/warnings/shadowed_variable** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/shadowed_variable"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a local variable or local constant shadows a member declared in the current class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/shadowed_variable_base_class"></div>

[`int`](class_int.md) **debug/gdscript/warnings/shadowed_variable_base_class** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/shadowed_variable_base_class"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a local variable or local constant shadows a member declared in a base class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/standalone_expression"></div>

[`int`](class_int.md) **debug/gdscript/warnings/standalone_expression** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/standalone_expression"></div>

When set to `warn` or `error`, produces a warning or an error respectively when calling an expression that may have no effect on the surrounding code, such as writing `2 + 2` as a statement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/standalone_ternary"></div>

[`int`](class_int.md) **debug/gdscript/warnings/standalone_ternary** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/standalone_ternary"></div>

When set to `warn` or `error`, produces a warning or an error respectively when calling a ternary expression that may have no effect on the surrounding code, such as writing `42 if active else 0` as a statement.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/static_called_on_instance"></div>

[`int`](class_int.md) **debug/gdscript/warnings/static_called_on_instance** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/static_called_on_instance"></div>

When set to `warn` or `error`, produces a warning or an error respectively when calling a static method from an instance of a class instead of from the class directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unassigned_variable"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unassigned_variable** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unassigned_variable"></div>

When set to `warn` or `error`, produces a warning or an error respectively when using a variable that wasn't previously assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unassigned_variable_op_assign"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unassigned_variable_op_assign** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unassigned_variable_op_assign"></div>

When set to `warn` or `error`, produces a warning or an error respectively when assigning a variable using an assignment operator like `+=` if the variable wasn't previously assigned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unreachable_code"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unreachable_code** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unreachable_code"></div>

When set to `warn` or `error`, produces a warning or an error respectively when unreachable code is detected (such as after a `return` statement that will always be executed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unreachable_pattern"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unreachable_pattern** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unreachable_pattern"></div>

When set to `warn` or `error`, produces a warning or an error respectively when an unreachable `match` pattern is detected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unsafe_call_argument"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unsafe_call_argument** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/unsafe_call_argument"></div>

When set to `warn` or `error`, produces a warning or an error respectively when using an expression whose type may not be compatible with the function parameter expected.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unsafe_cast"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unsafe_cast** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/unsafe_cast"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a [`Variant`](class_variant.md) value is cast to a non-Variant.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unsafe_method_access"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unsafe_method_access** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/unsafe_method_access"></div>

When set to `warn` or `error`, produces a warning or an error respectively when calling a method whose presence is not guaranteed at compile-time in the class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unsafe_property_access"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unsafe_property_access** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/unsafe_property_access"></div>

When set to `warn` or `error`, produces a warning or an error respectively when accessing a property whose presence is not guaranteed at compile-time in the class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unsafe_void_return"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unsafe_void_return** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unsafe_void_return"></div>

When set to `warn` or `error`, produces a warning or an error respectively when returning a call from a `void` function when such call cannot be guaranteed to be also `void`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/untyped_declaration"></div>

[`int`](class_int.md) **debug/gdscript/warnings/untyped_declaration** = ``0`` <div id="class_projectsettings_property_debug/gdscript/warnings/untyped_declaration"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a variable or parameter has no static type, or if a function has no static return type.

 **Note:** This warning is recommended together with [`EditorSettings.text_editor/completion/add_type_hints`](class_editorsettings.md#class_editorsettings_property_text_editor/completion/add_type_hints) to help achieve type safety.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unused_local_constant"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unused_local_constant** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unused_local_constant"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a local constant is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unused_parameter"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unused_parameter** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unused_parameter"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a function parameter is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unused_private_class_variable"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unused_private_class_variable** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unused_private_class_variable"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a private member variable is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unused_signal"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unused_signal** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unused_signal"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a signal is declared but never explicitly used in the class.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/gdscript/warnings/unused_variable"></div>

[`int`](class_int.md) **debug/gdscript/warnings/unused_variable** = ``1`` <div id="class_projectsettings_property_debug/gdscript/warnings/unused_variable"></div>

When set to `warn` or `error`, produces a warning or an error respectively when a local variable is unused.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/crash_handler/message"></div>

[`String`](class_string.md) **debug/settings/crash_handler/message** = ``"Please include this when reporting the bug to the project developer."`` <div id="class_projectsettings_property_debug/settings/crash_handler/message"></div>

Message to be displayed before the backtrace when the engine crashes. By default, this message is only used in exported projects due to the editor-only override applied to this setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/crash_handler/message.editor"></div>

[`String`](class_string.md) **debug/settings/crash_handler/message.editor** = ``"Please include this when reporting the bug on: https://github.com/godotengine/godot/issues"`` <div id="class_projectsettings_property_debug/settings/crash_handler/message.editor"></div>

Editor-only override for [`debug/settings/crash_handler/message`](class_projectsettings.md#class_projectsettings_property_debug/settings/crash_handler/message). Does not affect exported projects in debug or release mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/gdscript/max_call_stack"></div>

[`int`](class_int.md) **debug/settings/gdscript/max_call_stack** = ``1024`` <div id="class_projectsettings_property_debug/settings/gdscript/max_call_stack"></div>

Maximum call stack allowed for debugging GDScript.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/physics_interpolation/enable_warnings"></div>

[`bool`](class_bool.md) **debug/settings/physics_interpolation/enable_warnings** = ``true`` <div id="class_projectsettings_property_debug/settings/physics_interpolation/enable_warnings"></div>

If `true`, enables warnings which can help pinpoint where nodes are being incorrectly updated, which will result in incorrect interpolation and visual glitches.

When a node is being interpolated, it is essential that the transform is set during [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) (during a physics tick) rather than [`Node._process`](class_node.md#class_node_private_method__process) (during a frame).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/profiler/max_functions"></div>

[`int`](class_int.md) **debug/settings/profiler/max_functions** = ``16384`` <div id="class_projectsettings_property_debug/settings/profiler/max_functions"></div>

Maximum number of functions per frame allowed when profiling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/profiler/max_timestamp_query_elements"></div>

[`int`](class_int.md) **debug/settings/profiler/max_timestamp_query_elements** = ``256`` <div id="class_projectsettings_property_debug/settings/profiler/max_timestamp_query_elements"></div>

Maximum number of timestamp query elements allowed per frame for visual profiling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/stdout/print_fps"></div>

[`bool`](class_bool.md) **debug/settings/stdout/print_fps** = ``false`` <div id="class_projectsettings_property_debug/settings/stdout/print_fps"></div>

Print frames per second to standard output every second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/stdout/print_gpu_profile"></div>

[`bool`](class_bool.md) **debug/settings/stdout/print_gpu_profile** = ``false`` <div id="class_projectsettings_property_debug/settings/stdout/print_gpu_profile"></div>

Print GPU profile information to standard output every second. This includes how long each frame takes the GPU to render on average, broken down into different steps of the render pipeline, such as CanvasItems, shadows, glow, etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/settings/stdout/verbose_stdout"></div>

[`bool`](class_bool.md) **debug/settings/stdout/verbose_stdout** = ``false`` <div id="class_projectsettings_property_debug/settings/stdout/verbose_stdout"></div>

Print more information to standard output when running. It displays information such as memory leaks, which scenes and resources are being loaded, etc. This can also be enabled using the `--verbose` or `-v` [*command line argument*](../tutorials/editor/command_line_tutorial), even on an exported project. See also [`OS.is_stdout_verbose`](class_os.md#class_os_method_is_stdout_verbose) and [`@GlobalScope.print_verbose`](class_@globalscope.md#class_@globalscope_method_print_verbose).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/device_limit_exceeded"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/device_limit_exceeded** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/device_limit_exceeded"></div>

When set to `true`, produces a warning when the shader exceeds certain device limits. Currently, the only device limit checked is the limit on uniform buffer size. More device limits will be added in the future.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/enable"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/enable** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/enable"></div>

If `true`, enables specific shader warnings (see `debug/shader_language/warnings/*` settings). If `false`, disables all shader warnings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/float_comparison"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/float_comparison** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/float_comparison"></div>

When set to `true`, produces a warning when two floating-point numbers are compared directly with the `==` operator or the `!=` operator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/formatting_error"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/formatting_error** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/formatting_error"></div>

When set to `true`, produces a warning upon encountering certain formatting errors. Currently this only checks for empty statements. More formatting errors may be added over time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/magic_position_write"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/magic_position_write** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/magic_position_write"></div>

When set to `true`, produces a warning when the shader contains `POSITION = vec4(vertex,` as this was very common code written in Godot 4.2 and earlier that was paired with a QuadMesh to produce a full screen post processes pass. With the switch to reversed z in 4.3, this trick no longer works, as it implicitly relied on the `VERTEX.z` being 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/treat_warnings_as_errors"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/treat_warnings_as_errors** = ``false`` <div id="class_projectsettings_property_debug/shader_language/warnings/treat_warnings_as_errors"></div>

When set to `true`, warnings are treated as errors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_constant"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_constant** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_constant"></div>

When set to `true`, produces a warning when a constant is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_function"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_function** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_function"></div>

When set to `true`, produces a warning when a function is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_local_variable"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_local_variable** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_local_variable"></div>

When set to `true`, produces a warning when a local variable is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_struct"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_struct** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_struct"></div>

When set to `true`, produces a warning when a struct is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_uniform"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_uniform** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_uniform"></div>

When set to `true`, produces a warning when a uniform is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shader_language/warnings/unused_varying"></div>

[`bool`](class_bool.md) **debug/shader_language/warnings/unused_varying** = ``true`` <div id="class_projectsettings_property_debug/shader_language/warnings/unused_varying"></div>

When set to `true`, produces a warning when a varying is never used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/agents_radius_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/agents_radius_color** = ``Color(1, 1, 0, 0.25)`` <div id="class_projectsettings_property_debug/shapes/avoidance/agents_radius_color"></div>

Color of the avoidance agents radius, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/enable_agents_radius"></div>

[`bool`](class_bool.md) **debug/shapes/avoidance/enable_agents_radius** = ``true`` <div id="class_projectsettings_property_debug/shapes/avoidance/enable_agents_radius"></div>

If enabled, displays avoidance agents radius when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_radius"></div>

[`bool`](class_bool.md) **debug/shapes/avoidance/enable_obstacles_radius** = ``true`` <div id="class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_radius"></div>

If enabled, displays avoidance obstacles radius when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_static"></div>

[`bool`](class_bool.md) **debug/shapes/avoidance/enable_obstacles_static** = ``true`` <div id="class_projectsettings_property_debug/shapes/avoidance/enable_obstacles_static"></div>

If enabled, displays static avoidance obstacles when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/obstacles_radius_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/obstacles_radius_color** = ``Color(1, 0.5, 0, 0.25)`` <div id="class_projectsettings_property_debug/shapes/avoidance/obstacles_radius_color"></div>

Color of the avoidance obstacles radius, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushin_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/obstacles_static_edge_pushin_color** = ``Color(1, 0, 0, 1)`` <div id="class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushin_color"></div>

Color of the static avoidance obstacles edges when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushout_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/obstacles_static_edge_pushout_color** = ``Color(1, 1, 0, 1)`` <div id="class_projectsettings_property_debug/shapes/avoidance/obstacles_static_edge_pushout_color"></div>

Color of the static avoidance obstacles edges when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushin_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/obstacles_static_face_pushin_color** = ``Color(1, 0, 0, 0)`` <div id="class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushin_color"></div>

Color of the static avoidance obstacles faces when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushout_color"></div>

[`Color`](class_color.md) **debug/shapes/avoidance/obstacles_static_face_pushout_color** = ``Color(1, 1, 0, 0.5)`` <div id="class_projectsettings_property_debug/shapes/avoidance/obstacles_static_face_pushout_color"></div>

Color of the static avoidance obstacles faces when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/collision/contact_color"></div>

[`Color`](class_color.md) **debug/shapes/collision/contact_color** = ``Color(1, 0.2, 0.1, 0.8)`` <div id="class_projectsettings_property_debug/shapes/collision/contact_color"></div>

Color of the contact points between collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/collision/draw_2d_outlines"></div>

[`bool`](class_bool.md) **debug/shapes/collision/draw_2d_outlines** = ``true`` <div id="class_projectsettings_property_debug/shapes/collision/draw_2d_outlines"></div>

Sets whether 2D physics will display collision outlines in game when "Visible Collision Shapes" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/collision/max_contacts_displayed"></div>

[`int`](class_int.md) **debug/shapes/collision/max_contacts_displayed** = ``10000`` <div id="class_projectsettings_property_debug/shapes/collision/max_contacts_displayed"></div>

Maximum number of contact points between collision shapes to display when "Visible Collision Shapes" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/collision/shape_color"></div>

[`Color`](class_color.md) **debug/shapes/collision/shape_color** = ``Color(0, 0.6, 0.7, 0.42)`` <div id="class_projectsettings_property_debug/shapes/collision/shape_color"></div>

Color of the collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/agent_path_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/agent_path_color** = ``Color(1, 0, 0, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/agent_path_color"></div>

Color to display enabled navigation agent paths when an agent has debug enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/agent_path_point_size"></div>

[`float`](class_float.md) **debug/shapes/navigation/agent_path_point_size** = ``4.0`` <div id="class_projectsettings_property_debug/shapes/navigation/agent_path_point_size"></div>

Rasterized size (pixel) used to render navigation agent path points when an agent has debug enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/edge_connection_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/edge_connection_color** = ``Color(1, 0, 1, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/edge_connection_color"></div>

Color to display edge connections between navigation regions, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_agent_paths"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_agent_paths** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_agent_paths"></div>

If enabled, displays navigation agent paths when an agent has debug enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_agent_paths_xray"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_agent_paths_xray** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_agent_paths_xray"></div>

If enabled, displays navigation agent paths through geometry when an agent has debug enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_edge_connections"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_edge_connections** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_edge_connections"></div>

If enabled, displays edge connections between navigation regions when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_edge_connections_xray"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_edge_connections_xray** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_edge_connections_xray"></div>

If enabled, displays edge connections between navigation regions through geometry when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_edge_lines"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_edge_lines** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_edge_lines"></div>

If enabled, displays navigation mesh polygon edges when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_edge_lines_xray"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_edge_lines_xray** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_edge_lines_xray"></div>

If enabled, displays navigation mesh polygon edges through geometry when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_geometry_face_random_color"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_geometry_face_random_color** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_geometry_face_random_color"></div>

If enabled, colorizes each navigation mesh polygon face with a random color when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_link_connections"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_link_connections** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_link_connections"></div>

If enabled, displays navigation link connections when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/enable_link_connections_xray"></div>

[`bool`](class_bool.md) **debug/shapes/navigation/enable_link_connections_xray** = ``true`` <div id="class_projectsettings_property_debug/shapes/navigation/enable_link_connections_xray"></div>

If enabled, displays navigation link connections through geometry when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/geometry_edge_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/geometry_edge_color** = ``Color(0.5, 1, 1, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/geometry_edge_color"></div>

Color to display enabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/geometry_edge_disabled_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/geometry_edge_disabled_color** = ``Color(0.5, 0.5, 0.5, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/geometry_edge_disabled_color"></div>

Color to display disabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/geometry_face_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/geometry_face_color** = ``Color(0.5, 1, 1, 0.4)`` <div id="class_projectsettings_property_debug/shapes/navigation/geometry_face_color"></div>

Color to display enabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/geometry_face_disabled_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/geometry_face_disabled_color** = ``Color(0.5, 0.5, 0.5, 0.4)`` <div id="class_projectsettings_property_debug/shapes/navigation/geometry_face_disabled_color"></div>

Color to display disabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/link_connection_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/link_connection_color** = ``Color(1, 0.5, 1, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/link_connection_color"></div>

Color to use to display navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/navigation/link_connection_disabled_color"></div>

[`Color`](class_color.md) **debug/shapes/navigation/link_connection_disabled_color** = ``Color(0.5, 0.5, 0.5, 1)`` <div id="class_projectsettings_property_debug/shapes/navigation/link_connection_disabled_color"></div>

Color to use to display disabled navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/paths/geometry_color"></div>

[`Color`](class_color.md) **debug/shapes/paths/geometry_color** = ``Color(0.1, 1, 0.7, 0.4)`` <div id="class_projectsettings_property_debug/shapes/paths/geometry_color"></div>

Color of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_debug/shapes/paths/geometry_width"></div>

[`float`](class_float.md) **debug/shapes/paths/geometry_width** = ``2.0`` <div id="class_projectsettings_property_debug/shapes/paths/geometry_width"></div>

Line width of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver"></div>

[`String`](class_string.md) **display/display_server/driver** <div id="class_projectsettings_property_display/display_server/driver"></div>

Sets the driver to be used by the display server. This property can not be edited directly, instead, set the driver using the platform-specific overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver.android"></div>

[`String`](class_string.md) **display/display_server/driver.android** <div id="class_projectsettings_property_display/display_server/driver.android"></div>

Android override for [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver.ios"></div>

[`String`](class_string.md) **display/display_server/driver.ios** <div id="class_projectsettings_property_display/display_server/driver.ios"></div>

iOS override for [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver.linuxbsd"></div>

[`String`](class_string.md) **display/display_server/driver.linuxbsd** <div id="class_projectsettings_property_display/display_server/driver.linuxbsd"></div>

LinuxBSD override for [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver.macos"></div>

[`String`](class_string.md) **display/display_server/driver.macos** <div id="class_projectsettings_property_display/display_server/driver.macos"></div>

MacOS override for [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/display_server/driver.windows"></div>

[`String`](class_string.md) **display/display_server/driver.windows** <div id="class_projectsettings_property_display/display_server/driver.windows"></div>

Windows override for [`display/display_server/driver`](class_projectsettings.md#class_projectsettings_property_display/display_server/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/mouse_cursor/custom_image"></div>

[`String`](class_string.md) **display/mouse_cursor/custom_image** = ``""`` <div id="class_projectsettings_property_display/mouse_cursor/custom_image"></div>

Custom image for the mouse cursor (limited to 256×256).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/mouse_cursor/custom_image_hotspot"></div>

[`Vector2`](class_vector2.md) **display/mouse_cursor/custom_image_hotspot** = ``Vector2(0, 0)`` <div id="class_projectsettings_property_display/mouse_cursor/custom_image_hotspot"></div>

Hotspot for the custom mouse cursor image.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/mouse_cursor/tooltip_position_offset"></div>

[`Vector2`](class_vector2.md) **display/mouse_cursor/tooltip_position_offset** = ``Vector2(10, 10)`` <div id="class_projectsettings_property_display/mouse_cursor/tooltip_position_offset"></div>

Position offset for tooltips, relative to the mouse cursor's hotspot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/dpi/allow_hidpi"></div>

[`bool`](class_bool.md) **display/window/dpi/allow_hidpi** = ``true`` <div id="class_projectsettings_property_display/window/dpi/allow_hidpi"></div>

If `true`, allows HiDPI display on Windows, macOS, Android, iOS and Web. If `false`, the platform's low-DPI fallback will be used on HiDPI displays, which causes the window to be displayed in a blurry or pixelated manner (and can cause various window management bugs). Therefore, it is recommended to make your project scale to [*multiple resolutions*](../tutorials/rendering/multiple_resolutions) instead of disabling this setting.

 **Note:** This setting has no effect on Linux as DPI-awareness fallbacks are not supported there.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/energy_saving/keep_screen_on"></div>

[`bool`](class_bool.md) **display/window/energy_saving/keep_screen_on** = ``true`` <div id="class_projectsettings_property_display/window/energy_saving/keep_screen_on"></div>

If `true`, keeps the screen on (even in case of inactivity), so the screensaver does not take over. Works on desktop and mobile platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/frame_pacing/android/enable_frame_pacing"></div>

[`bool`](class_bool.md) **display/window/frame_pacing/android/enable_frame_pacing** = ``true`` <div id="class_projectsettings_property_display/window/frame_pacing/android/enable_frame_pacing"></div>

Enable Swappy for stable frame pacing on Android. Highly recommended.

 **Note:** This option will be forced off when using OpenXR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/frame_pacing/android/swappy_mode"></div>

[`int`](class_int.md) **display/window/frame_pacing/android/swappy_mode** = ``2`` <div id="class_projectsettings_property_display/window/frame_pacing/android/swappy_mode"></div>

Swappy mode to use. The options are:

- pipeline_forced_on: Try to honor [`Engine.max_fps`](class_engine.md#class_engine_property_max_fps). Pipelining is always on. This is the same behavior as Desktop PC.

- auto_fps_pipeline_forced_on: Autocalculate max fps. Actual max_fps will be between 0 and [`Engine.max_fps`](class_engine.md#class_engine_property_max_fps). While this sounds convenient, beware that Swappy will often downgrade max fps until it finds something that can be met and sustained. That means if your game runs between 40fps and 60fps on a 60hz screen, after some time Swappy will downgrade max fps so that the game renders at perfect 30fps.

- auto_fps_auto_pipeline: Same as auto_fps_pipeline_forced_on, but if Swappy detects that rendering is very fast (e.g. it takes < 8ms to render on a 60hz screen) Swappy will disable pipelining to minimize input latency. This is the default.

 **Note:** If [`Engine.max_fps`](class_engine.md#class_engine_property_max_fps) is 0, actual max_fps will considered as to be the screen's refresh rate (often 60hz, 90hz or 120hz depending on device model and OS settings).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/handheld/orientation"></div>

[`int`](class_int.md) **display/window/handheld/orientation** = ``0`` <div id="class_projectsettings_property_display/window/handheld/orientation"></div>

The default screen orientation to use on mobile devices. See [ScreenOrientation](#enum_displayserver_screenorientation) for possible values.

 **Note:** When set to a portrait orientation, this project setting does not flip the project resolution's width and height automatically. Instead, you have to set [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width) and [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height) accordingly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/ios/allow_high_refresh_rate"></div>

[`bool`](class_bool.md) **display/window/ios/allow_high_refresh_rate** = ``true`` <div id="class_projectsettings_property_display/window/ios/allow_high_refresh_rate"></div>

If `true`, iOS devices that support high refresh rate/"ProMotion" will be allowed to render at up to 120 frames per second.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/ios/hide_home_indicator"></div>

[`bool`](class_bool.md) **display/window/ios/hide_home_indicator** = ``true`` <div id="class_projectsettings_property_display/window/ios/hide_home_indicator"></div>

If `true`, the home indicator is hidden automatically. This only affects iOS devices without a physical home button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/ios/hide_status_bar"></div>

[`bool`](class_bool.md) **display/window/ios/hide_status_bar** = ``true`` <div id="class_projectsettings_property_display/window/ios/hide_status_bar"></div>

If `true`, the status bar is hidden while the app is running.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/ios/suppress_ui_gesture"></div>

[`bool`](class_bool.md) **display/window/ios/suppress_ui_gesture** = ``true`` <div id="class_projectsettings_property_display/window/ios/suppress_ui_gesture"></div>

If `true`, it will require two swipes to access iOS UI that uses gestures.

 **Note:** This setting has no effect on the home indicator if `hide_home_indicator` is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/per_pixel_transparency/allowed"></div>

[`bool`](class_bool.md) **display/window/per_pixel_transparency/allowed** = ``false`` <div id="class_projectsettings_property_display/window/per_pixel_transparency/allowed"></div>

If `true`, allows per-pixel transparency for the window background. This affects performance, so leave it on `false` unless you need it. See also [`display/window/size/transparent`](class_projectsettings.md#class_projectsettings_property_display/window/size/transparent) and [`rendering/viewport/transparent_background`](class_projectsettings.md#class_projectsettings_property_rendering/viewport/transparent_background).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/always_on_top"></div>

[`bool`](class_bool.md) **display/window/size/always_on_top** = ``false`` <div id="class_projectsettings_property_display/window/size/always_on_top"></div>

Forces the main window to be always on top.

 **Note:** This setting is ignored on iOS, Android, and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/borderless"></div>

[`bool`](class_bool.md) **display/window/size/borderless** = ``false`` <div id="class_projectsettings_property_display/window/size/borderless"></div>

Forces the main window to be borderless.

 **Note:** This setting is ignored on iOS, Android, and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/extend_to_title"></div>

[`bool`](class_bool.md) **display/window/size/extend_to_title** = ``false`` <div id="class_projectsettings_property_display/window/size/extend_to_title"></div>

Main window content is expanded to the full size of the window. Unlike a borderless window, the frame is left intact and can be used to resize the window, and the title bar is transparent, but has minimize/maximize/close buttons.

 **Note:** This setting is implemented only on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/initial_position"></div>

[`Vector2i`](class_vector2i.md) **display/window/size/initial_position** = ``Vector2i(0, 0)`` <div id="class_projectsettings_property_display/window/size/initial_position"></div>

Main window initial position (in virtual desktop coordinates), this setting is used only if [`display/window/size/initial_position_type`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_position_type) is set to "Absolute" (`0`).

 **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of [`EditorSettings.run/window_placement/rect_custom_position`](class_editorsettings.md#class_editorsettings_property_run/window_placement/rect_custom_position) is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/initial_position_type"></div>

[`int`](class_int.md) **display/window/size/initial_position_type** = ``1`` <div id="class_projectsettings_property_display/window/size/initial_position_type"></div>

Main window initial position.

 `0` - "Absolute", [`display/window/size/initial_position`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_position) is used to set window position.

 `1` - "Primary Screen Center".

 `2` - "Other Screen Center", [`display/window/size/initial_screen`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_screen) is used to set the screen.

 **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of [`EditorSettings.run/window_placement/rect`](class_editorsettings.md#class_editorsettings_property_run/window_placement/rect) is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/initial_screen"></div>

[`int`](class_int.md) **display/window/size/initial_screen** = ``0`` <div id="class_projectsettings_property_display/window/size/initial_screen"></div>

Main window initial screen, this setting is used only if [`display/window/size/initial_position_type`](class_projectsettings.md#class_projectsettings_property_display/window/size/initial_position_type) is set to "Other Screen Center" (`2`).

 **Note:** This setting only affects the exported project, or when the project is run from the command line. In the editor, the value of [`EditorSettings.run/window_placement/screen`](class_editorsettings.md#class_editorsettings_property_run/window_placement/screen) is used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/mode"></div>

[`int`](class_int.md) **display/window/size/mode** = ``0`` <div id="class_projectsettings_property_display/window/size/mode"></div>

Main window mode. See [WindowMode](#enum_displayserver_windowmode) for possible values and how each mode behaves.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/no_focus"></div>

[`bool`](class_bool.md) **display/window/size/no_focus** = ``false`` <div id="class_projectsettings_property_display/window/size/no_focus"></div>

Main window can't be focused. No-focus window will ignore all input, except mouse clicks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/resizable"></div>

[`bool`](class_bool.md) **display/window/size/resizable** = ``true`` <div id="class_projectsettings_property_display/window/size/resizable"></div>

If `true`, allows the window to be resizable by default.

 **Note:** This property is only read when the project starts. To change whether the window is resizable at runtime, set [`Window.unresizable`](class_window.md#class_window_property_unresizable) instead on the root Window, which can be retrieved using `get_viewport().get_window()`. [`Window.unresizable`](class_window.md#class_window_property_unresizable) takes the opposite value of this setting.

 **Note:** Certain window managers can be configured to ignore the non-resizable status of a window. Do not rely on this setting as a guarantee that the window will *never* be resizable.

 **Note:** This setting is ignored on iOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/sharp_corners"></div>

[`bool`](class_bool.md) **display/window/size/sharp_corners** = ``false`` <div id="class_projectsettings_property_display/window/size/sharp_corners"></div>

If `true`, the main window uses sharp corners by default.

 **Note:** This property is implemented only on Windows (11).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/transparent"></div>

[`bool`](class_bool.md) **display/window/size/transparent** = ``false`` <div id="class_projectsettings_property_display/window/size/transparent"></div>

If `true`, enables a window manager hint that the main window background *can* be transparent. This does not make the background actually transparent. For the background to be transparent, the root viewport must also be made transparent by enabling [`rendering/viewport/transparent_background`](class_projectsettings.md#class_projectsettings_property_rendering/viewport/transparent_background).

 **Note:** To use a transparent splash screen, set [`application/boot_splash/bg_color`](class_projectsettings.md#class_projectsettings_property_application/boot_splash/bg_color) to `Color(0, 0, 0, 0)`.

 **Note:** This setting has no effect if [`display/window/per_pixel_transparency/allowed`](class_projectsettings.md#class_projectsettings_property_display/window/per_pixel_transparency/allowed) is set to `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/viewport_height"></div>

[`int`](class_int.md) **display/window/size/viewport_height** = ``648`` <div id="class_projectsettings_property_display/window/size/viewport_height"></div>

Sets the game's main viewport height. On desktop platforms, this is also the initial window height, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the `canvas_items` or `viewport` stretch modes. See also [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width), [`display/window/size/window_width_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_width_override) and [`display/window/size/window_height_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_height_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/viewport_width"></div>

[`int`](class_int.md) **display/window/size/viewport_width** = ``1152`` <div id="class_projectsettings_property_display/window/size/viewport_width"></div>

Sets the game's main viewport width. On desktop platforms, this is also the initial window width, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the `canvas_items` or `viewport` stretch modes. See also [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height), [`display/window/size/window_width_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_width_override) and [`display/window/size/window_height_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_height_override).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/window_height_override"></div>

[`int`](class_int.md) **display/window/size/window_height_override** = ``0`` <div id="class_projectsettings_property_display/window/size/window_height_override"></div>

On desktop platforms, overrides the game's initial window height. See also [`display/window/size/window_width_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_width_override), [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width) and [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height).

 **Note:** By default, or when set to `0`, the initial window height is the [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height). This setting is ignored on iOS, Android, and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/size/window_width_override"></div>

[`int`](class_int.md) **display/window/size/window_width_override** = ``0`` <div id="class_projectsettings_property_display/window/size/window_width_override"></div>

On desktop platforms, overrides the game's initial window width. See also [`display/window/size/window_height_override`](class_projectsettings.md#class_projectsettings_property_display/window/size/window_height_override), [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width) and [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height).

 **Note:** By default, or when set to `0`, the initial window width is the [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width). This setting is ignored on iOS, Android, and Web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/stretch/aspect"></div>

[`String`](class_string.md) **display/window/stretch/aspect** = ``"keep"`` <div id="class_projectsettings_property_display/window/stretch/aspect"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/stretch/mode"></div>

[`String`](class_string.md) **display/window/stretch/mode** = ``"disabled"`` <div id="class_projectsettings_property_display/window/stretch/mode"></div>

Defines how the base size is stretched to fit the resolution of the window or screen.

 **"disabled"**: No stretching happens. One unit in the scene corresponds to one pixel on the screen. In this mode, [`display/window/stretch/aspect`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/aspect) has no effect. Recommended for non-game applications.

 **"canvas_items"**: The base size specified in width and height in the project settings is stretched to cover the whole screen (taking [`display/window/stretch/aspect`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/aspect) into account). This means that everything is rendered directly at the target resolution. 3D is unaffected, while in 2D, there is no longer a 1:1 correspondence between sprite pixels and screen pixels, which may result in scaling artifacts. Recommended for most games that don't use a pixel art aesthetic, although it is possible to use this stretch mode for pixel art games too (especially in 3D).

 **"viewport"**: The size of the root [`Viewport`](class_viewport.md) is set precisely to the base size specified in the Project Settings' Display section. The scene is rendered to this viewport first. Finally, this viewport is scaled to fit the screen (taking [`display/window/stretch/aspect`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/aspect) into account). Recommended for games that use a pixel art aesthetic.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/stretch/scale"></div>

[`float`](class_float.md) **display/window/stretch/scale** = ``1.0`` <div id="class_projectsettings_property_display/window/stretch/scale"></div>

The scale factor multiplier to use for 2D elements. This multiplies the final scale factor determined by [`display/window/stretch/mode`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/mode). If using the **Disabled** stretch mode, this scale factor is applied as-is. This can be adjusted to make the UI easier to read on certain displays.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/stretch/scale_mode"></div>

[`String`](class_string.md) **display/window/stretch/scale_mode** = ``"fractional"`` <div id="class_projectsettings_property_display/window/stretch/scale_mode"></div>

The policy to use to determine the final scale factor for 2D elements. This affects how [`display/window/stretch/scale`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/scale) is applied, in addition to the automatic scale factor determined by [`display/window/stretch/mode`](class_projectsettings.md#class_projectsettings_property_display/window/stretch/mode).

 **"fractional"**: The scale factor will not be modified.

 **"integer"**: The scale factor will be floored to an integer value, which means that the screen size will always be an integer multiple of the base viewport size. This provides a crisp pixel art appearance.

 **Note:** When using integer scaling with a stretch mode, resizing the window to be smaller than the base viewport size will clip the contents. Consider preventing that by setting [`Window.min_size`](class_window.md#class_window_property_min_size) to the same value as the base viewport size defined in [`display/window/size/viewport_width`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_width) and [`display/window/size/viewport_height`](class_projectsettings.md#class_projectsettings_property_display/window/size/viewport_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/subwindows/embed_subwindows"></div>

[`bool`](class_bool.md) **display/window/subwindows/embed_subwindows** = ``true`` <div id="class_projectsettings_property_display/window/subwindows/embed_subwindows"></div>

If `true`, subwindows are embedded in the main window (this is also called single-window mode). Single-window mode can be faster as it does not need to create a separate window for every popup and tooltip, which can be a slow operation depending on the operating system and rendering method in use.

If `false`, subwindows are created as separate windows (this is also called multi-window mode). This allows them to be moved outside the main window and use native operating system window decorations.

This is equivalent to [`EditorSettings.interface/editor/single_window_mode`](class_editorsettings.md#class_editorsettings_property_interface/editor/single_window_mode) in the editor, except the setting's value is inverted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_display/window/vsync/vsync_mode"></div>

[`int`](class_int.md) **display/window/vsync/vsync_mode** = ``1`` <div id="class_projectsettings_property_display/window/vsync/vsync_mode"></div>

Sets the V-Sync mode for the main game window. The editor's own V-Sync mode can be set using [`EditorSettings.interface/editor/vsync_mode`](class_editorsettings.md#class_editorsettings_property_interface/editor/vsync_mode).

See [VSyncMode](#enum_displayserver_vsyncmode) for possible values and how they affect the behavior of your application.

Depending on the platform and rendering method, the engine will fall back to **Enabled** if the desired mode is not supported.

V-Sync can be disabled on the command line using the `--disable-vsync` [*command line argument*](../tutorials/editor/command_line_tutorial).

 **Note:** The **Adaptive** and **Mailbox** V-Sync modes are only supported in the Forward+ and Mobile rendering methods, not Compatibility.

 **Note:** This property is only read when the project starts. To change the V-Sync mode at runtime, call [`DisplayServer.window_set_vsync_mode`](class_displayserver.md#class_displayserver_method_window_set_vsync_mode) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_dotnet/project/assembly_name"></div>

[`String`](class_string.md) **dotnet/project/assembly_name** = ``""`` <div id="class_projectsettings_property_dotnet/project/assembly_name"></div>

Name of the .NET assembly. This name is used as the name of the `.csproj` and `.sln` files. By default, it's set to the name of the project ([`application/config/name`](class_projectsettings.md#class_projectsettings_property_application/config/name)) allowing to change it in the future without affecting the .NET assembly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_dotnet/project/assembly_reload_attempts"></div>

[`int`](class_int.md) **dotnet/project/assembly_reload_attempts** = ``3`` <div id="class_projectsettings_property_dotnet/project/assembly_reload_attempts"></div>

Number of times to attempt assembly reloading after rebuilding .NET assemblies. Effectively also the timeout in seconds to wait for unloading of script assemblies to finish.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_dotnet/project/solution_directory"></div>

[`String`](class_string.md) **dotnet/project/solution_directory** = ``""`` <div id="class_projectsettings_property_dotnet/project/solution_directory"></div>

Directory that contains the `.sln` file. By default, the `.sln` files is in the root of the project directory, next to the `project.godot` and `.csproj` files.

Changing this value allows setting up a multi-project scenario where there are multiple `.csproj`. Keep in mind that the Godot project is considered one of the C# projects in the workspace and it's root directory should contain the `project.godot` and `.csproj` next to each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/export/convert_text_resources_to_binary"></div>

[`bool`](class_bool.md) **editor/export/convert_text_resources_to_binary** = ``true`` <div id="class_projectsettings_property_editor/export/convert_text_resources_to_binary"></div>

If `true`, text resource (`tres`) and text scene (`tscn`) files are converted to their corresponding binary format on export. This decreases file sizes and speeds up loading slightly.

 **Note:** Because a resource's file extension may change in an exported project, it is heavily recommended to use [`@GDScript.load`](class_@gdscript.md#class_@gdscript_method_load) or [`ResourceLoader`](class_resourceloader.md) instead of [`FileAccess`](class_fileaccess.md) to load resources dynamically.

 **Note:** The project settings file (`project.godot`) will always be converted to binary on export, regardless of this setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/import/atlas_max_width"></div>

[`int`](class_int.md) **editor/import/atlas_max_width** = ``2048`` <div id="class_projectsettings_property_editor/import/atlas_max_width"></div>

The maximum width to use when importing textures as an atlas. The value will be rounded to the nearest power of two when used. Use this to prevent imported textures from growing too large in the other direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/import/reimport_missing_imported_files"></div>

[`bool`](class_bool.md) **editor/import/reimport_missing_imported_files** = ``true`` <div id="class_projectsettings_property_editor/import/reimport_missing_imported_files"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/import/use_multiple_threads"></div>

[`bool`](class_bool.md) **editor/import/use_multiple_threads** = ``true`` <div id="class_projectsettings_property_editor/import/use_multiple_threads"></div>

If `true` importing of resources is run on multiple threads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/disable_vsync"></div>

[`bool`](class_bool.md) **editor/movie_writer/disable_vsync** = ``false`` <div id="class_projectsettings_property_editor/movie_writer/disable_vsync"></div>

If `true`, requests V-Sync to be disabled when writing a movie (similar to setting [`display/window/vsync/vsync_mode`](class_projectsettings.md#class_projectsettings_property_display/window/vsync/vsync_mode) to **Disabled**). This can speed up video writing if the hardware is fast enough to render, encode and save the video at a framerate higher than the monitor's refresh rate.

 **Note:** [`editor/movie_writer/disable_vsync`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/disable_vsync) has no effect if the operating system or graphics driver forces V-Sync with no way for applications to disable it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/fps"></div>

[`int`](class_int.md) **editor/movie_writer/fps** = ``60`` <div id="class_projectsettings_property_editor/movie_writer/fps"></div>

The number of frames per second to record in the video when writing a movie. Simulation speed will adjust to always match the specified framerate, which means the engine will appear to run slower at higher [`editor/movie_writer/fps`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/fps) values. Certain FPS values will require you to adjust [`editor/movie_writer/mix_rate`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/mix_rate) to prevent audio from desynchronizing over time.

This can be specified manually on the command line using the `--fixed-fps <fps>` [*command line argument*](../tutorials/editor/command_line_tutorial).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/mix_rate"></div>

[`int`](class_int.md) **editor/movie_writer/mix_rate** = ``48000`` <div id="class_projectsettings_property_editor/movie_writer/mix_rate"></div>

The audio mix rate to use in the recorded audio when writing a movie (in Hz). This can be different from [`audio/driver/mix_rate`](class_projectsettings.md#class_projectsettings_property_audio/driver/mix_rate), but this value must be divisible by [`editor/movie_writer/fps`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/fps) to prevent audio from desynchronizing over time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/mjpeg_quality"></div>

[`float`](class_float.md) **editor/movie_writer/mjpeg_quality** = ``0.75`` <div id="class_projectsettings_property_editor/movie_writer/mjpeg_quality"></div>

The JPEG quality to use when writing a video to an AVI file, between `0.01` and `1.0` (inclusive). Higher `quality` values result in better-looking output at the cost of larger file sizes. Recommended `quality` values are between `0.75` and `0.9`. Even at quality `1.0`, JPEG compression remains lossy.

 **Note:** This does not affect the audio quality or writing PNG image sequences.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/movie_file"></div>

[`String`](class_string.md) **editor/movie_writer/movie_file** = ``""`` <div id="class_projectsettings_property_editor/movie_writer/movie_file"></div>

The output path for the movie. The file extension determines the [`MovieWriter`](class_moviewriter.md) that will be used.

Godot has 2 built-in [`MovieWriter`](class_moviewriter.md) s:

- AVI container with MJPEG for video and uncompressed audio (`.avi` file extension). Lossy compression, medium file sizes, fast encoding. The lossy compression quality can be adjusted by changing [`editor/movie_writer/mjpeg_quality`](class_projectsettings.md#class_projectsettings_property_editor/movie_writer/mjpeg_quality). The resulting file can be viewed in most video players, but it must be converted to another format for viewing on the web or by Godot with [`VideoStreamPlayer`](class_videostreamplayer.md). MJPEG does not support transparency. AVI output is currently limited to a file of 4 GB in size at most.

- PNG image sequence for video and WAV for audio (`.png` file extension). Lossless compression, large file sizes, slow encoding. Designed to be encoded to a video file with another tool such as [*FFmpeg*](https://ffmpeg.org/) after recording. Transparency is currently not supported, even if the root viewport is set to be transparent.

If you need to encode to a different format or pipe a stream through third-party software, you can extend this [`MovieWriter`](class_moviewriter.md) class to create your own movie writers.

When using PNG output, the frame number will be appended at the end of the file name. It starts from 0 and is padded with 8 digits to ensure correct sorting and easier processing. For example, if the output path is `/tmp/hello.png`, the first two frames will be `/tmp/hello00000000.png` and `/tmp/hello00000001.png`. The audio will be saved at `/tmp/hello.wav`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/movie_writer/speaker_mode"></div>

[`int`](class_int.md) **editor/movie_writer/speaker_mode** = ``0`` <div id="class_projectsettings_property_editor/movie_writer/speaker_mode"></div>

The speaker mode to use in the recorded audio when writing a movie. See [SpeakerMode](#enum_audioserver_speakermode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/default_signal_callback_name"></div>

[`String`](class_string.md) **editor/naming/default_signal_callback_name** = ``"_on_{node_name}_{signal_name}"`` <div id="class_projectsettings_property_editor/naming/default_signal_callback_name"></div>

The format of the default signal callback name (in the Signal Connection Dialog). The following substitutions are available: `{NodeName}`, `{nodeName}`, `{node_name}`, `{SignalName}`, `{signalName}`, and `{signal_name}`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/default_signal_callback_to_self_name"></div>

[`String`](class_string.md) **editor/naming/default_signal_callback_to_self_name** = ``"_on_{signal_name}"`` <div id="class_projectsettings_property_editor/naming/default_signal_callback_to_self_name"></div>

The format of the default signal callback name when a signal connects to the same node that emits it (in the Signal Connection Dialog). The following substitutions are available: `{NodeName}`, `{nodeName}`, `{node_name}`, `{SignalName}`, `{signalName}`, and `{signal_name}`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/node_name_casing"></div>

[`int`](class_int.md) **editor/naming/node_name_casing** = ``0`` <div id="class_projectsettings_property_editor/naming/node_name_casing"></div>

When creating node names automatically, set the type of casing to use in this project. This is mostly an editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/node_name_num_separator"></div>

[`int`](class_int.md) **editor/naming/node_name_num_separator** = ``0`` <div id="class_projectsettings_property_editor/naming/node_name_num_separator"></div>

What to use to separate node name from number. This is mostly an editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/scene_name_casing"></div>

[`int`](class_int.md) **editor/naming/scene_name_casing** = ``2`` <div id="class_projectsettings_property_editor/naming/scene_name_casing"></div>

When generating scene file names from scene root node, set the type of casing to use in this project. This is mostly an editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/naming/script_name_casing"></div>

[`int`](class_int.md) **editor/naming/script_name_casing** = ``0`` <div id="class_projectsettings_property_editor/naming/script_name_casing"></div>

When generating script file names from the selected node, set the type of casing to use in this project. This is mostly an editor setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/run/main_run_args"></div>

[`String`](class_string.md) **editor/run/main_run_args** = ``""`` <div id="class_projectsettings_property_editor/run/main_run_args"></div>

The command-line arguments to append to Godot's own command line when running the project. This doesn't affect the editor itself.

It is possible to make another executable run Godot by using the `%command%` placeholder. The placeholder will be replaced with Godot's own command line. Program-specific arguments should be placed *before* the placeholder, whereas Godot-specific arguments should be placed *after* the placeholder.

For example, this can be used to force the project to run on the dedicated GPU in an NVIDIA Optimus system on Linux:

```text

    prime-run %command%
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/script/search_in_file_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **editor/script/search_in_file_extensions** <div id="class_projectsettings_property_editor/script/search_in_file_extensions"></div>

Text-based file extensions to include in the script editor's "Find in Files" feature. You can add e.g. `tscn` if you wish to also parse your scene files, especially if you use built-in scripts which are serialized in the scene files.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedStringArray`](class_packedstringarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/script/templates_search_path"></div>

[`String`](class_string.md) **editor/script/templates_search_path** = ``"res://script_templates"`` <div id="class_projectsettings_property_editor/script/templates_search_path"></div>

Search path for project-specific script templates. Godot will search for script templates both in the editor-specific path and in this project-specific path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/version_control/autoload_on_startup"></div>

[`bool`](class_bool.md) **editor/version_control/autoload_on_startup** = ``false`` <div id="class_projectsettings_property_editor/version_control/autoload_on_startup"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_editor/version_control/plugin_name"></div>

[`String`](class_string.md) **editor/version_control/plugin_name** = ``""`` <div id="class_projectsettings_property_editor/version_control/plugin_name"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/blender/enabled"></div>

[`bool`](class_bool.md) **filesystem/import/blender/enabled** = ``true`` <div id="class_projectsettings_property_filesystem/import/blender/enabled"></div>

If `true`, Blender 3D scene files with the `.blend` extension will be imported by converting them to glTF 2.0.

This requires configuring a path to a Blender executable in the editor settings at `filesystem/import/blender/blender_path`. Blender 3.0 or later is required.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/blender/enabled.android"></div>

[`bool`](class_bool.md) **filesystem/import/blender/enabled.android** = ``false`` <div id="class_projectsettings_property_filesystem/import/blender/enabled.android"></div>

Override for [`filesystem/import/blender/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled) on Android where Blender can't easily be accessed from Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/blender/enabled.web"></div>

[`bool`](class_bool.md) **filesystem/import/blender/enabled.web** = ``false`` <div id="class_projectsettings_property_filesystem/import/blender/enabled.web"></div>

Override for [`filesystem/import/blender/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/blender/enabled) on the Web where Blender can't easily be accessed from Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/fbx2gltf/enabled"></div>

[`bool`](class_bool.md) **filesystem/import/fbx2gltf/enabled** = ``true`` <div id="class_projectsettings_property_filesystem/import/fbx2gltf/enabled"></div>

If `true`, Autodesk FBX 3D scene files with the `.fbx` extension will be imported by converting them to glTF 2.0.

This requires configuring a path to an FBX2glTF executable in the editor settings at [`EditorSettings.filesystem/import/fbx/fbx2gltf_path`](class_editorsettings.md#class_editorsettings_property_filesystem/import/fbx/fbx2gltf_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/fbx2gltf/enabled.android"></div>

[`bool`](class_bool.md) **filesystem/import/fbx2gltf/enabled.android** = ``false`` <div id="class_projectsettings_property_filesystem/import/fbx2gltf/enabled.android"></div>

Override for [`filesystem/import/fbx2gltf/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/fbx2gltf/enabled) on Android where FBX2glTF can't easily be accessed from Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_filesystem/import/fbx2gltf/enabled.web"></div>

[`bool`](class_bool.md) **filesystem/import/fbx2gltf/enabled.web** = ``false`` <div id="class_projectsettings_property_filesystem/import/fbx2gltf/enabled.web"></div>

Override for [`filesystem/import/fbx2gltf/enabled`](class_projectsettings.md#class_projectsettings_property_filesystem/import/fbx2gltf/enabled) on the Web where FBX2glTF can't easily be accessed from Godot.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/common/default_scroll_deadzone"></div>

[`int`](class_int.md) **gui/common/default_scroll_deadzone** = ``0`` <div id="class_projectsettings_property_gui/common/default_scroll_deadzone"></div>

Default value for [`ScrollContainer.scroll_deadzone`](class_scrollcontainer.md#class_scrollcontainer_property_scroll_deadzone), which will be used for all [`ScrollContainer`](class_scrollcontainer.md) s unless overridden.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/common/snap_controls_to_pixels"></div>

[`bool`](class_bool.md) **gui/common/snap_controls_to_pixels** = ``true`` <div id="class_projectsettings_property_gui/common/snap_controls_to_pixels"></div>

If `true`, snaps [`Control`](class_control.md) node vertices to the nearest pixel to ensure they remain crisp even when the camera moves or zooms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/common/swap_cancel_ok"></div>

[`bool`](class_bool.md) **gui/common/swap_cancel_ok** <div id="class_projectsettings_property_gui/common/swap_cancel_ok"></div>

If `true`, swaps **Cancel** and **OK** buttons in dialogs on Windows to follow interface conventions. [`DisplayServer.get_swap_cancel_ok`](class_displayserver.md#class_displayserver_method_get_swap_cancel_ok) can be used to query whether buttons are swapped at run-time.

 **Note:** This doesn't affect native dialogs such as the ones spawned by [`DisplayServer.dialog_show`](class_displayserver.md#class_displayserver_method_dialog_show).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/common/text_edit_undo_stack_max_size"></div>

[`int`](class_int.md) **gui/common/text_edit_undo_stack_max_size** = ``1024`` <div id="class_projectsettings_property_gui/common/text_edit_undo_stack_max_size"></div>

Maximum undo/redo history size for [`TextEdit`](class_textedit.md) fields.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/fonts/dynamic_fonts/use_oversampling"></div>

[`bool`](class_bool.md) **gui/fonts/dynamic_fonts/use_oversampling** = ``true`` <div id="class_projectsettings_property_gui/fonts/dynamic_fonts/use_oversampling"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/custom"></div>

[`String`](class_string.md) **gui/theme/custom** = ``""`` <div id="class_projectsettings_property_gui/theme/custom"></div>

Path to a custom [`Theme`](class_theme.md) resource file to use for the project (`.theme` or generic `.tres`/`.res` extension).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/custom_font"></div>

[`String`](class_string.md) **gui/theme/custom_font** = ``""`` <div id="class_projectsettings_property_gui/theme/custom_font"></div>

Path to a custom [`Font`](class_font.md) resource to use as default for all GUI elements of the project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_font_antialiasing"></div>

[`int`](class_int.md) **gui/theme/default_font_antialiasing** = ``1`` <div id="class_projectsettings_property_gui/theme/default_font_antialiasing"></div>

Font anti-aliasing mode for the default project font. See [`FontFile.antialiasing`](class_fontfile.md#class_fontfile_property_antialiasing).

 **Note:** This setting does not affect custom [`Font`](class_font.md) s used within the project. Use the **Import** dock for that instead (see [`ResourceImporterDynamicFont.antialiasing`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_antialiasing)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_font_generate_mipmaps"></div>

[`bool`](class_bool.md) **gui/theme/default_font_generate_mipmaps** = ``false`` <div id="class_projectsettings_property_gui/theme/default_font_generate_mipmaps"></div>

If set to `true`, the default font will have mipmaps generated. This prevents text from looking grainy when a [`Control`](class_control.md) is scaled down, or when a [`Label3D`](class_label3d.md) is viewed from a long distance (if [`Label3D.texture_filter`](class_label3d.md#class_label3d_property_texture_filter) is set to a mode that displays mipmaps).

Enabling [`gui/theme/default_font_generate_mipmaps`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_generate_mipmaps) increases font generation time and memory usage. Only enable this setting if you actually need it.

 **Note:** This setting does not affect custom [`Font`](class_font.md) s used within the project. Use the **Import** dock for that instead (see [`ResourceImporterDynamicFont.generate_mipmaps`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_generate_mipmaps)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_font_hinting"></div>

[`int`](class_int.md) **gui/theme/default_font_hinting** = ``1`` <div id="class_projectsettings_property_gui/theme/default_font_hinting"></div>

Font hinting mode for the default project font. See [`FontFile.hinting`](class_fontfile.md#class_fontfile_property_hinting).

 **Note:** This setting does not affect custom [`Font`](class_font.md) s used within the project. Use the **Import** dock for that instead (see [`ResourceImporterDynamicFont.hinting`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_hinting)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field"></div>

[`bool`](class_bool.md) **gui/theme/default_font_multichannel_signed_distance_field** = ``false`` <div id="class_projectsettings_property_gui/theme/default_font_multichannel_signed_distance_field"></div>

If set to `true`, the default font will use multichannel signed distance field (MSDF) for crisp rendering at any size. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [`Control`](class_control.md) s that are scaled down (or for [`Label3D`](class_label3d.md) s viewed from a long distance).

MSDF font rendering can be combined with [`gui/theme/default_font_generate_mipmaps`](class_projectsettings.md#class_projectsettings_property_gui/theme/default_font_generate_mipmaps) to further improve font rendering quality when scaled down.

 **Note:** This setting does not affect custom [`Font`](class_font.md) s used within the project. Use the **Import** dock for that instead (see [`ResourceImporterDynamicFont.multichannel_signed_distance_field`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_multichannel_signed_distance_field)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_font_subpixel_positioning"></div>

[`int`](class_int.md) **gui/theme/default_font_subpixel_positioning** = ``1`` <div id="class_projectsettings_property_gui/theme/default_font_subpixel_positioning"></div>

Font glyph subpixel positioning mode for the default project font. See [`FontFile.subpixel_positioning`](class_fontfile.md#class_fontfile_property_subpixel_positioning).

 **Note:** This setting does not affect custom [`Font`](class_font.md) s used within the project. Use the **Import** dock for that instead (see [`ResourceImporterDynamicFont.subpixel_positioning`](class_resourceimporterdynamicfont.md#class_resourceimporterdynamicfont_property_subpixel_positioning)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/default_theme_scale"></div>

[`float`](class_float.md) **gui/theme/default_theme_scale** = ``1.0`` <div id="class_projectsettings_property_gui/theme/default_theme_scale"></div>

The default scale factor for [`Control`](class_control.md) s, when not overridden by a [`Theme`](class_theme.md).

 **Note:** This property is only read when the project starts. To change the default scale at runtime, set [`ThemeDB.fallback_base_scale`](class_themedb.md#class_themedb_property_fallback_base_scale) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/theme/lcd_subpixel_layout"></div>

[`int`](class_int.md) **gui/theme/lcd_subpixel_layout** = ``1`` <div id="class_projectsettings_property_gui/theme/lcd_subpixel_layout"></div>

LCD subpixel layout used for font anti-aliasing. See [FontLCDSubpixelLayout](#enum_textserver_fontlcdsubpixellayout).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/timers/button_shortcut_feedback_highlight_time"></div>

[`float`](class_float.md) **gui/timers/button_shortcut_feedback_highlight_time** = ``0.2`` <div id="class_projectsettings_property_gui/timers/button_shortcut_feedback_highlight_time"></div>

When [`BaseButton.shortcut_feedback`](class_basebutton.md#class_basebutton_property_shortcut_feedback) is enabled, this is the time the [`BaseButton`](class_basebutton.md) will remain highlighted after a shortcut.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/timers/incremental_search_max_interval_msec"></div>

[`int`](class_int.md) **gui/timers/incremental_search_max_interval_msec** = ``2000`` <div id="class_projectsettings_property_gui/timers/incremental_search_max_interval_msec"></div>

Timer setting for incremental search in [`Tree`](class_tree.md), [`ItemList`](class_itemlist.md), etc. controls (in milliseconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/timers/text_edit_idle_detect_sec"></div>

[`float`](class_float.md) **gui/timers/text_edit_idle_detect_sec** = ``3`` <div id="class_projectsettings_property_gui/timers/text_edit_idle_detect_sec"></div>

Timer for detecting idle in [`TextEdit`](class_textedit.md) (in seconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/timers/tooltip_delay_sec"></div>

[`float`](class_float.md) **gui/timers/tooltip_delay_sec** = ``0.5`` <div id="class_projectsettings_property_gui/timers/tooltip_delay_sec"></div>

Default delay for tooltips (in seconds).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_gui/timers/tooltip_delay_sec.editor_hint"></div>

[`float`](class_float.md) **gui/timers/tooltip_delay_sec.editor_hint** = ``0.5`` <div id="class_projectsettings_property_gui/timers/tooltip_delay_sec.editor_hint"></div>

Delay for tooltips in the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_accept"></div>

[`Dictionary`](class_dictionary.md) **input/ui_accept** <div id="class_projectsettings_property_input/ui_accept"></div>

Default [`InputEventAction`](class_inputeventaction.md) to confirm a focused button, menu or list item, or validate input.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_cancel"></div>

[`Dictionary`](class_dictionary.md) **input/ui_cancel** <div id="class_projectsettings_property_input/ui_cancel"></div>

Default [`InputEventAction`](class_inputeventaction.md) to discard a modal or pending input.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_copy"></div>

[`Dictionary`](class_dictionary.md) **input/ui_copy** <div id="class_projectsettings_property_input/ui_copy"></div>

Default [`InputEventAction`](class_inputeventaction.md) to copy a selection to the clipboard.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_cut"></div>

[`Dictionary`](class_dictionary.md) **input/ui_cut** <div id="class_projectsettings_property_input/ui_cut"></div>

Default [`InputEventAction`](class_inputeventaction.md) to cut a selection to the clipboard.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_down"></div>

[`Dictionary`](class_dictionary.md) **input/ui_down** <div id="class_projectsettings_property_input/ui_down"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move down in the UI.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_end"></div>

[`Dictionary`](class_dictionary.md) **input/ui_end** <div id="class_projectsettings_property_input/ui_end"></div>

Default [`InputEventAction`](class_inputeventaction.md) to go to the end position of a [`Control`](class_control.md) (e.g. last item in an [`ItemList`](class_itemlist.md) or a [`Tree`](class_tree.md)), matching the behavior of [`@GlobalScope.KEY_END`](class_@globalscope.md#class_@globalscope_constant_key_end) on typical desktop UI systems.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_filedialog_refresh"></div>

[`Dictionary`](class_dictionary.md) **input/ui_filedialog_refresh** <div id="class_projectsettings_property_input/ui_filedialog_refresh"></div>

Default [`InputEventAction`](class_inputeventaction.md) to refresh the contents of the current directory of a [`FileDialog`](class_filedialog.md).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_filedialog_show_hidden"></div>

[`Dictionary`](class_dictionary.md) **input/ui_filedialog_show_hidden** <div id="class_projectsettings_property_input/ui_filedialog_show_hidden"></div>

Default [`InputEventAction`](class_inputeventaction.md) to toggle showing hidden files and directories in a [`FileDialog`](class_filedialog.md).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_filedialog_up_one_level"></div>

[`Dictionary`](class_dictionary.md) **input/ui_filedialog_up_one_level** <div id="class_projectsettings_property_input/ui_filedialog_up_one_level"></div>

Default [`InputEventAction`](class_inputeventaction.md) to go up one directory in a [`FileDialog`](class_filedialog.md).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_focus_next"></div>

[`Dictionary`](class_dictionary.md) **input/ui_focus_next** <div id="class_projectsettings_property_input/ui_focus_next"></div>

Default [`InputEventAction`](class_inputeventaction.md) to focus the next [`Control`](class_control.md) in the scene. The focus behavior can be configured via [`Control.focus_next`](class_control.md#class_control_property_focus_next).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_focus_prev"></div>

[`Dictionary`](class_dictionary.md) **input/ui_focus_prev** <div id="class_projectsettings_property_input/ui_focus_prev"></div>

Default [`InputEventAction`](class_inputeventaction.md) to focus the previous [`Control`](class_control.md) in the scene. The focus behavior can be configured via [`Control.focus_previous`](class_control.md#class_control_property_focus_previous).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_graph_delete"></div>

[`Dictionary`](class_dictionary.md) **input/ui_graph_delete** <div id="class_projectsettings_property_input/ui_graph_delete"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete a [`GraphNode`](class_graphnode.md) in a [`GraphEdit`](class_graphedit.md).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_graph_duplicate"></div>

[`Dictionary`](class_dictionary.md) **input/ui_graph_duplicate** <div id="class_projectsettings_property_input/ui_graph_duplicate"></div>

Default [`InputEventAction`](class_inputeventaction.md) to duplicate a [`GraphNode`](class_graphnode.md) in a [`GraphEdit`](class_graphedit.md).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_home"></div>

[`Dictionary`](class_dictionary.md) **input/ui_home** <div id="class_projectsettings_property_input/ui_home"></div>

Default [`InputEventAction`](class_inputeventaction.md) to go to the start position of a [`Control`](class_control.md) (e.g. first item in an [`ItemList`](class_itemlist.md) or a [`Tree`](class_tree.md)), matching the behavior of [`@GlobalScope.KEY_HOME`](class_@globalscope.md#class_@globalscope_constant_key_home) on typical desktop UI systems.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_left"></div>

[`Dictionary`](class_dictionary.md) **input/ui_left** <div id="class_projectsettings_property_input/ui_left"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move left in the UI.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_menu"></div>

[`Dictionary`](class_dictionary.md) **input/ui_menu** <div id="class_projectsettings_property_input/ui_menu"></div>

Default [`InputEventAction`](class_inputeventaction.md) to open a context menu in a text field.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_page_down"></div>

[`Dictionary`](class_dictionary.md) **input/ui_page_down** <div id="class_projectsettings_property_input/ui_page_down"></div>

Default [`InputEventAction`](class_inputeventaction.md) to go down a page in a [`Control`](class_control.md) (e.g. in an [`ItemList`](class_itemlist.md) or a [`Tree`](class_tree.md)), matching the behavior of [`@GlobalScope.KEY_PAGEDOWN`](class_@globalscope.md#class_@globalscope_constant_key_pagedown) on typical desktop UI systems.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_page_up"></div>

[`Dictionary`](class_dictionary.md) **input/ui_page_up** <div id="class_projectsettings_property_input/ui_page_up"></div>

Default [`InputEventAction`](class_inputeventaction.md) to go up a page in a [`Control`](class_control.md) (e.g. in an [`ItemList`](class_itemlist.md) or a [`Tree`](class_tree.md)), matching the behavior of [`@GlobalScope.KEY_PAGEUP`](class_@globalscope.md#class_@globalscope_constant_key_pageup) on typical desktop UI systems.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_paste"></div>

[`Dictionary`](class_dictionary.md) **input/ui_paste** <div id="class_projectsettings_property_input/ui_paste"></div>

Default [`InputEventAction`](class_inputeventaction.md) to paste from the clipboard.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_redo"></div>

[`Dictionary`](class_dictionary.md) **input/ui_redo** <div id="class_projectsettings_property_input/ui_redo"></div>

Default [`InputEventAction`](class_inputeventaction.md) to redo an undone action.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_right"></div>

[`Dictionary`](class_dictionary.md) **input/ui_right** <div id="class_projectsettings_property_input/ui_right"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move right in the UI.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_select"></div>

[`Dictionary`](class_dictionary.md) **input/ui_select** <div id="class_projectsettings_property_input/ui_select"></div>

Default [`InputEventAction`](class_inputeventaction.md) to select an item in a [`Control`](class_control.md) (e.g. in an [`ItemList`](class_itemlist.md) or a [`Tree`](class_tree.md)).

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_swap_input_direction"></div>

[`Dictionary`](class_dictionary.md) **input/ui_swap_input_direction** <div id="class_projectsettings_property_input/ui_swap_input_direction"></div>

Default [`InputEventAction`](class_inputeventaction.md) to swap input direction, i.e. change between left-to-right to right-to-left modes. Affects text-editing controls ([`LineEdit`](class_lineedit.md), [`TextEdit`](class_textedit.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_add_selection_for_next_occurrence"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_add_selection_for_next_occurrence** <div id="class_projectsettings_property_input/ui_text_add_selection_for_next_occurrence"></div>

If a selection is currently active with the last caret in text fields, searches for the next occurrence of the selection, adds a caret and selects the next occurrence.

If no selection is currently active with the last caret in text fields, selects the word currently under the caret.

The action can be performed sequentially for all occurrences of the selection of the last caret and for all existing carets.

The viewport is adjusted to the latest newly added caret.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_backspace"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_backspace** <div id="class_projectsettings_property_input/ui_text_backspace"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete the character before the text cursor.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_backspace_all_to_left"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_backspace_all_to_left** <div id="class_projectsettings_property_input/ui_text_backspace_all_to_left"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete **all** text before the text cursor.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_backspace_all_to_left.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_backspace_all_to_left.macos** <div id="class_projectsettings_property_input/ui_text_backspace_all_to_left.macos"></div>

macOS specific override for the shortcut to delete all text before the text cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_backspace_word"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_backspace_word** <div id="class_projectsettings_property_input/ui_text_backspace_word"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete all characters before the cursor up until a whitespace or punctuation character.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_backspace_word.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_backspace_word.macos** <div id="class_projectsettings_property_input/ui_text_backspace_word.macos"></div>

macOS specific override for the shortcut to delete a word.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_add_above"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_add_above** <div id="class_projectsettings_property_input/ui_text_caret_add_above"></div>

Default [`InputEventAction`](class_inputeventaction.md) to add an additional caret above every caret of a text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_add_above.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_add_above.macos** <div id="class_projectsettings_property_input/ui_text_caret_add_above.macos"></div>

macOS specific override for the shortcut to add a caret above every caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_add_below"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_add_below** <div id="class_projectsettings_property_input/ui_text_caret_add_below"></div>

Default [`InputEventAction`](class_inputeventaction.md) to add an additional caret below every caret of a text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_add_below.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_add_below.macos** <div id="class_projectsettings_property_input/ui_text_caret_add_below.macos"></div>

macOS specific override for the shortcut to add a caret below every caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_document_end"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_document_end** <div id="class_projectsettings_property_input/ui_text_caret_document_end"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor to the end of the text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_document_end.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_document_end.macos** <div id="class_projectsettings_property_input/ui_text_caret_document_end.macos"></div>

macOS specific override for the shortcut to move the text cursor to the end of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_document_start"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_document_start** <div id="class_projectsettings_property_input/ui_text_caret_document_start"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor to the start of the text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_document_start.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_document_start.macos** <div id="class_projectsettings_property_input/ui_text_caret_document_start.macos"></div>

macOS specific override for the shortcut to move the text cursor to the start of the text.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_down"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_down** <div id="class_projectsettings_property_input/ui_text_caret_down"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor down.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_left"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_left** <div id="class_projectsettings_property_input/ui_text_caret_left"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor left.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_line_end"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_line_end** <div id="class_projectsettings_property_input/ui_text_caret_line_end"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor to the end of the line.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_line_end.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_line_end.macos** <div id="class_projectsettings_property_input/ui_text_caret_line_end.macos"></div>

macOS specific override for the shortcut to move the text cursor to the end of the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_line_start"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_line_start** <div id="class_projectsettings_property_input/ui_text_caret_line_start"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor to the start of the line.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_line_start.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_line_start.macos** <div id="class_projectsettings_property_input/ui_text_caret_line_start.macos"></div>

macOS specific override for the shortcut to move the text cursor to the start of the line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_page_down"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_page_down** <div id="class_projectsettings_property_input/ui_text_caret_page_down"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor down one page.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_page_up"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_page_up** <div id="class_projectsettings_property_input/ui_text_caret_page_up"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor up one page.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_right"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_right** <div id="class_projectsettings_property_input/ui_text_caret_right"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor right.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_up"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_up** <div id="class_projectsettings_property_input/ui_text_caret_up"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor up.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_word_left"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_word_left** <div id="class_projectsettings_property_input/ui_text_caret_word_left"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor left to the next whitespace or punctuation.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_word_left.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_word_left.macos** <div id="class_projectsettings_property_input/ui_text_caret_word_left.macos"></div>

macOS specific override for the shortcut to move the text cursor back one word.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_word_right"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_word_right** <div id="class_projectsettings_property_input/ui_text_caret_word_right"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move the text cursor right to the next whitespace or punctuation.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_caret_word_right.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_caret_word_right.macos** <div id="class_projectsettings_property_input/ui_text_caret_word_right.macos"></div>

macOS specific override for the shortcut to move the text cursor forward one word.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_clear_carets_and_selection"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_clear_carets_and_selection** <div id="class_projectsettings_property_input/ui_text_clear_carets_and_selection"></div>

If there's only one caret active and with a selection, clears the selection.

In case there's more than one caret active, removes the secondary carets and clears their selections.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_completion_accept"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_completion_accept** <div id="class_projectsettings_property_input/ui_text_completion_accept"></div>

Default [`InputEventAction`](class_inputeventaction.md) to accept an autocompletion hint.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_completion_query"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_completion_query** <div id="class_projectsettings_property_input/ui_text_completion_query"></div>

Default [`InputEventAction`](class_inputeventaction.md) to request autocompletion.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_completion_replace"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_completion_replace** <div id="class_projectsettings_property_input/ui_text_completion_replace"></div>

Default [`InputEventAction`](class_inputeventaction.md) to accept an autocompletion hint, replacing existing text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_dedent"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_dedent** <div id="class_projectsettings_property_input/ui_text_dedent"></div>

Default [`InputEventAction`](class_inputeventaction.md) to unindent text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_delete"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_delete** <div id="class_projectsettings_property_input/ui_text_delete"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete the character after the text cursor.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_delete_all_to_right"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_delete_all_to_right** <div id="class_projectsettings_property_input/ui_text_delete_all_to_right"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete **all** text after the text cursor.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_delete_all_to_right.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_delete_all_to_right.macos** <div id="class_projectsettings_property_input/ui_text_delete_all_to_right.macos"></div>

macOS specific override for the shortcut to delete all text after the text cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_delete_word"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_delete_word** <div id="class_projectsettings_property_input/ui_text_delete_word"></div>

Default [`InputEventAction`](class_inputeventaction.md) to delete all characters after the cursor up until a whitespace or punctuation character.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_delete_word.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_delete_word.macos** <div id="class_projectsettings_property_input/ui_text_delete_word.macos"></div>

macOS specific override for the shortcut to delete a word after the text cursor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_indent"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_indent** <div id="class_projectsettings_property_input/ui_text_indent"></div>

Default [`InputEventAction`](class_inputeventaction.md) to indent the current line.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_newline"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_newline** <div id="class_projectsettings_property_input/ui_text_newline"></div>

Default [`InputEventAction`](class_inputeventaction.md) to insert a new line at the position of the text cursor.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_newline_above"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_newline_above** <div id="class_projectsettings_property_input/ui_text_newline_above"></div>

Default [`InputEventAction`](class_inputeventaction.md) to insert a new line before the current one.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_newline_blank"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_newline_blank** <div id="class_projectsettings_property_input/ui_text_newline_blank"></div>

Default [`InputEventAction`](class_inputeventaction.md) to insert a new line after the current one.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_scroll_down"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_scroll_down** <div id="class_projectsettings_property_input/ui_text_scroll_down"></div>

Default [`InputEventAction`](class_inputeventaction.md) to scroll down one line of text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_scroll_down.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_scroll_down.macos** <div id="class_projectsettings_property_input/ui_text_scroll_down.macos"></div>

macOS specific override for the shortcut to scroll down one line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_scroll_up"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_scroll_up** <div id="class_projectsettings_property_input/ui_text_scroll_up"></div>

Default [`InputEventAction`](class_inputeventaction.md) to scroll up one line of text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_scroll_up.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_scroll_up.macos** <div id="class_projectsettings_property_input/ui_text_scroll_up.macos"></div>

macOS specific override for the shortcut to scroll up one line.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_select_all"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_select_all** <div id="class_projectsettings_property_input/ui_text_select_all"></div>

Default [`InputEventAction`](class_inputeventaction.md) to select all text.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_select_word_under_caret"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_select_word_under_caret** <div id="class_projectsettings_property_input/ui_text_select_word_under_caret"></div>

If no selection is currently active, selects the word currently under the caret in text fields. If a selection is currently active, deselects the current selection.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_select_word_under_caret.macos"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_select_word_under_caret.macos** <div id="class_projectsettings_property_input/ui_text_select_word_under_caret.macos"></div>

macOS specific override for the shortcut to select the word currently under the caret.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_skip_selection_for_next_occurrence"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_skip_selection_for_next_occurrence** <div id="class_projectsettings_property_input/ui_text_skip_selection_for_next_occurrence"></div>

If no selection is currently active with the last caret in text fields, searches for the next occurrence of the word currently under the caret and moves the caret to the next occurrence. The action can be performed sequentially for other occurrences of the word under the last caret.

If a selection is currently active with the last caret in text fields, searches for the next occurrence of the selection, adds a caret, selects the next occurrence then deselects the previous selection and its associated caret. The action can be performed sequentially for other occurrences of the selection of the last caret.

The viewport is adjusted to the latest newly added caret.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_submit"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_submit** <div id="class_projectsettings_property_input/ui_text_submit"></div>

Default [`InputEventAction`](class_inputeventaction.md) to submit a text field.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_text_toggle_insert_mode"></div>

[`Dictionary`](class_dictionary.md) **input/ui_text_toggle_insert_mode** <div id="class_projectsettings_property_input/ui_text_toggle_insert_mode"></div>

Default [`InputEventAction`](class_inputeventaction.md) to toggle *insert mode* in a text field. While in insert mode, inserting new text overrides the character after the cursor, unless the next character is a new line.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_undo"></div>

[`Dictionary`](class_dictionary.md) **input/ui_undo** <div id="class_projectsettings_property_input/ui_undo"></div>

Default [`InputEventAction`](class_inputeventaction.md) to undo the most recent action.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_unicode_start"></div>

[`Dictionary`](class_dictionary.md) **input/ui_unicode_start** <div id="class_projectsettings_property_input/ui_unicode_start"></div>

Default [`InputEventAction`](class_inputeventaction.md) to start Unicode character hexadecimal code input in a text field.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input/ui_up"></div>

[`Dictionary`](class_dictionary.md) **input/ui_up** <div id="class_projectsettings_property_input/ui_up"></div>

Default [`InputEventAction`](class_inputeventaction.md) to move up in the UI.

 **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [`Control`](class_control.md) s. The events assigned to the action can however be modified.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/buffering/agile_event_flushing"></div>

[`bool`](class_bool.md) **input_devices/buffering/agile_event_flushing** = ``false`` <div id="class_projectsettings_property_input_devices/buffering/agile_event_flushing"></div>

If `true`, key/touch/joystick events will be flushed just before every idle and physics frame.

If `false`, such events will be flushed only once per process frame, between iterations of the engine.

Enabling this can greatly improve the responsiveness to input, specially in devices that need to run multiple physics frames per visible (process) frame, because they can't run at the target frame rate.

 **Note:** Currently implemented only on Android.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/compatibility/legacy_just_pressed_behavior"></div>

[`bool`](class_bool.md) **input_devices/compatibility/legacy_just_pressed_behavior** = ``false`` <div id="class_projectsettings_property_input_devices/compatibility/legacy_just_pressed_behavior"></div>

If `true`, [`Input.is_action_just_pressed`](class_input.md#class_input_method_is_action_just_pressed) and [`Input.is_action_just_released`](class_input.md#class_input_method_is_action_just_released) will only return `true` if the action is still in the respective state, i.e. an action that is pressed *and* released on the same frame will be missed.

If `false`, no input will be lost.

 **Note:** You should in nearly all cases prefer the `false` setting. The legacy behavior is to enable supporting old projects that rely on the old logic, without changes to script.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pen_tablet/driver"></div>

[`String`](class_string.md) **input_devices/pen_tablet/driver** <div id="class_projectsettings_property_input_devices/pen_tablet/driver"></div>

Specifies the tablet driver to use. If left empty, the default driver will be used.

 **Note:** The driver in use can be overridden at runtime via the `--tablet-driver` [*command line argument*](../tutorials/editor/command_line_tutorial).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pen_tablet/driver.windows"></div>

[`String`](class_string.md) **input_devices/pen_tablet/driver.windows** <div id="class_projectsettings_property_input_devices/pen_tablet/driver.windows"></div>

Override for [`input_devices/pen_tablet/driver`](class_projectsettings.md#class_projectsettings_property_input_devices/pen_tablet/driver) on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pointing/android/enable_long_press_as_right_click"></div>

[`bool`](class_bool.md) **input_devices/pointing/android/enable_long_press_as_right_click** = ``false`` <div id="class_projectsettings_property_input_devices/pointing/android/enable_long_press_as_right_click"></div>

If `true`, long press events on an Android touchscreen are transformed into right click events.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pointing/android/enable_pan_and_scale_gestures"></div>

[`bool`](class_bool.md) **input_devices/pointing/android/enable_pan_and_scale_gestures** = ``false`` <div id="class_projectsettings_property_input_devices/pointing/android/enable_pan_and_scale_gestures"></div>

If `true`, multi-touch pan and scale gestures are enabled on Android devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pointing/android/rotary_input_scroll_axis"></div>

[`int`](class_int.md) **input_devices/pointing/android/rotary_input_scroll_axis** = ``1`` <div id="class_projectsettings_property_input_devices/pointing/android/rotary_input_scroll_axis"></div>

On Wear OS devices, defines which axis of the mouse wheel rotary input is mapped to. This rotary input is usually performed by rotating the physical or virtual (touch-based) bezel on a smartwatch.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pointing/emulate_mouse_from_touch"></div>

[`bool`](class_bool.md) **input_devices/pointing/emulate_mouse_from_touch** = ``true`` <div id="class_projectsettings_property_input_devices/pointing/emulate_mouse_from_touch"></div>

If `true`, sends mouse input events when tapping or swiping on the touchscreen.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse"></div>

[`bool`](class_bool.md) **input_devices/pointing/emulate_touch_from_mouse** = ``false`` <div id="class_projectsettings_property_input_devices/pointing/emulate_touch_from_mouse"></div>

If `true`, sends touch input events when clicking or dragging the mouse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/sensors/enable_accelerometer"></div>

[`bool`](class_bool.md) **input_devices/sensors/enable_accelerometer** = ``false`` <div id="class_projectsettings_property_input_devices/sensors/enable_accelerometer"></div>

If `true`, the accelerometer sensor is enabled and [`Input.get_accelerometer`](class_input.md#class_input_method_get_accelerometer) returns valid data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/sensors/enable_gravity"></div>

[`bool`](class_bool.md) **input_devices/sensors/enable_gravity** = ``false`` <div id="class_projectsettings_property_input_devices/sensors/enable_gravity"></div>

If `true`, the gravity sensor is enabled and [`Input.get_gravity`](class_input.md#class_input_method_get_gravity) returns valid data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/sensors/enable_gyroscope"></div>

[`bool`](class_bool.md) **input_devices/sensors/enable_gyroscope** = ``false`` <div id="class_projectsettings_property_input_devices/sensors/enable_gyroscope"></div>

If `true`, the gyroscope sensor is enabled and [`Input.get_gyroscope`](class_input.md#class_input_method_get_gyroscope) returns valid data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_input_devices/sensors/enable_magnetometer"></div>

[`bool`](class_bool.md) **input_devices/sensors/enable_magnetometer** = ``false`` <div id="class_projectsettings_property_input_devices/sensors/enable_magnetometer"></div>

If `true`, the magnetometer sensor is enabled and [`Input.get_magnetometer`](class_input.md#class_input_method_get_magnetometer) returns valid data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/locale/fallback"></div>

[`String`](class_string.md) **internationalization/locale/fallback** = ``"en"`` <div id="class_projectsettings_property_internationalization/locale/fallback"></div>

The locale to fall back to if a translation isn't available in a given language. If left empty, `en` (English) will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/locale/include_text_server_data"></div>

[`bool`](class_bool.md) **internationalization/locale/include_text_server_data** = ``false`` <div id="class_projectsettings_property_internationalization/locale/include_text_server_data"></div>

If `true`, text server break iteration rule sets, dictionaries and other optional data are included in the exported project.

 **Note:** "ICU / HarfBuzz / Graphite" text server data includes dictionaries for Burmese, Chinese, Japanese, Khmer, Lao and Thai as well as Unicode Standard Annex #29 and Unicode Standard Annex #14 word and line breaking rules. Data is about 4 MB large.

 **Note:** "Fallback" text server does not use additional data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/locale/test"></div>

[`String`](class_string.md) **internationalization/locale/test** = ``""`` <div id="class_projectsettings_property_internationalization/locale/test"></div>

If non-empty, this locale will be used when running the project from the editor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/double_vowels"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/double_vowels** = ``false`` <div id="class_projectsettings_property_internationalization/pseudolocalization/double_vowels"></div>

Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/expansion_ratio"></div>

[`float`](class_float.md) **internationalization/pseudolocalization/expansion_ratio** = ``0.0`` <div id="class_projectsettings_property_internationalization/pseudolocalization/expansion_ratio"></div>

The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/fake_bidi"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/fake_bidi** = ``false`` <div id="class_projectsettings_property_internationalization/pseudolocalization/fake_bidi"></div>

If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/override"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/override** = ``false`` <div id="class_projectsettings_property_internationalization/pseudolocalization/override"></div>

Replace all characters in the string with `*`. Useful for finding non-localizable strings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/prefix"></div>

[`String`](class_string.md) **internationalization/pseudolocalization/prefix** = ``"["`` <div id="class_projectsettings_property_internationalization/pseudolocalization/prefix"></div>

Prefix that will be prepended to the pseudolocalized string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/replace_with_accents"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/replace_with_accents** = ``true`` <div id="class_projectsettings_property_internationalization/pseudolocalization/replace_with_accents"></div>

Replace all characters with their accented variants during pseudolocalization.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/skip_placeholders"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/skip_placeholders** = ``true`` <div id="class_projectsettings_property_internationalization/pseudolocalization/skip_placeholders"></div>

Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/suffix"></div>

[`String`](class_string.md) **internationalization/pseudolocalization/suffix** = ``"]"`` <div id="class_projectsettings_property_internationalization/pseudolocalization/suffix"></div>

Suffix that will be appended to the pseudolocalized string.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/pseudolocalization/use_pseudolocalization"></div>

[`bool`](class_bool.md) **internationalization/pseudolocalization/use_pseudolocalization** = ``false`` <div id="class_projectsettings_property_internationalization/pseudolocalization/use_pseudolocalization"></div>

If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.

 **Note:** This property is only read when the project starts. To toggle pseudolocalization at run-time, use [`TranslationServer.pseudolocalization_enabled`](class_translationserver.md#class_translationserver_property_pseudolocalization_enabled) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/rendering/force_right_to_left_layout_direction"></div>

[`bool`](class_bool.md) **internationalization/rendering/force_right_to_left_layout_direction** = ``false`` <div id="class_projectsettings_property_internationalization/rendering/force_right_to_left_layout_direction"></div>

Force layout direction and text writing direction to RTL for all controls.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/rendering/root_node_auto_translate"></div>

[`bool`](class_bool.md) **internationalization/rendering/root_node_auto_translate** = ``true`` <div id="class_projectsettings_property_internationalization/rendering/root_node_auto_translate"></div>

If `true`, root node will use [`Node.AUTO_TRANSLATE_MODE_ALWAYS`](class_node.md#class_node_constant_auto_translate_mode_always), otherwise [`Node.AUTO_TRANSLATE_MODE_DISABLED`](class_node.md#class_node_constant_auto_translate_mode_disabled) will be used.

 **Note:** This property is only read when the project starts. To change the auto translate mode at runtime, set [`Node.auto_translate_mode`](class_node.md#class_node_property_auto_translate_mode) of [`SceneTree.root`](class_scenetree.md#class_scenetree_property_root) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/rendering/root_node_layout_direction"></div>

[`int`](class_int.md) **internationalization/rendering/root_node_layout_direction** = ``0`` <div id="class_projectsettings_property_internationalization/rendering/root_node_layout_direction"></div>

Root node default layout direction.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_internationalization/rendering/text_driver"></div>

[`String`](class_string.md) **internationalization/rendering/text_driver** = ``""`` <div id="class_projectsettings_property_internationalization/rendering/text_driver"></div>

Specifies the [`TextServer`](class_textserver.md) to use. If left empty, the default will be used.

"ICU / HarfBuzz / Graphite" is the most advanced text driver, supporting right-to-left typesetting and complex scripts (for languages like Arabic, Hebrew, etc.). The "Fallback" text driver does not support right-to-left typesetting and complex scripts.

 **Note:** The driver in use can be overridden at runtime via the `--text-driver` [*command line argument*](../tutorials/editor/command_line_tutorial).

 **Note:** There is an additional `Dummy` text driver available, which disables all text rendering and font-related functionality. This driver is not listed in the project settings, but it can be enabled when running the editor or project using the `--text-driver Dummy` [*command line argument*](../tutorials/editor/command_line_tutorial).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_1"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_1"></div>

Optional name for the 2D navigation layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_2"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_2"></div>

Optional name for the 2D navigation layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_3"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_3"></div>

Optional name for the 2D navigation layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_4"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_4"></div>

Optional name for the 2D navigation layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_5"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_5"></div>

Optional name for the 2D navigation layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_6"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_6"></div>

Optional name for the 2D navigation layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_7"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_7"></div>

Optional name for the 2D navigation layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_8"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_8"></div>

Optional name for the 2D navigation layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_9"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_9"></div>

Optional name for the 2D navigation layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_10"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_10"></div>

Optional name for the 2D navigation layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_11"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_11"></div>

Optional name for the 2D navigation layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_12"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_12"></div>

Optional name for the 2D navigation layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_13"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_13"></div>

Optional name for the 2D navigation layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_14"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_14"></div>

Optional name for the 2D navigation layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_15"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_15"></div>

Optional name for the 2D navigation layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_16"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_16"></div>

Optional name for the 2D navigation layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_17"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_17"></div>

Optional name for the 2D navigation layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_18"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_18"></div>

Optional name for the 2D navigation layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_19"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_19"></div>

Optional name for the 2D navigation layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_20"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_20"></div>

Optional name for the 2D navigation layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_21"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_21** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_21"></div>

Optional name for the 2D navigation layer 21. If left empty, the layer will display as "Layer 21".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_22"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_22** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_22"></div>

Optional name for the 2D navigation layer 22. If left empty, the layer will display as "Layer 22".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_23"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_23** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_23"></div>

Optional name for the 2D navigation layer 23. If left empty, the layer will display as "Layer 23".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_24"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_24** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_24"></div>

Optional name for the 2D navigation layer 24. If left empty, the layer will display as "Layer 24".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_25"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_25** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_25"></div>

Optional name for the 2D navigation layer 25. If left empty, the layer will display as "Layer 25".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_26"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_26** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_26"></div>

Optional name for the 2D navigation layer 26. If left empty, the layer will display as "Layer 26".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_27"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_27** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_27"></div>

Optional name for the 2D navigation layer 27. If left empty, the layer will display as "Layer 27".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_28"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_28** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_28"></div>

Optional name for the 2D navigation layer 28. If left empty, the layer will display as "Layer 28".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_29"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_29** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_29"></div>

Optional name for the 2D navigation layer 29. If left empty, the layer will display as "Layer 29".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_30"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_30** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_30"></div>

Optional name for the 2D navigation layer 30. If left empty, the layer will display as "Layer 30".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_31"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_31** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_31"></div>

Optional name for the 2D navigation layer 31. If left empty, the layer will display as "Layer 31".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_navigation/layer_32"></div>

[`String`](class_string.md) **layer_names/2d_navigation/layer_32** = ``""`` <div id="class_projectsettings_property_layer_names/2d_navigation/layer_32"></div>

Optional name for the 2D navigation layer 32. If left empty, the layer will display as "Layer 32".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_1"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_1"></div>

Optional name for the 2D physics layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_2"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_2"></div>

Optional name for the 2D physics layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_3"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_3"></div>

Optional name for the 2D physics layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_4"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_4"></div>

Optional name for the 2D physics layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_5"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_5"></div>

Optional name for the 2D physics layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_6"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_6"></div>

Optional name for the 2D physics layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_7"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_7"></div>

Optional name for the 2D physics layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_8"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_8"></div>

Optional name for the 2D physics layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_9"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_9"></div>

Optional name for the 2D physics layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_10"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_10"></div>

Optional name for the 2D physics layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_11"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_11"></div>

Optional name for the 2D physics layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_12"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_12"></div>

Optional name for the 2D physics layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_13"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_13"></div>

Optional name for the 2D physics layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_14"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_14"></div>

Optional name for the 2D physics layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_15"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_15"></div>

Optional name for the 2D physics layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_16"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_16"></div>

Optional name for the 2D physics layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_17"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_17"></div>

Optional name for the 2D physics layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_18"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_18"></div>

Optional name for the 2D physics layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_19"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_19"></div>

Optional name for the 2D physics layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_20"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_20"></div>

Optional name for the 2D physics layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_21"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_21** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_21"></div>

Optional name for the 2D physics layer 21. If left empty, the layer will display as "Layer 21".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_22"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_22** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_22"></div>

Optional name for the 2D physics layer 22. If left empty, the layer will display as "Layer 22".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_23"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_23** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_23"></div>

Optional name for the 2D physics layer 23. If left empty, the layer will display as "Layer 23".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_24"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_24** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_24"></div>

Optional name for the 2D physics layer 24. If left empty, the layer will display as "Layer 24".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_25"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_25** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_25"></div>

Optional name for the 2D physics layer 25. If left empty, the layer will display as "Layer 25".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_26"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_26** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_26"></div>

Optional name for the 2D physics layer 26. If left empty, the layer will display as "Layer 26".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_27"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_27** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_27"></div>

Optional name for the 2D physics layer 27. If left empty, the layer will display as "Layer 27".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_28"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_28** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_28"></div>

Optional name for the 2D physics layer 28. If left empty, the layer will display as "Layer 28".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_29"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_29** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_29"></div>

Optional name for the 2D physics layer 29. If left empty, the layer will display as "Layer 29".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_30"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_30** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_30"></div>

Optional name for the 2D physics layer 30. If left empty, the layer will display as "Layer 30".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_31"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_31** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_31"></div>

Optional name for the 2D physics layer 31. If left empty, the layer will display as "Layer 31".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_physics/layer_32"></div>

[`String`](class_string.md) **layer_names/2d_physics/layer_32** = ``""`` <div id="class_projectsettings_property_layer_names/2d_physics/layer_32"></div>

Optional name for the 2D physics layer 32. If left empty, the layer will display as "Layer 32".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_1"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_1"></div>

Optional name for the 2D render layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_2"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_2"></div>

Optional name for the 2D render layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_3"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_3"></div>

Optional name for the 2D render layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_4"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_4"></div>

Optional name for the 2D render layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_5"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_5"></div>

Optional name for the 2D render layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_6"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_6"></div>

Optional name for the 2D render layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_7"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_7"></div>

Optional name for the 2D render layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_8"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_8"></div>

Optional name for the 2D render layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_9"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_9"></div>

Optional name for the 2D render layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_10"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_10"></div>

Optional name for the 2D render layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_11"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_11"></div>

Optional name for the 2D render layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_12"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_12"></div>

Optional name for the 2D render layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_13"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_13"></div>

Optional name for the 2D render layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_14"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_14"></div>

Optional name for the 2D render layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_15"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_15"></div>

Optional name for the 2D render layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_16"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_16"></div>

Optional name for the 2D render layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_17"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_17"></div>

Optional name for the 2D render layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_18"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_18"></div>

Optional name for the 2D render layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_19"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_19"></div>

Optional name for the 2D render layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/2d_render/layer_20"></div>

[`String`](class_string.md) **layer_names/2d_render/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/2d_render/layer_20"></div>

Optional name for the 2D render layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_1"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_1"></div>

Optional name for the 3D navigation layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_2"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_2"></div>

Optional name for the 3D navigation layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_3"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_3"></div>

Optional name for the 3D navigation layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_4"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_4"></div>

Optional name for the 3D navigation layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_5"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_5"></div>

Optional name for the 3D navigation layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_6"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_6"></div>

Optional name for the 3D navigation layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_7"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_7"></div>

Optional name for the 3D navigation layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_8"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_8"></div>

Optional name for the 3D navigation layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_9"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_9"></div>

Optional name for the 3D navigation layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_10"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_10"></div>

Optional name for the 3D navigation layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_11"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_11"></div>

Optional name for the 3D navigation layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_12"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_12"></div>

Optional name for the 3D navigation layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_13"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_13"></div>

Optional name for the 3D navigation layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_14"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_14"></div>

Optional name for the 3D navigation layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_15"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_15"></div>

Optional name for the 3D navigation layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_16"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_16"></div>

Optional name for the 3D navigation layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_17"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_17"></div>

Optional name for the 3D navigation layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_18"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_18"></div>

Optional name for the 3D navigation layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_19"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_19"></div>

Optional name for the 3D navigation layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_20"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_20"></div>

Optional name for the 3D navigation layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_21"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_21** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_21"></div>

Optional name for the 3D navigation layer 21. If left empty, the layer will display as "Layer 21".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_22"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_22** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_22"></div>

Optional name for the 3D navigation layer 22. If left empty, the layer will display as "Layer 22".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_23"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_23** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_23"></div>

Optional name for the 3D navigation layer 23. If left empty, the layer will display as "Layer 23".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_24"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_24** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_24"></div>

Optional name for the 3D navigation layer 24. If left empty, the layer will display as "Layer 24".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_25"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_25** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_25"></div>

Optional name for the 3D navigation layer 25. If left empty, the layer will display as "Layer 25".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_26"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_26** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_26"></div>

Optional name for the 3D navigation layer 26. If left empty, the layer will display as "Layer 26".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_27"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_27** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_27"></div>

Optional name for the 3D navigation layer 27. If left empty, the layer will display as "Layer 27".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_28"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_28** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_28"></div>

Optional name for the 3D navigation layer 28. If left empty, the layer will display as "Layer 28".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_29"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_29** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_29"></div>

Optional name for the 3D navigation layer 29. If left empty, the layer will display as "Layer 29".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_30"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_30** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_30"></div>

Optional name for the 3D navigation layer 30. If left empty, the layer will display as "Layer 30".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_31"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_31** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_31"></div>

Optional name for the 3D navigation layer 31. If left empty, the layer will display as "Layer 31".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_navigation/layer_32"></div>

[`String`](class_string.md) **layer_names/3d_navigation/layer_32** = ``""`` <div id="class_projectsettings_property_layer_names/3d_navigation/layer_32"></div>

Optional name for the 3D navigation layer 32. If left empty, the layer will display as "Layer 32".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_1"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_1"></div>

Optional name for the 3D physics layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_2"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_2"></div>

Optional name for the 3D physics layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_3"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_3"></div>

Optional name for the 3D physics layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_4"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_4"></div>

Optional name for the 3D physics layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_5"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_5"></div>

Optional name for the 3D physics layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_6"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_6"></div>

Optional name for the 3D physics layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_7"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_7"></div>

Optional name for the 3D physics layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_8"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_8"></div>

Optional name for the 3D physics layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_9"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_9"></div>

Optional name for the 3D physics layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_10"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_10"></div>

Optional name for the 3D physics layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_11"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_11"></div>

Optional name for the 3D physics layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_12"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_12"></div>

Optional name for the 3D physics layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_13"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_13"></div>

Optional name for the 3D physics layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_14"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_14"></div>

Optional name for the 3D physics layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_15"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_15"></div>

Optional name for the 3D physics layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_16"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_16"></div>

Optional name for the 3D physics layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_17"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_17"></div>

Optional name for the 3D physics layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_18"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_18"></div>

Optional name for the 3D physics layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_19"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_19"></div>

Optional name for the 3D physics layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_20"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_20"></div>

Optional name for the 3D physics layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_21"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_21** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_21"></div>

Optional name for the 3D physics layer 21. If left empty, the layer will display as "Layer 21".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_22"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_22** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_22"></div>

Optional name for the 3D physics layer 22. If left empty, the layer will display as "Layer 22".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_23"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_23** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_23"></div>

Optional name for the 3D physics layer 23. If left empty, the layer will display as "Layer 23".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_24"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_24** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_24"></div>

Optional name for the 3D physics layer 24. If left empty, the layer will display as "Layer 24".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_25"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_25** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_25"></div>

Optional name for the 3D physics layer 25. If left empty, the layer will display as "Layer 25".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_26"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_26** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_26"></div>

Optional name for the 3D physics layer 26. If left empty, the layer will display as "Layer 26".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_27"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_27** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_27"></div>

Optional name for the 3D physics layer 27. If left empty, the layer will display as "Layer 27".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_28"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_28** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_28"></div>

Optional name for the 3D physics layer 28. If left empty, the layer will display as "Layer 28".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_29"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_29** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_29"></div>

Optional name for the 3D physics layer 29. If left empty, the layer will display as "Layer 29".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_30"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_30** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_30"></div>

Optional name for the 3D physics layer 30. If left empty, the layer will display as "Layer 30".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_31"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_31** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_31"></div>

Optional name for the 3D physics layer 31. If left empty, the layer will display as "Layer 31".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_physics/layer_32"></div>

[`String`](class_string.md) **layer_names/3d_physics/layer_32** = ``""`` <div id="class_projectsettings_property_layer_names/3d_physics/layer_32"></div>

Optional name for the 3D physics layer 32. If left empty, the layer will display as "Layer 32".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_1"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_1"></div>

Optional name for the 3D render layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_2"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_2"></div>

Optional name for the 3D render layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_3"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_3"></div>

Optional name for the 3D render layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_4"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_4"></div>

Optional name for the 3D render layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_5"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_5"></div>

Optional name for the 3D render layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_6"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_6"></div>

Optional name for the 3D render layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_7"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_7"></div>

Optional name for the 3D render layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_8"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_8"></div>

Optional name for the 3D render layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_9"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_9"></div>

Optional name for the 3D render layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_10"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_10"></div>

Optional name for the 3D render layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_11"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_11"></div>

Optional name for the 3D render layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_12"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_12"></div>

Optional name for the 3D render layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_13"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_13"></div>

Optional name for the 3D render layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_14"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_14"></div>

Optional name for the 3D render layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_15"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_15"></div>

Optional name for the 3D render layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_16"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_16"></div>

Optional name for the 3D render layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_17"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_17"></div>

Optional name for the 3D render layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_18"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_18"></div>

Optional name for the 3D render layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_19"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_19"></div>

Optional name for the 3D render layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/3d_render/layer_20"></div>

[`String`](class_string.md) **layer_names/3d_render/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/3d_render/layer_20"></div>

Optional name for the 3D render layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_1"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_1** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_1"></div>

Optional name for the navigation avoidance layer 1. If left empty, the layer will display as "Layer 1".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_2"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_2** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_2"></div>

Optional name for the navigation avoidance layer 2. If left empty, the layer will display as "Layer 2".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_3"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_3** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_3"></div>

Optional name for the navigation avoidance layer 3. If left empty, the layer will display as "Layer 3".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_4"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_4** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_4"></div>

Optional name for the navigation avoidance layer 4. If left empty, the layer will display as "Layer 4".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_5"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_5** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_5"></div>

Optional name for the navigation avoidance layer 5. If left empty, the layer will display as "Layer 5".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_6"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_6** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_6"></div>

Optional name for the navigation avoidance layer 6. If left empty, the layer will display as "Layer 6".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_7"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_7** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_7"></div>

Optional name for the navigation avoidance layer 7. If left empty, the layer will display as "Layer 7".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_8"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_8** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_8"></div>

Optional name for the navigation avoidance layer 8. If left empty, the layer will display as "Layer 8".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_9"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_9** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_9"></div>

Optional name for the navigation avoidance layer 9. If left empty, the layer will display as "Layer 9".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_10"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_10** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_10"></div>

Optional name for the navigation avoidance layer 10. If left empty, the layer will display as "Layer 10".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_11"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_11** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_11"></div>

Optional name for the navigation avoidance layer 11. If left empty, the layer will display as "Layer 11".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_12"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_12** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_12"></div>

Optional name for the navigation avoidance layer 12. If left empty, the layer will display as "Layer 12".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_13"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_13** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_13"></div>

Optional name for the navigation avoidance layer 13. If left empty, the layer will display as "Layer 13".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_14"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_14** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_14"></div>

Optional name for the navigation avoidance layer 14. If left empty, the layer will display as "Layer 14".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_15"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_15** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_15"></div>

Optional name for the navigation avoidance layer 15. If left empty, the layer will display as "Layer 15".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_16"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_16** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_16"></div>

Optional name for the navigation avoidance layer 16. If left empty, the layer will display as "Layer 16".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_17"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_17** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_17"></div>

Optional name for the navigation avoidance layer 17. If left empty, the layer will display as "Layer 17".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_18"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_18** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_18"></div>

Optional name for the navigation avoidance layer 18. If left empty, the layer will display as "Layer 18".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_19"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_19** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_19"></div>

Optional name for the navigation avoidance layer 19. If left empty, the layer will display as "Layer 19".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_20"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_20** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_20"></div>

Optional name for the navigation avoidance layer 20. If left empty, the layer will display as "Layer 20".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_21"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_21** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_21"></div>

Optional name for the navigation avoidance layer 21. If left empty, the layer will display as "Layer 21".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_22"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_22** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_22"></div>

Optional name for the navigation avoidance layer 22. If left empty, the layer will display as "Layer 22".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_23"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_23** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_23"></div>

Optional name for the navigation avoidance layer 23. If left empty, the layer will display as "Layer 23".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_24"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_24** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_24"></div>

Optional name for the navigation avoidance layer 24. If left empty, the layer will display as "Layer 24".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_25"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_25** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_25"></div>

Optional name for the navigation avoidance layer 25. If left empty, the layer will display as "Layer 25".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_26"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_26** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_26"></div>

Optional name for the navigation avoidance layer 26. If left empty, the layer will display as "Layer 26".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_27"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_27** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_27"></div>

Optional name for the navigation avoidance layer 27. If left empty, the layer will display as "Layer 27".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_28"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_28** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_28"></div>

Optional name for the navigation avoidance layer 28. If left empty, the layer will display as "Layer 28".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_29"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_29** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_29"></div>

Optional name for the navigation avoidance layer 29. If left empty, the layer will display as "Layer 29".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_30"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_30** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_30"></div>

Optional name for the navigation avoidance layer 30. If left empty, the layer will display as "Layer 30".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_31"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_31** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_31"></div>

Optional name for the navigation avoidance layer 31. If left empty, the layer will display as "Layer 31".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_layer_names/avoidance/layer_32"></div>

[`String`](class_string.md) **layer_names/avoidance/layer_32** = ``""`` <div id="class_projectsettings_property_layer_names/avoidance/layer_32"></div>

Optional name for the navigation avoidance layer 32. If left empty, the layer will display as "Layer 32".

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_memory/limits/message_queue/max_size_mb"></div>

[`int`](class_int.md) **memory/limits/message_queue/max_size_mb** = ``32`` <div id="class_projectsettings_property_memory/limits/message_queue/max_size_mb"></div>

Godot uses a message queue to defer some function calls. If you run out of space on it (you will see an error), you can increase the size here.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/2d/default_cell_size"></div>

[`float`](class_float.md) **navigation/2d/default_cell_size** = ``1.0`` <div id="class_projectsettings_property_navigation/2d/default_cell_size"></div>

Default cell size for 2D navigation maps. See [`NavigationServer2D.map_set_cell_size`](class_navigationserver2d.md#class_navigationserver2d_method_map_set_cell_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/2d/default_edge_connection_margin"></div>

[`float`](class_float.md) **navigation/2d/default_edge_connection_margin** = ``1.0`` <div id="class_projectsettings_property_navigation/2d/default_edge_connection_margin"></div>

Default edge connection margin for 2D navigation maps. See [`NavigationServer2D.map_set_edge_connection_margin`](class_navigationserver2d.md#class_navigationserver2d_method_map_set_edge_connection_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/2d/default_link_connection_radius"></div>

[`float`](class_float.md) **navigation/2d/default_link_connection_radius** = ``4.0`` <div id="class_projectsettings_property_navigation/2d/default_link_connection_radius"></div>

Default link connection radius for 2D navigation maps. See [`NavigationServer2D.map_set_link_connection_radius`](class_navigationserver2d.md#class_navigationserver2d_method_map_set_link_connection_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/2d/use_edge_connections"></div>

[`bool`](class_bool.md) **navigation/2d/use_edge_connections** = ``true`` <div id="class_projectsettings_property_navigation/2d/use_edge_connections"></div>

If enabled 2D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World2D default navigation maps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/default_cell_height"></div>

[`float`](class_float.md) **navigation/3d/default_cell_height** = ``0.25`` <div id="class_projectsettings_property_navigation/3d/default_cell_height"></div>

Default cell height for 3D navigation maps. See [`NavigationServer3D.map_set_cell_height`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_cell_height).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/default_cell_size"></div>

[`float`](class_float.md) **navigation/3d/default_cell_size** = ``0.25`` <div id="class_projectsettings_property_navigation/3d/default_cell_size"></div>

Default cell size for 3D navigation maps. See [`NavigationServer3D.map_set_cell_size`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_cell_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/default_edge_connection_margin"></div>

[`float`](class_float.md) **navigation/3d/default_edge_connection_margin** = ``0.25`` <div id="class_projectsettings_property_navigation/3d/default_edge_connection_margin"></div>

Default edge connection margin for 3D navigation maps. See [`NavigationServer3D.map_set_edge_connection_margin`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_edge_connection_margin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/default_link_connection_radius"></div>

[`float`](class_float.md) **navigation/3d/default_link_connection_radius** = ``1.0`` <div id="class_projectsettings_property_navigation/3d/default_link_connection_radius"></div>

Default link connection radius for 3D navigation maps. See [`NavigationServer3D.map_set_link_connection_radius`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_link_connection_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/default_up"></div>

[`Vector3`](class_vector3.md) **navigation/3d/default_up** = ``Vector3(0, 1, 0)`` <div id="class_projectsettings_property_navigation/3d/default_up"></div>

Default up orientation for 3D navigation maps. See [`NavigationServer3D.map_set_up`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_up).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/merge_rasterizer_cell_scale"></div>

[`float`](class_float.md) **navigation/3d/merge_rasterizer_cell_scale** = ``1.0`` <div id="class_projectsettings_property_navigation/3d/merge_rasterizer_cell_scale"></div>

Default merge rasterizer cell scale for 3D navigation maps. See [`NavigationServer3D.map_set_merge_rasterizer_cell_scale`](class_navigationserver3d.md#class_navigationserver3d_method_map_set_merge_rasterizer_cell_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/3d/use_edge_connections"></div>

[`bool`](class_bool.md) **navigation/3d/use_edge_connections** = ``true`` <div id="class_projectsettings_property_navigation/3d/use_edge_connections"></div>

If enabled 3D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World3D default navigation maps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_high_priority_threads"></div>

[`bool`](class_bool.md) **navigation/avoidance/thread_model/avoidance_use_high_priority_threads** = ``true`` <div id="class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_high_priority_threads"></div>

If enabled and avoidance calculations use multiple threads the threads run with high priority.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_multiple_threads"></div>

[`bool`](class_bool.md) **navigation/avoidance/thread_model/avoidance_use_multiple_threads** = ``true`` <div id="class_projectsettings_property_navigation/avoidance/thread_model/avoidance_use_multiple_threads"></div>

If enabled the avoidance calculations use multiple threads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/baking/thread_model/baking_use_high_priority_threads"></div>

[`bool`](class_bool.md) **navigation/baking/thread_model/baking_use_high_priority_threads** = ``true`` <div id="class_projectsettings_property_navigation/baking/thread_model/baking_use_high_priority_threads"></div>

If enabled and async navmesh baking uses multiple threads the threads run with high priority.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/baking/thread_model/baking_use_multiple_threads"></div>

[`bool`](class_bool.md) **navigation/baking/thread_model/baking_use_multiple_threads** = ``true`` <div id="class_projectsettings_property_navigation/baking/thread_model/baking_use_multiple_threads"></div>

If enabled the async navmesh baking uses multiple threads.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_navigation/baking/use_crash_prevention_checks"></div>

[`bool`](class_bool.md) **navigation/baking/use_crash_prevention_checks** = ``true`` <div id="class_projectsettings_property_navigation/baking/use_crash_prevention_checks"></div>

If enabled, and baking would potentially lead to an engine crash, the baking will be interrupted and an error message with explanation will be raised.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/debugger/max_chars_per_second"></div>

[`int`](class_int.md) **network/limits/debugger/max_chars_per_second** = ``32768`` <div id="class_projectsettings_property_network/limits/debugger/max_chars_per_second"></div>

Maximum number of characters allowed to send as output from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/debugger/max_errors_per_second"></div>

[`int`](class_int.md) **network/limits/debugger/max_errors_per_second** = ``400`` <div id="class_projectsettings_property_network/limits/debugger/max_errors_per_second"></div>

Maximum number of errors allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/debugger/max_queued_messages"></div>

[`int`](class_int.md) **network/limits/debugger/max_queued_messages** = ``2048`` <div id="class_projectsettings_property_network/limits/debugger/max_queued_messages"></div>

Maximum number of messages in the debugger queue. Over this value, content is dropped. This helps to limit the debugger memory usage.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/debugger/max_warnings_per_second"></div>

[`int`](class_int.md) **network/limits/debugger/max_warnings_per_second** = ``400`` <div id="class_projectsettings_property_network/limits/debugger/max_warnings_per_second"></div>

Maximum number of warnings allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/packet_peer_stream/max_buffer_po2"></div>

[`int`](class_int.md) **network/limits/packet_peer_stream/max_buffer_po2** = ``16`` <div id="class_projectsettings_property_network/limits/packet_peer_stream/max_buffer_po2"></div>

Default size of packet peer stream for deserializing Godot data (in bytes, specified as a power of two). The default value `16` is equal to 65,536 bytes. Over this size, data is dropped.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/tcp/connect_timeout_seconds"></div>

[`int`](class_int.md) **network/limits/tcp/connect_timeout_seconds** = ``30`` <div id="class_projectsettings_property_network/limits/tcp/connect_timeout_seconds"></div>

Timeout (in seconds) for connection attempts using TCP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/limits/webrtc/max_channel_in_buffer_kb"></div>

[`int`](class_int.md) **network/limits/webrtc/max_channel_in_buffer_kb** = ``64`` <div id="class_projectsettings_property_network/limits/webrtc/max_channel_in_buffer_kb"></div>

Maximum size (in kiB) for the [`WebRTCDataChannel`](class_webrtcdatachannel.md) input buffer.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_network/tls/certificate_bundle_override"></div>

[`String`](class_string.md) **network/tls/certificate_bundle_override** = ``""`` <div id="class_projectsettings_property_network/tls/certificate_bundle_override"></div>

The CA certificates bundle to use for TLS connections. If this is set to a non-empty value, this will *override* Godot's default [*Mozilla certificate bundle*](https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt). If left empty, the default certificate bundle will be used.

If in doubt, leave this setting empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/default_angular_damp"></div>

[`float`](class_float.md) **physics/2d/default_angular_damp** = ``1.0`` <div id="class_projectsettings_property_physics/2d/default_angular_damp"></div>

The default rotational motion damping in 2D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.

Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate ([`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second)) will bring the object to a stop in one iteration.

 **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.

During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See [DampMode](#enum_rigidbody2d_dampmode).

 **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/default_gravity"></div>

[`float`](class_float.md) **physics/2d/default_gravity** = ``980.0`` <div id="class_projectsettings_property_physics/2d/default_gravity"></div>

The default gravity strength in 2D (in pixels per second squared).

 **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:



```gdscript

    # Set the default gravity strength to 980.
    PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY, 980)
```

```csharp

    // Set the default gravity strength to 980.
    PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.Gravity, 980);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/default_gravity_vector"></div>

[`Vector2`](class_vector2.md) **physics/2d/default_gravity_vector** = ``Vector2(0, 1)`` <div id="class_projectsettings_property_physics/2d/default_gravity_vector"></div>

The default gravity direction in 2D.

 **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:



```gdscript

    # Set the default gravity direction to `Vector2(0, 1)`.
    PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY_VECTOR, Vector2.DOWN)
```

```csharp

    // Set the default gravity direction to `Vector2(0, 1)`.
    PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.GravityVector, Vector2.Down)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/default_linear_damp"></div>

[`float`](class_float.md) **physics/2d/default_linear_damp** = ``0.1`` <div id="class_projectsettings_property_physics/2d/default_linear_damp"></div>

The default linear motion damping in 2D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.

Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate ([`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second)) will bring the object to a stop in one iteration.

 **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.

During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`, where `combined_damp` is the sum of the linear damp of the body and this value, or the area's value the body is in, assuming the body defaults to combine damp values. See [DampMode](#enum_rigidbody2d_dampmode).

 **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/physics_engine"></div>

[`String`](class_string.md) **physics/2d/physics_engine** = ``"DEFAULT"`` <div id="class_projectsettings_property_physics/2d/physics_engine"></div>

Sets which physics engine to use for 2D physics.

"DEFAULT" and "GodotPhysics2D" are the same, as there is currently no alternative 2D physics server implemented.

"Dummy" is a 2D physics server that does nothing and returns only dummy values, effectively disabling all 2D physics functionality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/run_on_separate_thread"></div>

[`bool`](class_bool.md) **physics/2d/run_on_separate_thread** = ``false`` <div id="class_projectsettings_property_physics/2d/run_on_separate_thread"></div>

If `true`, the 2D physics server runs on a separate thread, making better use of multi-core CPUs. If `false`, the 2D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/sleep_threshold_angular"></div>

[`float`](class_float.md) **physics/2d/sleep_threshold_angular** = ``0.139626`` <div id="class_projectsettings_property_physics/2d/sleep_threshold_angular"></div>

Threshold angular velocity under which a 2D physics body will be considered inactive. See [`PhysicsServer2D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_body_angular_velocity_sleep_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/sleep_threshold_linear"></div>

[`float`](class_float.md) **physics/2d/sleep_threshold_linear** = ``2.0`` <div id="class_projectsettings_property_physics/2d/sleep_threshold_linear"></div>

Threshold linear velocity under which a 2D physics body will be considered inactive. See [`PhysicsServer2D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_body_linear_velocity_sleep_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/contact_max_allowed_penetration"></div>

[`float`](class_float.md) **physics/2d/solver/contact_max_allowed_penetration** = ``0.3`` <div id="class_projectsettings_property_physics/2d/solver/contact_max_allowed_penetration"></div>

Maximum distance a shape can penetrate another shape before it is considered a collision. See [`PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_contact_max_allowed_penetration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/contact_max_separation"></div>

[`float`](class_float.md) **physics/2d/solver/contact_max_separation** = ``1.5`` <div id="class_projectsettings_property_physics/2d/solver/contact_max_separation"></div>

Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See [`PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_SEPARATION`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_contact_max_separation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/contact_recycle_radius"></div>

[`float`](class_float.md) **physics/2d/solver/contact_recycle_radius** = ``1.0`` <div id="class_projectsettings_property_physics/2d/solver/contact_recycle_radius"></div>

Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See [`PhysicsServer2D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_contact_recycle_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/default_constraint_bias"></div>

[`float`](class_float.md) **physics/2d/solver/default_constraint_bias** = ``0.2`` <div id="class_projectsettings_property_physics/2d/solver/default_constraint_bias"></div>

Default solver bias for all physics constraints. Defines how much bodies react to enforce constraints. See [`PhysicsServer2D.SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_constraint_default_bias).

Individual constraints can have a specific bias value (see [`Joint2D.bias`](class_joint2d.md#class_joint2d_property_bias)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/default_contact_bias"></div>

[`float`](class_float.md) **physics/2d/solver/default_contact_bias** = ``0.8`` <div id="class_projectsettings_property_physics/2d/solver/default_contact_bias"></div>

Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See [`PhysicsServer2D.SPACE_PARAM_CONTACT_DEFAULT_BIAS`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_contact_default_bias).

Individual shapes can have a specific bias value (see [`Shape2D.custom_solver_bias`](class_shape2d.md#class_shape2d_property_custom_solver_bias)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/solver/solver_iterations"></div>

[`int`](class_int.md) **physics/2d/solver/solver_iterations** = ``16`` <div id="class_projectsettings_property_physics/2d/solver/solver_iterations"></div>

Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See [`PhysicsServer2D.SPACE_PARAM_SOLVER_ITERATIONS`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_solver_iterations).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/2d/time_before_sleep"></div>

[`float`](class_float.md) **physics/2d/time_before_sleep** = ``0.5`` <div id="class_projectsettings_property_physics/2d/time_before_sleep"></div>

Time (in seconds) of inactivity before which a 2D physics body will put to sleep. See [`PhysicsServer2D.SPACE_PARAM_BODY_TIME_TO_SLEEP`](class_physicsserver2d.md#class_physicsserver2d_constant_space_param_body_time_to_sleep).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/default_angular_damp"></div>

[`float`](class_float.md) **physics/3d/default_angular_damp** = ``0.1`` <div id="class_projectsettings_property_physics/3d/default_angular_damp"></div>

The default rotational motion damping in 3D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.

Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate ([`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second)) will bring the object to a stop in one iteration.

 **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.

During each physics tick, Godot will multiply the angular velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See [DampMode](#enum_rigidbody3d_dampmode).

 **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/default_gravity"></div>

[`float`](class_float.md) **physics/3d/default_gravity** = ``9.8`` <div id="class_projectsettings_property_physics/3d/default_gravity"></div>

The default gravity strength in 3D (in meters per second squared).

 **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:



```gdscript

    # Set the default gravity strength to 9.8.
    PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY, 9.8)
```

```csharp

    // Set the default gravity strength to 9.8.
    PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.Gravity, 9.8);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/default_gravity_vector"></div>

[`Vector3`](class_vector3.md) **physics/3d/default_gravity_vector** = ``Vector3(0, -1, 0)`` <div id="class_projectsettings_property_physics/3d/default_gravity_vector"></div>

The default gravity direction in 3D.

 **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:



```gdscript

    # Set the default gravity direction to `Vector3(0, -1, 0)`.
    PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY_VECTOR, Vector3.DOWN)
```

```csharp

    // Set the default gravity direction to `Vector3(0, -1, 0)`.
    PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.GravityVector, Vector3.Down)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/default_linear_damp"></div>

[`float`](class_float.md) **physics/3d/default_linear_damp** = ``0.1`` <div id="class_projectsettings_property_physics/3d/default_linear_damp"></div>

The default linear motion damping in 3D. Damping is used to gradually slow down physical objects over time. RigidBodies will fall back to this value when combining their own damping values and no area damping value is present.

Suggested values are in the range `0` to `30`. At value `0` objects will keep moving with the same velocity. Greater values will stop the object faster. A value equal to or greater than the physics tick rate ([`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second)) will bring the object to a stop in one iteration.

 **Note:** Godot damping calculations are velocity-dependent, meaning bodies moving faster will take a longer time to come to rest. They do not simulate inertia, friction, or air resistance. Therefore heavier or larger bodies will lose speed at the same proportional rate as lighter or smaller bodies.

During each physics tick, Godot will multiply the linear velocity of RigidBodies by `1.0 - combined_damp / physics_ticks_per_second`. By default, bodies combine damp factors: `combined_damp` is the sum of the damp value of the body and this value or the area's value the body is in. See [DampMode](#enum_rigidbody3d_dampmode).

 **Warning:** Godot's damping calculations are simulation tick rate dependent. Changing [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) may significantly change the outcomes and feel of your simulation. This is true for the entire range of damping values greater than 0. To get back to a similar feel, you also need to change your damp values. This needed change is not proportional and differs from case to case.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/physics_engine"></div>

[`String`](class_string.md) **physics/3d/physics_engine** = ``"DEFAULT"`` <div id="class_projectsettings_property_physics/3d/physics_engine"></div>

Sets which physics engine to use for 3D physics.

"DEFAULT" and "GodotPhysics3D" are the same, as there is currently no alternative 3D physics server implemented.

"Dummy" is a 3D physics server that does nothing and returns only dummy values, effectively disabling all 3D physics functionality.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/run_on_separate_thread"></div>

[`bool`](class_bool.md) **physics/3d/run_on_separate_thread** = ``false`` <div id="class_projectsettings_property_physics/3d/run_on_separate_thread"></div>

If `true`, the 3D physics server runs on a separate thread, making better use of multi-core CPUs. If `false`, the 3D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/sleep_threshold_angular"></div>

[`float`](class_float.md) **physics/3d/sleep_threshold_angular** = ``0.139626`` <div id="class_projectsettings_property_physics/3d/sleep_threshold_angular"></div>

Threshold angular velocity under which a 3D physics body will be considered inactive. See [`PhysicsServer3D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_body_angular_velocity_sleep_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/sleep_threshold_linear"></div>

[`float`](class_float.md) **physics/3d/sleep_threshold_linear** = ``0.1`` <div id="class_projectsettings_property_physics/3d/sleep_threshold_linear"></div>

Threshold linear velocity under which a 3D physics body will be considered inactive. See [`PhysicsServer3D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_body_linear_velocity_sleep_threshold).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/solver/contact_max_allowed_penetration"></div>

[`float`](class_float.md) **physics/3d/solver/contact_max_allowed_penetration** = ``0.01`` <div id="class_projectsettings_property_physics/3d/solver/contact_max_allowed_penetration"></div>

Maximum distance a shape can penetrate another shape before it is considered a collision. See [`PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_contact_max_allowed_penetration).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/solver/contact_max_separation"></div>

[`float`](class_float.md) **physics/3d/solver/contact_max_separation** = ``0.05`` <div id="class_projectsettings_property_physics/3d/solver/contact_max_separation"></div>

Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See [`PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_SEPARATION`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_contact_max_separation).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/solver/contact_recycle_radius"></div>

[`float`](class_float.md) **physics/3d/solver/contact_recycle_radius** = ``0.01`` <div id="class_projectsettings_property_physics/3d/solver/contact_recycle_radius"></div>

Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See [`PhysicsServer3D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_contact_recycle_radius).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/solver/default_contact_bias"></div>

[`float`](class_float.md) **physics/3d/solver/default_contact_bias** = ``0.8`` <div id="class_projectsettings_property_physics/3d/solver/default_contact_bias"></div>

Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See [`PhysicsServer3D.SPACE_PARAM_CONTACT_DEFAULT_BIAS`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_contact_default_bias).

Individual shapes can have a specific bias value (see [`Shape3D.custom_solver_bias`](class_shape3d.md#class_shape3d_property_custom_solver_bias)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/solver/solver_iterations"></div>

[`int`](class_int.md) **physics/3d/solver/solver_iterations** = ``16`` <div id="class_projectsettings_property_physics/3d/solver/solver_iterations"></div>

Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See [`PhysicsServer3D.SPACE_PARAM_SOLVER_ITERATIONS`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_solver_iterations).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/3d/time_before_sleep"></div>

[`float`](class_float.md) **physics/3d/time_before_sleep** = ``0.5`` <div id="class_projectsettings_property_physics/3d/time_before_sleep"></div>

Time (in seconds) of inactivity before which a 3D physics body will put to sleep. See [`PhysicsServer3D.SPACE_PARAM_BODY_TIME_TO_SLEEP`](class_physicsserver3d.md#class_physicsserver3d_constant_space_param_body_time_to_sleep).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/common/enable_object_picking"></div>

[`bool`](class_bool.md) **physics/common/enable_object_picking** = ``true`` <div id="class_projectsettings_property_physics/common/enable_object_picking"></div>

Enables [`Viewport.physics_object_picking`](class_viewport.md#class_viewport_property_physics_object_picking) on the root viewport.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/common/max_physics_steps_per_frame"></div>

[`int`](class_int.md) **physics/common/max_physics_steps_per_frame** = ``8`` <div id="class_projectsettings_property_physics/common/max_physics_steps_per_frame"></div>

Controls the maximum number of physics steps that can be simulated each rendered frame. The default value is tuned to avoid "spiral of death" situations where expensive physics simulations trigger more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second). This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase [`physics/common/max_physics_steps_per_frame`](class_projectsettings.md#class_projectsettings_property_physics/common/max_physics_steps_per_frame) if you have increased [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) significantly above its default value.

 **Note:** This property is only read when the project starts. To change the maximum number of simulated physics steps per frame at runtime, set [`Engine.max_physics_steps_per_frame`](class_engine.md#class_engine_property_max_physics_steps_per_frame) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/common/physics_interpolation"></div>

[`bool`](class_bool.md) **physics/common/physics_interpolation** = ``false`` <div id="class_projectsettings_property_physics/common/physics_interpolation"></div>

If `true`, the renderer will interpolate the transforms of physics objects between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames. See also [`Node.physics_interpolation_mode`](class_node.md#class_node_property_physics_interpolation_mode) and [`Node.reset_physics_interpolation`](class_node.md#class_node_method_reset_physics_interpolation).

 **Note:** If `true`, the physics jitter fix should be disabled by setting [`physics/common/physics_jitter_fix`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_jitter_fix) to `0.0`.

 **Note:** This property is only read when the project starts. To toggle physics interpolation at runtime, set [`SceneTree.physics_interpolation`](class_scenetree.md#class_scenetree_property_physics_interpolation) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/common/physics_jitter_fix"></div>

[`float`](class_float.md) **physics/common/physics_jitter_fix** = ``0.5`` <div id="class_projectsettings_property_physics/common/physics_jitter_fix"></div>

Controls how much physics ticks are synchronized with real time. For 0 or less, the ticks are synchronized. Such values are recommended for network games, where clock synchronization matters. Higher values cause higher deviation of in-game clock and real clock, but allows smoothing out framerate jitters. The default value of 0.5 should be good enough for most; values above 2 could cause the game to react to dropped frames with a noticeable delay and are not recommended.

 **Note:** Jitter fix is automatically disabled at runtime when [`physics/common/physics_interpolation`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_interpolation) is enabled.

 **Note:** When using a custom physics interpolation solution, the physics jitter fix should be disabled by setting [`physics/common/physics_jitter_fix`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_jitter_fix) to `0.0`.

 **Note:** This property is only read when the project starts. To change the physics jitter fix at runtime, set [`Engine.physics_jitter_fix`](class_engine.md#class_engine_property_physics_jitter_fix) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_physics/common/physics_ticks_per_second"></div>

[`int`](class_int.md) **physics/common/physics_ticks_per_second** = ``60`` <div id="class_projectsettings_property_physics/common/physics_ticks_per_second"></div>

The number of fixed iterations per second. This controls how often physics simulation and [`Node._physics_process`](class_node.md#class_node_private_method__physics_process) methods are run. See also [`application/run/max_fps`](class_projectsettings.md#class_projectsettings_property_application/run/max_fps).

 **Note:** This property is only read when the project starts. To change the physics FPS at runtime, set [`Engine.physics_ticks_per_second`](class_engine.md#class_engine_property_physics_ticks_per_second) instead.

 **Note:** Only [`physics/common/max_physics_steps_per_frame`](class_projectsettings.md#class_projectsettings_property_physics/common/max_physics_steps_per_frame) physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [`physics/common/max_physics_steps_per_frame`](class_projectsettings.md#class_projectsettings_property_physics/common/max_physics_steps_per_frame) if increasing [`physics/common/physics_ticks_per_second`](class_projectsettings.md#class_projectsettings_property_physics/common/physics_ticks_per_second) significantly above its default value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/batching/item_buffer_size"></div>

[`int`](class_int.md) **rendering/2d/batching/item_buffer_size** = ``16384`` <div id="class_projectsettings_property_rendering/2d/batching/item_buffer_size"></div>

Maximum number of canvas item commands that can be batched into a single draw call.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/batching/uniform_set_cache_size"></div>

[`int`](class_int.md) **rendering/2d/batching/uniform_set_cache_size** = ``256`` <div id="class_projectsettings_property_rendering/2d/batching/uniform_set_cache_size"></div>

Maximum number of uniform sets that will be cached by the 2D renderer when batching draw calls.

 **Note:** A project that uses a large number of unique sprite textures per frame may benefit from increasing this value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/sdf/oversize"></div>

[`int`](class_int.md) **rendering/2d/sdf/oversize** = ``1`` <div id="class_projectsettings_property_rendering/2d/sdf/oversize"></div>

Controls how much of the original viewport size should be covered by the 2D signed distance field. This SDF can be sampled in [`CanvasItem`](class_canvasitem.md) shaders and is used for [`GPUParticles2D`](class_gpuparticles2d.md) collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [`LightOccluder2D`](class_lightoccluder2d.md) s as the occluders leave the viewport, increase this setting.

The percentage specified is added on each axis and on both sides. For example, with the default setting of 120%, the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).

 **Note:** This property is only read when the project starts. To change the 2D SDF oversizing percentage at runtime, use [`RenderingServer.viewport_set_sdf_oversize_and_scale`](class_renderingserver.md#class_renderingserver_method_viewport_set_sdf_oversize_and_scale) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/sdf/scale"></div>

[`int`](class_int.md) **rendering/2d/sdf/scale** = ``1`` <div id="class_projectsettings_property_rendering/2d/sdf/scale"></div>

The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. The default value (50%) renders at half the resolution of the viewport size on each axis, which means the SDF is generated with 25% of the viewport's pixel count.

 **Note:** This property is only read when the project starts. To change the 2D SDF resolution scale at runtime, use [`RenderingServer.viewport_set_sdf_oversize_and_scale`](class_renderingserver.md#class_renderingserver_method_viewport_set_sdf_oversize_and_scale) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/shadow_atlas/size"></div>

[`int`](class_int.md) **rendering/2d/shadow_atlas/size** = ``2048`` <div id="class_projectsettings_property_rendering/2d/shadow_atlas/size"></div>

The size of the 2D shadow atlas in pixels. Higher values result in more precise [`Light2D`](class_light2d.md) shadows, at the cost of performance and video memory usage. The specified value is rounded up to the nearest power of 2.

 **Note:** This property is only read when the project starts. To change the 2D shadow atlas size at runtime, use [`RenderingServer.canvas_set_shadow_texture_size`](class_renderingserver.md#class_renderingserver_method_canvas_set_shadow_texture_size) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel"></div>

[`bool`](class_bool.md) **rendering/2d/snap/snap_2d_transforms_to_pixel** = ``false`` <div id="class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel"></div>

If `true`, [`CanvasItem`](class_canvasitem.md) nodes will internally snap to full pixels. Useful for low-resolution pixel art games. Their position can still be sub-pixel, but the decimals will not have effect as the position is rounded. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled.

 **Note:** This property is only read when the project starts. To toggle 2D transform snapping at runtime, use [`RenderingServer.viewport_set_snap_2d_transforms_to_pixel`](class_renderingserver.md#class_renderingserver_method_viewport_set_snap_2d_transforms_to_pixel) on the root [`Viewport`](class_viewport.md) instead.

 **Note:** [`Control`](class_control.md) nodes are snapped to the nearest pixel by default. This is controlled by [`gui/common/snap_controls_to_pixels`](class_projectsettings.md#class_projectsettings_property_gui/common/snap_controls_to_pixels).

 **Note:** It is not recommended to use this setting together with [`rendering/2d/snap/snap_2d_vertices_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel), as movement may appear even less smooth. Prefer only enabling this setting instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel"></div>

[`bool`](class_bool.md) **rendering/2d/snap/snap_2d_vertices_to_pixel** = ``false`` <div id="class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel"></div>

If `true`, vertices of [`CanvasItem`](class_canvasitem.md) nodes will snap to full pixels. Useful for low-resolution pixel art games. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [`Camera2D`](class_camera2d.md) smoothing is enabled.

 **Note:** This property is only read when the project starts. To toggle 2D vertex snapping at runtime, use [`RenderingServer.viewport_set_snap_2d_vertices_to_pixel`](class_renderingserver.md#class_renderingserver_method_viewport_set_snap_2d_vertices_to_pixel) on the root [`Viewport`](class_viewport.md) instead.

 **Note:** [`Control`](class_control.md) nodes are snapped to the nearest pixel by default. This is controlled by [`gui/common/snap_controls_to_pixels`](class_projectsettings.md#class_projectsettings_property_gui/common/snap_controls_to_pixels).

 **Note:** It is not recommended to use this setting together with [`rendering/2d/snap/snap_2d_transforms_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel), as movement may appear even less smooth. Prefer only enabling that setting instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/quality/msaa_2d"></div>

[`int`](class_int.md) **rendering/anti_aliasing/quality/msaa_2d** = ``0`` <div id="class_projectsettings_property_rendering/anti_aliasing/quality/msaa_2d"></div>

Sets the number of multisample antialiasing (MSAA) samples to use for 2D/Canvas rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. This has no effect on shader-induced aliasing or texture aliasing.

 **Note:** MSAA is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

 **Note:** This property is only read when the project starts. To set the number of 2D MSAA samples at runtime, set [`Viewport.msaa_2d`](class_viewport.md#class_viewport_property_msaa_2d) or use [`RenderingServer.viewport_set_msaa_2d`](class_renderingserver.md#class_renderingserver_method_viewport_set_msaa_2d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d"></div>

[`int`](class_int.md) **rendering/anti_aliasing/quality/msaa_3d** = ``0`` <div id="class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d"></div>

Sets the number of multisample antialiasing (MSAA) samples to use for 3D rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. See also [`rendering/scaling_3d/mode`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/mode) for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.

 **Note:** This property is only read when the project starts. To set the number of 3D MSAA samples at runtime, set [`Viewport.msaa_3d`](class_viewport.md#class_viewport_property_msaa_3d) or use [`RenderingServer.viewport_set_msaa_3d`](class_renderingserver.md#class_renderingserver_method_viewport_set_msaa_3d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa"></div>

[`int`](class_int.md) **rendering/anti_aliasing/quality/screen_space_aa** = ``0`` <div id="class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa"></div>

Sets the screen-space antialiasing mode for the default screen [`Viewport`](class_viewport.md). Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. The blurriness is partially counteracted by automatically using a negative mipmap LOD bias (see [`rendering/textures/default_filters/texture_mipmap_bias`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias)).

Another way to combat specular aliasing is to enable [`rendering/anti_aliasing/screen_space_roughness_limiter/enabled`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/enabled).

 **Note:** Screen-space antialiasing is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

 **Note:** This property is only read when the project starts. To set the screen-space antialiasing mode at runtime, set [`Viewport.screen_space_aa`](class_viewport.md#class_viewport_property_screen_space_aa) on the root [`Viewport`](class_viewport.md) instead, or use [`RenderingServer.viewport_set_screen_space_aa`](class_renderingserver.md#class_renderingserver_method_viewport_set_screen_space_aa).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/quality/use_debanding"></div>

[`bool`](class_bool.md) **rendering/anti_aliasing/quality/use_debanding** = ``false`` <div id="class_projectsettings_property_rendering/anti_aliasing/quality/use_debanding"></div>

If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is *not* affected by debanding unless the [`Environment.background_mode`](class_environment.md#class_environment_property_background_mode) is [`Environment.BG_CANVAS`](class_environment.md#class_environment_constant_bg_canvas).

In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.

 **Note:** This property is only read when the project starts. To set debanding at runtime, set [`Viewport.use_debanding`](class_viewport.md#class_viewport_property_use_debanding) on the root [`Viewport`](class_viewport.md) instead, or use [`RenderingServer.viewport_set_use_debanding`](class_renderingserver.md#class_renderingserver_method_viewport_set_use_debanding).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/quality/use_taa"></div>

[`bool`](class_bool.md) **rendering/anti_aliasing/quality/use_taa** = ``false`` <div id="class_projectsettings_property_rendering/anti_aliasing/quality/use_taa"></div>

Enables temporal antialiasing for the default screen [`Viewport`](class_viewport.md). TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion. Enabling TAA can make the image blurrier, which is partially counteracted by automatically using a negative mipmap LOD bias (see [`rendering/textures/default_filters/texture_mipmap_bias`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias)).

 **Note:** The implementation is not complete yet. Some visual instances such as particles and skinned meshes may show ghosting artifacts in motion.

 **Note:** TAA is only supported in the Forward+ rendering method, not Mobile or Compatibility.

 **Note:** This property is only read when the project starts. To set TAA at runtime, set [`Viewport.use_taa`](class_viewport.md#class_viewport_property_use_taa) on the root [`Viewport`](class_viewport.md) instead, or use [`RenderingServer.viewport_set_use_taa`](class_renderingserver.md#class_renderingserver_method_viewport_set_use_taa).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/amount"></div>

[`float`](class_float.md) **rendering/anti_aliasing/screen_space_roughness_limiter/amount** = ``0.25`` <div id="class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/amount"></div>

**Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [`RenderingServer.screen_space_roughness_limiter_set_active`](class_renderingserver.md#class_renderingserver_method_screen_space_roughness_limiter_set_active) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/enabled"></div>

[`bool`](class_bool.md) **rendering/anti_aliasing/screen_space_roughness_limiter/enabled** = ``true`` <div id="class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/enabled"></div>

If `true`, enables a spatial filter to limit roughness in areas with high-frequency detail. This can help reduce specular aliasing to an extent, though not as much as enabling [`rendering/anti_aliasing/quality/use_taa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa). This filter has a small performance cost, so consider disabling it if it doesn't benefit your scene noticeably.

 **Note:** The screen-space roughness limiter is only supported in the Forward+ and Mobile rendering methods, not Compatibility.

 **Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [`RenderingServer.screen_space_roughness_limiter_set_active`](class_renderingserver.md#class_renderingserver_method_screen_space_roughness_limiter_set_active) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/limit"></div>

[`float`](class_float.md) **rendering/anti_aliasing/screen_space_roughness_limiter/limit** = ``0.18`` <div id="class_projectsettings_property_rendering/anti_aliasing/screen_space_roughness_limiter/limit"></div>

**Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [`RenderingServer.screen_space_roughness_limiter_set_active`](class_renderingserver.md#class_renderingserver_method_screen_space_roughness_limiter_set_active) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_quality"></div>

[`int`](class_int.md) **rendering/camera/depth_of_field/depth_of_field_bokeh_quality** = ``1`` <div id="class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_quality"></div>

Sets the quality of the depth of field effect. Higher quality takes more samples, which is slower but looks smoother.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_shape"></div>

[`int`](class_int.md) **rendering/camera/depth_of_field/depth_of_field_bokeh_shape** = ``1`` <div id="class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_bokeh_shape"></div>

Sets the depth of field shape. Can be Box, Hexagon, or Circle. Box is the fastest. Circle is the most realistic, but also the most expensive to compute.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_use_jitter"></div>

[`bool`](class_bool.md) **rendering/camera/depth_of_field/depth_of_field_use_jitter** = ``false`` <div id="class_projectsettings_property_rendering/camera/depth_of_field/depth_of_field_use_jitter"></div>

If `true`, jitters DOF samples to make effect slightly blurrier and hide lines created from low sample rates. This can result in a slightly grainy appearance when used with a low number of samples.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/driver/depth_prepass/disable_for_vendors"></div>

[`String`](class_string.md) **rendering/driver/depth_prepass/disable_for_vendors** = ``"PowerVR,Mali,Adreno,Apple"`` <div id="class_projectsettings_property_rendering/driver/depth_prepass/disable_for_vendors"></div>

Disables [`rendering/driver/depth_prepass/enable`](class_projectsettings.md#class_projectsettings_property_rendering/driver/depth_prepass/enable) conditionally for certain vendors. By default, disables the depth prepass for mobile devices as mobile devices do not benefit from the depth prepass due to their unique architecture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/driver/depth_prepass/enable"></div>

[`bool`](class_bool.md) **rendering/driver/depth_prepass/enable** = ``true`` <div id="class_projectsettings_property_rendering/driver/depth_prepass/enable"></div>

If `true`, performs a previous depth pass before rendering 3D materials. This increases performance significantly in scenes with high overdraw, when complex materials and lighting are used. However, in scenes with few occluded surfaces, the depth prepass may reduce performance. If your game is viewed from a fixed angle that makes it easy to avoid overdraw (such as top-down or side-scrolling perspective), consider disabling the depth prepass to improve performance. This setting can be changed at run-time to optimize performance depending on the scene currently being viewed.

 **Note:** Depth prepass is only supported when using the Forward+ or Compatibility rendering method. When using the Mobile rendering method, there is no depth prepass performed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/driver/threads/thread_model"></div>

[`int`](class_int.md) **rendering/driver/threads/thread_model** = ``1`` <div id="class_projectsettings_property_rendering/driver/threads/thread_model"></div>

**实验性：** This setting has several known bugs which can lead to crashing, especially when using particles or resizing the window. Not recommended for use in production at this stage.

The thread model to use for rendering. Rendering on a thread may improve performance, but synchronizing to the main thread can cause a bit more jitter.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/defaults/default_clear_color"></div>

[`Color`](class_color.md) **rendering/environment/defaults/default_clear_color** = ``Color(0.3, 0.3, 0.3, 1)`` <div id="class_projectsettings_property_rendering/environment/defaults/default_clear_color"></div>

Default background clear color. Overridable per [`Viewport`](class_viewport.md) using its [`Environment`](class_environment.md). See [`Environment.background_mode`](class_environment.md#class_environment_property_background_mode) and [`Environment.background_color`](class_environment.md#class_environment_property_background_color) in particular. To change this default color programmatically, use [`RenderingServer.set_default_clear_color`](class_renderingserver.md#class_renderingserver_method_set_default_clear_color).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/defaults/default_environment"></div>

[`String`](class_string.md) **rendering/environment/defaults/default_environment** = ``""`` <div id="class_projectsettings_property_rendering/environment/defaults/default_environment"></div>

[`Environment`](class_environment.md) that will be used as a fallback environment in case a scene does not specify its own environment. The default environment is loaded in at scene load time regardless of whether you have set an environment or not. If you do not rely on the fallback environment, you do not need to set this property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/glow/upscale_mode"></div>

[`int`](class_int.md) **rendering/environment/glow/upscale_mode** = ``1`` <div id="class_projectsettings_property_rendering/environment/glow/upscale_mode"></div>

Sets how the glow effect is upscaled before being copied onto the screen. Linear is faster, but looks blocky. Bicubic is slower but looks smooth.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/glow/upscale_mode.mobile"></div>

[`int`](class_int.md) **rendering/environment/glow/upscale_mode.mobile** = ``0`` <div id="class_projectsettings_property_rendering/environment/glow/upscale_mode.mobile"></div>

Lower-end override for [`rendering/environment/glow/upscale_mode`](class_projectsettings.md#class_projectsettings_property_rendering/environment/glow/upscale_mode) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/screen_space_reflection/roughness_quality"></div>

[`int`](class_int.md) **rendering/environment/screen_space_reflection/roughness_quality** = ``1`` <div id="class_projectsettings_property_rendering/environment/screen_space_reflection/roughness_quality"></div>

Sets the quality for rough screen-space reflections. Turning off will make all screen space reflections sharp, while higher values make rough reflections look better.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/adaptive_target"></div>

[`float`](class_float.md) **rendering/environment/ssao/adaptive_target** = ``0.5`` <div id="class_projectsettings_property_rendering/environment/ssao/adaptive_target"></div>

Quality target to use when [`rendering/environment/ssao/quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/quality) is set to `Ultra`. A value of `0.0` provides a quality and speed similar to `Medium` while a value of `1.0` provides much higher quality than any of the other settings at the cost of performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/blur_passes"></div>

[`int`](class_int.md) **rendering/environment/ssao/blur_passes** = ``2`` <div id="class_projectsettings_property_rendering/environment/ssao/blur_passes"></div>

Number of blur passes to use when computing screen-space ambient occlusion. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/fadeout_from"></div>

[`float`](class_float.md) **rendering/environment/ssao/fadeout_from** = ``50.0`` <div id="class_projectsettings_property_rendering/environment/ssao/fadeout_from"></div>

Distance at which the screen-space ambient occlusion effect starts to fade out. Use this hide ambient occlusion at great distances.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/fadeout_to"></div>

[`float`](class_float.md) **rendering/environment/ssao/fadeout_to** = ``300.0`` <div id="class_projectsettings_property_rendering/environment/ssao/fadeout_to"></div>

Distance at which the screen-space ambient occlusion is fully faded out. Use this hide ambient occlusion at great distances.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/half_size"></div>

[`bool`](class_bool.md) **rendering/environment/ssao/half_size** = ``true`` <div id="class_projectsettings_property_rendering/environment/ssao/half_size"></div>

If `true`, screen-space ambient occlusion will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details. If `false`, screen-space ambient occlusion will be rendered at full size.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssao/quality"></div>

[`int`](class_int.md) **rendering/environment/ssao/quality** = ``2`` <div id="class_projectsettings_property_rendering/environment/ssao/quality"></div>

Sets the quality of the screen-space ambient occlusion effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to `Ultra` will use the [`rendering/environment/ssao/adaptive_target`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssao/adaptive_target) setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/adaptive_target"></div>

[`float`](class_float.md) **rendering/environment/ssil/adaptive_target** = ``0.5`` <div id="class_projectsettings_property_rendering/environment/ssil/adaptive_target"></div>

Quality target to use when [`rendering/environment/ssil/quality`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/quality) is set to `Ultra`. A value of `0.0` provides a quality and speed similar to `Medium` while a value of `1.0` provides much higher quality than any of the other settings at the cost of performance. When using the adaptive target, the performance cost scales with the complexity of the scene.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/blur_passes"></div>

[`int`](class_int.md) **rendering/environment/ssil/blur_passes** = ``4`` <div id="class_projectsettings_property_rendering/environment/ssil/blur_passes"></div>

Number of blur passes to use when computing screen-space indirect lighting. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/fadeout_from"></div>

[`float`](class_float.md) **rendering/environment/ssil/fadeout_from** = ``50.0`` <div id="class_projectsettings_property_rendering/environment/ssil/fadeout_from"></div>

Distance at which the screen-space indirect lighting effect starts to fade out. Use this hide screen-space indirect lighting at great distances.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/fadeout_to"></div>

[`float`](class_float.md) **rendering/environment/ssil/fadeout_to** = ``300.0`` <div id="class_projectsettings_property_rendering/environment/ssil/fadeout_to"></div>

Distance at which the screen-space indirect lighting is fully faded out. Use this hide screen-space indirect lighting at great distances.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/half_size"></div>

[`bool`](class_bool.md) **rendering/environment/ssil/half_size** = ``true`` <div id="class_projectsettings_property_rendering/environment/ssil/half_size"></div>

If `true`, screen-space indirect lighting will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details and may result in some objects appearing to glow at their edges.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/ssil/quality"></div>

[`int`](class_int.md) **rendering/environment/ssil/quality** = ``2`` <div id="class_projectsettings_property_rendering/environment/ssil/quality"></div>

Sets the quality of the screen-space indirect lighting effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to `Ultra` will use the [`rendering/environment/ssil/adaptive_target`](class_projectsettings.md#class_projectsettings_property_rendering/environment/ssil/adaptive_target) setting.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale"></div>

[`float`](class_float.md) **rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale** = ``0.01`` <div id="class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale"></div>

Scales the depth over which the subsurface scattering effect is applied. A high value may allow light to scatter into a part of the mesh or another mesh that is close in screen space but far in depth. See also [`rendering/environment/subsurface_scattering/subsurface_scattering_scale`](class_projectsettings.md#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale).

 **Note:** This property is only read when the project starts. To set the subsurface scattering depth scale at runtime, call [`RenderingServer.sub_surface_scattering_set_scale`](class_renderingserver.md#class_renderingserver_method_sub_surface_scattering_set_scale) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_quality"></div>

[`int`](class_int.md) **rendering/environment/subsurface_scattering/subsurface_scattering_quality** = ``1`` <div id="class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_quality"></div>

Sets the quality of the subsurface scattering effect. Higher values are slower but look nicer. This affects the rendering of materials that have [`BaseMaterial3D.subsurf_scatter_enabled`](class_basematerial3d.md#class_basematerial3d_property_subsurf_scatter_enabled) set to `true`, along with [`ShaderMaterial`](class_shadermaterial.md) s that set `SSS_STRENGTH`.

 **Note:** This property is only read when the project starts. To set the subsurface scattering quality at runtime, call [`RenderingServer.sub_surface_scattering_set_quality`](class_renderingserver.md#class_renderingserver_method_sub_surface_scattering_set_quality) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale"></div>

[`float`](class_float.md) **rendering/environment/subsurface_scattering/subsurface_scattering_scale** = ``0.05`` <div id="class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_scale"></div>

Scales the distance over which samples are taken for subsurface scattering effect. Changing this does not impact performance, but higher values will result in significant artifacts as the samples will become obviously spread out. A lower value results in a smaller spread of scattered light. See also [`rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale`](class_projectsettings.md#class_projectsettings_property_rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale).

 **Note:** This property is only read when the project starts. To set the subsurface scattering scale at runtime, call [`RenderingServer.sub_surface_scattering_set_scale`](class_renderingserver.md#class_renderingserver_method_sub_surface_scattering_set_scale) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/volumetric_fog/use_filter"></div>

[`int`](class_int.md) **rendering/environment/volumetric_fog/use_filter** = ``1`` <div id="class_projectsettings_property_rendering/environment/volumetric_fog/use_filter"></div>

Enables filtering of the volumetric fog effect prior to integration. This substantially blurs the fog which reduces fine details but also smooths out harsh edges and aliasing artifacts. Disable when more detail is required.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/volumetric_fog/volume_depth"></div>

[`int`](class_int.md) **rendering/environment/volumetric_fog/volume_depth** = ``64`` <div id="class_projectsettings_property_rendering/environment/volumetric_fog/volume_depth"></div>

Number of slices to use along the depth of the froxel buffer for volumetric fog. A lower number will be more efficient but may result in artifacts appearing during camera movement. See also [`Environment.volumetric_fog_length`](class_environment.md#class_environment_property_volumetric_fog_length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/environment/volumetric_fog/volume_size"></div>

[`int`](class_int.md) **rendering/environment/volumetric_fog/volume_size** = ``64`` <div id="class_projectsettings_property_rendering/environment/volumetric_fog/volume_size"></div>

Base size used to determine size of froxel buffer in the camera X-axis and Y-axis. The final size is scaled by the aspect ratio of the screen, so actual values may differ from what is set. Set a larger size for more detailed fog, set a smaller size for better performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver** <div id="class_projectsettings_property_rendering/gl_compatibility/driver"></div>

Sets the driver to be used by the renderer when using the Compatibility renderer. This property can not be edited directly, instead, set the driver using the platform-specific overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.android"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.android** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.android"></div>

Android override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.ios"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.ios** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.ios"></div>

iOS override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.linuxbsd"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.linuxbsd** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.linuxbsd"></div>

LinuxBSD override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.macos"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.macos** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.macos"></div>

macOS override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.web"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.web** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.web"></div>

Web override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/driver.windows"></div>

[`String`](class_string.md) **rendering/gl_compatibility/driver.windows** <div id="class_projectsettings_property_rendering/gl_compatibility/driver.windows"></div>

Windows override for [`rendering/gl_compatibility/driver`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/fallback_to_angle"></div>

[`bool`](class_bool.md) **rendering/gl_compatibility/fallback_to_angle** = ``true`` <div id="class_projectsettings_property_rendering/gl_compatibility/fallback_to_angle"></div>

If `true`, the compatibility renderer will fall back to ANGLE if native OpenGL is not supported or the device is listed in [`rendering/gl_compatibility/force_angle_on_devices`](class_projectsettings.md#class_projectsettings_property_rendering/gl_compatibility/force_angle_on_devices).

 **Note:** This setting is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/fallback_to_gles"></div>

[`bool`](class_bool.md) **rendering/gl_compatibility/fallback_to_gles** = ``true`` <div id="class_projectsettings_property_rendering/gl_compatibility/fallback_to_gles"></div>

If `true`, the compatibility renderer will fall back to OpenGLES if desktop OpenGL is not supported.

 **Note:** This setting is implemented only on Linux/X11.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/fallback_to_native"></div>

[`bool`](class_bool.md) **rendering/gl_compatibility/fallback_to_native** = ``true`` <div id="class_projectsettings_property_rendering/gl_compatibility/fallback_to_native"></div>

If `true`, the compatibility renderer will fall back to native OpenGL if ANGLE is not supported, or ANGLE dynamic libraries aren't found.

 **Note:** This setting is implemented on macOS and Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/force_angle_on_devices"></div>

[`Array`](class_array.md) **rendering/gl_compatibility/force_angle_on_devices** <div id="class_projectsettings_property_rendering/gl_compatibility/force_angle_on_devices"></div>

An [`Array`](class_array.md) of devices which should always use the ANGLE renderer.

Each entry is a [`Dictionary`](class_dictionary.md) with the following keys: `vendor` and `name`. `name` can be set to `*` to add all devices with the specified `vendor`.

 **Note:** This setting is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/item_buffer_size"></div>

[`int`](class_int.md) **rendering/gl_compatibility/item_buffer_size** = ``16384`` <div id="class_projectsettings_property_rendering/gl_compatibility/item_buffer_size"></div>

Maximum number of canvas items commands that can be drawn in a single viewport update. If more render commands are issued they will be ignored. Decreasing this limit may improve performance on bandwidth limited devices. Increase this limit if you find that not all objects are being drawn in a frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/gl_compatibility/nvidia_disable_threaded_optimization"></div>

[`bool`](class_bool.md) **rendering/gl_compatibility/nvidia_disable_threaded_optimization** = ``true`` <div id="class_projectsettings_property_rendering/gl_compatibility/nvidia_disable_threaded_optimization"></div>

If `true`, disables the threaded optimization feature from the NVIDIA drivers, which are known to cause stuttering in most OpenGL applications.

 **Note:** This setting only works on Windows, as threaded optimization is disabled by default on other platforms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution"></div>

[`bool`](class_bool.md) **rendering/global_illumination/gi/use_half_resolution** = ``false`` <div id="class_projectsettings_property_rendering/global_illumination/gi/use_half_resolution"></div>

If `true`, renders [`VoxelGI`](class_voxelgi.md) and SDFGI ([`Environment.sdfgi_enabled`](class_environment.md#class_environment_property_sdfgi_enabled)) buffers at halved resolution (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [`LightmapGI`](class_lightmapgi.md) rendering is not affected by this setting.

 **Note:** This property is only read when the project starts. To set half-resolution GI at run-time, call [`RenderingServer.gi_set_use_half_resolution`](class_renderingserver.md#class_renderingserver_method_gi_set_use_half_resolution) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge"></div>

[`int`](class_int.md) **rendering/global_illumination/sdfgi/frames_to_converge** = ``5`` <div id="class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge"></div>

The number of frames to use for converging signed distance field global illumination. Higher values lead to a less noisy result, at the cost of taking a longer time to fully converge. This means the scene's global illumination will be too dark for a longer period of time, especially when the camera moves fast. The actual convergence speed depends on rendered framerate. For example, with the default setting of 30 frames, rendering at 60 FPS will make SDFGI fully converge after 0.5 seconds. See also [`rendering/global_illumination/sdfgi/frames_to_update_lights`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights) and [`rendering/global_illumination/sdfgi/probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count).

 **Note:** This property is only read when the project starts. To control SDFGI convergence speed at runtime, call [`RenderingServer.environment_set_sdfgi_frames_to_converge`](class_renderingserver.md#class_renderingserver_method_environment_set_sdfgi_frames_to_converge) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights"></div>

[`int`](class_int.md) **rendering/global_illumination/sdfgi/frames_to_update_lights** = ``2`` <div id="class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights"></div>

The number of frames over which dynamic lights should be updated in signed distance field global illumination. Higher values take more time to update indirect lighting coming from dynamic lights, but result in better performance when many dynamic lights are present. See also [`rendering/global_illumination/sdfgi/frames_to_converge`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge) and [`rendering/global_illumination/sdfgi/probe_ray_count`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count).

 **Note:** This only affects [`Light3D`](class_light3d.md) nodes whose [`Light3D.light_bake_mode`](class_light3d.md#class_light3d_property_light_bake_mode) is [`Light3D.BAKE_DYNAMIC`](class_light3d.md#class_light3d_constant_bake_dynamic) (which is the default). Consider making non-moving lights use the [`Light3D.BAKE_STATIC`](class_light3d.md#class_light3d_constant_bake_static) bake mode to improve performance.

 **Note:** This property is only read when the project starts. To control SDFGI light update speed at runtime, call [`RenderingServer.environment_set_sdfgi_frames_to_update_light`](class_renderingserver.md#class_renderingserver_method_environment_set_sdfgi_frames_to_update_light) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count"></div>

[`int`](class_int.md) **rendering/global_illumination/sdfgi/probe_ray_count** = ``1`` <div id="class_projectsettings_property_rendering/global_illumination/sdfgi/probe_ray_count"></div>

The number of rays to throw per frame when computing signed distance field global illumination. Higher values lead to a less noisy result, at the cost of performance. See also [`rendering/global_illumination/sdfgi/frames_to_converge`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_converge) and [`rendering/global_illumination/sdfgi/frames_to_update_lights`](class_projectsettings.md#class_projectsettings_property_rendering/global_illumination/sdfgi/frames_to_update_lights).

 **Note:** This property is only read when the project starts. To control SDFGI quality at runtime, call [`RenderingServer.environment_set_sdfgi_ray_count`](class_renderingserver.md#class_renderingserver_method_environment_set_sdfgi_ray_count) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/global_illumination/voxel_gi/quality"></div>

[`int`](class_int.md) **rendering/global_illumination/voxel_gi/quality** = ``0`` <div id="class_projectsettings_property_rendering/global_illumination/voxel_gi/quality"></div>

The VoxelGI quality to use. High quality leads to more precise lighting and better reflections, but is slower to render. This setting does not affect the baked data and doesn't require baking the [`VoxelGI`](class_voxelgi.md) again to apply.

 **Note:** This property is only read when the project starts. To control VoxelGI quality at runtime, call [`RenderingServer.voxel_gi_set_quality`](class_renderingserver.md#class_renderingserver_method_voxel_gi_set_quality) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_pass"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_performance/max_rays_per_pass** = ``32`` <div id="class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_pass"></div>

The maximum number of rays that can be thrown per pass when baking lightmaps with [`LightmapGI`](class_lightmapgi.md). Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_probe_pass"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_performance/max_rays_per_probe_pass** = ``64`` <div id="class_projectsettings_property_rendering/lightmapping/bake_performance/max_rays_per_probe_pass"></div>

The maximum number of rays that can be thrown per pass when baking dynamic object lighting in [`LightmapProbe`](class_lightmapprobe.md) s with [`LightmapGI`](class_lightmapgi.md). Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_performance/region_size"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_performance/region_size** = ``512`` <div id="class_projectsettings_property_rendering/lightmapping/bake_performance/region_size"></div>

The region size to use when baking lightmaps with [`LightmapGI`](class_lightmapgi.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_probe_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/high_quality_probe_ray_count** = ``512`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_probe_ray_count"></div>

The number of rays to use for baking dynamic object lighting in [`LightmapProbe`](class_lightmapprobe.md) s when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_HIGH`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_high).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/high_quality_ray_count** = ``512`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/high_quality_ray_count"></div>

The number of rays to use for baking lightmaps with [`LightmapGI`](class_lightmapgi.md) when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_HIGH`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_high).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_probe_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/low_quality_probe_ray_count** = ``64`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_probe_ray_count"></div>

The number of rays to use for baking dynamic object lighting in [`LightmapProbe`](class_lightmapprobe.md) s when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_LOW`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_low).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/low_quality_ray_count** = ``32`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/low_quality_ray_count"></div>

The number of rays to use for baking lightmaps with [`LightmapGI`](class_lightmapgi.md) when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_LOW`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_low).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_probe_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/medium_quality_probe_ray_count** = ``256`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_probe_ray_count"></div>

The number of rays to use for baking dynamic object lighting in [`LightmapProbe`](class_lightmapprobe.md) s when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_MEDIUM`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_medium).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/medium_quality_ray_count** = ``128`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/medium_quality_ray_count"></div>

The number of rays to use for baking lightmaps with [`LightmapGI`](class_lightmapgi.md) when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_MEDIUM`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_medium).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count** = ``2048`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count"></div>

The number of rays to use for baking dynamic object lighting in [`LightmapProbe`](class_lightmapprobe.md) s when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_ULTRA`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_ultra).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_ray_count"></div>

[`int`](class_int.md) **rendering/lightmapping/bake_quality/ultra_quality_ray_count** = ``2048`` <div id="class_projectsettings_property_rendering/lightmapping/bake_quality/ultra_quality_ray_count"></div>

The number of rays to use for baking lightmaps with [`LightmapGI`](class_lightmapgi.md) when [`LightmapGI.quality`](class_lightmapgi.md#class_lightmapgi_property_quality) is [`LightmapGI.BAKE_QUALITY_ULTRA`](class_lightmapgi.md#class_lightmapgi_constant_bake_quality_ultra).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/denoising/denoiser"></div>

[`int`](class_int.md) **rendering/lightmapping/denoising/denoiser** = ``0`` <div id="class_projectsettings_property_rendering/lightmapping/denoising/denoiser"></div>

Denoiser tool used for denoising lightmaps.

Using [*OpenImageDenoise*](https://www.openimagedenoise.org/) (OIDN) requires configuring a path to an OIDN executable in the editor settings at [`EditorSettings.filesystem/tools/oidn/oidn_denoise_path`](class_editorsettings.md#class_editorsettings_property_filesystem/tools/oidn/oidn_denoise_path). OIDN can be downloaded from [*OpenImageDenoise's downloads page*](https://www.openimagedenoise.org/downloads.html).

OIDN will use GPU acceleration when available. Unlike JNLM which uses compute shaders for acceleration, OIDN uses vendor-specific acceleration methods. For GPU acceleration to be available, the following libraries must be installed on the system depending on your GPU:

- NVIDIA GPUs: CUDA libraries

- AMD GPUs: HIP libraries

- Intel GPUs: SYCL libraries

If no GPU acceleration is configured on the system, multi-threaded CPU-based denoising will be performed instead. This CPU-based denoising is significantly slower than the JNLM denoiser in most cases.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/lightmap_gi/use_bicubic_filter"></div>

[`bool`](class_bool.md) **rendering/lightmapping/lightmap_gi/use_bicubic_filter** = ``true`` <div id="class_projectsettings_property_rendering/lightmapping/lightmap_gi/use_bicubic_filter"></div>

If `true`, applies a bicubic filter during lightmap sampling. This makes lightmaps look much smoother, at a moderate performance cost.

 **Note:** The bicubic filter exaggerates the 'bleeding' effect that occurs when a lightmap's resolution is low enough.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/primitive_meshes/texel_size"></div>

[`float`](class_float.md) **rendering/lightmapping/primitive_meshes/texel_size** = ``0.2`` <div id="class_projectsettings_property_rendering/lightmapping/primitive_meshes/texel_size"></div>

The texel_size that is used to calculate the [`Mesh.lightmap_size_hint`](class_mesh.md#class_mesh_property_lightmap_size_hint) on [`PrimitiveMesh`](class_primitivemesh.md) resources if [`PrimitiveMesh.add_uv2`](class_primitivemesh.md#class_primitivemesh_property_add_uv2) is enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lightmapping/probe_capture/update_speed"></div>

[`float`](class_float.md) **rendering/lightmapping/probe_capture/update_speed** = ``15`` <div id="class_projectsettings_property_rendering/lightmapping/probe_capture/update_speed"></div>

The framerate-independent update speed when representing dynamic object lighting from [`LightmapProbe`](class_lightmapprobe.md) s. Higher values make dynamic object lighting update faster. Higher values can prevent fast-moving objects from having "outdated" indirect lighting displayed on them, at the cost of possible flickering when an object moves from a bright area to a shaded area.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/16_bits"></div>

[`bool`](class_bool.md) **rendering/lights_and_shadows/directional_shadow/16_bits** = ``true`` <div id="class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/16_bits"></div>

Use 16 bits for the directional shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/directional_shadow/size** = ``4096`` <div id="class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size"></div>

The directional shadow's size in pixels. Higher values will result in sharper shadows, at the cost of performance. The value is rounded up to the nearest power of 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size.mobile"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/directional_shadow/size.mobile** = ``2048`` <div id="class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size.mobile"></div>

Lower-end override for [`rendering/lights_and_shadows/directional_shadow/size`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/size) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality** = ``2`` <div id="class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality"></div>

Quality setting for shadows cast by [`DirectionalLight3D`](class_directionallight3d.md) s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.

 **Note:** The Soft Very Low setting will automatically multiply *constant* shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in [`Light3D.shadow_blur`](class_light3d.md#class_light3d_property_shadow_blur), not the variable blur performed by [`DirectionalLight3D`](class_directionallight3d.md) s' [`Light3D.light_angular_distance`](class_light3d.md#class_light3d_property_light_angular_distance).

 **Note:** The Soft High and Soft Ultra settings will automatically multiply *constant* shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile** = ``0`` <div id="class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile"></div>

Lower-end override for [`rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_16_bits"></div>

[`bool`](class_bool.md) **rendering/lights_and_shadows/positional_shadow/atlas_16_bits** = ``true`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_16_bits"></div>

Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv** = ``2`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv"></div>

Subdivision quadrant size for shadow mapping. See shadow mapping documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv** = ``2`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv"></div>

Subdivision quadrant size for shadow mapping. See shadow mapping documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv** = ``3`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv"></div>

Subdivision quadrant size for shadow mapping. See shadow mapping documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv** = ``4`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv"></div>

Subdivision quadrant size for shadow mapping. See shadow mapping documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_size** = ``4096`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size"></div>

Size for shadow atlas (used for OmniLights and SpotLights). See documentation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size.mobile"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/atlas_size.mobile** = ``2048`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size.mobile"></div>

Lower-end override for [`rendering/lights_and_shadows/positional_shadow/atlas_size`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/atlas_size) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality** = ``2`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality"></div>

Quality setting for shadows cast by [`OmniLight3D`](class_omnilight3d.md) s and [`SpotLight3D`](class_spotlight3d.md) s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.

 **Note:** The Soft Very Low setting will automatically multiply *constant* shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in [`Light3D.shadow_blur`](class_light3d.md#class_light3d_property_shadow_blur), not the variable blur performed by [`DirectionalLight3D`](class_directionallight3d.md) s' [`Light3D.light_angular_distance`](class_light3d.md#class_light3d_property_light_angular_distance).

 **Note:** The Soft High and Soft Ultra settings will automatically multiply shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile"></div>

[`int`](class_int.md) **rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile** = ``0`` <div id="class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile"></div>

Lower-end override for [`rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality`](class_projectsettings.md#class_projectsettings_property_rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/tighter_shadow_caster_culling"></div>

[`bool`](class_bool.md) **rendering/lights_and_shadows/tighter_shadow_caster_culling** = ``true`` <div id="class_projectsettings_property_rendering/lights_and_shadows/tighter_shadow_caster_culling"></div>

If `true`, items that cannot cast shadows into the view frustum will not be rendered into shadow maps.

This can increase performance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units"></div>

[`bool`](class_bool.md) **rendering/lights_and_shadows/use_physical_light_units** = ``false`` <div id="class_projectsettings_property_rendering/lights_and_shadows/use_physical_light_units"></div>

Enables the use of physically based units for light sources. Physically based units tend to be much larger than the arbitrary units used by Godot, but they can be used to match lighting within Godot to real-world lighting. Due to the large dynamic range of lighting conditions present in nature, Godot bakes exposure into the various lighting quantities before rendering. Most light sources bake exposure automatically at run time based on the active [`CameraAttributes`](class_cameraattributes.md) resource, but [`LightmapGI`](class_lightmapgi.md) and [`VoxelGI`](class_voxelgi.md) require a [`CameraAttributes`](class_cameraattributes.md) resource to be set at bake time to reduce the dynamic range. At run time, Godot will automatically reconcile the baked exposure with the active exposure to ensure lighting remains consistent.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/cluster_builder/max_clustered_elements"></div>

[`float`](class_float.md) **rendering/limits/cluster_builder/max_clustered_elements** = ``512`` <div id="class_projectsettings_property_rendering/limits/cluster_builder/max_clustered_elements"></div>

The maximum number of clustered elements ([`OmniLight3D`](class_omnilight3d.md) + [`SpotLight3D`](class_spotlight3d.md) + [`Decal`](class_decal.md) + [`ReflectionProbe`](class_reflectionprobe.md)) that can be rendered at once in the camera view. If there are more clustered elements present in the camera view, some of them will not be rendered (leading to pop-in during camera movement). Enabling distance fade on lights and decals ([`Light3D.distance_fade_enabled`](class_light3d.md#class_light3d_property_distance_fade_enabled), [`Decal.distance_fade_enabled`](class_decal.md#class_decal_property_distance_fade_enabled)) can help avoid reaching this limit.

Decreasing this value may improve GPU performance on certain setups, even if the maximum number of clustered elements is never reached in the project.

 **Note:** This setting is only effective when using the Forward+ rendering method, not Mobile and Compatibility.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/global_shader_variables/buffer_size"></div>

[`int`](class_int.md) **rendering/limits/global_shader_variables/buffer_size** = ``65536`` <div id="class_projectsettings_property_rendering/limits/global_shader_variables/buffer_size"></div>

The maximum number of uniforms that can be used by the global shader uniform buffer. Each item takes up one slot. In other words, a single uniform float and a uniform vec4 will take the same amount of space in the buffer.

 **Note:** When using the Compatibility backend, most mobile devices (and all web exports) will be limited to a maximum size of 1024 due to hardware constraints.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/opengl/max_lights_per_object"></div>

[`int`](class_int.md) **rendering/limits/opengl/max_lights_per_object** = ``8`` <div id="class_projectsettings_property_rendering/limits/opengl/max_lights_per_object"></div>

Max number of omnilights and spotlights renderable per object. At the default value of 8, this means that each surface can be affected by up to 8 omnilights and 8 spotlights. This is further limited by hardware support and [`rendering/limits/opengl/max_renderable_lights`](class_projectsettings.md#class_projectsettings_property_rendering/limits/opengl/max_renderable_lights). Setting this low will slightly reduce memory usage, may decrease shader compile times, and may result in faster rendering on low-end, mobile, or web devices.

 **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/opengl/max_renderable_elements"></div>

[`int`](class_int.md) **rendering/limits/opengl/max_renderable_elements** = ``65536`` <div id="class_projectsettings_property_rendering/limits/opengl/max_renderable_elements"></div>

Max number of elements renderable in a frame. If more elements than this are visible per frame, they will not be drawn. Keep in mind elements refer to mesh surfaces and not meshes themselves. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.

 **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/opengl/max_renderable_lights"></div>

[`int`](class_int.md) **rendering/limits/opengl/max_renderable_lights** = ``32`` <div id="class_projectsettings_property_rendering/limits/opengl/max_renderable_lights"></div>

Max number of positional lights renderable in a frame. If more lights than this number are used, they will be ignored. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.

 **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/spatial_indexer/threaded_cull_minimum_instances"></div>

[`int`](class_int.md) **rendering/limits/spatial_indexer/threaded_cull_minimum_instances** = ``1000`` <div id="class_projectsettings_property_rendering/limits/spatial_indexer/threaded_cull_minimum_instances"></div>

The minimum number of instances that must be present in a scene to enable culling computations on multiple threads. If a scene has fewer instances than this number, culling is done on a single thread.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/spatial_indexer/update_iterations_per_frame"></div>

[`int`](class_int.md) **rendering/limits/spatial_indexer/update_iterations_per_frame** = ``10`` <div id="class_projectsettings_property_rendering/limits/spatial_indexer/update_iterations_per_frame"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/limits/time/time_rollover_secs"></div>

[`float`](class_float.md) **rendering/limits/time/time_rollover_secs** = ``3600`` <div id="class_projectsettings_property_rendering/limits/time/time_rollover_secs"></div>

Maximum time (in seconds) before the `TIME` shader built-in variable rolls over. The `TIME` variable increments by `delta` each frame, and when it exceeds this value, it rolls over to `0.0`. Since large floating-point values are less precise than small floating-point values, this should be set as low as possible to maximize the precision of the `TIME` built-in variable in shaders. This is especially important on mobile platforms where precision in shaders is significantly reduced. However, if this is set too low, shader animations may appear to restart from the beginning while the project is running.

On desktop platforms, values below `4096` are recommended, ideally below `2048`. On mobile platforms, values below `64` are recommended, ideally below `32`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels"></div>

[`float`](class_float.md) **rendering/mesh_lod/lod_change/threshold_pixels** = ``1.0`` <div id="class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels"></div>

The automatic LOD bias to use for meshes rendered within the [`ReflectionProbe`](class_reflectionprobe.md). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [`rendering/mesh_lod/lod_change/threshold_pixels`](class_projectsettings.md#class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels) to improve performance at the cost of geometry detail.

 **Note:** [`rendering/mesh_lod/lod_change/threshold_pixels`](class_projectsettings.md#class_projectsettings_property_rendering/mesh_lod/lod_change/threshold_pixels) does not affect [`GeometryInstance3D`](class_geometryinstance3d.md) visibility ranges (also known as "manual" LOD or hierarchical LOD).

 **Note:** This property is only read when the project starts. To adjust the automatic LOD threshold at runtime, set [`Viewport.mesh_lod_threshold`](class_viewport.md#class_viewport_property_mesh_lod_threshold) on the root [`Viewport`](class_viewport.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/occlusion_culling/bvh_build_quality"></div>

[`int`](class_int.md) **rendering/occlusion_culling/bvh_build_quality** = ``2`` <div id="class_projectsettings_property_rendering/occlusion_culling/bvh_build_quality"></div>

The [*Bounding Volume Hierarchy*](https://en.wikipedia.org/wiki/Bounding_volume_hierarchy) quality to use when rendering the occlusion culling buffer. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. See also [`rendering/occlusion_culling/occlusion_rays_per_thread`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/occlusion_rays_per_thread).

 **Note:** This property is only read when the project starts. To adjust the BVH build quality at runtime, use [`RenderingServer.viewport_set_occlusion_culling_build_quality`](class_renderingserver.md#class_renderingserver_method_viewport_set_occlusion_culling_build_quality).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/occlusion_culling/jitter_projection"></div>

[`bool`](class_bool.md) **rendering/occlusion_culling/jitter_projection** = ``true`` <div id="class_projectsettings_property_rendering/occlusion_culling/jitter_projection"></div>

If `true`, the projection used for rendering the occlusion buffer will be jittered. This can help prevent objects being incorrectly culled when visible through small gaps.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/occlusion_culling/occlusion_rays_per_thread"></div>

[`int`](class_int.md) **rendering/occlusion_culling/occlusion_rays_per_thread** = ``512`` <div id="class_projectsettings_property_rendering/occlusion_culling/occlusion_rays_per_thread"></div>

The number of occlusion rays traced per CPU thread. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. The occlusion culling buffer's pixel count is roughly equal to `occlusion_rays_per_thread * number_of_logical_cpu_cores`, so it will depend on the system's CPU. Therefore, CPUs with fewer cores will use a lower resolution to attempt keeping performance costs even across devices. See also [`rendering/occlusion_culling/bvh_build_quality`](class_projectsettings.md#class_projectsettings_property_rendering/occlusion_culling/bvh_build_quality).

 **Note:** This property is only read when the project starts. To adjust the number of occlusion rays traced per thread at runtime, use [`RenderingServer.viewport_set_occlusion_rays_per_thread`](class_renderingserver.md#class_renderingserver_method_viewport_set_occlusion_rays_per_thread).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling"></div>

[`bool`](class_bool.md) **rendering/occlusion_culling/use_occlusion_culling** = ``false`` <div id="class_projectsettings_property_rendering/occlusion_culling/use_occlusion_culling"></div>

If `true`, [`OccluderInstance3D`](class_occluderinstance3d.md) nodes will be usable for occlusion culling in 3D in the root viewport. In custom viewports, [`Viewport.use_occlusion_culling`](class_viewport.md#class_viewport_property_use_occlusion_culling) must be set to `true` instead.

 **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([`GeometryInstance3D.visibility_range_begin`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_begin) and [`GeometryInstance3D.visibility_range_end`](class_geometryinstance3d.md#class_geometryinstance3d_property_visibility_range_end)) compared to occlusion culling.

 **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_count"></div>

[`int`](class_int.md) **rendering/reflections/reflection_atlas/reflection_count** = ``64`` <div id="class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_count"></div>

Number of cubemaps to store in the reflection atlas. The number of [`ReflectionProbe`](class_reflectionprobe.md) s in a scene will be limited by this amount. A higher number requires more VRAM.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size"></div>

[`int`](class_int.md) **rendering/reflections/reflection_atlas/reflection_size** = ``256`` <div id="class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size"></div>

Size of cubemap faces for [`ReflectionProbe`](class_reflectionprobe.md) s. A higher number requires more VRAM and may make reflection probe updating slower.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size.mobile"></div>

[`int`](class_int.md) **rendering/reflections/reflection_atlas/reflection_size.mobile** = ``128`` <div id="class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size.mobile"></div>

Lower-end override for [`rendering/reflections/reflection_atlas/reflection_size`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/reflection_atlas/reflection_size) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/fast_filter_high_quality"></div>

[`bool`](class_bool.md) **rendering/reflections/sky_reflections/fast_filter_high_quality** = ``false`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/fast_filter_high_quality"></div>

Use a higher quality variant of the fast filtering algorithm. Significantly slower than using default quality, but results in smoother reflections. Should only be used when the scene is especially detailed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples"></div>

[`int`](class_int.md) **rendering/reflections/sky_reflections/ggx_samples** = ``32`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples"></div>

Sets the number of samples to take when using importance sampling for [`Sky`](class_sky.md) s and [`ReflectionProbe`](class_reflectionprobe.md) s. A higher value will result in smoother, higher quality reflections, but increases time to calculate radiance maps. In general, fewer samples are needed for simpler, low dynamic range environments while more samples are needed for HDR environments and environments with a high level of detail.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples.mobile"></div>

[`int`](class_int.md) **rendering/reflections/sky_reflections/ggx_samples.mobile** = ``16`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples.mobile"></div>

Lower-end override for [`rendering/reflections/sky_reflections/ggx_samples`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/ggx_samples) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers"></div>

[`int`](class_int.md) **rendering/reflections/sky_reflections/roughness_layers** = ``8`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers"></div>

Limits the number of layers to use in radiance maps when using importance sampling. A lower number will be slightly faster and take up less VRAM.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections"></div>

[`bool`](class_bool.md) **rendering/reflections/sky_reflections/texture_array_reflections** = ``true`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections"></div>

If `true`, uses texture arrays instead of mipmaps for reflection probes and panorama backgrounds (sky). This reduces jitter noise and upscaling artifacts on reflections, but is significantly slower to compute and uses [`rendering/reflections/sky_reflections/roughness_layers`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/roughness_layers) times more memory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections.mobile"></div>

[`bool`](class_bool.md) **rendering/reflections/sky_reflections/texture_array_reflections.mobile** = ``false`` <div id="class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections.mobile"></div>

Lower-end override for [`rendering/reflections/sky_reflections/texture_array_reflections`](class_projectsettings.md#class_projectsettings_property_rendering/reflections/sky_reflections/texture_array_reflections) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/renderer/rendering_method"></div>

[`String`](class_string.md) **rendering/renderer/rendering_method** = ``"forward_plus"`` <div id="class_projectsettings_property_rendering/renderer/rendering_method"></div>

Sets the renderer that will be used by the project. Options are:

 **Forward Plus**: High-end renderer designed for Desktop devices. Has a higher base overhead, but scales well with complex scenes. Not suitable for older devices or mobile.

 **Mobile**: Modern renderer designed for mobile devices. Has a lower base overhead than Forward Plus, but does not scale as well to large scenes with many elements.

 **GL Compatibility**: Low-end renderer designed for older devices. Based on the limitations of the OpenGL 3.3/ OpenGL ES 3.0 / WebGL 2 APIs.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/renderer/rendering_method.mobile"></div>

[`String`](class_string.md) **rendering/renderer/rendering_method.mobile** = ``"mobile"`` <div id="class_projectsettings_property_rendering/renderer/rendering_method.mobile"></div>

Override for [`rendering/renderer/rendering_method`](class_projectsettings.md#class_projectsettings_property_rendering/renderer/rendering_method) on mobile devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/renderer/rendering_method.web"></div>

[`String`](class_string.md) **rendering/renderer/rendering_method.web** = ``"gl_compatibility"`` <div id="class_projectsettings_property_rendering/renderer/rendering_method.web"></div>

Override for [`rendering/renderer/rendering_method`](class_projectsettings.md#class_projectsettings_property_rendering/renderer/rendering_method) on web.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/d3d12/agility_sdk_version"></div>

[`int`](class_int.md) **rendering/rendering_device/d3d12/agility_sdk_version** = ``613`` <div id="class_projectsettings_property_rendering/rendering_device/d3d12/agility_sdk_version"></div>

Version code of the [*Direct3D 12 Agility SDK*](https://devblogs.microsoft.com/directx/directx12agility/) to use (`D3D12SDKVersion`). This must match the *minor* version that is installed next to the editor binary and in the export templates directory for the current editor version. For example, if you have `1.613.3` installed, you need to input `613` here.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/d3d12/max_misc_descriptors_per_frame"></div>

[`int`](class_int.md) **rendering/rendering_device/d3d12/max_misc_descriptors_per_frame** = ``512`` <div id="class_projectsettings_property_rendering/rendering_device/d3d12/max_misc_descriptors_per_frame"></div>

The number of entries in the miscellaneous descriptors heap the Direct3D 12 rendering driver uses each frame, used for various operations like clearing a texture.

Depending on the complexity of scenes, this value may be lowered or may need to be raised.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/d3d12/max_resource_descriptors_per_frame"></div>

[`int`](class_int.md) **rendering/rendering_device/d3d12/max_resource_descriptors_per_frame** = ``16384`` <div id="class_projectsettings_property_rendering/rendering_device/d3d12/max_resource_descriptors_per_frame"></div>

The number of entries in the resource descriptors heap the Direct3D 12 rendering driver uses each frame, used for most rendering operations.

Depending on the complexity of scenes, this value may be lowered or may need to be raised.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame"></div>

[`int`](class_int.md) **rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame** = ``1024`` <div id="class_projectsettings_property_rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame"></div>

The number of entries in the sampler descriptors heap the Direct3D 12 rendering driver uses each frame, used for most rendering operations.

Depending on the complexity of scenes, this value may be lowered or may need to be raised.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver"></div>

[`String`](class_string.md) **rendering/rendering_device/driver** <div id="class_projectsettings_property_rendering/rendering_device/driver"></div>

Sets the driver to be used by the renderer when using a RenderingDevice-based renderer like the clustered renderer or the mobile renderer. This property can not be edited directly, instead, set the driver using the platform-specific overrides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver.android"></div>

[`String`](class_string.md) **rendering/rendering_device/driver.android** <div id="class_projectsettings_property_rendering/rendering_device/driver.android"></div>

Android override for [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver.ios"></div>

[`String`](class_string.md) **rendering/rendering_device/driver.ios** <div id="class_projectsettings_property_rendering/rendering_device/driver.ios"></div>

iOS override for [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver.linuxbsd"></div>

[`String`](class_string.md) **rendering/rendering_device/driver.linuxbsd** <div id="class_projectsettings_property_rendering/rendering_device/driver.linuxbsd"></div>

LinuxBSD override for [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver.macos"></div>

[`String`](class_string.md) **rendering/rendering_device/driver.macos** <div id="class_projectsettings_property_rendering/rendering_device/driver.macos"></div>

macOS override for [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/driver.windows"></div>

[`String`](class_string.md) **rendering/rendering_device/driver.windows** <div id="class_projectsettings_property_rendering/rendering_device/driver.windows"></div>

Windows override for [`rendering/rendering_device/driver`](class_projectsettings.md#class_projectsettings_property_rendering/rendering_device/driver).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/fallback_to_d3d12"></div>

[`bool`](class_bool.md) **rendering/rendering_device/fallback_to_d3d12** = ``true`` <div id="class_projectsettings_property_rendering/rendering_device/fallback_to_d3d12"></div>

If `true`, the forward renderer will fall back to Direct3D 12 if Vulkan is not supported.

 **Note:** This setting is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/fallback_to_opengl3"></div>

[`bool`](class_bool.md) **rendering/rendering_device/fallback_to_opengl3** = ``true`` <div id="class_projectsettings_property_rendering/rendering_device/fallback_to_opengl3"></div>

If `true`, the forward renderer will fall back to OpenGL 3 if both Direct3D 12, Metal and Vulkan are not supported.

 **Note:** This setting is implemented only on Windows, Android, macOS, iOS, and Linux/X11.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/fallback_to_vulkan"></div>

[`bool`](class_bool.md) **rendering/rendering_device/fallback_to_vulkan** = ``true`` <div id="class_projectsettings_property_rendering/rendering_device/fallback_to_vulkan"></div>

If `true`, the forward renderer will fall back to Vulkan if Direct3D 12 is not supported.

 **Note:** This setting is implemented only on Windows.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/pipeline_cache/enable"></div>

[`bool`](class_bool.md) **rendering/rendering_device/pipeline_cache/enable** = ``true`` <div id="class_projectsettings_property_rendering/rendering_device/pipeline_cache/enable"></div>

Enable the pipeline cache that is saved to disk if the graphics API supports it.

 **Note:** This property is unable to control the pipeline caching the GPU driver itself does. Only turn this off along with deleting the contents of the driver's cache if you wish to simulate the experience a user will get when starting the game for the first time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/pipeline_cache/save_chunk_size_mb"></div>

[`float`](class_float.md) **rendering/rendering_device/pipeline_cache/save_chunk_size_mb** = ``3.0`` <div id="class_projectsettings_property_rendering/rendering_device/pipeline_cache/save_chunk_size_mb"></div>

Determines at which interval pipeline cache is saved to disk. The lower the value, the more often it is saved.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/staging_buffer/block_size_kb"></div>

[`int`](class_int.md) **rendering/rendering_device/staging_buffer/block_size_kb** = ``256`` <div id="class_projectsettings_property_rendering/rendering_device/staging_buffer/block_size_kb"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/staging_buffer/max_size_mb"></div>

[`int`](class_int.md) **rendering/rendering_device/staging_buffer/max_size_mb** = ``128`` <div id="class_projectsettings_property_rendering/rendering_device/staging_buffer/max_size_mb"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/staging_buffer/texture_upload_region_size_px"></div>

[`int`](class_int.md) **rendering/rendering_device/staging_buffer/texture_upload_region_size_px** = ``64`` <div id="class_projectsettings_property_rendering/rendering_device/staging_buffer/texture_upload_region_size_px"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/vsync/frame_queue_size"></div>

[`int`](class_int.md) **rendering/rendering_device/vsync/frame_queue_size** = ``2`` <div id="class_projectsettings_property_rendering/rendering_device/vsync/frame_queue_size"></div>

The number of frames to track on the CPU side before stalling to wait for the GPU.

Try the [*V-Sync Simulator*](https://darksylinc.github.io/vsync_simulator/), an interactive interface that simulates presentation to better understand how it is affected by different variables under various conditions.

 **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/vsync/swapchain_image_count"></div>

[`int`](class_int.md) **rendering/rendering_device/vsync/swapchain_image_count** = ``3`` <div id="class_projectsettings_property_rendering/rendering_device/vsync/swapchain_image_count"></div>

The number of images the swapchain will consist of (back buffers + front buffer).

 `2` corresponds to double-buffering and `3` to triple-buffering.

Double-buffering may give you the lowest lag/latency but if V-Sync is on and the system can't render at 60 fps, the framerate will go down in multiples of it (e.g. 30 fps, 15, 7.5, etc.). Triple buffering gives you higher framerate (specially if the system can't reach a constant 60 fps) at the cost of up to 1 frame of latency, with [`DisplayServer.VSYNC_ENABLED`](class_displayserver.md#class_displayserver_constant_vsync_enabled) (FIFO).

Use double-buffering with [`DisplayServer.VSYNC_ENABLED`](class_displayserver.md#class_displayserver_constant_vsync_enabled). Triple-buffering is a must if you plan on using [`DisplayServer.VSYNC_MAILBOX`](class_displayserver.md#class_displayserver_constant_vsync_mailbox) mode.

Try the [*V-Sync Simulator*](https://darksylinc.github.io/vsync_simulator/), an interactive interface that simulates presentation to better understand how it is affected by different variables under various conditions.

 **Note:** This property is only read when the project starts. There is currently no way to change this value at run-time.

 **Note:** Some platforms may restrict the actual value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/rendering_device/vulkan/max_descriptors_per_pool"></div>

[`int`](class_int.md) **rendering/rendering_device/vulkan/max_descriptors_per_pool** = ``64`` <div id="class_projectsettings_property_rendering/rendering_device/vulkan/max_descriptors_per_pool"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/scaling_3d/fsr_sharpness"></div>

[`float`](class_float.md) **rendering/scaling_3d/fsr_sharpness** = ``0.2`` <div id="class_projectsettings_property_rendering/scaling_3d/fsr_sharpness"></div>

Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/scaling_3d/mode"></div>

[`int`](class_int.md) **rendering/scaling_3d/mode** = ``0`` <div id="class_projectsettings_property_rendering/scaling_3d/mode"></div>

Sets the scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially-aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. On particularly low-end GPUs, the added cost of FSR may not be worth it (compared to using bilinear scaling with a slightly higher resolution scale to match performance).

 **Note:** FSR is only effective when using the Forward+ rendering method, not Mobile or Compatibility. If using an incompatible rendering method, FSR will fall back to bilinear scaling.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/scaling_3d/scale"></div>

[`float`](class_float.md) **rendering/scaling_3d/scale** = ``1.0`` <div id="class_projectsettings_property_rendering/scaling_3d/scale"></div>

Scales the 3D render buffer based on the viewport size uses an image filter specified in [`rendering/scaling_3d/mode`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/mode) to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [`rendering/anti_aliasing/quality/msaa_3d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d) for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shader_compiler/shader_cache/compress"></div>

[`bool`](class_bool.md) **rendering/shader_compiler/shader_cache/compress** = ``true`` <div id="class_projectsettings_property_rendering/shader_compiler/shader_cache/compress"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shader_compiler/shader_cache/enabled"></div>

[`bool`](class_bool.md) **rendering/shader_compiler/shader_cache/enabled** = ``true`` <div id="class_projectsettings_property_rendering/shader_compiler/shader_cache/enabled"></div>

Enable the shader cache, which stores compiled shaders to disk to prevent stuttering from shader compilation the next time the shader is needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug"></div>

[`bool`](class_bool.md) **rendering/shader_compiler/shader_cache/strip_debug** = ``false`` <div id="class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug.release"></div>

[`bool`](class_bool.md) **rendering/shader_compiler/shader_cache/strip_debug.release** = ``true`` <div id="class_projectsettings_property_rendering/shader_compiler/shader_cache/strip_debug.release"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shader_compiler/shader_cache/use_zstd_compression"></div>

[`bool`](class_bool.md) **rendering/shader_compiler/shader_cache/use_zstd_compression** = ``true`` <div id="class_projectsettings_property_rendering/shader_compiler/shader_cache/use_zstd_compression"></div>

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley"></div>

[`bool`](class_bool.md) **rendering/shading/overrides/force_lambert_over_burley** = ``false`` <div id="class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley"></div>

If `true`, uses faster but lower-quality Lambert material lighting model instead of Burley.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley.mobile"></div>

[`bool`](class_bool.md) **rendering/shading/overrides/force_lambert_over_burley.mobile** = ``true`` <div id="class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley.mobile"></div>

Lower-end override for [`rendering/shading/overrides/force_lambert_over_burley`](class_projectsettings.md#class_projectsettings_property_rendering/shading/overrides/force_lambert_over_burley) on mobile devices, due to performance concerns or driver support.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/shading/overrides/force_vertex_shading"></div>

[`bool`](class_bool.md) **rendering/shading/overrides/force_vertex_shading** = ``false`` <div id="class_projectsettings_property_rendering/shading/overrides/force_vertex_shading"></div>

If `true`, forces vertex shading for all rendering. This can increase performance a lot, but also reduces quality immensely. Can be used to optimize performance on low-end mobile devices.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/canvas_textures/default_texture_filter"></div>

[`int`](class_int.md) **rendering/textures/canvas_textures/default_texture_filter** = ``1`` <div id="class_projectsettings_property_rendering/textures/canvas_textures/default_texture_filter"></div>

The default texture filtering mode to use on [`CanvasItem`](class_canvasitem.md) s.

 **Note:** For pixel art aesthetics, see also [`rendering/2d/snap/snap_2d_vertices_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_vertices_to_pixel) and [`rendering/2d/snap/snap_2d_transforms_to_pixel`](class_projectsettings.md#class_projectsettings_property_rendering/2d/snap/snap_2d_transforms_to_pixel).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/canvas_textures/default_texture_repeat"></div>

[`int`](class_int.md) **rendering/textures/canvas_textures/default_texture_repeat** = ``0`` <div id="class_projectsettings_property_rendering/textures/canvas_textures/default_texture_repeat"></div>

The default texture repeating mode to use on [`CanvasItem`](class_canvasitem.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/decals/filter"></div>

[`int`](class_int.md) **rendering/textures/decals/filter** = ``3`` <div id="class_projectsettings_property_rendering/textures/decals/filter"></div>

The filtering quality to use for [`Decal`](class_decal.md) nodes. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by [`rendering/textures/default_filters/anisotropic_filtering_level`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level"></div>

[`int`](class_int.md) **rendering/textures/default_filters/anisotropic_filtering_level** = ``2`` <div id="class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level"></div>

Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.

The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [`rendering/textures/decals/filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/decals/filter) and [`rendering/textures/light_projectors/filter`](class_projectsettings.md#class_projectsettings_property_rendering/textures/light_projectors/filter).

 **Note:** For performance reasons, anisotropic filtering *is not enabled by default* on 2D and 3D materials. For this setting to have an effect in 3D, set [`BaseMaterial3D.texture_filter`](class_basematerial3d.md#class_basematerial3d_property_texture_filter) to [`BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC`](class_basematerial3d.md#class_basematerial3d_constant_texture_filter_linear_with_mipmaps_anisotropic) or [`BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC`](class_basematerial3d.md#class_basematerial3d_constant_texture_filter_nearest_with_mipmaps_anisotropic) on materials. For this setting to have an effect in 2D, set [`CanvasItem.texture_filter`](class_canvasitem.md#class_canvasitem_property_texture_filter) to [`CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC`](class_canvasitem.md#class_canvasitem_constant_texture_filter_linear_with_mipmaps_anisotropic) or [`CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC`](class_canvasitem.md#class_canvasitem_constant_texture_filter_nearest_with_mipmaps_anisotropic) on the [`CanvasItem`](class_canvasitem.md) node displaying the texture (or in [`CanvasTexture`](class_canvastexture.md)). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.

 **Note:** This property is only read when the project starts. There is currently no way to change this setting at run-time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias"></div>

[`float`](class_float.md) **rendering/textures/default_filters/texture_mipmap_bias** = ``0.0`` <div id="class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias"></div>

Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).

Enabling temporal antialiasing ([`rendering/anti_aliasing/quality/use_taa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/use_taa)) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([`rendering/anti_aliasing/quality/screen_space_aa`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/screen_space_aa)) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.

 **Note:** If [`rendering/scaling_3d/scale`](class_projectsettings.md#class_projectsettings_property_rendering/scaling_3d/scale) is lower than `1.0` (exclusive), [`rendering/textures/default_filters/texture_mipmap_bias`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/texture_mipmap_bias) is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter"></div>

[`bool`](class_bool.md) **rendering/textures/default_filters/use_nearest_mipmap_filter** = ``false`` <div id="class_projectsettings_property_rendering/textures/default_filters/use_nearest_mipmap_filter"></div>

If `true`, uses nearest-neighbor mipmap filtering when using mipmaps (also called "bilinear filtering"), which will result in visible seams appearing between mipmap stages. This may increase performance in mobile as less memory bandwidth is used. If `false`, linear mipmap filtering (also called "trilinear filtering") is used.

 **Note:** This property is only read when the project starts. There is currently no way to change this setting at run-time.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/light_projectors/filter"></div>

[`int`](class_int.md) **rendering/textures/light_projectors/filter** = ``3`` <div id="class_projectsettings_property_rendering/textures/light_projectors/filter"></div>

The filtering quality to use for [`OmniLight3D`](class_omnilight3d.md) and [`SpotLight3D`](class_spotlight3d.md) projectors. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by [`rendering/textures/default_filters/anisotropic_filtering_level`](class_projectsettings.md#class_projectsettings_property_rendering/textures/default_filters/anisotropic_filtering_level).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/lossless_compression/force_png"></div>

[`bool`](class_bool.md) **rendering/textures/lossless_compression/force_png** = ``false`` <div id="class_projectsettings_property_rendering/textures/lossless_compression/force_png"></div>

If `true`, the texture importer will import lossless textures using the PNG format. Otherwise, it will default to using WebP.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/vram_compression/cache_gpu_compressor"></div>

[`bool`](class_bool.md) **rendering/textures/vram_compression/cache_gpu_compressor** = ``true`` <div id="class_projectsettings_property_rendering/textures/vram_compression/cache_gpu_compressor"></div>

If `true`, the GPU texture compressor will cache the local RenderingDevice and its resources (shaders and pipelines), allowing for faster subsequent imports at a memory cost.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/vram_compression/compress_with_gpu"></div>

[`bool`](class_bool.md) **rendering/textures/vram_compression/compress_with_gpu** = ``true`` <div id="class_projectsettings_property_rendering/textures/vram_compression/compress_with_gpu"></div>

If `true`, the texture importer will utilize the GPU for compressing textures, improving the import time of large images.

 **Note:** This only functions on a device which supports either Vulkan, D3D12, or Metal available as a rendering backend.

 **Note:** Currently this only affects certain compressed formats (BC1, BC4, and BC6), all of which are exclusive to desktop platforms and consoles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/vram_compression/import_etc2_astc"></div>

[`bool`](class_bool.md) **rendering/textures/vram_compression/import_etc2_astc** = ``false`` <div id="class_projectsettings_property_rendering/textures/vram_compression/import_etc2_astc"></div>

If `true`, the texture importer will import VRAM-compressed textures using the Ericsson Texture Compression 2 algorithm for lower quality textures and normal maps and Adaptable Scalable Texture Compression algorithm for high quality textures (in 4×4 block size).

 **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.

 **Note:** Changing this setting does *not* impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see [`application/config/use_hidden_project_data_directory`](class_projectsettings.md#class_projectsettings_property_application/config/use_hidden_project_data_directory)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/vram_compression/import_s3tc_bptc"></div>

[`bool`](class_bool.md) **rendering/textures/vram_compression/import_s3tc_bptc** = ``false`` <div id="class_projectsettings_property_rendering/textures/vram_compression/import_s3tc_bptc"></div>

If `true`, the texture importer will import VRAM-compressed textures using the S3 Texture Compression algorithm (DXT1-5) for lower quality textures and the BPTC algorithm (BC6H and BC7) for high quality textures. This algorithm is only supported on PC desktop platforms and consoles.

 **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.

 **Note:** Changing this setting does *not* impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see [`application/config/use_hidden_project_data_directory`](class_projectsettings.md#class_projectsettings_property_application/config/use_hidden_project_data_directory)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/webp_compression/compression_method"></div>

[`int`](class_int.md) **rendering/textures/webp_compression/compression_method** = ``2`` <div id="class_projectsettings_property_rendering/textures/webp_compression/compression_method"></div>

The default compression method for WebP. Affects both lossy and lossless WebP. A higher value results in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression method. Supported values are 0 to 6. Note that compression methods above 4 are very slow and offer very little savings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/textures/webp_compression/lossless_compression_factor"></div>

[`float`](class_float.md) **rendering/textures/webp_compression/lossless_compression_factor** = ``25`` <div id="class_projectsettings_property_rendering/textures/webp_compression/lossless_compression_factor"></div>

The default compression factor for lossless WebP. Decompression speed is mostly unaffected by the compression factor. Supported values are 0 to 100.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/viewport/hdr_2d"></div>

[`bool`](class_bool.md) **rendering/viewport/hdr_2d** = ``false`` <div id="class_projectsettings_property_rendering/viewport/hdr_2d"></div>

If `true`, enables [`Viewport.use_hdr_2d`](class_viewport.md#class_viewport_property_use_hdr_2d) on the root viewport. 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen. Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.

 **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.

 **Note:** This property is only read when the project starts. To toggle HDR 2D at runtime, set [`Viewport.use_hdr_2d`](class_viewport.md#class_viewport_property_use_hdr_2d) on the root [`Viewport`](class_viewport.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/viewport/transparent_background"></div>

[`bool`](class_bool.md) **rendering/viewport/transparent_background** = ``false`` <div id="class_projectsettings_property_rendering/viewport/transparent_background"></div>

If `true`, enables [`Viewport.transparent_bg`](class_viewport.md#class_viewport_property_transparent_bg) on the root viewport. This allows per-pixel transparency to be effective after also enabling [`display/window/size/transparent`](class_projectsettings.md#class_projectsettings_property_display/window/size/transparent) and [`display/window/per_pixel_transparency/allowed`](class_projectsettings.md#class_projectsettings_property_display/window/per_pixel_transparency/allowed).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/vrs/mode"></div>

[`int`](class_int.md) **rendering/vrs/mode** = ``0`` <div id="class_projectsettings_property_rendering/vrs/mode"></div>

Set the default Variable Rate Shading (VRS) mode for the main viewport. See [`Viewport.vrs_mode`](class_viewport.md#class_viewport_property_vrs_mode) to change this at runtime, and [VRSMode](#enum_viewport_vrsmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_rendering/vrs/texture"></div>

[`String`](class_string.md) **rendering/vrs/texture** = ``""`` <div id="class_projectsettings_property_rendering/vrs/texture"></div>

If [`rendering/vrs/mode`](class_projectsettings.md#class_projectsettings_property_rendering/vrs/mode) is set to **Texture**, this is the path to default texture loaded as the VRS image.

The texture *must* use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:

```text

    - 1×1 = rgb(0, 0, 0)     - #000000
    - 1×2 = rgb(0, 85, 0)    - #005500
    - 2×1 = rgb(85, 0, 0)    - #550000
    - 2×2 = rgb(85, 85, 0)   - #555500
    - 2×4 = rgb(85, 170, 0)  - #55aa00
    - 4×2 = rgb(170, 85, 0)  - #aa5500
    - 4×4 = rgb(170, 170, 0) - #aaaa00
    - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
    - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
    - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_threading/worker_pool/low_priority_thread_ratio"></div>

[`float`](class_float.md) **threading/worker_pool/low_priority_thread_ratio** = ``0.3`` <div id="class_projectsettings_property_threading/worker_pool/low_priority_thread_ratio"></div>

The ratio of [`WorkerThreadPool`](class_workerthreadpool.md)'s threads that will be reserved for low-priority tasks. For example, if 10 threads are available and this value is set to `0.3`, 3 of the worker threads will be reserved for low-priority tasks. The actual value won't exceed the number of CPU cores minus one, and if possible, at least one worker thread will be dedicated to low-priority tasks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_threading/worker_pool/max_threads"></div>

[`int`](class_int.md) **threading/worker_pool/max_threads** = ``-1`` <div id="class_projectsettings_property_threading/worker_pool/max_threads"></div>

Maximum number of threads to be used by [`WorkerThreadPool`](class_workerthreadpool.md). Value of `-1` means no limit.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/default_action_map"></div>

[`String`](class_string.md) **xr/openxr/default_action_map** = ``"res://openxr_action_map.tres"`` <div id="class_projectsettings_property_xr/openxr/default_action_map"></div>

Action map configuration to load by default.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/enabled"></div>

[`bool`](class_bool.md) **xr/openxr/enabled** = ``false`` <div id="class_projectsettings_property_xr/openxr/enabled"></div>

If `true`, Godot will setup and initialize OpenXR on startup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/environment_blend_mode"></div>

[`int`](class_int.md) **xr/openxr/environment_blend_mode** = ``"0"`` <div id="class_projectsettings_property_xr/openxr/environment_blend_mode"></div>

Specify how OpenXR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/debug_message_types"></div>

[`int`](class_int.md) **xr/openxr/extensions/debug_message_types** = ``"15"`` <div id="class_projectsettings_property_xr/openxr/extensions/debug_message_types"></div>

Specifies the message types for which we request debug messages. Requires [`xr/openxr/extensions/debug_utils`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/debug_utils) to be set and the extension to be supported by the XR runtime.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/debug_utils"></div>

[`int`](class_int.md) **xr/openxr/extensions/debug_utils** = ``"0"`` <div id="class_projectsettings_property_xr/openxr/extensions/debug_utils"></div>

Enables debug utilities on XR runtimes that supports the debug utils extension. Sets the maximum severity being reported (0 = disabled, 1 = error, 2 = warning, 3 = info, 4 = verbose).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/eye_gaze_interaction"></div>

[`bool`](class_bool.md) **xr/openxr/extensions/eye_gaze_interaction** = ``false`` <div id="class_projectsettings_property_xr/openxr/extensions/eye_gaze_interaction"></div>

Specify whether to enable eye tracking for this project. Depending on the platform, additional export configuration may be needed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/hand_interaction_profile"></div>

[`bool`](class_bool.md) **xr/openxr/extensions/hand_interaction_profile** = ``false`` <div id="class_projectsettings_property_xr/openxr/extensions/hand_interaction_profile"></div>

If `true` the hand interaction profile extension will be activated if supported by the platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/hand_tracking"></div>

[`bool`](class_bool.md) **xr/openxr/extensions/hand_tracking** = ``false`` <div id="class_projectsettings_property_xr/openxr/extensions/hand_tracking"></div>

If `true`, the hand tracking extension is enabled if available.

 **Note:** By default hand tracking will only work for data sources chosen by the XR runtime. For SteamVR this is the controller inferred data source, for most other runtimes this is the unobstructed data source. There is no way to query this. If a runtime supports the OpenXR data source extension you can use the [`xr/openxr/extensions/hand_tracking_controller_data_source`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking_controller_data_source) and/or [`xr/openxr/extensions/hand_tracking_unobstructed_data_source`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking_unobstructed_data_source) to indicate you wish to enable these data sources. If neither is selected the data source extension is not enabled and the XR runtimes default behavior persists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/hand_tracking_controller_data_source"></div>

[`bool`](class_bool.md) **xr/openxr/extensions/hand_tracking_controller_data_source** = ``false`` <div id="class_projectsettings_property_xr/openxr/extensions/hand_tracking_controller_data_source"></div>

If `true`, support for the controller inferred data source is requested. If supported, you will receive hand tracking data even if the user has a controller in hand, with finger positions automatically inferred from controller input and/or sensors.

 **Node:** This requires the OpenXR data source extension and controller inferred handtracking to be supported by the XR runtime. If not supported this setting will be ignored. [`xr/openxr/extensions/hand_tracking`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking) must be enabled for this setting to be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/extensions/hand_tracking_unobstructed_data_source"></div>

[`bool`](class_bool.md) **xr/openxr/extensions/hand_tracking_unobstructed_data_source** = ``false`` <div id="class_projectsettings_property_xr/openxr/extensions/hand_tracking_unobstructed_data_source"></div>

If `true`, support for the unobstructed data source is requested. If supported, you will receive hand tracking data based on the actual finger positions of the user often determined by optical tracking.

 **Node:** This requires the OpenXR data source extension and unobstructed handtracking to be supported by the XR runtime. If not supported this setting will be ignored. [`xr/openxr/extensions/hand_tracking`](class_projectsettings.md#class_projectsettings_property_xr/openxr/extensions/hand_tracking) must be enabled for this setting to be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/form_factor"></div>

[`int`](class_int.md) **xr/openxr/form_factor** = ``"0"`` <div id="class_projectsettings_property_xr/openxr/form_factor"></div>

Specify whether OpenXR should be configured for an HMD or a hand held device.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/foveation_dynamic"></div>

[`bool`](class_bool.md) **xr/openxr/foveation_dynamic** = ``false`` <div id="class_projectsettings_property_xr/openxr/foveation_dynamic"></div>

If true and foveation is supported, will automatically adjust foveation level based on framerate up to the level set on [`xr/openxr/foveation_level`](class_projectsettings.md#class_projectsettings_property_xr/openxr/foveation_level).

 **Note:** Only works on the Compatibility rendering method.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/foveation_level"></div>

[`int`](class_int.md) **xr/openxr/foveation_level** = ``"0"`` <div id="class_projectsettings_property_xr/openxr/foveation_level"></div>

Applied foveation level if supported: 0 = off, 1 = low, 2 = medium, 3 = high.

 **Note:** Only works on the Compatibility rendering method. On platforms other than Android, if [`rendering/anti_aliasing/quality/msaa_3d`](class_projectsettings.md#class_projectsettings_property_rendering/anti_aliasing/quality/msaa_3d) is enabled, this feature will be disabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/reference_space"></div>

[`int`](class_int.md) **xr/openxr/reference_space** = ``"1"`` <div id="class_projectsettings_property_xr/openxr/reference_space"></div>

Specify the default reference space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/startup_alert"></div>

[`bool`](class_bool.md) **xr/openxr/startup_alert** = ``true`` <div id="class_projectsettings_property_xr/openxr/startup_alert"></div>

If `true`, Godot will display an alert modal when OpenXR initialization fails on startup.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/submit_depth_buffer"></div>

[`bool`](class_bool.md) **xr/openxr/submit_depth_buffer** = ``false`` <div id="class_projectsettings_property_xr/openxr/submit_depth_buffer"></div>

If `true`, OpenXR will manage the depth buffer and use the depth buffer for advanced reprojection provided this is supported by the XR runtime. Note that some rendering features in Godot can't be used with this feature.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/openxr/view_configuration"></div>

[`int`](class_int.md) **xr/openxr/view_configuration** = ``"1"`` <div id="class_projectsettings_property_xr/openxr/view_configuration"></div>

Specify the view configuration with which to configure OpenXR setting up either Mono or Stereo rendering.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_property_xr/shaders/enabled"></div>

[`bool`](class_bool.md) **xr/shaders/enabled** = ``false`` <div id="class_projectsettings_property_xr/shaders/enabled"></div>

If `true`, Godot will compile shaders required for XR.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_projectsettings_method_add_property_info"></div>

`void` **add_property_info** ( hint: [`Dictionary`](class_dictionary.md) )<div id="class_projectsettings_method_add_property_info"></div>

Adds a custom property info to a property. The dictionary must contain:

- `"name"`: [`String`](class_string.md) (the property's name)

- `"type"`: [`int`](class_int.md) (see [Variant.Type](#enum_@globalscope_variant.type))

- optionally `"hint"`: [`int`](class_int.md) (see [PropertyHint](#enum_@globalscope_propertyhint)) and `"hint_string"`: [`String`](class_string.md) 



```gdscript

    ProjectSettings.set("category/property_name", 0)
    
    var property_info = {
        "name": "category/property_name",
        "type": TYPE_INT,
        "hint": PROPERTY_HINT_ENUM,
        "hint_string": "one,two,three"
    }
    
    ProjectSettings.add_property_info(property_info)
```

```csharp

    ProjectSettings.Singleton.Set("category/property_name", 0);
    
    var propertyInfo = new Godot.Collections.Dictionary
    {
        {"name", "category/propertyName"},
        {"type", (int)Variant.Type.Int},
        {"hint", (int)PropertyHint.Enum},
        {"hint_string", "one,two,three"},
    };
    
    ProjectSettings.AddPropertyInfo(propertyInfo);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_clear"></div>

`void` **clear** ( name: [`String`](class_string.md) )<div id="class_projectsettings_method_clear"></div>

Clears the whole configuration (not recommended, may break things).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_get_global_class_list"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_global_class_list** ( )<div id="class_projectsettings_method_get_global_class_list"></div>

Returns an [`Array`](class_array.md) of registered global classes. Each global class is represented as a [`Dictionary`](class_dictionary.md) that contains the following entries:

- `base` is a name of the base class;

- `class` is a name of the registered global class;

- `icon` is a path to a custom icon of the global class, if it has any;

- `language` is a name of a programming language in which the global class is written;

- `path` is a path to a file containing the global class.

 **Note:** Both the script and the icon paths are local to the project filesystem, i.e. they start with `res://`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_get_order"></div>

[`int`](class_int.md) **get_order** ( name: [`String`](class_string.md) ) const[^const]<div id="class_projectsettings_method_get_order"></div>

Returns the order of a configuration value (influences when saved to the config file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_get_setting"></div>

[`Variant`](class_variant.md) **get_setting** ( name: [`String`](class_string.md), default_value: [`Variant`](class_variant.md) = null ) const[^const]<div id="class_projectsettings_method_get_setting"></div>

Returns the value of the setting identified by `name`. If the setting doesn't exist and `default_value` is specified, the value of `default_value` is returned. Otherwise, `null` is returned.



```gdscript

    print(ProjectSettings.get_setting("application/config/name"))
    print(ProjectSettings.get_setting("application/config/custom_description", "No description specified."))
```

```csharp

    GD.Print(ProjectSettings.GetSetting("application/config/name"));
    GD.Print(ProjectSettings.GetSetting("application/config/custom_description", "No description specified."));
```



 **Note:** This method doesn't take potential feature overrides into account automatically. Use [`get_setting_with_override`](class_projectsettings.md#class_projectsettings_method_get_setting_with_override) to handle seamlessly.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_get_setting_with_override"></div>

[`Variant`](class_variant.md) **get_setting_with_override** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_projectsettings_method_get_setting_with_override"></div>

Similar to [`get_setting`](class_projectsettings.md#class_projectsettings_method_get_setting), but applies feature tag overrides if any exists and is valid.

 **Example:** 	If the setting override `"application/config/name.windows"` exists, and the following code is executed on a *Windows* operating system, the overridden setting is printed instead:



```gdscript

    print(ProjectSettings.get_setting_with_override("application/config/name"))
```

```csharp

    GD.Print(ProjectSettings.GetSettingWithOverride("application/config/name"));
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_globalize_path"></div>

[`String`](class_string.md) **globalize_path** ( path: [`String`](class_string.md) ) const[^const]<div id="class_projectsettings_method_globalize_path"></div>

Returns the absolute, native OS path corresponding to the localized `path` (starting with `res://` or `user://`). The returned path will vary depending on the operating system and user preferences. See [*File paths in Godot projects*](../tutorials/io/data_paths) to see what those paths convert to. See also [`localize_path`](class_projectsettings.md#class_projectsettings_method_localize_path).

 **Note:** [`globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path) with `res://` will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:

```

    var path = ""
    if OS.has_feature("editor"):
        # Running from an editor binary.
        # `path` will contain the absolute path to `hello.txt` located in the project root.
        path = ProjectSettings.globalize_path("res://hello.txt")
    else:
        # Running from an exported project.
        # `path` will contain the absolute path to `hello.txt` next to the executable.
        # This is *not* identical to using `ProjectSettings.globalize_path()` with a `res://` path,
        # but is close enough in spirit.
        path = OS.get_executable_path().get_base_dir().path_join("hello.txt")
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_has_setting"></div>

[`bool`](class_bool.md) **has_setting** ( name: [`String`](class_string.md) ) const[^const]<div id="class_projectsettings_method_has_setting"></div>

Returns `true` if a configuration value is present.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_load_resource_pack"></div>

[`bool`](class_bool.md) **load_resource_pack** ( pack: [`String`](class_string.md), replace_files: [`bool`](class_bool.md) = true, offset: [`int`](class_int.md) = 0 )<div id="class_projectsettings_method_load_resource_pack"></div>

Loads the contents of the .pck or .zip file specified by `pack` into the resource filesystem (`res://`). Returns `true` on success.

 **Note:** If a file from `pack` shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from `pack` unless `replace_files` is set to `false`.

 **Note:** The optional `offset` parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_localize_path"></div>

[`String`](class_string.md) **localize_path** ( path: [`String`](class_string.md) ) const[^const]<div id="class_projectsettings_method_localize_path"></div>

Returns the localized path (starting with `res://`) corresponding to the absolute, native OS `path`. See also [`globalize_path`](class_projectsettings.md#class_projectsettings_method_globalize_path).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_save"></div>

[Error](#enum_@globalscope_error) **save** ( )<div id="class_projectsettings_method_save"></div>

Saves the configuration to the `project.godot` file.

 **Note:** This method is intended to be used by editor plugins, as modified **ProjectSettings** can't be loaded back in the running app. If you want to change project settings in exported projects, use [`save_custom`](class_projectsettings.md#class_projectsettings_method_save_custom) to save `override.cfg` file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_save_custom"></div>

[Error](#enum_@globalscope_error) **save_custom** ( file: [`String`](class_string.md) )<div id="class_projectsettings_method_save_custom"></div>

Saves the configuration to a custom file. The file extension must be `.godot` (to save in text-based [`ConfigFile`](class_configfile.md) format) or `.binary` (to save in binary format). You can also save `override.cfg` file, which is also text, but can be used in exported projects unlike other formats.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_as_basic"></div>

`void` **set_as_basic** ( name: [`String`](class_string.md), basic: [`bool`](class_bool.md) )<div id="class_projectsettings_method_set_as_basic"></div>

Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_as_internal"></div>

`void` **set_as_internal** ( name: [`String`](class_string.md), internal: [`bool`](class_bool.md) )<div id="class_projectsettings_method_set_as_internal"></div>

Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_initial_value"></div>

`void` **set_initial_value** ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_projectsettings_method_set_initial_value"></div>

Sets the specified setting's initial value. This is the value the setting reverts to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_order"></div>

`void` **set_order** ( name: [`String`](class_string.md), position: [`int`](class_int.md) )<div id="class_projectsettings_method_set_order"></div>

Sets the order of a configuration value (influences when saved to the config file).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_restart_if_changed"></div>

`void` **set_restart_if_changed** ( name: [`String`](class_string.md), restart: [`bool`](class_bool.md) )<div id="class_projectsettings_method_set_restart_if_changed"></div>

Sets whether a setting requires restarting the editor to properly take effect.

 **Note:** This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling [`set_restart_if_changed`](class_projectsettings.md#class_projectsettings_method_set_restart_if_changed) does *not* delay the setting being set when changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_projectsettings_method_set_setting"></div>

`void` **set_setting** ( name: [`String`](class_string.md), value: [`Variant`](class_variant.md) )<div id="class_projectsettings_method_set_setting"></div>

Sets the value of a setting.



```gdscript

    ProjectSettings.set_setting("application/config/name", "Example")
```

```csharp

    ProjectSettings.SetSetting("application/config/name", "Example");
```



This can also be used to erase custom project settings. To do this change the setting value to `null`.





[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
