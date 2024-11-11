<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/@GlobalScope.xml。 -->

<div id="_class_@globalscope"></div>

# @GlobalScope

Global scope constants and functions.

## 描述

A list of global scope enumerated constants and built-in functions. This is all that resides in the globals, constants regarding error codes, keycodes, property hints, etc.

Singletons are also documented here, since they can be accessed from anywhere.

For the entries that can only be accessed from scripts written in GDScript, see [`@GDScript`](class_@gdscript.md).

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

|||
|:-:|:--|
| [`AudioServer`](class_audioserver.md)                         | [`AudioServer`](class_@globalscope.md#class_@globalscope_property_audioserver)                         |
| [`CameraServer`](class_cameraserver.md)                       | [`CameraServer`](class_@globalscope.md#class_@globalscope_property_cameraserver)                       |
| [`ClassDB`](class_classdb.md)                                 | [`ClassDB`](class_@globalscope.md#class_@globalscope_property_classdb)                                 |
| [`DisplayServer`](class_displayserver.md)                     | [`DisplayServer`](class_@globalscope.md#class_@globalscope_property_displayserver)                     |
| [`EditorInterface`](class_editorinterface.md)                 | [`EditorInterface`](class_@globalscope.md#class_@globalscope_property_editorinterface)                 |
| [`Engine`](class_engine.md)                                   | [`Engine`](class_@globalscope.md#class_@globalscope_property_engine)                                   |
| [`EngineDebugger`](class_enginedebugger.md)                   | [`EngineDebugger`](class_@globalscope.md#class_@globalscope_property_enginedebugger)                   |
| [`GDExtensionManager`](class_gdextensionmanager.md)           | [`GDExtensionManager`](class_@globalscope.md#class_@globalscope_property_gdextensionmanager)           |
| [`Geometry2D`](class_geometry2d.md)                           | [`Geometry2D`](class_@globalscope.md#class_@globalscope_property_geometry2d)                           |
| [`Geometry3D`](class_geometry3d.md)                           | [`Geometry3D`](class_@globalscope.md#class_@globalscope_property_geometry3d)                           |
| [`IP`](class_ip.md)                                           | [`IP`](class_@globalscope.md#class_@globalscope_property_ip)                                           |
| [`Input`](class_input.md)                                     | [`Input`](class_@globalscope.md#class_@globalscope_property_input)                                     |
| [`InputMap`](class_inputmap.md)                               | [`InputMap`](class_@globalscope.md#class_@globalscope_property_inputmap)                               |
| [`JavaClassWrapper`](class_javaclasswrapper.md)               | [`JavaClassWrapper`](class_@globalscope.md#class_@globalscope_property_javaclasswrapper)               |
| [`JavaScriptBridge`](class_javascriptbridge.md)               | [`JavaScriptBridge`](class_@globalscope.md#class_@globalscope_property_javascriptbridge)               |
| [`Marshalls`](class_marshalls.md)                             | [`Marshalls`](class_@globalscope.md#class_@globalscope_property_marshalls)                             |
| [`NativeMenu`](class_nativemenu.md)                           | [`NativeMenu`](class_@globalscope.md#class_@globalscope_property_nativemenu)                           |
| [`NavigationMeshGenerator`](class_navigationmeshgenerator.md) | [`NavigationMeshGenerator`](class_@globalscope.md#class_@globalscope_property_navigationmeshgenerator) |
| [`NavigationServer2D`](class_navigationserver2d.md)           | [`NavigationServer2D`](class_@globalscope.md#class_@globalscope_property_navigationserver2d)           |
| [`NavigationServer3D`](class_navigationserver3d.md)           | [`NavigationServer3D`](class_@globalscope.md#class_@globalscope_property_navigationserver3d)           |
| [`OS`](class_os.md)                                           | [`OS`](class_@globalscope.md#class_@globalscope_property_os)                                           |
| [`Performance`](class_performance.md)                         | [`Performance`](class_@globalscope.md#class_@globalscope_property_performance)                         |
| [`PhysicsServer2D`](class_physicsserver2d.md)                 | [`PhysicsServer2D`](class_@globalscope.md#class_@globalscope_property_physicsserver2d)                 |
| [`PhysicsServer2DManager`](class_physicsserver2dmanager.md)   | [`PhysicsServer2DManager`](class_@globalscope.md#class_@globalscope_property_physicsserver2dmanager)   |
| [`PhysicsServer3D`](class_physicsserver3d.md)                 | [`PhysicsServer3D`](class_@globalscope.md#class_@globalscope_property_physicsserver3d)                 |
| [`PhysicsServer3DManager`](class_physicsserver3dmanager.md)   | [`PhysicsServer3DManager`](class_@globalscope.md#class_@globalscope_property_physicsserver3dmanager)   |
| [`ProjectSettings`](class_projectsettings.md)                 | [`ProjectSettings`](class_@globalscope.md#class_@globalscope_property_projectsettings)                 |
| [`RenderingServer`](class_renderingserver.md)                 | [`RenderingServer`](class_@globalscope.md#class_@globalscope_property_renderingserver)                 |
| [`ResourceLoader`](class_resourceloader.md)                   | [`ResourceLoader`](class_@globalscope.md#class_@globalscope_property_resourceloader)                   |
| [`ResourceSaver`](class_resourcesaver.md)                     | [`ResourceSaver`](class_@globalscope.md#class_@globalscope_property_resourcesaver)                     |
| [`ResourceUID`](class_resourceuid.md)                         | [`ResourceUID`](class_@globalscope.md#class_@globalscope_property_resourceuid)                         |
| [`TextServerManager`](class_textservermanager.md)             | [`TextServerManager`](class_@globalscope.md#class_@globalscope_property_textservermanager)             |
| [`ThemeDB`](class_themedb.md)                                 | [`ThemeDB`](class_@globalscope.md#class_@globalscope_property_themedb)                                 |
| [`Time`](class_time.md)                                       | [`Time`](class_@globalscope.md#class_@globalscope_property_time)                                       |
| [`TranslationServer`](class_translationserver.md)             | [`TranslationServer`](class_@globalscope.md#class_@globalscope_property_translationserver)             |
| [`WorkerThreadPool`](class_workerthreadpool.md)               | [`WorkerThreadPool`](class_@globalscope.md#class_@globalscope_property_workerthreadpool)               |
| [`XRServer`](class_xrserver.md)                               | [`XRServer`](class_@globalscope.md#class_@globalscope_property_xrserver)                               |

## 方法

|||
|:-:|:--|
| [`Variant`](class_variant.md)                   | [`abs`](class_@globalscope.md#class_@globalscope_method_abs) ( x: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`absf`](class_@globalscope.md#class_@globalscope_method_absf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                           | [`absi`](class_@globalscope.md#class_@globalscope_method_absi) ( x: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                       | [`acos`](class_@globalscope.md#class_@globalscope_method_acos) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`acosh`](class_@globalscope.md#class_@globalscope_method_acosh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`angle_difference`](class_@globalscope.md#class_@globalscope_method_angle_difference) ( from: [`float`](class_float.md), to: [`float`](class_float.md) )                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                       | [`asin`](class_@globalscope.md#class_@globalscope_method_asin) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`asinh`](class_@globalscope.md#class_@globalscope_method_asinh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`atan`](class_@globalscope.md#class_@globalscope_method_atan) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`atan2`](class_@globalscope.md#class_@globalscope_method_atan2) ( y: [`float`](class_float.md), x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`atanh`](class_@globalscope.md#class_@globalscope_method_atanh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`bezier_derivative`](class_@globalscope.md#class_@globalscope_method_bezier_derivative) ( start: [`float`](class_float.md), control_1: [`float`](class_float.md), control_2: [`float`](class_float.md), end: [`float`](class_float.md), t: [`float`](class_float.md) )                                                                                                                           |
| [`float`](class_float.md)                       | [`bezier_interpolate`](class_@globalscope.md#class_@globalscope_method_bezier_interpolate) ( start: [`float`](class_float.md), control_1: [`float`](class_float.md), control_2: [`float`](class_float.md), end: [`float`](class_float.md), t: [`float`](class_float.md) )                                                                                                                         |
| [`Variant`](class_variant.md)                   | [`bytes_to_var`](class_@globalscope.md#class_@globalscope_method_bytes_to_var) ( bytes: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                                           |
| [`Variant`](class_variant.md)                   | [`bytes_to_var_with_objects`](class_@globalscope.md#class_@globalscope_method_bytes_to_var_with_objects) ( bytes: [`PackedByteArray`](class_packedbytearray.md) )                                                                                                                                                                                                                                 |
| [`Variant`](class_variant.md)                   | [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil) ( x: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                               |
| [`float`](class_float.md)                       | [`ceilf`](class_@globalscope.md#class_@globalscope_method_ceilf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                           | [`ceili`](class_@globalscope.md#class_@globalscope_method_ceili) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`Variant`](class_variant.md)                   | [`clamp`](class_@globalscope.md#class_@globalscope_method_clamp) ( value: [`Variant`](class_variant.md), min: [`Variant`](class_variant.md), max: [`Variant`](class_variant.md) )                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`clampf`](class_@globalscope.md#class_@globalscope_method_clampf) ( value: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md) )                                                                                                                                                                                                                           |
| [`int`](class_int.md)                           | [`clampi`](class_@globalscope.md#class_@globalscope_method_clampi) ( value: [`int`](class_int.md), min: [`int`](class_int.md), max: [`int`](class_int.md) )                                                                                                                                                                                                                                       |
| [`float`](class_float.md)                       | [`cos`](class_@globalscope.md#class_@globalscope_method_cos) ( angle_rad: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`cosh`](class_@globalscope.md#class_@globalscope_method_cosh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`cubic_interpolate`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate) ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md) )                                                                                                                                   |
| [`float`](class_float.md)                       | [`cubic_interpolate_angle`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate_angle) ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md) )                                                                                                                       |
| [`float`](class_float.md)                       | [`cubic_interpolate_angle_in_time`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate_angle_in_time) ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md), to_t: [`float`](class_float.md), pre_t: [`float`](class_float.md), post_t: [`float`](class_float.md) ) |
| [`float`](class_float.md)                       | [`cubic_interpolate_in_time`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate_in_time) ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md), to_t: [`float`](class_float.md), pre_t: [`float`](class_float.md), post_t: [`float`](class_float.md) )             |
| [`float`](class_float.md)                       | [`db_to_linear`](class_@globalscope.md#class_@globalscope_method_db_to_linear) ( db: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                  |
| [`float`](class_float.md)                       | [`deg_to_rad`](class_@globalscope.md#class_@globalscope_method_deg_to_rad) ( deg: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                       | [`ease`](class_@globalscope.md#class_@globalscope_method_ease) ( x: [`float`](class_float.md), curve: [`float`](class_float.md) )                                                                                                                                                                                                                                                                 |
| [`String`](class_string.md)                     | [`error_string`](class_@globalscope.md#class_@globalscope_method_error_string) ( error: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`exp`](class_@globalscope.md#class_@globalscope_method_exp) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                     |
| [`Variant`](class_variant.md)                   | [`floor`](class_@globalscope.md#class_@globalscope_method_floor) ( x: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`floorf`](class_@globalscope.md#class_@globalscope_method_floorf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                           | [`floori`](class_@globalscope.md#class_@globalscope_method_floori) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| [`float`](class_float.md)                       | [`fmod`](class_@globalscope.md#class_@globalscope_method_fmod) ( x: [`float`](class_float.md), y: [`float`](class_float.md) )                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                       | [`fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) ( x: [`float`](class_float.md), y: [`float`](class_float.md) )                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                           | [`hash`](class_@globalscope.md#class_@globalscope_method_hash) ( variable: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                        |
| [`Object`](class_object.md)                     | [`instance_from_id`](class_@globalscope.md#class_@globalscope_method_instance_from_id) ( instance_id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                       | [`inverse_lerp`](class_@globalscope.md#class_@globalscope_method_inverse_lerp) ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                         | [`is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) ( a: [`float`](class_float.md), b: [`float`](class_float.md) )                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                         | [`is_finite`](class_@globalscope.md#class_@globalscope_method_is_finite) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                         |
| [`bool`](class_bool.md)                         | [`is_inf`](class_@globalscope.md#class_@globalscope_method_is_inf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                         | [`is_instance_id_valid`](class_@globalscope.md#class_@globalscope_method_is_instance_id_valid) ( id: [`int`](class_int.md) )                                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)                         | [`is_instance_valid`](class_@globalscope.md#class_@globalscope_method_is_instance_valid) ( instance: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                              |
| [`bool`](class_bool.md)                         | [`is_nan`](class_@globalscope.md#class_@globalscope_method_is_nan) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)                         | [`is_same`](class_@globalscope.md#class_@globalscope_method_is_same) ( a: [`Variant`](class_variant.md), b: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                       |
| [`bool`](class_bool.md)                         | [`is_zero_approx`](class_@globalscope.md#class_@globalscope_method_is_zero_approx) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                               |
| [`Variant`](class_variant.md)                   | [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp) ( from: [`Variant`](class_variant.md), to: [`Variant`](class_variant.md), weight: [`Variant`](class_variant.md) )                                                                                                                                                                                                                  |
| [`float`](class_float.md)                       | [`lerp_angle`](class_@globalscope.md#class_@globalscope_method_lerp_angle) ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )                                                                                                                                                                                                                  |
| [`float`](class_float.md)                       | [`lerpf`](class_@globalscope.md#class_@globalscope_method_lerpf) ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )                                                                                                                                                                                                                            |
| [`float`](class_float.md)                       | [`linear_to_db`](class_@globalscope.md#class_@globalscope_method_linear_to_db) ( lin: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)                       | [`log`](class_@globalscope.md#class_@globalscope_method_log) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                     |
| [`Variant`](class_variant.md)                   | [`max`](class_@globalscope.md#class_@globalscope_method_max) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                       | [`maxf`](class_@globalscope.md#class_@globalscope_method_maxf) ( a: [`float`](class_float.md), b: [`float`](class_float.md) )                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                           | [`maxi`](class_@globalscope.md#class_@globalscope_method_maxi) ( a: [`int`](class_int.md), b: [`int`](class_int.md) )                                                                                                                                                                                                                                                                             |
| [`Variant`](class_variant.md)                   | [`min`](class_@globalscope.md#class_@globalscope_method_min) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                       | [`minf`](class_@globalscope.md#class_@globalscope_method_minf) ( a: [`float`](class_float.md), b: [`float`](class_float.md) )                                                                                                                                                                                                                                                                     |
| [`int`](class_int.md)                           | [`mini`](class_@globalscope.md#class_@globalscope_method_mini) ( a: [`int`](class_int.md), b: [`int`](class_int.md) )                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`move_toward`](class_@globalscope.md#class_@globalscope_method_move_toward) ( from: [`float`](class_float.md), to: [`float`](class_float.md), delta: [`float`](class_float.md) )                                                                                                                                                                                                                 |
| [`int`](class_int.md)                           | [`nearest_po2`](class_@globalscope.md#class_@globalscope_method_nearest_po2) ( value: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                       | [`pingpong`](class_@globalscope.md#class_@globalscope_method_pingpong) ( value: [`float`](class_float.md), length: [`float`](class_float.md) )                                                                                                                                                                                                                                                    |
| [`int`](class_int.md)                           | [`posmod`](class_@globalscope.md#class_@globalscope_method_posmod) ( x: [`int`](class_int.md), y: [`int`](class_int.md) )                                                                                                                                                                                                                                                                         |
| [`float`](class_float.md)                       | [`pow`](class_@globalscope.md#class_@globalscope_method_pow) ( base: [`float`](class_float.md), exp: [`float`](class_float.md) )                                                                                                                                                                                                                                                                  |
| `void`                                          | [`print`](class_@globalscope.md#class_@globalscope_method_print) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                          |
| `void`                                          | [`print_rich`](class_@globalscope.md#class_@globalscope_method_print_rich) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                |
| `void`                                          | [`print_verbose`](class_@globalscope.md#class_@globalscope_method_print_verbose) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                          |
| `void`                                          | [`printerr`](class_@globalscope.md#class_@globalscope_method_printerr) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                    |
| `void`                                          | [`printraw`](class_@globalscope.md#class_@globalscope_method_printraw) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                    |
| `void`                                          | [`prints`](class_@globalscope.md#class_@globalscope_method_prints) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                        |
| `void`                                          | [`printt`](class_@globalscope.md#class_@globalscope_method_printt) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                        |
| `void`                                          | [`push_error`](class_@globalscope.md#class_@globalscope_method_push_error) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                |
| `void`                                          | [`push_warning`](class_@globalscope.md#class_@globalscope_method_push_warning) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                            |
| [`float`](class_float.md)                       | [`rad_to_deg`](class_@globalscope.md#class_@globalscope_method_rad_to_deg) ( rad: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                     |
| [`PackedInt64Array`](class_packedint64array.md) | [`rand_from_seed`](class_@globalscope.md#class_@globalscope_method_rand_from_seed) ( seed: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                       | [`randf`](class_@globalscope.md#class_@globalscope_method_randf) ( )                                                                                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                       | [`randf_range`](class_@globalscope.md#class_@globalscope_method_randf_range) ( from: [`float`](class_float.md), to: [`float`](class_float.md) )                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`randfn`](class_@globalscope.md#class_@globalscope_method_randfn) ( mean: [`float`](class_float.md), deviation: [`float`](class_float.md) )                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                           | [`randi`](class_@globalscope.md#class_@globalscope_method_randi) ( )                                                                                                                                                                                                                                                                                                                              |
| [`int`](class_int.md)                           | [`randi_range`](class_@globalscope.md#class_@globalscope_method_randi_range) ( from: [`int`](class_int.md), to: [`int`](class_int.md) )                                                                                                                                                                                                                                                           |
| `void`                                          | [`randomize`](class_@globalscope.md#class_@globalscope_method_randomize) ( )                                                                                                                                                                                                                                                                                                                      |
| [`float`](class_float.md)                       | [`remap`](class_@globalscope.md#class_@globalscope_method_remap) ( value: [`float`](class_float.md), istart: [`float`](class_float.md), istop: [`float`](class_float.md), ostart: [`float`](class_float.md), ostop: [`float`](class_float.md) )                                                                                                                                                   |
| [`int`](class_int.md)                           | [`rid_allocate_id`](class_@globalscope.md#class_@globalscope_method_rid_allocate_id) ( )                                                                                                                                                                                                                                                                                                          |
| [`RID`](class_rid.md)                           | [`rid_from_int64`](class_@globalscope.md#class_@globalscope_method_rid_from_int64) ( base: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                       | [`rotate_toward`](class_@globalscope.md#class_@globalscope_method_rotate_toward) ( from: [`float`](class_float.md), to: [`float`](class_float.md), delta: [`float`](class_float.md) )                                                                                                                                                                                                             |
| [`Variant`](class_variant.md)                   | [`round`](class_@globalscope.md#class_@globalscope_method_round) ( x: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`roundf`](class_@globalscope.md#class_@globalscope_method_roundf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| [`int`](class_int.md)                           | [`roundi`](class_@globalscope.md#class_@globalscope_method_roundi) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                               |
| `void`                                          | [`seed`](class_@globalscope.md#class_@globalscope_method_seed) ( base: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                    |
| [`Variant`](class_variant.md)                   | [`sign`](class_@globalscope.md#class_@globalscope_method_sign) ( x: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                               |
| [`float`](class_float.md)                       | [`signf`](class_@globalscope.md#class_@globalscope_method_signf) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                           | [`signi`](class_@globalscope.md#class_@globalscope_method_signi) ( x: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)                       | [`sin`](class_@globalscope.md#class_@globalscope_method_sin) ( angle_rad: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`sinh`](class_@globalscope.md#class_@globalscope_method_sinh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep) ( from: [`float`](class_float.md), to: [`float`](class_float.md), x: [`float`](class_float.md) )                                                                                                                                                                                                                       |
| [`Variant`](class_variant.md)                   | [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped) ( x: [`Variant`](class_variant.md), step: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                    |
| [`float`](class_float.md)                       | [`snappedf`](class_@globalscope.md#class_@globalscope_method_snappedf) ( x: [`float`](class_float.md), step: [`float`](class_float.md) )                                                                                                                                                                                                                                                          |
| [`int`](class_int.md)                           | [`snappedi`](class_@globalscope.md#class_@globalscope_method_snappedi) ( x: [`float`](class_float.md), step: [`int`](class_int.md) )                                                                                                                                                                                                                                                              |
| [`float`](class_float.md)                       | [`sqrt`](class_@globalscope.md#class_@globalscope_method_sqrt) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)                           | [`step_decimals`](class_@globalscope.md#class_@globalscope_method_step_decimals) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                 |
| [`String`](class_string.md)                     | [`str`](class_@globalscope.md#class_@globalscope_method_str) ( ... ) vararg[^vararg]                                                                                                                                                                                                                                                                                                              |
| [`Variant`](class_variant.md)                   | [`str_to_var`](class_@globalscope.md#class_@globalscope_method_str_to_var) ( string: [`String`](class_string.md) )                                                                                                                                                                                                                                                                                |
| [`float`](class_float.md)                       | [`tan`](class_@globalscope.md#class_@globalscope_method_tan) ( angle_rad: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                             |
| [`float`](class_float.md)                       | [`tanh`](class_@globalscope.md#class_@globalscope_method_tanh) ( x: [`float`](class_float.md) )                                                                                                                                                                                                                                                                                                   |
| [`Variant`](class_variant.md)                   | [`type_convert`](class_@globalscope.md#class_@globalscope_method_type_convert) ( variant: [`Variant`](class_variant.md), type: [`int`](class_int.md) )                                                                                                                                                                                                                                            |
| [`String`](class_string.md)                     | [`type_string`](class_@globalscope.md#class_@globalscope_method_type_string) ( type: [`int`](class_int.md) )                                                                                                                                                                                                                                                                                      |
| [`int`](class_int.md)                           | [`typeof`](class_@globalscope.md#class_@globalscope_method_typeof) ( variable: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                    |
| [`PackedByteArray`](class_packedbytearray.md)   | [`var_to_bytes`](class_@globalscope.md#class_@globalscope_method_var_to_bytes) ( variable: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                        |
| [`PackedByteArray`](class_packedbytearray.md)   | [`var_to_bytes_with_objects`](class_@globalscope.md#class_@globalscope_method_var_to_bytes_with_objects) ( variable: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                              |
| [`String`](class_string.md)                     | [`var_to_str`](class_@globalscope.md#class_@globalscope_method_var_to_str) ( variable: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                            |
| [`Variant`](class_variant.md)                   | [`weakref`](class_@globalscope.md#class_@globalscope_method_weakref) ( obj: [`Variant`](class_variant.md) )                                                                                                                                                                                                                                                                                       |
| [`Variant`](class_variant.md)                   | [`wrap`](class_@globalscope.md#class_@globalscope_method_wrap) ( value: [`Variant`](class_variant.md), min: [`Variant`](class_variant.md), max: [`Variant`](class_variant.md) )                                                                                                                                                                                                                   |
| [`float`](class_float.md)                       | [`wrapf`](class_@globalscope.md#class_@globalscope_method_wrapf) ( value: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md) )                                                                                                                                                                                                                             |
| [`int`](class_int.md)                           | [`wrapi`](class_@globalscope.md#class_@globalscope_method_wrapi) ( value: [`int`](class_int.md), min: [`int`](class_int.md), max: [`int`](class_int.md) )                                                                                                                                                                                                                                         |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_@globalscope_side"></div>

enum **Side**: <div id="enum_@globalscope_side"></div>

<div id="_class_@globalscope_constant_side_left"></div>

[Side](#enum_@globalscope_side) **SIDE_LEFT** = ``0``

Left side, usually used for [`Control`](class_control.md) or [`StyleBox`](class_stylebox.md)-derived classes.

<div id="_class_@globalscope_constant_side_top"></div>

[Side](#enum_@globalscope_side) **SIDE_TOP** = ``1``

Top side, usually used for [`Control`](class_control.md) or [`StyleBox`](class_stylebox.md)-derived classes.

<div id="_class_@globalscope_constant_side_right"></div>

[Side](#enum_@globalscope_side) **SIDE_RIGHT** = ``2``

Right side, usually used for [`Control`](class_control.md) or [`StyleBox`](class_stylebox.md)-derived classes.

<div id="_class_@globalscope_constant_side_bottom"></div>

[Side](#enum_@globalscope_side) **SIDE_BOTTOM** = ``3``

Bottom side, usually used for [`Control`](class_control.md) or [`StyleBox`](class_stylebox.md)-derived classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_corner"></div>

enum **Corner**: <div id="enum_@globalscope_corner"></div>

<div id="_class_@globalscope_constant_corner_top_left"></div>

[Corner](#enum_@globalscope_corner) **CORNER_TOP_LEFT** = ``0``

Top-left corner.

<div id="_class_@globalscope_constant_corner_top_right"></div>

[Corner](#enum_@globalscope_corner) **CORNER_TOP_RIGHT** = ``1``

Top-right corner.

<div id="_class_@globalscope_constant_corner_bottom_right"></div>

[Corner](#enum_@globalscope_corner) **CORNER_BOTTOM_RIGHT** = ``2``

Bottom-right corner.

<div id="_class_@globalscope_constant_corner_bottom_left"></div>

[Corner](#enum_@globalscope_corner) **CORNER_BOTTOM_LEFT** = ``3``

Bottom-left corner.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_orientation"></div>

enum **Orientation**: <div id="enum_@globalscope_orientation"></div>

<div id="_class_@globalscope_constant_vertical"></div>

[Orientation](#enum_@globalscope_orientation) **VERTICAL** = ``1``

General vertical alignment, usually used for [`Separator`](class_separator.md), [`ScrollBar`](class_scrollbar.md), [`Slider`](class_slider.md), etc.

<div id="_class_@globalscope_constant_horizontal"></div>

[Orientation](#enum_@globalscope_orientation) **HORIZONTAL** = ``0``

General horizontal alignment, usually used for [`Separator`](class_separator.md), [`ScrollBar`](class_scrollbar.md), [`Slider`](class_slider.md), etc.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_clockdirection"></div>

enum **ClockDirection**: <div id="enum_@globalscope_clockdirection"></div>

<div id="_class_@globalscope_constant_clockwise"></div>

[ClockDirection](#enum_@globalscope_clockdirection) **CLOCKWISE** = ``0``

Clockwise rotation. Used by some methods (e.g. [`Image.rotate_90`](class_image.md#class_image_method_rotate_90)).

<div id="_class_@globalscope_constant_counterclockwise"></div>

[ClockDirection](#enum_@globalscope_clockdirection) **COUNTERCLOCKWISE** = ``1``

Counter-clockwise rotation. Used by some methods (e.g. [`Image.rotate_90`](class_image.md#class_image_method_rotate_90)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_horizontalalignment"></div>

enum **HorizontalAlignment**: <div id="enum_@globalscope_horizontalalignment"></div>

<div id="_class_@globalscope_constant_horizontal_alignment_left"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **HORIZONTAL_ALIGNMENT_LEFT** = ``0``

Horizontal left alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_horizontal_alignment_center"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **HORIZONTAL_ALIGNMENT_CENTER** = ``1``

Horizontal center alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_horizontal_alignment_right"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **HORIZONTAL_ALIGNMENT_RIGHT** = ``2``

Horizontal right alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_horizontal_alignment_fill"></div>

[HorizontalAlignment](#enum_@globalscope_horizontalalignment) **HORIZONTAL_ALIGNMENT_FILL** = ``3``

Expand row to fit width, usually for text-derived classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_verticalalignment"></div>

enum **VerticalAlignment**: <div id="enum_@globalscope_verticalalignment"></div>

<div id="_class_@globalscope_constant_vertical_alignment_top"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **VERTICAL_ALIGNMENT_TOP** = ``0``

Vertical top alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_vertical_alignment_center"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **VERTICAL_ALIGNMENT_CENTER** = ``1``

Vertical center alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_vertical_alignment_bottom"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **VERTICAL_ALIGNMENT_BOTTOM** = ``2``

Vertical bottom alignment, usually for text-derived classes.

<div id="_class_@globalscope_constant_vertical_alignment_fill"></div>

[VerticalAlignment](#enum_@globalscope_verticalalignment) **VERTICAL_ALIGNMENT_FILL** = ``3``

Expand rows to fit height, usually for text-derived classes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_inlinealignment"></div>

enum **InlineAlignment**: <div id="enum_@globalscope_inlinealignment"></div>

<div id="_class_@globalscope_constant_inline_alignment_top_to"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TOP_TO** = ``0``

Aligns the top of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.

<div id="_class_@globalscope_constant_inline_alignment_center_to"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_CENTER_TO** = ``1``

Aligns the center of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.

<div id="_class_@globalscope_constant_inline_alignment_baseline_to"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_BASELINE_TO** = ``3``

Aligns the baseline (user defined) of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.

<div id="_class_@globalscope_constant_inline_alignment_bottom_to"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_BOTTOM_TO** = ``2``

Aligns the bottom of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.

<div id="_class_@globalscope_constant_inline_alignment_to_top"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TO_TOP** = ``0``

Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the top of the text.

<div id="_class_@globalscope_constant_inline_alignment_to_center"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TO_CENTER** = ``4``

Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the center of the text.

<div id="_class_@globalscope_constant_inline_alignment_to_baseline"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TO_BASELINE** = ``8``

Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the baseline of the text.

<div id="_class_@globalscope_constant_inline_alignment_to_bottom"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TO_BOTTOM** = ``12``

Aligns inline object (e.g. image, table) to the bottom of the text.

<div id="_class_@globalscope_constant_inline_alignment_top"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TOP** = ``0``

Aligns top of the inline object (e.g. image, table) to the top of the text. Equivalent to `INLINE_ALIGNMENT_TOP_TO | INLINE_ALIGNMENT_TO_TOP`.

<div id="_class_@globalscope_constant_inline_alignment_center"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_CENTER** = ``5``

Aligns center of the inline object (e.g. image, table) to the center of the text. Equivalent to `INLINE_ALIGNMENT_CENTER_TO | INLINE_ALIGNMENT_TO_CENTER`.

<div id="_class_@globalscope_constant_inline_alignment_bottom"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_BOTTOM** = ``14``

Aligns bottom of the inline object (e.g. image, table) to the bottom of the text. Equivalent to `INLINE_ALIGNMENT_BOTTOM_TO | INLINE_ALIGNMENT_TO_BOTTOM`.

<div id="_class_@globalscope_constant_inline_alignment_image_mask"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_IMAGE_MASK** = ``3``

A bit mask for `INLINE_ALIGNMENT_*_TO` alignment constants.

<div id="_class_@globalscope_constant_inline_alignment_text_mask"></div>

[InlineAlignment](#enum_@globalscope_inlinealignment) **INLINE_ALIGNMENT_TEXT_MASK** = ``12``

A bit mask for `INLINE_ALIGNMENT_TO_*` alignment constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_eulerorder"></div>

enum **EulerOrder**: <div id="enum_@globalscope_eulerorder"></div>

<div id="_class_@globalscope_constant_euler_order_xyz"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_XYZ** = ``0``

Specifies that Euler angles should be in XYZ order. When composing, the order is X, Y, Z. When decomposing, the order is reversed, first Z, then Y, and X last.

<div id="_class_@globalscope_constant_euler_order_xzy"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_XZY** = ``1``

Specifies that Euler angles should be in XZY order. When composing, the order is X, Z, Y. When decomposing, the order is reversed, first Y, then Z, and X last.

<div id="_class_@globalscope_constant_euler_order_yxz"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_YXZ** = ``2``

Specifies that Euler angles should be in YXZ order. When composing, the order is Y, X, Z. When decomposing, the order is reversed, first Z, then X, and Y last.

<div id="_class_@globalscope_constant_euler_order_yzx"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_YZX** = ``3``

Specifies that Euler angles should be in YZX order. When composing, the order is Y, Z, X. When decomposing, the order is reversed, first X, then Z, and Y last.

<div id="_class_@globalscope_constant_euler_order_zxy"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_ZXY** = ``4``

Specifies that Euler angles should be in ZXY order. When composing, the order is Z, X, Y. When decomposing, the order is reversed, first Y, then X, and Z last.

<div id="_class_@globalscope_constant_euler_order_zyx"></div>

[EulerOrder](#enum_@globalscope_eulerorder) **EULER_ORDER_ZYX** = ``5``

Specifies that Euler angles should be in ZYX order. When composing, the order is Z, Y, X. When decomposing, the order is reversed, first X, then Y, and Z last.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_key"></div>

enum **Key**: <div id="enum_@globalscope_key"></div>

<div id="_class_@globalscope_constant_key_none"></div>

[Key](#enum_@globalscope_key) **KEY_NONE** = ``0``

Enum value which doesn't correspond to any key. This is used to initialize [Key](#enum_@globalscope_key) properties with a generic state.

<div id="_class_@globalscope_constant_key_special"></div>

[Key](#enum_@globalscope_key) **KEY_SPECIAL** = ``4194304``

Keycodes with this bit applied are non-printable.

<div id="_class_@globalscope_constant_key_escape"></div>

[Key](#enum_@globalscope_key) **KEY_ESCAPE** = ``4194305``

Escape key.

<div id="_class_@globalscope_constant_key_tab"></div>

[Key](#enum_@globalscope_key) **KEY_TAB** = ``4194306``

Tab key.

<div id="_class_@globalscope_constant_key_backtab"></div>

[Key](#enum_@globalscope_key) **KEY_BACKTAB** = ``4194307``

Shift + Tab key.

<div id="_class_@globalscope_constant_key_backspace"></div>

[Key](#enum_@globalscope_key) **KEY_BACKSPACE** = ``4194308``

Backspace key.

<div id="_class_@globalscope_constant_key_enter"></div>

[Key](#enum_@globalscope_key) **KEY_ENTER** = ``4194309``

Return key (on the main keyboard).

<div id="_class_@globalscope_constant_key_kp_enter"></div>

[Key](#enum_@globalscope_key) **KEY_KP_ENTER** = ``4194310``

Enter key on the numeric keypad.

<div id="_class_@globalscope_constant_key_insert"></div>

[Key](#enum_@globalscope_key) **KEY_INSERT** = ``4194311``

Insert key.

<div id="_class_@globalscope_constant_key_delete"></div>

[Key](#enum_@globalscope_key) **KEY_DELETE** = ``4194312``

Delete key.

<div id="_class_@globalscope_constant_key_pause"></div>

[Key](#enum_@globalscope_key) **KEY_PAUSE** = ``4194313``

Pause key.

<div id="_class_@globalscope_constant_key_print"></div>

[Key](#enum_@globalscope_key) **KEY_PRINT** = ``4194314``

Print Screen key.

<div id="_class_@globalscope_constant_key_sysreq"></div>

[Key](#enum_@globalscope_key) **KEY_SYSREQ** = ``4194315``

System Request key.

<div id="_class_@globalscope_constant_key_clear"></div>

[Key](#enum_@globalscope_key) **KEY_CLEAR** = ``4194316``

Clear key.

<div id="_class_@globalscope_constant_key_home"></div>

[Key](#enum_@globalscope_key) **KEY_HOME** = ``4194317``

Home key.

<div id="_class_@globalscope_constant_key_end"></div>

[Key](#enum_@globalscope_key) **KEY_END** = ``4194318``

End key.

<div id="_class_@globalscope_constant_key_left"></div>

[Key](#enum_@globalscope_key) **KEY_LEFT** = ``4194319``

Left arrow key.

<div id="_class_@globalscope_constant_key_up"></div>

[Key](#enum_@globalscope_key) **KEY_UP** = ``4194320``

Up arrow key.

<div id="_class_@globalscope_constant_key_right"></div>

[Key](#enum_@globalscope_key) **KEY_RIGHT** = ``4194321``

Right arrow key.

<div id="_class_@globalscope_constant_key_down"></div>

[Key](#enum_@globalscope_key) **KEY_DOWN** = ``4194322``

Down arrow key.

<div id="_class_@globalscope_constant_key_pageup"></div>

[Key](#enum_@globalscope_key) **KEY_PAGEUP** = ``4194323``

Page Up key.

<div id="_class_@globalscope_constant_key_pagedown"></div>

[Key](#enum_@globalscope_key) **KEY_PAGEDOWN** = ``4194324``

Page Down key.

<div id="_class_@globalscope_constant_key_shift"></div>

[Key](#enum_@globalscope_key) **KEY_SHIFT** = ``4194325``

Shift key.

<div id="_class_@globalscope_constant_key_ctrl"></div>

[Key](#enum_@globalscope_key) **KEY_CTRL** = ``4194326``

Control key.

<div id="_class_@globalscope_constant_key_meta"></div>

[Key](#enum_@globalscope_key) **KEY_META** = ``4194327``

Meta key.

<div id="_class_@globalscope_constant_key_alt"></div>

[Key](#enum_@globalscope_key) **KEY_ALT** = ``4194328``

Alt key.

<div id="_class_@globalscope_constant_key_capslock"></div>

[Key](#enum_@globalscope_key) **KEY_CAPSLOCK** = ``4194329``

Caps Lock key.

<div id="_class_@globalscope_constant_key_numlock"></div>

[Key](#enum_@globalscope_key) **KEY_NUMLOCK** = ``4194330``

Num Lock key.

<div id="_class_@globalscope_constant_key_scrolllock"></div>

[Key](#enum_@globalscope_key) **KEY_SCROLLLOCK** = ``4194331``

Scroll Lock key.

<div id="_class_@globalscope_constant_key_f1"></div>

[Key](#enum_@globalscope_key) **KEY_F1** = ``4194332``

F1 key.

<div id="_class_@globalscope_constant_key_f2"></div>

[Key](#enum_@globalscope_key) **KEY_F2** = ``4194333``

F2 key.

<div id="_class_@globalscope_constant_key_f3"></div>

[Key](#enum_@globalscope_key) **KEY_F3** = ``4194334``

F3 key.

<div id="_class_@globalscope_constant_key_f4"></div>

[Key](#enum_@globalscope_key) **KEY_F4** = ``4194335``

F4 key.

<div id="_class_@globalscope_constant_key_f5"></div>

[Key](#enum_@globalscope_key) **KEY_F5** = ``4194336``

F5 key.

<div id="_class_@globalscope_constant_key_f6"></div>

[Key](#enum_@globalscope_key) **KEY_F6** = ``4194337``

F6 key.

<div id="_class_@globalscope_constant_key_f7"></div>

[Key](#enum_@globalscope_key) **KEY_F7** = ``4194338``

F7 key.

<div id="_class_@globalscope_constant_key_f8"></div>

[Key](#enum_@globalscope_key) **KEY_F8** = ``4194339``

F8 key.

<div id="_class_@globalscope_constant_key_f9"></div>

[Key](#enum_@globalscope_key) **KEY_F9** = ``4194340``

F9 key.

<div id="_class_@globalscope_constant_key_f10"></div>

[Key](#enum_@globalscope_key) **KEY_F10** = ``4194341``

F10 key.

<div id="_class_@globalscope_constant_key_f11"></div>

[Key](#enum_@globalscope_key) **KEY_F11** = ``4194342``

F11 key.

<div id="_class_@globalscope_constant_key_f12"></div>

[Key](#enum_@globalscope_key) **KEY_F12** = ``4194343``

F12 key.

<div id="_class_@globalscope_constant_key_f13"></div>

[Key](#enum_@globalscope_key) **KEY_F13** = ``4194344``

F13 key.

<div id="_class_@globalscope_constant_key_f14"></div>

[Key](#enum_@globalscope_key) **KEY_F14** = ``4194345``

F14 key.

<div id="_class_@globalscope_constant_key_f15"></div>

[Key](#enum_@globalscope_key) **KEY_F15** = ``4194346``

F15 key.

<div id="_class_@globalscope_constant_key_f16"></div>

[Key](#enum_@globalscope_key) **KEY_F16** = ``4194347``

F16 key.

<div id="_class_@globalscope_constant_key_f17"></div>

[Key](#enum_@globalscope_key) **KEY_F17** = ``4194348``

F17 key.

<div id="_class_@globalscope_constant_key_f18"></div>

[Key](#enum_@globalscope_key) **KEY_F18** = ``4194349``

F18 key.

<div id="_class_@globalscope_constant_key_f19"></div>

[Key](#enum_@globalscope_key) **KEY_F19** = ``4194350``

F19 key.

<div id="_class_@globalscope_constant_key_f20"></div>

[Key](#enum_@globalscope_key) **KEY_F20** = ``4194351``

F20 key.

<div id="_class_@globalscope_constant_key_f21"></div>

[Key](#enum_@globalscope_key) **KEY_F21** = ``4194352``

F21 key.

<div id="_class_@globalscope_constant_key_f22"></div>

[Key](#enum_@globalscope_key) **KEY_F22** = ``4194353``

F22 key.

<div id="_class_@globalscope_constant_key_f23"></div>

[Key](#enum_@globalscope_key) **KEY_F23** = ``4194354``

F23 key.

<div id="_class_@globalscope_constant_key_f24"></div>

[Key](#enum_@globalscope_key) **KEY_F24** = ``4194355``

F24 key.

<div id="_class_@globalscope_constant_key_f25"></div>

[Key](#enum_@globalscope_key) **KEY_F25** = ``4194356``

F25 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f26"></div>

[Key](#enum_@globalscope_key) **KEY_F26** = ``4194357``

F26 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f27"></div>

[Key](#enum_@globalscope_key) **KEY_F27** = ``4194358``

F27 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f28"></div>

[Key](#enum_@globalscope_key) **KEY_F28** = ``4194359``

F28 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f29"></div>

[Key](#enum_@globalscope_key) **KEY_F29** = ``4194360``

F29 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f30"></div>

[Key](#enum_@globalscope_key) **KEY_F30** = ``4194361``

F30 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f31"></div>

[Key](#enum_@globalscope_key) **KEY_F31** = ``4194362``

F31 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f32"></div>

[Key](#enum_@globalscope_key) **KEY_F32** = ``4194363``

F32 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f33"></div>

[Key](#enum_@globalscope_key) **KEY_F33** = ``4194364``

F33 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f34"></div>

[Key](#enum_@globalscope_key) **KEY_F34** = ``4194365``

F34 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_f35"></div>

[Key](#enum_@globalscope_key) **KEY_F35** = ``4194366``

F35 key. Only supported on macOS and Linux due to a Windows limitation.

<div id="_class_@globalscope_constant_key_kp_multiply"></div>

[Key](#enum_@globalscope_key) **KEY_KP_MULTIPLY** = ``4194433``

Multiply (\*) key on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_divide"></div>

[Key](#enum_@globalscope_key) **KEY_KP_DIVIDE** = ``4194434``

Divide (/) key on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_subtract"></div>

[Key](#enum_@globalscope_key) **KEY_KP_SUBTRACT** = ``4194435``

Subtract (-) key on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_period"></div>

[Key](#enum_@globalscope_key) **KEY_KP_PERIOD** = ``4194436``

Period (.) key on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_add"></div>

[Key](#enum_@globalscope_key) **KEY_KP_ADD** = ``4194437``

Add (+) key on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_0"></div>

[Key](#enum_@globalscope_key) **KEY_KP_0** = ``4194438``

Number 0 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_1"></div>

[Key](#enum_@globalscope_key) **KEY_KP_1** = ``4194439``

Number 1 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_2"></div>

[Key](#enum_@globalscope_key) **KEY_KP_2** = ``4194440``

Number 2 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_3"></div>

[Key](#enum_@globalscope_key) **KEY_KP_3** = ``4194441``

Number 3 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_4"></div>

[Key](#enum_@globalscope_key) **KEY_KP_4** = ``4194442``

Number 4 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_5"></div>

[Key](#enum_@globalscope_key) **KEY_KP_5** = ``4194443``

Number 5 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_6"></div>

[Key](#enum_@globalscope_key) **KEY_KP_6** = ``4194444``

Number 6 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_7"></div>

[Key](#enum_@globalscope_key) **KEY_KP_7** = ``4194445``

Number 7 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_8"></div>

[Key](#enum_@globalscope_key) **KEY_KP_8** = ``4194446``

Number 8 on the numeric keypad.

<div id="_class_@globalscope_constant_key_kp_9"></div>

[Key](#enum_@globalscope_key) **KEY_KP_9** = ``4194447``

Number 9 on the numeric keypad.

<div id="_class_@globalscope_constant_key_menu"></div>

[Key](#enum_@globalscope_key) **KEY_MENU** = ``4194370``

Context menu key.

<div id="_class_@globalscope_constant_key_hyper"></div>

[Key](#enum_@globalscope_key) **KEY_HYPER** = ``4194371``

Hyper key. (On Linux/X11 only).

<div id="_class_@globalscope_constant_key_help"></div>

[Key](#enum_@globalscope_key) **KEY_HELP** = ``4194373``

Help key.

<div id="_class_@globalscope_constant_key_back"></div>

[Key](#enum_@globalscope_key) **KEY_BACK** = ``4194376``

Media back key. Not to be confused with the Back button on an Android device.

<div id="_class_@globalscope_constant_key_forward"></div>

[Key](#enum_@globalscope_key) **KEY_FORWARD** = ``4194377``

Media forward key.

<div id="_class_@globalscope_constant_key_stop"></div>

[Key](#enum_@globalscope_key) **KEY_STOP** = ``4194378``

Media stop key.

<div id="_class_@globalscope_constant_key_refresh"></div>

[Key](#enum_@globalscope_key) **KEY_REFRESH** = ``4194379``

Media refresh key.

<div id="_class_@globalscope_constant_key_volumedown"></div>

[Key](#enum_@globalscope_key) **KEY_VOLUMEDOWN** = ``4194380``

Volume down key.

<div id="_class_@globalscope_constant_key_volumemute"></div>

[Key](#enum_@globalscope_key) **KEY_VOLUMEMUTE** = ``4194381``

Mute volume key.

<div id="_class_@globalscope_constant_key_volumeup"></div>

[Key](#enum_@globalscope_key) **KEY_VOLUMEUP** = ``4194382``

Volume up key.

<div id="_class_@globalscope_constant_key_mediaplay"></div>

[Key](#enum_@globalscope_key) **KEY_MEDIAPLAY** = ``4194388``

Media play key.

<div id="_class_@globalscope_constant_key_mediastop"></div>

[Key](#enum_@globalscope_key) **KEY_MEDIASTOP** = ``4194389``

Media stop key.

<div id="_class_@globalscope_constant_key_mediaprevious"></div>

[Key](#enum_@globalscope_key) **KEY_MEDIAPREVIOUS** = ``4194390``

Previous song key.

<div id="_class_@globalscope_constant_key_medianext"></div>

[Key](#enum_@globalscope_key) **KEY_MEDIANEXT** = ``4194391``

Next song key.

<div id="_class_@globalscope_constant_key_mediarecord"></div>

[Key](#enum_@globalscope_key) **KEY_MEDIARECORD** = ``4194392``

Media record key.

<div id="_class_@globalscope_constant_key_homepage"></div>

[Key](#enum_@globalscope_key) **KEY_HOMEPAGE** = ``4194393``

Home page key.

<div id="_class_@globalscope_constant_key_favorites"></div>

[Key](#enum_@globalscope_key) **KEY_FAVORITES** = ``4194394``

Favorites key.

<div id="_class_@globalscope_constant_key_search"></div>

[Key](#enum_@globalscope_key) **KEY_SEARCH** = ``4194395``

Search key.

<div id="_class_@globalscope_constant_key_standby"></div>

[Key](#enum_@globalscope_key) **KEY_STANDBY** = ``4194396``

Standby key.

<div id="_class_@globalscope_constant_key_openurl"></div>

[Key](#enum_@globalscope_key) **KEY_OPENURL** = ``4194397``

Open URL / Launch Browser key.

<div id="_class_@globalscope_constant_key_launchmail"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHMAIL** = ``4194398``

Launch Mail key.

<div id="_class_@globalscope_constant_key_launchmedia"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHMEDIA** = ``4194399``

Launch Media key.

<div id="_class_@globalscope_constant_key_launch0"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH0** = ``4194400``

Launch Shortcut 0 key.

<div id="_class_@globalscope_constant_key_launch1"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH1** = ``4194401``

Launch Shortcut 1 key.

<div id="_class_@globalscope_constant_key_launch2"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH2** = ``4194402``

Launch Shortcut 2 key.

<div id="_class_@globalscope_constant_key_launch3"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH3** = ``4194403``

Launch Shortcut 3 key.

<div id="_class_@globalscope_constant_key_launch4"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH4** = ``4194404``

Launch Shortcut 4 key.

<div id="_class_@globalscope_constant_key_launch5"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH5** = ``4194405``

Launch Shortcut 5 key.

<div id="_class_@globalscope_constant_key_launch6"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH6** = ``4194406``

Launch Shortcut 6 key.

<div id="_class_@globalscope_constant_key_launch7"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH7** = ``4194407``

Launch Shortcut 7 key.

<div id="_class_@globalscope_constant_key_launch8"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH8** = ``4194408``

Launch Shortcut 8 key.

<div id="_class_@globalscope_constant_key_launch9"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCH9** = ``4194409``

Launch Shortcut 9 key.

<div id="_class_@globalscope_constant_key_launcha"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHA** = ``4194410``

Launch Shortcut A key.

<div id="_class_@globalscope_constant_key_launchb"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHB** = ``4194411``

Launch Shortcut B key.

<div id="_class_@globalscope_constant_key_launchc"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHC** = ``4194412``

Launch Shortcut C key.

<div id="_class_@globalscope_constant_key_launchd"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHD** = ``4194413``

Launch Shortcut D key.

<div id="_class_@globalscope_constant_key_launche"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHE** = ``4194414``

Launch Shortcut E key.

<div id="_class_@globalscope_constant_key_launchf"></div>

[Key](#enum_@globalscope_key) **KEY_LAUNCHF** = ``4194415``

Launch Shortcut F key.

<div id="_class_@globalscope_constant_key_globe"></div>

[Key](#enum_@globalscope_key) **KEY_GLOBE** = ``4194416``

"Globe" key on Mac / iPad keyboard.

<div id="_class_@globalscope_constant_key_keyboard"></div>

[Key](#enum_@globalscope_key) **KEY_KEYBOARD** = ``4194417``

"On-screen keyboard" key on iPad keyboard.

<div id="_class_@globalscope_constant_key_jis_eisu"></div>

[Key](#enum_@globalscope_key) **KEY_JIS_EISU** = ``4194418``

英数 key on Mac keyboard.

<div id="_class_@globalscope_constant_key_jis_kana"></div>

[Key](#enum_@globalscope_key) **KEY_JIS_KANA** = ``4194419``

かな key on Mac keyboard.

<div id="_class_@globalscope_constant_key_unknown"></div>

[Key](#enum_@globalscope_key) **KEY_UNKNOWN** = ``8388607``

Unknown key.

<div id="_class_@globalscope_constant_key_space"></div>

[Key](#enum_@globalscope_key) **KEY_SPACE** = ``32``

Space key.

<div id="_class_@globalscope_constant_key_exclam"></div>

[Key](#enum_@globalscope_key) **KEY_EXCLAM** = ``33``

! key.

<div id="_class_@globalscope_constant_key_quotedbl"></div>

[Key](#enum_@globalscope_key) **KEY_QUOTEDBL** = ``34``

" key.

<div id="_class_@globalscope_constant_key_numbersign"></div>

[Key](#enum_@globalscope_key) **KEY_NUMBERSIGN** = ``35``

# key.

<div id="_class_@globalscope_constant_key_dollar"></div>

[Key](#enum_@globalscope_key) **KEY_DOLLAR** = ``36``

$ key.

<div id="_class_@globalscope_constant_key_percent"></div>

[Key](#enum_@globalscope_key) **KEY_PERCENT** = ``37``

% key.

<div id="_class_@globalscope_constant_key_ampersand"></div>

[Key](#enum_@globalscope_key) **KEY_AMPERSAND** = ``38``

& key.

<div id="_class_@globalscope_constant_key_apostrophe"></div>

[Key](#enum_@globalscope_key) **KEY_APOSTROPHE** = ``39``

' key.

<div id="_class_@globalscope_constant_key_parenleft"></div>

[Key](#enum_@globalscope_key) **KEY_PARENLEFT** = ``40``

( key.

<div id="_class_@globalscope_constant_key_parenright"></div>

[Key](#enum_@globalscope_key) **KEY_PARENRIGHT** = ``41``

) key.

<div id="_class_@globalscope_constant_key_asterisk"></div>

[Key](#enum_@globalscope_key) **KEY_ASTERISK** = ``42``

\* key.

<div id="_class_@globalscope_constant_key_plus"></div>

[Key](#enum_@globalscope_key) **KEY_PLUS** = ``43``

+ key.

<div id="_class_@globalscope_constant_key_comma"></div>

[Key](#enum_@globalscope_key) **KEY_COMMA** = ``44``

, key.

<div id="_class_@globalscope_constant_key_minus"></div>

[Key](#enum_@globalscope_key) **KEY_MINUS** = ``45``

- key.

<div id="_class_@globalscope_constant_key_period"></div>

[Key](#enum_@globalscope_key) **KEY_PERIOD** = ``46``

. key.

<div id="_class_@globalscope_constant_key_slash"></div>

[Key](#enum_@globalscope_key) **KEY_SLASH** = ``47``

/ key.

<div id="_class_@globalscope_constant_key_0"></div>

[Key](#enum_@globalscope_key) **KEY_0** = ``48``

Number 0 key.

<div id="_class_@globalscope_constant_key_1"></div>

[Key](#enum_@globalscope_key) **KEY_1** = ``49``

Number 1 key.

<div id="_class_@globalscope_constant_key_2"></div>

[Key](#enum_@globalscope_key) **KEY_2** = ``50``

Number 2 key.

<div id="_class_@globalscope_constant_key_3"></div>

[Key](#enum_@globalscope_key) **KEY_3** = ``51``

Number 3 key.

<div id="_class_@globalscope_constant_key_4"></div>

[Key](#enum_@globalscope_key) **KEY_4** = ``52``

Number 4 key.

<div id="_class_@globalscope_constant_key_5"></div>

[Key](#enum_@globalscope_key) **KEY_5** = ``53``

Number 5 key.

<div id="_class_@globalscope_constant_key_6"></div>

[Key](#enum_@globalscope_key) **KEY_6** = ``54``

Number 6 key.

<div id="_class_@globalscope_constant_key_7"></div>

[Key](#enum_@globalscope_key) **KEY_7** = ``55``

Number 7 key.

<div id="_class_@globalscope_constant_key_8"></div>

[Key](#enum_@globalscope_key) **KEY_8** = ``56``

Number 8 key.

<div id="_class_@globalscope_constant_key_9"></div>

[Key](#enum_@globalscope_key) **KEY_9** = ``57``

Number 9 key.

<div id="_class_@globalscope_constant_key_colon"></div>

[Key](#enum_@globalscope_key) **KEY_COLON** = ``58``

: key.

<div id="_class_@globalscope_constant_key_semicolon"></div>

[Key](#enum_@globalscope_key) **KEY_SEMICOLON** = ``59``

; key.

<div id="_class_@globalscope_constant_key_less"></div>

[Key](#enum_@globalscope_key) **KEY_LESS** = ``60``

< key.

<div id="_class_@globalscope_constant_key_equal"></div>

[Key](#enum_@globalscope_key) **KEY_EQUAL** = ``61``

= key.

<div id="_class_@globalscope_constant_key_greater"></div>

[Key](#enum_@globalscope_key) **KEY_GREATER** = ``62``

> key.

<div id="_class_@globalscope_constant_key_question"></div>

[Key](#enum_@globalscope_key) **KEY_QUESTION** = ``63``

? key.

<div id="_class_@globalscope_constant_key_at"></div>

[Key](#enum_@globalscope_key) **KEY_AT** = ``64``

@ key.

<div id="_class_@globalscope_constant_key_a"></div>

[Key](#enum_@globalscope_key) **KEY_A** = ``65``

A key.

<div id="_class_@globalscope_constant_key_b"></div>

[Key](#enum_@globalscope_key) **KEY_B** = ``66``

B key.

<div id="_class_@globalscope_constant_key_c"></div>

[Key](#enum_@globalscope_key) **KEY_C** = ``67``

C key.

<div id="_class_@globalscope_constant_key_d"></div>

[Key](#enum_@globalscope_key) **KEY_D** = ``68``

D key.

<div id="_class_@globalscope_constant_key_e"></div>

[Key](#enum_@globalscope_key) **KEY_E** = ``69``

E key.

<div id="_class_@globalscope_constant_key_f"></div>

[Key](#enum_@globalscope_key) **KEY_F** = ``70``

F key.

<div id="_class_@globalscope_constant_key_g"></div>

[Key](#enum_@globalscope_key) **KEY_G** = ``71``

G key.

<div id="_class_@globalscope_constant_key_h"></div>

[Key](#enum_@globalscope_key) **KEY_H** = ``72``

H key.

<div id="_class_@globalscope_constant_key_i"></div>

[Key](#enum_@globalscope_key) **KEY_I** = ``73``

I key.

<div id="_class_@globalscope_constant_key_j"></div>

[Key](#enum_@globalscope_key) **KEY_J** = ``74``

J key.

<div id="_class_@globalscope_constant_key_k"></div>

[Key](#enum_@globalscope_key) **KEY_K** = ``75``

K key.

<div id="_class_@globalscope_constant_key_l"></div>

[Key](#enum_@globalscope_key) **KEY_L** = ``76``

L key.

<div id="_class_@globalscope_constant_key_m"></div>

[Key](#enum_@globalscope_key) **KEY_M** = ``77``

M key.

<div id="_class_@globalscope_constant_key_n"></div>

[Key](#enum_@globalscope_key) **KEY_N** = ``78``

N key.

<div id="_class_@globalscope_constant_key_o"></div>

[Key](#enum_@globalscope_key) **KEY_O** = ``79``

O key.

<div id="_class_@globalscope_constant_key_p"></div>

[Key](#enum_@globalscope_key) **KEY_P** = ``80``

P key.

<div id="_class_@globalscope_constant_key_q"></div>

[Key](#enum_@globalscope_key) **KEY_Q** = ``81``

Q key.

<div id="_class_@globalscope_constant_key_r"></div>

[Key](#enum_@globalscope_key) **KEY_R** = ``82``

R key.

<div id="_class_@globalscope_constant_key_s"></div>

[Key](#enum_@globalscope_key) **KEY_S** = ``83``

S key.

<div id="_class_@globalscope_constant_key_t"></div>

[Key](#enum_@globalscope_key) **KEY_T** = ``84``

T key.

<div id="_class_@globalscope_constant_key_u"></div>

[Key](#enum_@globalscope_key) **KEY_U** = ``85``

U key.

<div id="_class_@globalscope_constant_key_v"></div>

[Key](#enum_@globalscope_key) **KEY_V** = ``86``

V key.

<div id="_class_@globalscope_constant_key_w"></div>

[Key](#enum_@globalscope_key) **KEY_W** = ``87``

W key.

<div id="_class_@globalscope_constant_key_x"></div>

[Key](#enum_@globalscope_key) **KEY_X** = ``88``

X key.

<div id="_class_@globalscope_constant_key_y"></div>

[Key](#enum_@globalscope_key) **KEY_Y** = ``89``

Y key.

<div id="_class_@globalscope_constant_key_z"></div>

[Key](#enum_@globalscope_key) **KEY_Z** = ``90``

Z key.

<div id="_class_@globalscope_constant_key_bracketleft"></div>

[Key](#enum_@globalscope_key) **KEY_BRACKETLEFT** = ``91``

[ key.

<div id="_class_@globalscope_constant_key_backslash"></div>

[Key](#enum_@globalscope_key) **KEY_BACKSLASH** = ``92``

\\ key.

<div id="_class_@globalscope_constant_key_bracketright"></div>

[Key](#enum_@globalscope_key) **KEY_BRACKETRIGHT** = ``93``

] key.

<div id="_class_@globalscope_constant_key_asciicircum"></div>

[Key](#enum_@globalscope_key) **KEY_ASCIICIRCUM** = ``94``

^ key.

<div id="_class_@globalscope_constant_key_underscore"></div>

[Key](#enum_@globalscope_key) **KEY_UNDERSCORE** = ``95``

\_ key.

<div id="_class_@globalscope_constant_key_quoteleft"></div>

[Key](#enum_@globalscope_key) **KEY_QUOTELEFT** = ``96``

` key.

<div id="_class_@globalscope_constant_key_braceleft"></div>

[Key](#enum_@globalscope_key) **KEY_BRACELEFT** = ``123``

{ key.

<div id="_class_@globalscope_constant_key_bar"></div>

[Key](#enum_@globalscope_key) **KEY_BAR** = ``124``

| key.

<div id="_class_@globalscope_constant_key_braceright"></div>

[Key](#enum_@globalscope_key) **KEY_BRACERIGHT** = ``125``

} key.

<div id="_class_@globalscope_constant_key_asciitilde"></div>

[Key](#enum_@globalscope_key) **KEY_ASCIITILDE** = ``126``

~ key.

<div id="_class_@globalscope_constant_key_yen"></div>

[Key](#enum_@globalscope_key) **KEY_YEN** = ``165``

¥ key.

<div id="_class_@globalscope_constant_key_section"></div>

[Key](#enum_@globalscope_key) **KEY_SECTION** = ``167``

§ key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_keymodifiermask"></div>

flags **KeyModifierMask**: <div id="enum_@globalscope_keymodifiermask"></div>

<div id="_class_@globalscope_constant_key_code_mask"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_CODE_MASK** = ``8388607``

Key Code mask.

<div id="_class_@globalscope_constant_key_modifier_mask"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MODIFIER_MASK** = ``532676608``

Modifier key mask.

<div id="_class_@globalscope_constant_key_mask_cmd_or_ctrl"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_CMD_OR_CTRL** = ``16777216``

Automatically remapped to [`KEY_META`](class_@globalscope.md#class_@globalscope_constant_key_meta) on macOS and [`KEY_CTRL`](class_@globalscope.md#class_@globalscope_constant_key_ctrl) on other platforms, this mask is never set in the actual events, and should be used for key mapping only.

<div id="_class_@globalscope_constant_key_mask_shift"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_SHIFT** = ``33554432``

Shift key mask.

<div id="_class_@globalscope_constant_key_mask_alt"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_ALT** = ``67108864``

Alt or Option (on macOS) key mask.

<div id="_class_@globalscope_constant_key_mask_meta"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_META** = ``134217728``

Command (on macOS) or Meta/Windows key mask.

<div id="_class_@globalscope_constant_key_mask_ctrl"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_CTRL** = ``268435456``

Control key mask.

<div id="_class_@globalscope_constant_key_mask_kpad"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_KPAD** = ``536870912``

Keypad key mask.

<div id="_class_@globalscope_constant_key_mask_group_switch"></div>

[KeyModifierMask](#enum_@globalscope_keymodifiermask) **KEY_MASK_GROUP_SWITCH** = ``1073741824``

Group Switch key mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_keylocation"></div>

enum **KeyLocation**: <div id="enum_@globalscope_keylocation"></div>

<div id="_class_@globalscope_constant_key_location_unspecified"></div>

[KeyLocation](#enum_@globalscope_keylocation) **KEY_LOCATION_UNSPECIFIED** = ``0``

Used for keys which only appear once, or when a comparison doesn't need to differentiate the `LEFT` and `RIGHT` versions.

For example, when using [`InputEvent.is_match`](class_inputevent.md#class_inputevent_method_is_match), an event which has [`KEY_LOCATION_UNSPECIFIED`](class_@globalscope.md#class_@globalscope_constant_key_location_unspecified) will match any [KeyLocation](#enum_@globalscope_keylocation) on the passed event.

<div id="_class_@globalscope_constant_key_location_left"></div>

[KeyLocation](#enum_@globalscope_keylocation) **KEY_LOCATION_LEFT** = ``1``

A key which is to the left of its twin.

<div id="_class_@globalscope_constant_key_location_right"></div>

[KeyLocation](#enum_@globalscope_keylocation) **KEY_LOCATION_RIGHT** = ``2``

A key which is to the right of its twin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_mousebutton"></div>

enum **MouseButton**: <div id="enum_@globalscope_mousebutton"></div>

<div id="_class_@globalscope_constant_mouse_button_none"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_NONE** = ``0``

Enum value which doesn't correspond to any mouse button. This is used to initialize [MouseButton](#enum_@globalscope_mousebutton) properties with a generic state.

<div id="_class_@globalscope_constant_mouse_button_left"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_LEFT** = ``1``

Primary mouse button, usually assigned to the left button.

<div id="_class_@globalscope_constant_mouse_button_right"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_RIGHT** = ``2``

Secondary mouse button, usually assigned to the right button.

<div id="_class_@globalscope_constant_mouse_button_middle"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_MIDDLE** = ``3``

Middle mouse button.

<div id="_class_@globalscope_constant_mouse_button_wheel_up"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_WHEEL_UP** = ``4``

Mouse wheel scrolling up.

<div id="_class_@globalscope_constant_mouse_button_wheel_down"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_WHEEL_DOWN** = ``5``

Mouse wheel scrolling down.

<div id="_class_@globalscope_constant_mouse_button_wheel_left"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_WHEEL_LEFT** = ``6``

Mouse wheel left button (only present on some mice).

<div id="_class_@globalscope_constant_mouse_button_wheel_right"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_WHEEL_RIGHT** = ``7``

Mouse wheel right button (only present on some mice).

<div id="_class_@globalscope_constant_mouse_button_xbutton1"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_XBUTTON1** = ``8``

Extra mouse button 1. This is sometimes present, usually to the sides of the mouse.

<div id="_class_@globalscope_constant_mouse_button_xbutton2"></div>

[MouseButton](#enum_@globalscope_mousebutton) **MOUSE_BUTTON_XBUTTON2** = ``9``

Extra mouse button 2. This is sometimes present, usually to the sides of the mouse.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_mousebuttonmask"></div>

flags **MouseButtonMask**: <div id="enum_@globalscope_mousebuttonmask"></div>

<div id="_class_@globalscope_constant_mouse_button_mask_left"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **MOUSE_BUTTON_MASK_LEFT** = ``1``

Primary mouse button mask, usually for the left button.

<div id="_class_@globalscope_constant_mouse_button_mask_right"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **MOUSE_BUTTON_MASK_RIGHT** = ``2``

Secondary mouse button mask, usually for the right button.

<div id="_class_@globalscope_constant_mouse_button_mask_middle"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **MOUSE_BUTTON_MASK_MIDDLE** = ``4``

Middle mouse button mask.

<div id="_class_@globalscope_constant_mouse_button_mask_mb_xbutton1"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **MOUSE_BUTTON_MASK_MB_XBUTTON1** = ``128``

Extra mouse button 1 mask.

<div id="_class_@globalscope_constant_mouse_button_mask_mb_xbutton2"></div>

[MouseButtonMask](#enum_@globalscope_mousebuttonmask) **MOUSE_BUTTON_MASK_MB_XBUTTON2** = ``256``

Extra mouse button 2 mask.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_joybutton"></div>

enum **JoyButton**: <div id="enum_@globalscope_joybutton"></div>

<div id="_class_@globalscope_constant_joy_button_invalid"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_INVALID** = ``-1``

An invalid game controller button.

<div id="_class_@globalscope_constant_joy_button_a"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_A** = ``0``

Game controller SDL button A. Corresponds to the bottom action button: Sony Cross, Xbox A, Nintendo B.

<div id="_class_@globalscope_constant_joy_button_b"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_B** = ``1``

Game controller SDL button B. Corresponds to the right action button: Sony Circle, Xbox B, Nintendo A.

<div id="_class_@globalscope_constant_joy_button_x"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_X** = ``2``

Game controller SDL button X. Corresponds to the left action button: Sony Square, Xbox X, Nintendo Y.

<div id="_class_@globalscope_constant_joy_button_y"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_Y** = ``3``

Game controller SDL button Y. Corresponds to the top action button: Sony Triangle, Xbox Y, Nintendo X.

<div id="_class_@globalscope_constant_joy_button_back"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_BACK** = ``4``

Game controller SDL back button. Corresponds to the Sony Select, Xbox Back, Nintendo - button.

<div id="_class_@globalscope_constant_joy_button_guide"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_GUIDE** = ``5``

Game controller SDL guide button. Corresponds to the Sony PS, Xbox Home button.

<div id="_class_@globalscope_constant_joy_button_start"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_START** = ``6``

Game controller SDL start button. Corresponds to the Sony Options, Xbox Menu, Nintendo + button.

<div id="_class_@globalscope_constant_joy_button_left_stick"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_LEFT_STICK** = ``7``

Game controller SDL left stick button. Corresponds to the Sony L3, Xbox L/LS button.

<div id="_class_@globalscope_constant_joy_button_right_stick"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_RIGHT_STICK** = ``8``

Game controller SDL right stick button. Corresponds to the Sony R3, Xbox R/RS button.

<div id="_class_@globalscope_constant_joy_button_left_shoulder"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_LEFT_SHOULDER** = ``9``

Game controller SDL left shoulder button. Corresponds to the Sony L1, Xbox LB button.

<div id="_class_@globalscope_constant_joy_button_right_shoulder"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_RIGHT_SHOULDER** = ``10``

Game controller SDL right shoulder button. Corresponds to the Sony R1, Xbox RB button.

<div id="_class_@globalscope_constant_joy_button_dpad_up"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_DPAD_UP** = ``11``

Game controller D-pad up button.

<div id="_class_@globalscope_constant_joy_button_dpad_down"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_DPAD_DOWN** = ``12``

Game controller D-pad down button.

<div id="_class_@globalscope_constant_joy_button_dpad_left"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_DPAD_LEFT** = ``13``

Game controller D-pad left button.

<div id="_class_@globalscope_constant_joy_button_dpad_right"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_DPAD_RIGHT** = ``14``

Game controller D-pad right button.

<div id="_class_@globalscope_constant_joy_button_misc1"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_MISC1** = ``15``

Game controller SDL miscellaneous button. Corresponds to Xbox share button, PS5 microphone button, Nintendo Switch capture button.

<div id="_class_@globalscope_constant_joy_button_paddle1"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_PADDLE1** = ``16``

Game controller SDL paddle 1 button.

<div id="_class_@globalscope_constant_joy_button_paddle2"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_PADDLE2** = ``17``

Game controller SDL paddle 2 button.

<div id="_class_@globalscope_constant_joy_button_paddle3"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_PADDLE3** = ``18``

Game controller SDL paddle 3 button.

<div id="_class_@globalscope_constant_joy_button_paddle4"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_PADDLE4** = ``19``

Game controller SDL paddle 4 button.

<div id="_class_@globalscope_constant_joy_button_touchpad"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_TOUCHPAD** = ``20``

Game controller SDL touchpad button.

<div id="_class_@globalscope_constant_joy_button_sdl_max"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_SDL_MAX** = ``21``

The number of SDL game controller buttons.

<div id="_class_@globalscope_constant_joy_button_max"></div>

[JoyButton](#enum_@globalscope_joybutton) **JOY_BUTTON_MAX** = ``128``

The maximum number of game controller buttons supported by the engine. The actual limit may be lower on specific platforms:

- **Android:** Up to 36 buttons.

- **Linux:** Up to 80 buttons.

- **Windows** and **macOS:** Up to 128 buttons.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_joyaxis"></div>

enum **JoyAxis**: <div id="enum_@globalscope_joyaxis"></div>

<div id="_class_@globalscope_constant_joy_axis_invalid"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_INVALID** = ``-1``

An invalid game controller axis.

<div id="_class_@globalscope_constant_joy_axis_left_x"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_LEFT_X** = ``0``

Game controller left joystick x-axis.

<div id="_class_@globalscope_constant_joy_axis_left_y"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_LEFT_Y** = ``1``

Game controller left joystick y-axis.

<div id="_class_@globalscope_constant_joy_axis_right_x"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_RIGHT_X** = ``2``

Game controller right joystick x-axis.

<div id="_class_@globalscope_constant_joy_axis_right_y"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_RIGHT_Y** = ``3``

Game controller right joystick y-axis.

<div id="_class_@globalscope_constant_joy_axis_trigger_left"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_TRIGGER_LEFT** = ``4``

Game controller left trigger axis.

<div id="_class_@globalscope_constant_joy_axis_trigger_right"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_TRIGGER_RIGHT** = ``5``

Game controller right trigger axis.

<div id="_class_@globalscope_constant_joy_axis_sdl_max"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_SDL_MAX** = ``6``

The number of SDL game controller axes.

<div id="_class_@globalscope_constant_joy_axis_max"></div>

[JoyAxis](#enum_@globalscope_joyaxis) **JOY_AXIS_MAX** = ``10``

The maximum number of game controller axes: OpenVR supports up to 5 Joysticks making a total of 10 axes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_midimessage"></div>

enum **MIDIMessage**: <div id="enum_@globalscope_midimessage"></div>

<div id="_class_@globalscope_constant_midi_message_none"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_NONE** = ``0``

Does not correspond to any MIDI message. This is the default value of [`InputEventMIDI.message`](class_inputeventmidi.md#class_inputeventmidi_property_message).

<div id="_class_@globalscope_constant_midi_message_note_off"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_NOTE_OFF** = ``8``

MIDI message sent when a note is released.

 **Note:** Not all MIDI devices send this message; some may send [`MIDI_MESSAGE_NOTE_ON`](class_@globalscope.md#class_@globalscope_constant_midi_message_note_on) with [`InputEventMIDI.velocity`](class_inputeventmidi.md#class_inputeventmidi_property_velocity) set to `0`.

<div id="_class_@globalscope_constant_midi_message_note_on"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_NOTE_ON** = ``9``

MIDI message sent when a note is pressed.

<div id="_class_@globalscope_constant_midi_message_aftertouch"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_AFTERTOUCH** = ``10``

MIDI message sent to indicate a change in pressure while a note is being pressed down, also called aftertouch.

<div id="_class_@globalscope_constant_midi_message_control_change"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_CONTROL_CHANGE** = ``11``

MIDI message sent when a controller value changes. In a MIDI device, a controller is any input that doesn't play notes. These may include sliders for volume, balance, and panning, as well as switches and pedals. See the [*General MIDI specification*](https://en.wikipedia.org/wiki/General_MIDI#Controller_events) for a small list.

<div id="_class_@globalscope_constant_midi_message_program_change"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_PROGRAM_CHANGE** = ``12``

MIDI message sent when the MIDI device changes its current instrument (also called *program* or *preset*).

<div id="_class_@globalscope_constant_midi_message_channel_pressure"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_CHANNEL_PRESSURE** = ``13``

MIDI message sent to indicate a change in pressure for the whole channel. Some MIDI devices may send this instead of [`MIDI_MESSAGE_AFTERTOUCH`](class_@globalscope.md#class_@globalscope_constant_midi_message_aftertouch).

<div id="_class_@globalscope_constant_midi_message_pitch_bend"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_PITCH_BEND** = ``14``

MIDI message sent when the value of the pitch bender changes, usually a wheel on the MIDI device.

<div id="_class_@globalscope_constant_midi_message_system_exclusive"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_SYSTEM_EXCLUSIVE** = ``240``

MIDI system exclusive (SysEx) message. This type of message is not standardized and it's highly dependent on the MIDI device sending it.

 **Note:** Getting this message's data from [`InputEventMIDI`](class_inputeventmidi.md) is not implemented.

<div id="_class_@globalscope_constant_midi_message_quarter_frame"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_QUARTER_FRAME** = ``241``

MIDI message sent every quarter frame to keep connected MIDI devices synchronized. Related to [`MIDI_MESSAGE_TIMING_CLOCK`](class_@globalscope.md#class_@globalscope_constant_midi_message_timing_clock).

 **Note:** Getting this message's data from [`InputEventMIDI`](class_inputeventmidi.md) is not implemented.

<div id="_class_@globalscope_constant_midi_message_song_position_pointer"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_SONG_POSITION_POINTER** = ``242``

MIDI message sent to jump onto a new position in the current sequence or song.

 **Note:** Getting this message's data from [`InputEventMIDI`](class_inputeventmidi.md) is not implemented.

<div id="_class_@globalscope_constant_midi_message_song_select"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_SONG_SELECT** = ``243``

MIDI message sent to select a sequence or song to play.

 **Note:** Getting this message's data from [`InputEventMIDI`](class_inputeventmidi.md) is not implemented.

<div id="_class_@globalscope_constant_midi_message_tune_request"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_TUNE_REQUEST** = ``246``

MIDI message sent to request a tuning calibration. Used on analog synthesizers. Most modern MIDI devices do not need this message.

<div id="_class_@globalscope_constant_midi_message_timing_clock"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_TIMING_CLOCK** = ``248``

MIDI message sent 24 times after [`MIDI_MESSAGE_QUARTER_FRAME`](class_@globalscope.md#class_@globalscope_constant_midi_message_quarter_frame), to keep connected MIDI devices synchronized.

<div id="_class_@globalscope_constant_midi_message_start"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_START** = ``250``

MIDI message sent to start the current sequence or song from the beginning.

<div id="_class_@globalscope_constant_midi_message_continue"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_CONTINUE** = ``251``

MIDI message sent to resume from the point the current sequence or song was paused.

<div id="_class_@globalscope_constant_midi_message_stop"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_STOP** = ``252``

MIDI message sent to pause the current sequence or song.

<div id="_class_@globalscope_constant_midi_message_active_sensing"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_ACTIVE_SENSING** = ``254``

MIDI message sent repeatedly while the MIDI device is idle, to tell the receiver that the connection is alive. Most MIDI devices do not send this message.

<div id="_class_@globalscope_constant_midi_message_system_reset"></div>

[MIDIMessage](#enum_@globalscope_midimessage) **MIDI_MESSAGE_SYSTEM_RESET** = ``255``

MIDI message sent to reset a MIDI device to its default state, as if it was just turned on. It should not be sent when the MIDI device is being turned on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_error"></div>

enum **Error**: <div id="enum_@globalscope_error"></div>

<div id="_class_@globalscope_constant_ok"></div>

[Error](#enum_@globalscope_error) **OK** = ``0``

Methods that return [Error](#enum_@globalscope_error) return [`OK`](class_@globalscope.md#class_@globalscope_constant_ok) when no error occurred.

Since [`OK`](class_@globalscope.md#class_@globalscope_constant_ok) has value `0`, and all other error constants are positive integers, it can also be used in boolean checks.

```

    var error = method_that_returns_error()
    if error != OK:
        printerr("Failure!")
    
    # Or, alternatively:
    if error:
        printerr("Still failing!")
```

 **Note:** Many functions do not return an error code, but will print error messages to standard output.



<div id="_class_@globalscope_constant_failed"></div>

[Error](#enum_@globalscope_error) **FAILED** = ``1``

Generic error.

<div id="_class_@globalscope_constant_err_unavailable"></div>

[Error](#enum_@globalscope_error) **ERR_UNAVAILABLE** = ``2``

Unavailable error.

<div id="_class_@globalscope_constant_err_unconfigured"></div>

[Error](#enum_@globalscope_error) **ERR_UNCONFIGURED** = ``3``

Unconfigured error.

<div id="_class_@globalscope_constant_err_unauthorized"></div>

[Error](#enum_@globalscope_error) **ERR_UNAUTHORIZED** = ``4``

Unauthorized error.

<div id="_class_@globalscope_constant_err_parameter_range_error"></div>

[Error](#enum_@globalscope_error) **ERR_PARAMETER_RANGE_ERROR** = ``5``

Parameter range error.

<div id="_class_@globalscope_constant_err_out_of_memory"></div>

[Error](#enum_@globalscope_error) **ERR_OUT_OF_MEMORY** = ``6``

Out of memory (OOM) error.

<div id="_class_@globalscope_constant_err_file_not_found"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_NOT_FOUND** = ``7``

File: Not found error.

<div id="_class_@globalscope_constant_err_file_bad_drive"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_BAD_DRIVE** = ``8``

File: Bad drive error.

<div id="_class_@globalscope_constant_err_file_bad_path"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_BAD_PATH** = ``9``

File: Bad path error.

<div id="_class_@globalscope_constant_err_file_no_permission"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_NO_PERMISSION** = ``10``

File: No permission error.

<div id="_class_@globalscope_constant_err_file_already_in_use"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_ALREADY_IN_USE** = ``11``

File: Already in use error.

<div id="_class_@globalscope_constant_err_file_cant_open"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_CANT_OPEN** = ``12``

File: Can't open error.

<div id="_class_@globalscope_constant_err_file_cant_write"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_CANT_WRITE** = ``13``

File: Can't write error.

<div id="_class_@globalscope_constant_err_file_cant_read"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_CANT_READ** = ``14``

File: Can't read error.

<div id="_class_@globalscope_constant_err_file_unrecognized"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_UNRECOGNIZED** = ``15``

File: Unrecognized error.

<div id="_class_@globalscope_constant_err_file_corrupt"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_CORRUPT** = ``16``

File: Corrupt error.

<div id="_class_@globalscope_constant_err_file_missing_dependencies"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_MISSING_DEPENDENCIES** = ``17``

File: Missing dependencies error.

<div id="_class_@globalscope_constant_err_file_eof"></div>

[Error](#enum_@globalscope_error) **ERR_FILE_EOF** = ``18``

File: End of file (EOF) error.

<div id="_class_@globalscope_constant_err_cant_open"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_OPEN** = ``19``

Can't open error.

<div id="_class_@globalscope_constant_err_cant_create"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_CREATE** = ``20``

Can't create error.

<div id="_class_@globalscope_constant_err_query_failed"></div>

[Error](#enum_@globalscope_error) **ERR_QUERY_FAILED** = ``21``

Query failed error.

<div id="_class_@globalscope_constant_err_already_in_use"></div>

[Error](#enum_@globalscope_error) **ERR_ALREADY_IN_USE** = ``22``

Already in use error.

<div id="_class_@globalscope_constant_err_locked"></div>

[Error](#enum_@globalscope_error) **ERR_LOCKED** = ``23``

Locked error.

<div id="_class_@globalscope_constant_err_timeout"></div>

[Error](#enum_@globalscope_error) **ERR_TIMEOUT** = ``24``

Timeout error.

<div id="_class_@globalscope_constant_err_cant_connect"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_CONNECT** = ``25``

Can't connect error.

<div id="_class_@globalscope_constant_err_cant_resolve"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_RESOLVE** = ``26``

Can't resolve error.

<div id="_class_@globalscope_constant_err_connection_error"></div>

[Error](#enum_@globalscope_error) **ERR_CONNECTION_ERROR** = ``27``

Connection error.

<div id="_class_@globalscope_constant_err_cant_acquire_resource"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_ACQUIRE_RESOURCE** = ``28``

Can't acquire resource error.

<div id="_class_@globalscope_constant_err_cant_fork"></div>

[Error](#enum_@globalscope_error) **ERR_CANT_FORK** = ``29``

Can't fork process error.

<div id="_class_@globalscope_constant_err_invalid_data"></div>

[Error](#enum_@globalscope_error) **ERR_INVALID_DATA** = ``30``

Invalid data error.

<div id="_class_@globalscope_constant_err_invalid_parameter"></div>

[Error](#enum_@globalscope_error) **ERR_INVALID_PARAMETER** = ``31``

Invalid parameter error.

<div id="_class_@globalscope_constant_err_already_exists"></div>

[Error](#enum_@globalscope_error) **ERR_ALREADY_EXISTS** = ``32``

Already exists error.

<div id="_class_@globalscope_constant_err_does_not_exist"></div>

[Error](#enum_@globalscope_error) **ERR_DOES_NOT_EXIST** = ``33``

Does not exist error.

<div id="_class_@globalscope_constant_err_database_cant_read"></div>

[Error](#enum_@globalscope_error) **ERR_DATABASE_CANT_READ** = ``34``

Database: Read error.

<div id="_class_@globalscope_constant_err_database_cant_write"></div>

[Error](#enum_@globalscope_error) **ERR_DATABASE_CANT_WRITE** = ``35``

Database: Write error.

<div id="_class_@globalscope_constant_err_compilation_failed"></div>

[Error](#enum_@globalscope_error) **ERR_COMPILATION_FAILED** = ``36``

Compilation failed error.

<div id="_class_@globalscope_constant_err_method_not_found"></div>

[Error](#enum_@globalscope_error) **ERR_METHOD_NOT_FOUND** = ``37``

Method not found error.

<div id="_class_@globalscope_constant_err_link_failed"></div>

[Error](#enum_@globalscope_error) **ERR_LINK_FAILED** = ``38``

Linking failed error.

<div id="_class_@globalscope_constant_err_script_failed"></div>

[Error](#enum_@globalscope_error) **ERR_SCRIPT_FAILED** = ``39``

Script failed error.

<div id="_class_@globalscope_constant_err_cyclic_link"></div>

[Error](#enum_@globalscope_error) **ERR_CYCLIC_LINK** = ``40``

Cycling link (import cycle) error.

<div id="_class_@globalscope_constant_err_invalid_declaration"></div>

[Error](#enum_@globalscope_error) **ERR_INVALID_DECLARATION** = ``41``

Invalid declaration error.

<div id="_class_@globalscope_constant_err_duplicate_symbol"></div>

[Error](#enum_@globalscope_error) **ERR_DUPLICATE_SYMBOL** = ``42``

Duplicate symbol error.

<div id="_class_@globalscope_constant_err_parse_error"></div>

[Error](#enum_@globalscope_error) **ERR_PARSE_ERROR** = ``43``

Parse error.

<div id="_class_@globalscope_constant_err_busy"></div>

[Error](#enum_@globalscope_error) **ERR_BUSY** = ``44``

Busy error.

<div id="_class_@globalscope_constant_err_skip"></div>

[Error](#enum_@globalscope_error) **ERR_SKIP** = ``45``

Skip error.

<div id="_class_@globalscope_constant_err_help"></div>

[Error](#enum_@globalscope_error) **ERR_HELP** = ``46``

Help error. Used internally when passing `--version` or `--help` as executable options.

<div id="_class_@globalscope_constant_err_bug"></div>

[Error](#enum_@globalscope_error) **ERR_BUG** = ``47``

Bug error, caused by an implementation issue in the method.

 **Note:** If a built-in method returns this code, please open an issue on [*the GitHub Issue Tracker*](https://github.com/godotengine/godot/issues).

<div id="_class_@globalscope_constant_err_printer_on_fire"></div>

[Error](#enum_@globalscope_error) **ERR_PRINTER_ON_FIRE** = ``48``

Printer on fire error (This is an easter egg, no built-in methods return this error code).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_propertyhint"></div>

enum **PropertyHint**: <div id="enum_@globalscope_propertyhint"></div>

<div id="_class_@globalscope_constant_property_hint_none"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_NONE** = ``0``

The property has no hint for the editor.

<div id="_class_@globalscope_constant_property_hint_range"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_RANGE** = ``1``

Hints that an [`int`](class_int.md) or [`float`](class_float.md) property should be within a range specified via the hint string `"min,max"` or `"min,max,step"`. The hint string can optionally include `"or_greater"` and/or `"or_less"` to allow manual input going respectively above the max or below the min values.

 **Example:** `"-360,360,1,or_greater,or_less"`.

Additionally, other keywords can be included: `"exp"` for exponential range editing, `"radians_as_degrees"` for editing radian angles in degrees (the range values are also in degrees), `"degrees"` to hint at an angle and `"hide_slider"` to hide the slider.

<div id="_class_@globalscope_constant_property_hint_enum"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_ENUM** = ``2``

Hints that an [`int`](class_int.md) or [`String`](class_string.md) property is an enumerated value to pick in a list specified via a hint string.

The hint string is a comma separated list of names such as `"Hello,Something,Else"`. Whitespaces are **not** removed from either end of a name. For integer properties, the first name in the list has value 0, the next 1, and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"Zero,One,Three:3,Four,Six:6"`.

<div id="_class_@globalscope_constant_property_hint_enum_suggestion"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_ENUM_SUGGESTION** = ``3``

Hints that a [`String`](class_string.md) property can be an enumerated value to pick in a list specified via a hint string such as `"Hello,Something,Else"`.

Unlike [`PROPERTY_HINT_ENUM`](class_@globalscope.md#class_@globalscope_constant_property_hint_enum), a property with this hint still accepts arbitrary values and can be empty. The list of values serves to suggest possible values.

<div id="_class_@globalscope_constant_property_hint_exp_easing"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_EXP_EASING** = ``4``

Hints that a [`float`](class_float.md) property should be edited via an exponential easing function. The hint string can include `"attenuation"` to flip the curve horizontally and/or `"positive_only"` to exclude in/out easing and limit values to be greater than or equal to zero.

<div id="_class_@globalscope_constant_property_hint_link"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LINK** = ``5``

Hints that a vector property should allow its components to be linked. For example, this allows [`Vector2.x`](class_vector2.md#class_vector2_property_x) and [`Vector2.y`](class_vector2.md#class_vector2_property_y) to be edited together.

<div id="_class_@globalscope_constant_property_hint_flags"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_FLAGS** = ``6``

Hints that an [`int`](class_int.md) property is a bitmask with named bit flags.

The hint string is a comma separated list of names such as `"Bit0,Bit1,Bit2,Bit3"`. Whitespaces are **not** removed from either end of a name. The first name in the list has value 1, the next 2, then 4, 8, 16 and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"A:4,B:8,C:16"`. You can also combine several flags (`"A:4,B:8,AB:12,C:16"`).

 **Note:** A flag value must be at least `1` and at most `2 ** 32 - 1`.

 **Note:** Unlike [`PROPERTY_HINT_ENUM`](class_@globalscope.md#class_@globalscope_constant_property_hint_enum), the previous explicit value is not taken into account. For the hint `"A:16,B,C"`, A is 16, B is 2, C is 4.

<div id="_class_@globalscope_constant_property_hint_layers_2d_render"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_2D_RENDER** = ``7``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 2D render layers.

<div id="_class_@globalscope_constant_property_hint_layers_2d_physics"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_2D_PHYSICS** = ``8``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 2D physics layers.

<div id="_class_@globalscope_constant_property_hint_layers_2d_navigation"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_2D_NAVIGATION** = ``9``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 2D navigation layers.

<div id="_class_@globalscope_constant_property_hint_layers_3d_render"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_3D_RENDER** = ``10``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 3D render layers.

<div id="_class_@globalscope_constant_property_hint_layers_3d_physics"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_3D_PHYSICS** = ``11``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 3D physics layers.

<div id="_class_@globalscope_constant_property_hint_layers_3d_navigation"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_3D_NAVIGATION** = ``12``

Hints that an [`int`](class_int.md) property is a bitmask using the optionally named 3D navigation layers.

<div id="_class_@globalscope_constant_property_hint_layers_avoidance"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LAYERS_AVOIDANCE** = ``37``

Hints that an integer property is a bitmask using the optionally named avoidance layers.

<div id="_class_@globalscope_constant_property_hint_file"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_FILE** = ``13``

Hints that a [`String`](class_string.md) property is a path to a file. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`.

<div id="_class_@globalscope_constant_property_hint_dir"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_DIR** = ``14``

Hints that a [`String`](class_string.md) property is a path to a directory. Editing it will show a file dialog for picking the path.

<div id="_class_@globalscope_constant_property_hint_global_file"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_GLOBAL_FILE** = ``15``

Hints that a [`String`](class_string.md) property is an absolute path to a file outside the project folder. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards, like `"*.png,*.jpg"`.

<div id="_class_@globalscope_constant_property_hint_global_dir"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_GLOBAL_DIR** = ``16``

Hints that a [`String`](class_string.md) property is an absolute path to a directory outside the project folder. Editing it will show a file dialog for picking the path.

<div id="_class_@globalscope_constant_property_hint_resource_type"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_RESOURCE_TYPE** = ``17``

Hints that a property is an instance of a [`Resource`](class_resource.md)-derived type, optionally specified via the hint string (e.g. `"Texture2D"`). Editing it will show a popup menu of valid resource types to instantiate.

<div id="_class_@globalscope_constant_property_hint_multiline_text"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_MULTILINE_TEXT** = ``18``

Hints that a [`String`](class_string.md) property is text with line breaks. Editing it will show a text input field where line breaks can be typed.

<div id="_class_@globalscope_constant_property_hint_expression"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_EXPRESSION** = ``19``

Hints that a [`String`](class_string.md) property is an [`Expression`](class_expression.md).

<div id="_class_@globalscope_constant_property_hint_placeholder_text"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_PLACEHOLDER_TEXT** = ``20``

Hints that a [`String`](class_string.md) property should show a placeholder text on its input field, if empty. The hint string is the placeholder text to use.

<div id="_class_@globalscope_constant_property_hint_color_no_alpha"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_COLOR_NO_ALPHA** = ``21``

Hints that a [`Color`](class_color.md) property should be edited without affecting its transparency ([`Color.a`](class_color.md#class_color_property_a) is not editable).

<div id="_class_@globalscope_constant_property_hint_object_id"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_OBJECT_ID** = ``22``

Hints that the property's value is an object encoded as object ID, with its type specified in the hint string. Used by the debugger.

<div id="_class_@globalscope_constant_property_hint_type_string"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_TYPE_STRING** = ``23``

If a property is [`String`](class_string.md), hints that the property represents a particular type (class). This allows to select a type from the create dialog. The property will store the selected type as a string.

If a property is [`Array`](class_array.md), hints the editor how to show elements. The `hint_string` must encode nested types using `":"` and `"/"`.



```gdscript

    # Array of elem_type.
    hint_string = "%d:" % [elem_type]
    hint_string = "%d/%d:%s" % [elem_type, elem_hint, elem_hint_string]
    # Two-dimensional array of elem_type (array of arrays of elem_type).
    hint_string = "%d:%d:" % [TYPE_ARRAY, elem_type]
    hint_string = "%d:%d/%d:%s" % [TYPE_ARRAY, elem_type, elem_hint, elem_hint_string]
    # Three-dimensional array of elem_type (array of arrays of arrays of elem_type).
    hint_string = "%d:%d:%d:" % [TYPE_ARRAY, TYPE_ARRAY, elem_type]
    hint_string = "%d:%d:%d/%d:%s" % [TYPE_ARRAY, TYPE_ARRAY, elem_type, elem_hint, elem_hint_string]
```

```csharp

    // Array of elemType.
    hintString = $"{elemType:D}:";
    hintString = $"{elemType:}/{elemHint:D}:{elemHintString}";
    // Two-dimensional array of elemType (array of arrays of elemType).
    hintString = $"{Variant.Type.Array:D}:{elemType:D}:";
    hintString = $"{Variant.Type.Array:D}:{elemType:D}/{elemHint:D}:{elemHintString}";
    // Three-dimensional array of elemType (array of arrays of arrays of elemType).
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.Array:D}:{elemType:D}:";
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.Array:D}:{elemType:D}/{elemHint:D}:{elemHintString}";
```



 **Examples:** 



```gdscript

    hint_string = "%d:" % [TYPE_INT] # Array of integers.
    hint_string = "%d/%d:1,10,1" % [TYPE_INT, PROPERTY_HINT_RANGE] # Array of integers (in range from 1 to 10).
    hint_string = "%d/%d:Zero,One,Two" % [TYPE_INT, PROPERTY_HINT_ENUM] # Array of integers (an enum).
    hint_string = "%d/%d:Zero,One,Three:3,Six:6" % [TYPE_INT, PROPERTY_HINT_ENUM] # Array of integers (an enum).
    hint_string = "%d/%d:*.png" % [TYPE_STRING, PROPERTY_HINT_FILE] # Array of strings (file paths).
    hint_string = "%d/%d:Texture2D" % [TYPE_OBJECT, PROPERTY_HINT_RESOURCE_TYPE] # Array of textures.
    
    hint_string = "%d:%d:" % [TYPE_ARRAY, TYPE_FLOAT] # Two-dimensional array of floats.
    hint_string = "%d:%d/%d:" % [TYPE_ARRAY, TYPE_STRING, PROPERTY_HINT_MULTILINE_TEXT] # Two-dimensional array of multiline strings.
    hint_string = "%d:%d/%d:-1,1,0.1" % [TYPE_ARRAY, TYPE_FLOAT, PROPERTY_HINT_RANGE] # Two-dimensional array of floats (in range from -1 to 1).
    hint_string = "%d:%d/%d:Texture2D" % [TYPE_ARRAY, TYPE_OBJECT, PROPERTY_HINT_RESOURCE_TYPE] # Two-dimensional array of textures.
```

```csharp

    hintString = $"{Variant.Type.Int:D}/{PropertyHint.Range:D}:1,10,1"; // Array of integers (in range from 1 to 10).
    hintString = $"{Variant.Type.Int:D}/{PropertyHint.Enum:D}:Zero,One,Two"; // Array of integers (an enum).
    hintString = $"{Variant.Type.Int:D}/{PropertyHint.Enum:D}:Zero,One,Three:3,Six:6"; // Array of integers (an enum).
    hintString = $"{Variant.Type.String:D}/{PropertyHint.File:D}:*.png"; // Array of strings (file paths).
    hintString = $"{Variant.Type.Object:D}/{PropertyHint.ResourceType:D}:Texture2D"; // Array of textures.
    
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.Float:D}:"; // Two-dimensional array of floats.
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.String:D}/{PropertyHint.MultilineText:D}:"; // Two-dimensional array of multiline strings.
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.Float:D}/{PropertyHint.Range:D}:-1,1,0.1"; // Two-dimensional array of floats (in range from -1 to 1).
    hintString = $"{Variant.Type.Array:D}:{Variant.Type.Object:D}/{PropertyHint.ResourceType:D}:Texture2D"; // Two-dimensional array of textures.
```



 **Note:** The trailing colon is required for properly detecting built-in types.









<div id="_class_@globalscope_constant_property_hint_node_path_to_edited_node"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE** = ``24``

**已弃用：** This hint is not used by the engine.



<div id="_class_@globalscope_constant_property_hint_object_too_big"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_OBJECT_TOO_BIG** = ``25``

Hints that an object is too big to be sent via the debugger.

<div id="_class_@globalscope_constant_property_hint_node_path_valid_types"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_NODE_PATH_VALID_TYPES** = ``26``

Hints that the hint string specifies valid node types for property of type [`NodePath`](class_nodepath.md).

<div id="_class_@globalscope_constant_property_hint_save_file"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_SAVE_FILE** = ``27``

Hints that a [`String`](class_string.md) property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the project's directory. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [`FileDialog.filters`](class_filedialog.md#class_filedialog_property_filters).

<div id="_class_@globalscope_constant_property_hint_global_save_file"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_GLOBAL_SAVE_FILE** = ``28``

Hints that a [`String`](class_string.md) property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the entire filesystem. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [`FileDialog.filters`](class_filedialog.md#class_filedialog_property_filters).

<div id="_class_@globalscope_constant_property_hint_int_is_objectid"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_INT_IS_OBJECTID** = ``29``

**已弃用：** This hint is not used by the engine.



<div id="_class_@globalscope_constant_property_hint_int_is_pointer"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_INT_IS_POINTER** = ``30``

Hints that an [`int`](class_int.md) property is a pointer. Used by GDExtension.

<div id="_class_@globalscope_constant_property_hint_array_type"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_ARRAY_TYPE** = ``31``

Hints that a property is an [`Array`](class_array.md) with the stored type specified in the hint string.

<div id="_class_@globalscope_constant_property_hint_dictionary_type"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_DICTIONARY_TYPE** = ``38``

Hints that a property is a [`Dictionary`](class_dictionary.md) with the stored types specified in the hint string.

<div id="_class_@globalscope_constant_property_hint_locale_id"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LOCALE_ID** = ``32``

Hints that a string property is a locale code. Editing it will show a locale dialog for picking language and country.

<div id="_class_@globalscope_constant_property_hint_localizable_string"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_LOCALIZABLE_STRING** = ``33``

Hints that a dictionary property is string translation map. Dictionary keys are locale codes and, values are translated strings.

<div id="_class_@globalscope_constant_property_hint_node_type"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_NODE_TYPE** = ``34``

Hints that a property is an instance of a [`Node`](class_node.md)-derived type, optionally specified via the hint string (e.g. `"Node2D"`). Editing it will show a dialog for picking a node from the scene.

<div id="_class_@globalscope_constant_property_hint_hide_quaternion_edit"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_HIDE_QUATERNION_EDIT** = ``35``

Hints that a quaternion property should disable the temporary euler editor.

<div id="_class_@globalscope_constant_property_hint_password"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_PASSWORD** = ``36``

Hints that a string property is a password, and every character is replaced with the secret character.

<div id="_class_@globalscope_constant_property_hint_tool_button"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_TOOL_BUTTON** = ``39``

Hints that a [`Callable`](class_callable.md) property should be displayed as a clickable button. When the button is pressed, the callable is called. The hint string specifies the button text and optionally an icon from the `"EditorIcons"` theme type.

```text

    "Click me!" - A button with the text "Click me!" and the default "Callable" icon.
    "Click me!,ColorRect" - A button with the text "Click me!" and the "ColorRect" icon.
```

 **Note:** A [`Callable`](class_callable.md) cannot be properly serialized and stored in a file, so it is recommended to use [`PROPERTY_USAGE_EDITOR`](class_@globalscope.md#class_@globalscope_constant_property_usage_editor) instead of [`PROPERTY_USAGE_DEFAULT`](class_@globalscope.md#class_@globalscope_constant_property_usage_default).



<div id="_class_@globalscope_constant_property_hint_max"></div>

[PropertyHint](#enum_@globalscope_propertyhint) **PROPERTY_HINT_MAX** = ``40``

Represents the size of the [PropertyHint](#enum_@globalscope_propertyhint) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_propertyusageflags"></div>

flags **PropertyUsageFlags**: <div id="enum_@globalscope_propertyusageflags"></div>

<div id="_class_@globalscope_constant_property_usage_none"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NONE** = ``0``

The property is not stored, and does not display in the editor. This is the default for non-exported properties.

<div id="_class_@globalscope_constant_property_usage_storage"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_STORAGE** = ``2``

The property is serialized and saved in the scene file (default for exported properties).

<div id="_class_@globalscope_constant_property_usage_editor"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_EDITOR** = ``4``

The property is shown in the [`EditorInspector`](class_editorinspector.md) (default for exported properties).

<div id="_class_@globalscope_constant_property_usage_internal"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_INTERNAL** = ``8``

The property is excluded from the class reference.

<div id="_class_@globalscope_constant_property_usage_checkable"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_CHECKABLE** = ``16``

The property can be checked in the [`EditorInspector`](class_editorinspector.md).

<div id="_class_@globalscope_constant_property_usage_checked"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_CHECKED** = ``32``

The property is checked in the [`EditorInspector`](class_editorinspector.md).

<div id="_class_@globalscope_constant_property_usage_group"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_GROUP** = ``64``

Used to group properties together in the editor. See [`EditorInspector`](class_editorinspector.md).

<div id="_class_@globalscope_constant_property_usage_category"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_CATEGORY** = ``128``

Used to categorize properties together in the editor.

<div id="_class_@globalscope_constant_property_usage_subgroup"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_SUBGROUP** = ``256``

Used to group properties together in the editor in a subgroup (under a group). See [`EditorInspector`](class_editorinspector.md).

<div id="_class_@globalscope_constant_property_usage_class_is_bitfield"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_CLASS_IS_BITFIELD** = ``512``

The property is a bitfield, i.e. it contains multiple flags represented as bits.

<div id="_class_@globalscope_constant_property_usage_no_instance_state"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NO_INSTANCE_STATE** = ``1024``

The property does not save its state in [`PackedScene`](class_packedscene.md).

<div id="_class_@globalscope_constant_property_usage_restart_if_changed"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_RESTART_IF_CHANGED** = ``2048``

Editing the property prompts the user for restarting the editor.

<div id="_class_@globalscope_constant_property_usage_script_variable"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_SCRIPT_VARIABLE** = ``4096``

The property is a script variable which should be serialized and saved in the scene file.

<div id="_class_@globalscope_constant_property_usage_store_if_null"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_STORE_IF_NULL** = ``8192``

The property value of type [`Object`](class_object.md) will be stored even if its value is `null`.

<div id="_class_@globalscope_constant_property_usage_update_all_if_modified"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED** = ``16384``

If this property is modified, all inspector fields will be refreshed.

<div id="_class_@globalscope_constant_property_usage_script_default_value"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE** = ``32768``

**已弃用：** This flag is not used by the engine.



<div id="_class_@globalscope_constant_property_usage_class_is_enum"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_CLASS_IS_ENUM** = ``65536``

The property is an enum, i.e. it only takes named integer constants from its associated enumeration.

<div id="_class_@globalscope_constant_property_usage_nil_is_variant"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NIL_IS_VARIANT** = ``131072``

If property has `nil` as default value, its type will be [`Variant`](class_variant.md).

<div id="_class_@globalscope_constant_property_usage_array"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_ARRAY** = ``262144``

The property is an array.

<div id="_class_@globalscope_constant_property_usage_always_duplicate"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_ALWAYS_DUPLICATE** = ``524288``

When duplicating a resource with [`Resource.duplicate`](class_resource.md#class_resource_method_duplicate), and this flag is set on a property of that resource, the property should always be duplicated, regardless of the `subresources` bool parameter.

<div id="_class_@globalscope_constant_property_usage_never_duplicate"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NEVER_DUPLICATE** = ``1048576``

When duplicating a resource with [`Resource.duplicate`](class_resource.md#class_resource_method_duplicate), and this flag is set on a property of that resource, the property should never be duplicated, regardless of the `subresources` bool parameter.

<div id="_class_@globalscope_constant_property_usage_high_end_gfx"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_HIGH_END_GFX** = ``2097152``

The property is only shown in the editor if modern renderers are supported (the Compatibility rendering method is excluded).

<div id="_class_@globalscope_constant_property_usage_node_path_from_scene_root"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT** = ``4194304``

The [`NodePath`](class_nodepath.md) property will always be relative to the scene's root. Mostly useful for local resources.

<div id="_class_@globalscope_constant_property_usage_resource_not_persistent"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT** = ``8388608``

Use when a resource is created on the fly, i.e. the getter will always return a different instance. [`ResourceSaver`](class_resourcesaver.md) needs this information to properly save such resources.

<div id="_class_@globalscope_constant_property_usage_keying_increments"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_KEYING_INCREMENTS** = ``16777216``

Inserting an animation key frame of this property will automatically increment the value, allowing to easily keyframe multiple values in a row.

<div id="_class_@globalscope_constant_property_usage_deferred_set_resource"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_DEFERRED_SET_RESOURCE** = ``33554432``

**已弃用：** This flag is not used by the engine.



<div id="_class_@globalscope_constant_property_usage_editor_instantiate_object"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT** = ``67108864``

When this property is a [`Resource`](class_resource.md) and base object is a [`Node`](class_node.md), a resource instance will be automatically created whenever the node is created in the editor.

<div id="_class_@globalscope_constant_property_usage_editor_basic_setting"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_EDITOR_BASIC_SETTING** = ``134217728``

The property is considered a basic setting and will appear even when advanced mode is disabled. Used for project settings.

<div id="_class_@globalscope_constant_property_usage_read_only"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_READ_ONLY** = ``268435456``

The property is read-only in the [`EditorInspector`](class_editorinspector.md).

<div id="_class_@globalscope_constant_property_usage_secret"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_SECRET** = ``536870912``

An export preset property with this flag contains confidential information and is stored separately from the rest of the export preset configuration.

<div id="_class_@globalscope_constant_property_usage_default"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_DEFAULT** = ``6``

Default usage (storage and editor).

<div id="_class_@globalscope_constant_property_usage_no_editor"></div>

[PropertyUsageFlags](#enum_@globalscope_propertyusageflags) **PROPERTY_USAGE_NO_EDITOR** = ``2``

Default usage but without showing the property in the editor (storage).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_methodflags"></div>

flags **MethodFlags**: <div id="enum_@globalscope_methodflags"></div>

<div id="_class_@globalscope_constant_method_flag_normal"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_NORMAL** = ``1``

Flag for a normal method.

<div id="_class_@globalscope_constant_method_flag_editor"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_EDITOR** = ``2``

Flag for an editor method.

<div id="_class_@globalscope_constant_method_flag_const"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_CONST** = ``4``

Flag for a constant method.

<div id="_class_@globalscope_constant_method_flag_virtual"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_VIRTUAL** = ``8``

Flag for a virtual method.

<div id="_class_@globalscope_constant_method_flag_vararg"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_VARARG** = ``16``

Flag for a method with a variable number of arguments.

<div id="_class_@globalscope_constant_method_flag_static"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_STATIC** = ``32``

Flag for a static method.

<div id="_class_@globalscope_constant_method_flag_object_core"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAG_OBJECT_CORE** = ``64``

Used internally. Allows to not dump core virtual methods (such as [`Object._notification`](class_object.md#class_object_private_method__notification)) to the JSON API.

<div id="_class_@globalscope_constant_method_flags_default"></div>

[MethodFlags](#enum_@globalscope_methodflags) **METHOD_FLAGS_DEFAULT** = ``1``

Default method flags (normal).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_variant.type"></div>

enum **Variant.Type**: <div id="enum_@globalscope_variant.type"></div>

<div id="_class_@globalscope_constant_type_nil"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_NIL** = ``0``

Variable is `null`.

<div id="_class_@globalscope_constant_type_bool"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_BOOL** = ``1``

Variable is of type [`bool`](class_bool.md).

<div id="_class_@globalscope_constant_type_int"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_INT** = ``2``

Variable is of type [`int`](class_int.md).

<div id="_class_@globalscope_constant_type_float"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_FLOAT** = ``3``

Variable is of type [`float`](class_float.md).

<div id="_class_@globalscope_constant_type_string"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_STRING** = ``4``

Variable is of type [`String`](class_string.md).

<div id="_class_@globalscope_constant_type_vector2"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR2** = ``5``

Variable is of type [`Vector2`](class_vector2.md).

<div id="_class_@globalscope_constant_type_vector2i"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR2I** = ``6``

Variable is of type [`Vector2i`](class_vector2i.md).

<div id="_class_@globalscope_constant_type_rect2"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_RECT2** = ``7``

Variable is of type [`Rect2`](class_rect2.md).

<div id="_class_@globalscope_constant_type_rect2i"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_RECT2I** = ``8``

Variable is of type [`Rect2i`](class_rect2i.md).

<div id="_class_@globalscope_constant_type_vector3"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR3** = ``9``

Variable is of type [`Vector3`](class_vector3.md).

<div id="_class_@globalscope_constant_type_vector3i"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR3I** = ``10``

Variable is of type [`Vector3i`](class_vector3i.md).

<div id="_class_@globalscope_constant_type_transform2d"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_TRANSFORM2D** = ``11``

Variable is of type [`Transform2D`](class_transform2d.md).

<div id="_class_@globalscope_constant_type_vector4"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR4** = ``12``

Variable is of type [`Vector4`](class_vector4.md).

<div id="_class_@globalscope_constant_type_vector4i"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_VECTOR4I** = ``13``

Variable is of type [`Vector4i`](class_vector4i.md).

<div id="_class_@globalscope_constant_type_plane"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PLANE** = ``14``

Variable is of type [`Plane`](class_plane.md).

<div id="_class_@globalscope_constant_type_quaternion"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_QUATERNION** = ``15``

Variable is of type [`Quaternion`](class_quaternion.md).

<div id="_class_@globalscope_constant_type_aabb"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_AABB** = ``16``

Variable is of type [`AABB`](class_aabb.md).

<div id="_class_@globalscope_constant_type_basis"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_BASIS** = ``17``

Variable is of type [`Basis`](class_basis.md).

<div id="_class_@globalscope_constant_type_transform3d"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_TRANSFORM3D** = ``18``

Variable is of type [`Transform3D`](class_transform3d.md).

<div id="_class_@globalscope_constant_type_projection"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PROJECTION** = ``19``

Variable is of type [`Projection`](class_projection.md).

<div id="_class_@globalscope_constant_type_color"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_COLOR** = ``20``

Variable is of type [`Color`](class_color.md).

<div id="_class_@globalscope_constant_type_string_name"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_STRING_NAME** = ``21``

Variable is of type [`StringName`](class_stringname.md).

<div id="_class_@globalscope_constant_type_node_path"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_NODE_PATH** = ``22``

Variable is of type [`NodePath`](class_nodepath.md).

<div id="_class_@globalscope_constant_type_rid"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_RID** = ``23``

Variable is of type [`RID`](class_rid.md).

<div id="_class_@globalscope_constant_type_object"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_OBJECT** = ``24``

Variable is of type [`Object`](class_object.md).

<div id="_class_@globalscope_constant_type_callable"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_CALLABLE** = ``25``

Variable is of type [`Callable`](class_callable.md).

<div id="_class_@globalscope_constant_type_signal"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_SIGNAL** = ``26``

Variable is of type [`Signal`](class_signal.md).

<div id="_class_@globalscope_constant_type_dictionary"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_DICTIONARY** = ``27``

Variable is of type [`Dictionary`](class_dictionary.md).

<div id="_class_@globalscope_constant_type_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_ARRAY** = ``28``

Variable is of type [`Array`](class_array.md).

<div id="_class_@globalscope_constant_type_packed_byte_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_BYTE_ARRAY** = ``29``

Variable is of type [`PackedByteArray`](class_packedbytearray.md).

<div id="_class_@globalscope_constant_type_packed_int32_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_INT32_ARRAY** = ``30``

Variable is of type [`PackedInt32Array`](class_packedint32array.md).

<div id="_class_@globalscope_constant_type_packed_int64_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_INT64_ARRAY** = ``31``

Variable is of type [`PackedInt64Array`](class_packedint64array.md).

<div id="_class_@globalscope_constant_type_packed_float32_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_FLOAT32_ARRAY** = ``32``

Variable is of type [`PackedFloat32Array`](class_packedfloat32array.md).

<div id="_class_@globalscope_constant_type_packed_float64_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_FLOAT64_ARRAY** = ``33``

Variable is of type [`PackedFloat64Array`](class_packedfloat64array.md).

<div id="_class_@globalscope_constant_type_packed_string_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_STRING_ARRAY** = ``34``

Variable is of type [`PackedStringArray`](class_packedstringarray.md).

<div id="_class_@globalscope_constant_type_packed_vector2_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_VECTOR2_ARRAY** = ``35``

Variable is of type [`PackedVector2Array`](class_packedvector2array.md).

<div id="_class_@globalscope_constant_type_packed_vector3_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_VECTOR3_ARRAY** = ``36``

Variable is of type [`PackedVector3Array`](class_packedvector3array.md).

<div id="_class_@globalscope_constant_type_packed_color_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_COLOR_ARRAY** = ``37``

Variable is of type [`PackedColorArray`](class_packedcolorarray.md).

<div id="_class_@globalscope_constant_type_packed_vector4_array"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_PACKED_VECTOR4_ARRAY** = ``38``

Variable is of type [`PackedVector4Array`](class_packedvector4array.md).

<div id="_class_@globalscope_constant_type_max"></div>

[Variant.Type](#enum_@globalscope_variant.type) **TYPE_MAX** = ``39``

Represents the size of the [Variant.Type](#enum_@globalscope_variant.type) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_@globalscope_variant.operator"></div>

enum **Variant.Operator**: <div id="enum_@globalscope_variant.operator"></div>

<div id="_class_@globalscope_constant_op_equal"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_EQUAL** = ``0``

Equality operator (`==`).

<div id="_class_@globalscope_constant_op_not_equal"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_NOT_EQUAL** = ``1``

Inequality operator (`!=`).

<div id="_class_@globalscope_constant_op_less"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_LESS** = ``2``

Less than operator (`<`).

<div id="_class_@globalscope_constant_op_less_equal"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_LESS_EQUAL** = ``3``

Less than or equal operator (`<=`).

<div id="_class_@globalscope_constant_op_greater"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_GREATER** = ``4``

Greater than operator (`>`).

<div id="_class_@globalscope_constant_op_greater_equal"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_GREATER_EQUAL** = ``5``

Greater than or equal operator (`>=`).

<div id="_class_@globalscope_constant_op_add"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_ADD** = ``6``

Addition operator (`+`).

<div id="_class_@globalscope_constant_op_subtract"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_SUBTRACT** = ``7``

Subtraction operator (`-`).

<div id="_class_@globalscope_constant_op_multiply"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_MULTIPLY** = ``8``

Multiplication operator (`*`).

<div id="_class_@globalscope_constant_op_divide"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_DIVIDE** = ``9``

Division operator (`/`).

<div id="_class_@globalscope_constant_op_negate"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_NEGATE** = ``10``

Unary negation operator (`-`).

<div id="_class_@globalscope_constant_op_positive"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_POSITIVE** = ``11``

Unary plus operator (`+`).

<div id="_class_@globalscope_constant_op_module"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_MODULE** = ``12``

Remainder/modulo operator (`%`).

<div id="_class_@globalscope_constant_op_power"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_POWER** = ``13``

Power operator (`**`).

<div id="_class_@globalscope_constant_op_shift_left"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_SHIFT_LEFT** = ``14``

Left shift operator (`<<`).

<div id="_class_@globalscope_constant_op_shift_right"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_SHIFT_RIGHT** = ``15``

Right shift operator (`>>`).

<div id="_class_@globalscope_constant_op_bit_and"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_BIT_AND** = ``16``

Bitwise AND operator (`&`).

<div id="_class_@globalscope_constant_op_bit_or"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_BIT_OR** = ``17``

Bitwise OR operator (`|`).

<div id="_class_@globalscope_constant_op_bit_xor"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_BIT_XOR** = ``18``

Bitwise XOR operator (`^`).

<div id="_class_@globalscope_constant_op_bit_negate"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_BIT_NEGATE** = ``19``

Bitwise NOT operator (`~`).

<div id="_class_@globalscope_constant_op_and"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_AND** = ``20``

Logical AND operator (`and` or `&&`).

<div id="_class_@globalscope_constant_op_or"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_OR** = ``21``

Logical OR operator (`or` or `||`).

<div id="_class_@globalscope_constant_op_xor"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_XOR** = ``22``

Logical XOR operator (not implemented in GDScript).

<div id="_class_@globalscope_constant_op_not"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_NOT** = ``23``

Logical NOT operator (`not` or `!`).

<div id="_class_@globalscope_constant_op_in"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_IN** = ``24``

Logical IN operator (`in`).

<div id="_class_@globalscope_constant_op_max"></div>

[Variant.Operator](#enum_@globalscope_variant.operator) **OP_MAX** = ``25``

Represents the size of the [Variant.Operator](#enum_@globalscope_variant.operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_@globalscope_property_audioserver"></div>

[`AudioServer`](class_audioserver.md) **AudioServer** <div id="class_@globalscope_property_audioserver"></div>

The [`AudioServer`](class_audioserver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_cameraserver"></div>

[`CameraServer`](class_cameraserver.md) **CameraServer** <div id="class_@globalscope_property_cameraserver"></div>

The [`CameraServer`](class_cameraserver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_classdb"></div>

[`ClassDB`](class_classdb.md) **ClassDB** <div id="class_@globalscope_property_classdb"></div>

The [`ClassDB`](class_classdb.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_displayserver"></div>

[`DisplayServer`](class_displayserver.md) **DisplayServer** <div id="class_@globalscope_property_displayserver"></div>

The [`DisplayServer`](class_displayserver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_editorinterface"></div>

[`EditorInterface`](class_editorinterface.md) **EditorInterface** <div id="class_@globalscope_property_editorinterface"></div>

The [`EditorInterface`](class_editorinterface.md) singleton.

 **Note:** Only available in editor builds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_engine"></div>

[`Engine`](class_engine.md) **Engine** <div id="class_@globalscope_property_engine"></div>

The [`Engine`](class_engine.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_enginedebugger"></div>

[`EngineDebugger`](class_enginedebugger.md) **EngineDebugger** <div id="class_@globalscope_property_enginedebugger"></div>

The [`EngineDebugger`](class_enginedebugger.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_gdextensionmanager"></div>

[`GDExtensionManager`](class_gdextensionmanager.md) **GDExtensionManager** <div id="class_@globalscope_property_gdextensionmanager"></div>

The [`GDExtensionManager`](class_gdextensionmanager.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_geometry2d"></div>

[`Geometry2D`](class_geometry2d.md) **Geometry2D** <div id="class_@globalscope_property_geometry2d"></div>

The [`Geometry2D`](class_geometry2d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_geometry3d"></div>

[`Geometry3D`](class_geometry3d.md) **Geometry3D** <div id="class_@globalscope_property_geometry3d"></div>

The [`Geometry3D`](class_geometry3d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_ip"></div>

[`IP`](class_ip.md) **IP** <div id="class_@globalscope_property_ip"></div>

The [`IP`](class_ip.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_input"></div>

[`Input`](class_input.md) **Input** <div id="class_@globalscope_property_input"></div>

The [`Input`](class_input.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_inputmap"></div>

[`InputMap`](class_inputmap.md) **InputMap** <div id="class_@globalscope_property_inputmap"></div>

The [`InputMap`](class_inputmap.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_javaclasswrapper"></div>

[`JavaClassWrapper`](class_javaclasswrapper.md) **JavaClassWrapper** <div id="class_@globalscope_property_javaclasswrapper"></div>

The [`JavaClassWrapper`](class_javaclasswrapper.md) singleton.

 **Note:** Only implemented on Android.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_javascriptbridge"></div>

[`JavaScriptBridge`](class_javascriptbridge.md) **JavaScriptBridge** <div id="class_@globalscope_property_javascriptbridge"></div>

The [`JavaScriptBridge`](class_javascriptbridge.md) singleton.

 **Note:** Only implemented on the Web platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_marshalls"></div>

[`Marshalls`](class_marshalls.md) **Marshalls** <div id="class_@globalscope_property_marshalls"></div>

The [`Marshalls`](class_marshalls.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_nativemenu"></div>

[`NativeMenu`](class_nativemenu.md) **NativeMenu** <div id="class_@globalscope_property_nativemenu"></div>

The [`NativeMenu`](class_nativemenu.md) singleton.

 **Note:** Only implemented on macOS.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_navigationmeshgenerator"></div>

[`NavigationMeshGenerator`](class_navigationmeshgenerator.md) **NavigationMeshGenerator** <div id="class_@globalscope_property_navigationmeshgenerator"></div>

The [`NavigationMeshGenerator`](class_navigationmeshgenerator.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_navigationserver2d"></div>

[`NavigationServer2D`](class_navigationserver2d.md) **NavigationServer2D** <div id="class_@globalscope_property_navigationserver2d"></div>

The [`NavigationServer2D`](class_navigationserver2d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_navigationserver3d"></div>

[`NavigationServer3D`](class_navigationserver3d.md) **NavigationServer3D** <div id="class_@globalscope_property_navigationserver3d"></div>

The [`NavigationServer3D`](class_navigationserver3d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_os"></div>

[`OS`](class_os.md) **OS** <div id="class_@globalscope_property_os"></div>

The [`OS`](class_os.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_performance"></div>

[`Performance`](class_performance.md) **Performance** <div id="class_@globalscope_property_performance"></div>

The [`Performance`](class_performance.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_physicsserver2d"></div>

[`PhysicsServer2D`](class_physicsserver2d.md) **PhysicsServer2D** <div id="class_@globalscope_property_physicsserver2d"></div>

The [`PhysicsServer2D`](class_physicsserver2d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_physicsserver2dmanager"></div>

[`PhysicsServer2DManager`](class_physicsserver2dmanager.md) **PhysicsServer2DManager** <div id="class_@globalscope_property_physicsserver2dmanager"></div>

The [`PhysicsServer2DManager`](class_physicsserver2dmanager.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_physicsserver3d"></div>

[`PhysicsServer3D`](class_physicsserver3d.md) **PhysicsServer3D** <div id="class_@globalscope_property_physicsserver3d"></div>

The [`PhysicsServer3D`](class_physicsserver3d.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_physicsserver3dmanager"></div>

[`PhysicsServer3DManager`](class_physicsserver3dmanager.md) **PhysicsServer3DManager** <div id="class_@globalscope_property_physicsserver3dmanager"></div>

The [`PhysicsServer3DManager`](class_physicsserver3dmanager.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_projectsettings"></div>

[`ProjectSettings`](class_projectsettings.md) **ProjectSettings** <div id="class_@globalscope_property_projectsettings"></div>

The [`ProjectSettings`](class_projectsettings.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_renderingserver"></div>

[`RenderingServer`](class_renderingserver.md) **RenderingServer** <div id="class_@globalscope_property_renderingserver"></div>

The [`RenderingServer`](class_renderingserver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_resourceloader"></div>

[`ResourceLoader`](class_resourceloader.md) **ResourceLoader** <div id="class_@globalscope_property_resourceloader"></div>

The [`ResourceLoader`](class_resourceloader.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_resourcesaver"></div>

[`ResourceSaver`](class_resourcesaver.md) **ResourceSaver** <div id="class_@globalscope_property_resourcesaver"></div>

The [`ResourceSaver`](class_resourcesaver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_resourceuid"></div>

[`ResourceUID`](class_resourceuid.md) **ResourceUID** <div id="class_@globalscope_property_resourceuid"></div>

The [`ResourceUID`](class_resourceuid.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_textservermanager"></div>

[`TextServerManager`](class_textservermanager.md) **TextServerManager** <div id="class_@globalscope_property_textservermanager"></div>

The [`TextServerManager`](class_textservermanager.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_themedb"></div>

[`ThemeDB`](class_themedb.md) **ThemeDB** <div id="class_@globalscope_property_themedb"></div>

The [`ThemeDB`](class_themedb.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_time"></div>

[`Time`](class_time.md) **Time** <div id="class_@globalscope_property_time"></div>

The [`Time`](class_time.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_translationserver"></div>

[`TranslationServer`](class_translationserver.md) **TranslationServer** <div id="class_@globalscope_property_translationserver"></div>

The [`TranslationServer`](class_translationserver.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_workerthreadpool"></div>

[`WorkerThreadPool`](class_workerthreadpool.md) **WorkerThreadPool** <div id="class_@globalscope_property_workerthreadpool"></div>

The [`WorkerThreadPool`](class_workerthreadpool.md) singleton.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_property_xrserver"></div>

[`XRServer`](class_xrserver.md) **XRServer** <div id="class_@globalscope_property_xrserver"></div>

The [`XRServer`](class_xrserver.md) singleton.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_@globalscope_method_abs"></div>

[`Variant`](class_variant.md) **abs** ( x: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_abs"></div>

Returns the absolute value of a [`Variant`](class_variant.md) parameter `x` (i.e. non-negative value). Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    var a = abs(-1)
    # a is 1
    
    var b = abs(-1.2)
    # b is 1.2
    
    var c = abs(Vector2(-3.5, -4))
    # c is (3.5, 4)
    
    var d = abs(Vector2i(-5, -6))
    # d is (5, 6)
    
    var e = abs(Vector3(-7, 8.5, -3.8))
    # e is (7, 8.5, 3.8)
    
    var f = abs(Vector3i(-7, -8, -9))
    # f is (7, 8, 9)
```

 **Note:** For better type safety, use [`absf`](class_@globalscope.md#class_@globalscope_method_absf), [`absi`](class_@globalscope.md#class_@globalscope_method_absi), [`Vector2.abs`](class_vector2.md#class_vector2_method_abs), [`Vector2i.abs`](class_vector2i.md#class_vector2i_method_abs), [`Vector3.abs`](class_vector3.md#class_vector3_method_abs), [`Vector3i.abs`](class_vector3i.md#class_vector3i_method_abs), [`Vector4.abs`](class_vector4.md#class_vector4_method_abs), or [`Vector4i.abs`](class_vector4i.md#class_vector4i_method_abs).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_absf"></div>

[`float`](class_float.md) **absf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_absf"></div>

Returns the absolute value of float parameter `x` (i.e. positive value).

```

    # a is 1.2
    var a = absf(-1.2)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_absi"></div>

[`int`](class_int.md) **absi** ( x: [`int`](class_int.md) )<div id="class_@globalscope_method_absi"></div>

Returns the absolute value of int parameter `x` (i.e. positive value).

```

    # a is 1
    var a = absi(-1)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_acos"></div>

[`float`](class_float.md) **acos** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_acos"></div>

Returns the arc cosine of `x` in radians. Use to get the angle of cosine `x`. `x` will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [`acos`](class_@globalscope.md#class_@globalscope_method_acos) from returning [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

```

    # c is 0.523599 or 30 degrees if converted with rad_to_deg(c)
    var c = acos(0.866025)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_acosh"></div>

[`float`](class_float.md) **acosh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_acosh"></div>

Returns the hyperbolic arc (also called inverse) cosine of `x`, returning a value in radians. Use it to get the angle from an angle's cosine in hyperbolic space if `x` is larger or equal to 1. For values of `x` lower than 1, it will return 0, in order to prevent [`acosh`](class_@globalscope.md#class_@globalscope_method_acosh) from returning [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

```

    var a = acosh(2) # Returns 1.31695789692482
    cosh(a) # Returns 2
    
    var b = acosh(-1) # Returns 0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_angle_difference"></div>

[`float`](class_float.md) **angle_difference** ( from: [`float`](class_float.md), to: [`float`](class_float.md) )<div id="class_@globalscope_method_angle_difference"></div>

Returns the difference between the two angles (in radians), in the range of `[-PI, +PI]`. When `from` and `to` are opposite, returns `-PI` if `from` is smaller than `to`, or `PI` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_asin"></div>

[`float`](class_float.md) **asin** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_asin"></div>

Returns the arc sine of `x` in radians. Use to get the angle of sine `x`. `x` will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [`asin`](class_@globalscope.md#class_@globalscope_method_asin) from returning [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

```

    # s is 0.523599 or 30 degrees if converted with rad_to_deg(s)
    var s = asin(0.5)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_asinh"></div>

[`float`](class_float.md) **asinh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_asinh"></div>

Returns the hyperbolic arc (also called inverse) sine of `x`, returning a value in radians. Use it to get the angle from an angle's sine in hyperbolic space.

```

    var a = asinh(0.9) # Returns 0.8088669356527824
    sinh(a) # Returns 0.9
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_atan"></div>

[`float`](class_float.md) **atan** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_atan"></div>

Returns the arc tangent of `x` in radians. Use it to get the angle from an angle's tangent in trigonometry.

The method cannot know in which quadrant the angle should fall. See [`atan2`](class_@globalscope.md#class_@globalscope_method_atan2) if you have both `y` and `x`.

```

    var a = atan(0.5) # a is 0.463648
```

If `x` is between `-PI / 2` and `PI / 2` (inclusive), `atan(tan(x))` is equal to `x`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_atan2"></div>

[`float`](class_float.md) **atan2** ( y: [`float`](class_float.md), x: [`float`](class_float.md) )<div id="class_@globalscope_method_atan2"></div>

Returns the arc tangent of `y/x` in radians. Use to get the angle of tangent `y/x`. To compute the value, the method takes into account the sign of both arguments in order to determine the quadrant.

Important note: The Y coordinate comes first, by convention.

```

    var a = atan2(0, -1) # a is 3.141593
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_atanh"></div>

[`float`](class_float.md) **atanh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_atanh"></div>

Returns the hyperbolic arc (also called inverse) tangent of `x`, returning a value in radians. Use it to get the angle from an angle's tangent in hyperbolic space if `x` is between -1 and 1 (non-inclusive).

In mathematics, the inverse hyperbolic tangent is only defined for -1 < `x` < 1 in the real set, so values equal or lower to -1 for `x` return negative [`@GDScript.INF`](class_@gdscript.md#class_@gdscript_constant_inf) and values equal or higher than 1 return positive [`@GDScript.INF`](class_@gdscript.md#class_@gdscript_constant_inf) in order to prevent [`atanh`](class_@globalscope.md#class_@globalscope_method_atanh) from returning [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

```

    var a = atanh(0.9) # Returns 1.47221948958322
    tanh(a) # Returns 0.9
    
    var b = atanh(-2) # Returns -inf
    tanh(b) # Returns -1
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_bezier_derivative"></div>

[`float`](class_float.md) **bezier_derivative** ( start: [`float`](class_float.md), control_1: [`float`](class_float.md), control_2: [`float`](class_float.md), end: [`float`](class_float.md), t: [`float`](class_float.md) )<div id="class_@globalscope_method_bezier_derivative"></div>

Returns the derivative at the given `t` on a one-dimensional [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_bezier_interpolate"></div>

[`float`](class_float.md) **bezier_interpolate** ( start: [`float`](class_float.md), control_1: [`float`](class_float.md), control_2: [`float`](class_float.md), end: [`float`](class_float.md), t: [`float`](class_float.md) )<div id="class_@globalscope_method_bezier_interpolate"></div>

Returns the point at the given `t` on a one-dimensional [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_bytes_to_var"></div>

[`Variant`](class_variant.md) **bytes_to_var** ( bytes: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_@globalscope_method_bytes_to_var"></div>

Decodes a byte array back to a [`Variant`](class_variant.md) value, without decoding objects.

 **Note:** If you need object deserialization, see [`bytes_to_var_with_objects`](class_@globalscope.md#class_@globalscope_method_bytes_to_var_with_objects).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_bytes_to_var_with_objects"></div>

[`Variant`](class_variant.md) **bytes_to_var_with_objects** ( bytes: [`PackedByteArray`](class_packedbytearray.md) )<div id="class_@globalscope_method_bytes_to_var_with_objects"></div>

Decodes a byte array back to a [`Variant`](class_variant.md) value. Decoding objects is allowed.

 **Warning:** Deserialized object can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats (remote code execution).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_ceil"></div>

[`Variant`](class_variant.md) **ceil** ( x: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_ceil"></div>

Rounds `x` upward (towards positive infinity), returning the smallest whole number that is not less than `x`. Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    var i = ceil(1.45) # i is 2.0
    i = ceil(1.001)    # i is 2.0
```

See also [`floor`](class_@globalscope.md#class_@globalscope_method_floor), [`round`](class_@globalscope.md#class_@globalscope_method_round), and [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped).

 **Note:** For better type safety, use [`ceilf`](class_@globalscope.md#class_@globalscope_method_ceilf), [`ceili`](class_@globalscope.md#class_@globalscope_method_ceili), [`Vector2.ceil`](class_vector2.md#class_vector2_method_ceil), [`Vector3.ceil`](class_vector3.md#class_vector3_method_ceil), or [`Vector4.ceil`](class_vector4.md#class_vector4_method_ceil).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_ceilf"></div>

[`float`](class_float.md) **ceilf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_ceilf"></div>

Rounds `x` upward (towards positive infinity), returning the smallest whole number that is not less than `x`.

A type-safe version of [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil), returning a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_ceili"></div>

[`int`](class_int.md) **ceili** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_ceili"></div>

Rounds `x` upward (towards positive infinity), returning the smallest whole number that is not less than `x`.

A type-safe version of [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil), returning an [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_clamp"></div>

[`Variant`](class_variant.md) **clamp** ( value: [`Variant`](class_variant.md), min: [`Variant`](class_variant.md), max: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_clamp"></div>

Clamps the `value`, returning a [`Variant`](class_variant.md) not less than `min` and not more than `max`. Any values that can be compared with the less than and greater than operators will work.

```

    var a = clamp(-10, -1, 5)
    # a is -1
    
    var b = clamp(8.1, 0.9, 5.5)
    # b is 5.5
```

 **Note:** For better type safety, use [`clampf`](class_@globalscope.md#class_@globalscope_method_clampf), [`clampi`](class_@globalscope.md#class_@globalscope_method_clampi), [`Vector2.clamp`](class_vector2.md#class_vector2_method_clamp), [`Vector2i.clamp`](class_vector2i.md#class_vector2i_method_clamp), [`Vector3.clamp`](class_vector3.md#class_vector3_method_clamp), [`Vector3i.clamp`](class_vector3i.md#class_vector3i_method_clamp), [`Vector4.clamp`](class_vector4.md#class_vector4_method_clamp), [`Vector4i.clamp`](class_vector4i.md#class_vector4i_method_clamp), or [`Color.clamp`](class_color.md#class_color_method_clamp) (not currently supported by this method).

 **Note:** When using this on vectors it will *not* perform component-wise clamping, and will pick `min` if `value < min` or `max` if `value > max`. To perform component-wise clamping use the methods listed above.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_clampf"></div>

[`float`](class_float.md) **clampf** ( value: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md) )<div id="class_@globalscope_method_clampf"></div>

Clamps the `value`, returning a [`float`](class_float.md) not less than `min` and not more than `max`.

```

    var speed = 42.1
    var a = clampf(speed, 1.0, 20.5) # a is 20.5
    
    speed = -10.0
    var b = clampf(speed, -1.0, 1.0) # b is -1.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_clampi"></div>

[`int`](class_int.md) **clampi** ( value: [`int`](class_int.md), min: [`int`](class_int.md), max: [`int`](class_int.md) )<div id="class_@globalscope_method_clampi"></div>

Clamps the `value`, returning an [`int`](class_int.md) not less than `min` and not more than `max`.

```

    var speed = 42
    var a = clampi(speed, 1, 20) # a is 20
    
    speed = -10
    var b = clampi(speed, -1, 1) # b is -1
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cos"></div>

[`float`](class_float.md) **cos** ( angle_rad: [`float`](class_float.md) )<div id="class_@globalscope_method_cos"></div>

Returns the cosine of angle `angle_rad` in radians.

```

    cos(PI * 2)         # Returns 1.0
    cos(PI)             # Returns -1.0
    cos(deg_to_rad(90)) # Returns 0.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cosh"></div>

[`float`](class_float.md) **cosh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_cosh"></div>

Returns the hyperbolic cosine of `x` in radians.

```

    print(cosh(1)) # Prints 1.543081
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cubic_interpolate"></div>

[`float`](class_float.md) **cubic_interpolate** ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md) )<div id="class_@globalscope_method_cubic_interpolate"></div>

Cubic interpolates between two values by the factor defined in `weight` with `pre` and `post` values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cubic_interpolate_angle"></div>

[`float`](class_float.md) **cubic_interpolate_angle** ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md) )<div id="class_@globalscope_method_cubic_interpolate_angle"></div>

Cubic interpolates between two rotation values with shortest path by the factor defined in `weight` with `pre` and `post` values. See also [`lerp_angle`](class_@globalscope.md#class_@globalscope_method_lerp_angle).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cubic_interpolate_angle_in_time"></div>

[`float`](class_float.md) **cubic_interpolate_angle_in_time** ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md), to_t: [`float`](class_float.md), pre_t: [`float`](class_float.md), post_t: [`float`](class_float.md) )<div id="class_@globalscope_method_cubic_interpolate_angle_in_time"></div>

Cubic interpolates between two rotation values with shortest path by the factor defined in `weight` with `pre` and `post` values. See also [`lerp_angle`](class_@globalscope.md#class_@globalscope_method_lerp_angle).

It can perform smoother interpolation than [`cubic_interpolate`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate) by the time values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_cubic_interpolate_in_time"></div>

[`float`](class_float.md) **cubic_interpolate_in_time** ( from: [`float`](class_float.md), to: [`float`](class_float.md), pre: [`float`](class_float.md), post: [`float`](class_float.md), weight: [`float`](class_float.md), to_t: [`float`](class_float.md), pre_t: [`float`](class_float.md), post_t: [`float`](class_float.md) )<div id="class_@globalscope_method_cubic_interpolate_in_time"></div>

Cubic interpolates between two values by the factor defined in `weight` with `pre` and `post` values.

It can perform smoother interpolation than [`cubic_interpolate`](class_@globalscope.md#class_@globalscope_method_cubic_interpolate) by the time values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_db_to_linear"></div>

[`float`](class_float.md) **db_to_linear** ( db: [`float`](class_float.md) )<div id="class_@globalscope_method_db_to_linear"></div>

Converts from decibels to linear energy (audio).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_deg_to_rad"></div>

[`float`](class_float.md) **deg_to_rad** ( deg: [`float`](class_float.md) )<div id="class_@globalscope_method_deg_to_rad"></div>

Converts an angle expressed in degrees to radians.

```

    var r = deg_to_rad(180) # r is 3.141593
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_ease"></div>

[`float`](class_float.md) **ease** ( x: [`float`](class_float.md), curve: [`float`](class_float.md) )<div id="class_@globalscope_method_ease"></div>

Returns an "eased" value of `x` based on an easing function defined with `curve`. This easing function is based on an exponent. The `curve` can be any floating-point number, with specific values leading to the following behaviors:

```text

    - Lower than -1.0 (exclusive): Ease in-out
    - 1.0: Linear
    - Between -1.0 and 0.0 (exclusive): Ease out-in
    - 0.0: Constant
    - Between 0.0 to 1.0 (exclusive): Ease out
    - 1.0: Linear
    - Greater than 1.0 (exclusive): Ease in
```

 [*ease() curve values cheatsheet*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/ease_cheatsheet.png) 

See also [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep). If you need to perform more advanced transitions, use [`Tween.interpolate_value`](class_tween.md#class_tween_method_interpolate_value).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_error_string"></div>

[`String`](class_string.md) **error_string** ( error: [`int`](class_int.md) )<div id="class_@globalscope_method_error_string"></div>

Returns a human-readable name for the given [Error](#enum_@globalscope_error) code.

```

    print(OK)                              # Prints 0
    print(error_string(OK))                # Prints OK
    print(error_string(ERR_BUSY))          # Prints Busy
    print(error_string(ERR_OUT_OF_MEMORY)) # Prints Out of memory
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_exp"></div>

[`float`](class_float.md) **exp** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_exp"></div>

The natural exponential function. It raises the mathematical constant *e* to the power of `x` and returns it.

 *e* has an approximate value of 2.71828, and can be obtained with `exp(1)`.

For exponents to other bases use the method [`pow`](class_@globalscope.md#class_@globalscope_method_pow).

```

    var a = exp(2) # Approximately 7.39
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_floor"></div>

[`Variant`](class_variant.md) **floor** ( x: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_floor"></div>

Rounds `x` downward (towards negative infinity), returning the largest whole number that is not more than `x`. Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    var a = floor(2.99) # a is 2.0
    a = floor(-2.99)    # a is -3.0
```

See also [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil), [`round`](class_@globalscope.md#class_@globalscope_method_round), and [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped).

 **Note:** For better type safety, use [`floorf`](class_@globalscope.md#class_@globalscope_method_floorf), [`floori`](class_@globalscope.md#class_@globalscope_method_floori), [`Vector2.floor`](class_vector2.md#class_vector2_method_floor), [`Vector3.floor`](class_vector3.md#class_vector3_method_floor), or [`Vector4.floor`](class_vector4.md#class_vector4_method_floor).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_floorf"></div>

[`float`](class_float.md) **floorf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_floorf"></div>

Rounds `x` downward (towards negative infinity), returning the largest whole number that is not more than `x`.

A type-safe version of [`floor`](class_@globalscope.md#class_@globalscope_method_floor), returning a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_floori"></div>

[`int`](class_int.md) **floori** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_floori"></div>

Rounds `x` downward (towards negative infinity), returning the largest whole number that is not more than `x`.

A type-safe version of [`floor`](class_@globalscope.md#class_@globalscope_method_floor), returning an [`int`](class_int.md).

 **Note:** This function is *not* the same as `int(x)`, which rounds towards 0.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_fmod"></div>

[`float`](class_float.md) **fmod** ( x: [`float`](class_float.md), y: [`float`](class_float.md) )<div id="class_@globalscope_method_fmod"></div>

Returns the floating-point remainder of `x` divided by `y`, keeping the sign of `x`.

```

    var remainder = fmod(7, 5.5) # remainder is 1.5
```

For the integer remainder operation, use the `%` operator.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_fposmod"></div>

[`float`](class_float.md) **fposmod** ( x: [`float`](class_float.md), y: [`float`](class_float.md) )<div id="class_@globalscope_method_fposmod"></div>

Returns the floating-point modulus of `x` divided by `y`, wrapping equally in positive and negative.

```

    print(" (x)  (fmod(x, 1.5))   (fposmod(x, 1.5))")
    for i in 7:
        var x = i * 0.5 - 1.5
        print("%4.1f           %4.1f  | %4.1f" % [x, fmod(x, 1.5), fposmod(x, 1.5)])
```

Prints:

```text

     (x)  (fmod(x, 1.5))   (fposmod(x, 1.5))
    -1.5           -0.0  |  0.0
    -1.0           -1.0  |  0.5
    -0.5           -0.5  |  1.0
     0.0            0.0  |  0.0
     0.5            0.5  |  0.5
     1.0            1.0  |  1.0
     1.5            0.0  |  0.0
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_hash"></div>

[`int`](class_int.md) **hash** ( variable: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_hash"></div>

Returns the integer hash of the passed `variable`.



```gdscript

    print(hash("a")) # Prints 177670
```

```csharp

    GD.Print(GD.Hash("a")); // Prints 177670
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_instance_from_id"></div>

[`Object`](class_object.md) **instance_from_id** ( instance_id: [`int`](class_int.md) )<div id="class_@globalscope_method_instance_from_id"></div>

Returns the [`Object`](class_object.md) that corresponds to `instance_id`. All Objects have a unique instance ID. See also [`Object.get_instance_id`](class_object.md#class_object_method_get_instance_id).



```gdscript

    var foo = "bar"
    
    func _ready():
        var id = get_instance_id()
        var inst = instance_from_id(id)
        print(inst.foo) # Prints bar
```

```csharp

    public partial class MyNode : Node
    {
        public string Foo { get; set; } = "bar";
    
        public override void _Ready()
        {
            ulong id = GetInstanceId();
            var inst = (MyNode)InstanceFromId(Id);
            GD.Print(inst.Foo); // Prints bar
        }
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_inverse_lerp"></div>

[`float`](class_float.md) **inverse_lerp** ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )<div id="class_@globalscope_method_inverse_lerp"></div>

Returns an interpolation or extrapolation factor considering the range specified in `from` and `to`, and the interpolated value specified in `weight`. The returned value will be between `0.0` and `1.0` if `weight` is between `from` and `to` (inclusive). If `weight` is located outside this range, then an extrapolation factor will be returned (return value lower than `0.0` or greater than `1.0`). Use [`clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on the result of [`inverse_lerp`](class_@globalscope.md#class_@globalscope_method_inverse_lerp) if this is not desired.

```

    # The interpolation ratio in the `lerp()` call below is 0.75.
    var middle = lerp(20, 30, 0.75)
    # middle is now 27.5.
    
    # Now, we pretend to have forgotten the original ratio and want to get it back.
    var ratio = inverse_lerp(20, 30, 27.5)
    # ratio is now 0.75.
```

See also [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp), which performs the reverse of this operation, and [`remap`](class_@globalscope.md#class_@globalscope_method_remap) to map a continuous series of values to another.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( a: [`float`](class_float.md), b: [`float`](class_float.md) )<div id="class_@globalscope_method_is_equal_approx"></div>

Returns `true` if `a` and `b` are approximately equal to each other.

Here, "approximately equal" means that `a` and `b` are within a small internal epsilon of each other, which scales with the magnitude of the numbers.

Infinity values of the same sign are considered equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_is_finite"></div>

Returns whether `x` is a finite value, i.e. it is not [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan), positive infinity, or negative infinity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_inf"></div>

[`bool`](class_bool.md) **is_inf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_is_inf"></div>

Returns `true` if `x` is either positive infinity or negative infinity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_instance_id_valid"></div>

[`bool`](class_bool.md) **is_instance_id_valid** ( id: [`int`](class_int.md) )<div id="class_@globalscope_method_is_instance_id_valid"></div>

Returns `true` if the Object that corresponds to `id` is a valid object (e.g. has not been deleted from memory). All Objects have a unique instance ID.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_instance_valid"></div>

[`bool`](class_bool.md) **is_instance_valid** ( instance: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_is_instance_valid"></div>

Returns `true` if `instance` is a valid Object (e.g. has not been deleted from memory).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_nan"></div>

[`bool`](class_bool.md) **is_nan** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_is_nan"></div>

Returns `true` if `x` is a NaN ("Not a Number" or invalid) value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_same"></div>

[`bool`](class_bool.md) **is_same** ( a: [`Variant`](class_variant.md), b: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_is_same"></div>

Returns `true`, for value types, if `a` and `b` share the same value. Returns `true`, for reference types, if the references of `a` and `b` are the same.

```

    # Vector2 is a value type
    var vec2_a = Vector2(0, 0)
    var vec2_b = Vector2(0, 0)
    var vec2_c = Vector2(1, 1)
    is_same(vec2_a, vec2_a)  # true
    is_same(vec2_a, vec2_b)  # true
    is_same(vec2_a, vec2_c)  # false
    
    # Array is a reference type
    var arr_a = []
    var arr_b = []
    is_same(arr_a, arr_a)  # true
    is_same(arr_a, arr_b)  # false
```

These are [`Variant`](class_variant.md) value types: `null`, [`bool`](class_bool.md), [`int`](class_int.md), [`float`](class_float.md), [`String`](class_string.md), [`StringName`](class_stringname.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md), [`Rect2`](class_rect2.md), [`Rect2i`](class_rect2i.md), [`Transform2D`](class_transform2d.md), [`Transform3D`](class_transform3d.md), [`Plane`](class_plane.md), [`Quaternion`](class_quaternion.md), [`AABB`](class_aabb.md), [`Basis`](class_basis.md), [`Projection`](class_projection.md), [`Color`](class_color.md), [`NodePath`](class_nodepath.md), [`RID`](class_rid.md), [`Callable`](class_callable.md) and [`Signal`](class_signal.md).

These are [`Variant`](class_variant.md) reference types: [`Object`](class_object.md), [`Dictionary`](class_dictionary.md), [`Array`](class_array.md), [`PackedByteArray`](class_packedbytearray.md), [`PackedInt32Array`](class_packedint32array.md), [`PackedInt64Array`](class_packedint64array.md), [`PackedFloat32Array`](class_packedfloat32array.md), [`PackedFloat64Array`](class_packedfloat64array.md), [`PackedStringArray`](class_packedstringarray.md), [`PackedVector2Array`](class_packedvector2array.md), [`PackedVector3Array`](class_packedvector3array.md), [`PackedVector4Array`](class_packedvector4array.md), and [`PackedColorArray`](class_packedcolorarray.md).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_is_zero_approx"></div>

[`bool`](class_bool.md) **is_zero_approx** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_is_zero_approx"></div>

Returns `true` if `x` is zero or almost zero. The comparison is done using a tolerance calculation with a small internal epsilon.

This function is faster than using [`is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) with one value as zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_lerp"></div>

[`Variant`](class_variant.md) **lerp** ( from: [`Variant`](class_variant.md), to: [`Variant`](class_variant.md), weight: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_lerp"></div>

Linearly interpolates between two values by the factor defined in `weight`. To perform interpolation, `weight` should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform *extrapolation*. If this is not desired, use [`clampf`](class_@globalscope.md#class_@globalscope_method_clampf) to limit `weight`.

Both `from` and `to` must be the same type. Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector3`](class_vector3.md), [`Vector4`](class_vector4.md), [`Color`](class_color.md), [`Quaternion`](class_quaternion.md), [`Basis`](class_basis.md), [`Transform2D`](class_transform2d.md), [`Transform3D`](class_transform3d.md).

```

    lerp(0, 4, 0.75) # Returns 3.0
```

See also [`inverse_lerp`](class_@globalscope.md#class_@globalscope_method_inverse_lerp) which performs the reverse of this operation. To perform eased interpolation with [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp), combine it with [`ease`](class_@globalscope.md#class_@globalscope_method_ease) or [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep). See also [`remap`](class_@globalscope.md#class_@globalscope_method_remap) to map a continuous series of values to another.

 **Note:** For better type safety, use [`lerpf`](class_@globalscope.md#class_@globalscope_method_lerpf), [`Vector2.lerp`](class_vector2.md#class_vector2_method_lerp), [`Vector3.lerp`](class_vector3.md#class_vector3_method_lerp), [`Vector4.lerp`](class_vector4.md#class_vector4_method_lerp), [`Color.lerp`](class_color.md#class_color_method_lerp), [`Quaternion.slerp`](class_quaternion.md#class_quaternion_method_slerp), [`Basis.slerp`](class_basis.md#class_basis_method_slerp), [`Transform2D.interpolate_with`](class_transform2d.md#class_transform2d_method_interpolate_with), or [`Transform3D.interpolate_with`](class_transform3d.md#class_transform3d_method_interpolate_with).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_lerp_angle"></div>

[`float`](class_float.md) **lerp_angle** ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )<div id="class_@globalscope_method_lerp_angle"></div>

Linearly interpolates between two angles (in radians) by a `weight` value between 0.0 and 1.0.

Similar to [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp), but interpolates correctly when the angles wrap around [`@GDScript.TAU`](class_@gdscript.md#class_@gdscript_constant_tau). To perform eased interpolation with [`lerp_angle`](class_@globalscope.md#class_@globalscope_method_lerp_angle), combine it with [`ease`](class_@globalscope.md#class_@globalscope_method_ease) or [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep).

```

    extends Sprite
    var elapsed = 0.0
    func _process(delta):
        var min_angle = deg_to_rad(0.0)
        var max_angle = deg_to_rad(90.0)
        rotation = lerp_angle(min_angle, max_angle, elapsed)
        elapsed += delta
```

 **Note:** This function lerps through the shortest path between `from` and `to`. However, when these two angles are approximately `PI + k * TAU` apart for any integer `k`, it's not obvious which way they lerp due to floating-point precision errors. For example, `lerp_angle(0, PI, weight)` lerps counter-clockwise, while `lerp_angle(0, PI + 5 * TAU, weight)` lerps clockwise.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_lerpf"></div>

[`float`](class_float.md) **lerpf** ( from: [`float`](class_float.md), to: [`float`](class_float.md), weight: [`float`](class_float.md) )<div id="class_@globalscope_method_lerpf"></div>

Linearly interpolates between two values by the factor defined in `weight`. To perform interpolation, `weight` should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform *extrapolation*. If this is not desired, use [`clampf`](class_@globalscope.md#class_@globalscope_method_clampf) on the result of this function.

```

    lerpf(0, 4, 0.75) # Returns 3.0
```

See also [`inverse_lerp`](class_@globalscope.md#class_@globalscope_method_inverse_lerp) which performs the reverse of this operation. To perform eased interpolation with [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp), combine it with [`ease`](class_@globalscope.md#class_@globalscope_method_ease) or [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_linear_to_db"></div>

[`float`](class_float.md) **linear_to_db** ( lin: [`float`](class_float.md) )<div id="class_@globalscope_method_linear_to_db"></div>

Converts from linear energy to decibels (audio). Since volume is not normally linear, this can be used to implement volume sliders that behave as expected.

 **Example:** Change the Master bus's volume through a [`Slider`](class_slider.md) node, which ranges from `0.0` to `1.0`:

```

    AudioServer.set_bus_volume_db(AudioServer.get_bus_index("Master"), linear_to_db($Slider.value))
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_log"></div>

[`float`](class_float.md) **log** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_log"></div>

Returns the [*natural logarithm*](https://en.wikipedia.org/wiki/Natural_logarithm) of `x` (base [*[i]e[/i]*](https://en.wikipedia.org/wiki/E_(mathematical_constant)), with *e* being approximately 2.71828). This is the amount of time needed to reach a certain level of continuous growth.

 **Note:** This is not the same as the "log" function on most calculators, which uses a base 10 logarithm. To use base 10 logarithm, use `log(x) / log(10)`.

```

    log(10) # Returns 2.302585
```

 **Note:** The logarithm of `0` returns `-inf`, while negative values return `-nan`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_max"></div>

[`Variant`](class_variant.md) **max** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_max"></div>

Returns the maximum of the given numeric values. This function can take any number of arguments.

```

    max(1, 7, 3, -6, 5) # Returns 7
```

 **Note:** When using this on vectors it will *not* perform component-wise maximum, and will pick the largest value when compared using `x < y`. To perform component-wise maximum, use [`Vector2.max`](class_vector2.md#class_vector2_method_max), [`Vector2i.max`](class_vector2i.md#class_vector2i_method_max), [`Vector3.max`](class_vector3.md#class_vector3_method_max), [`Vector3i.max`](class_vector3i.md#class_vector3i_method_max), [`Vector4.max`](class_vector4.md#class_vector4_method_max), and [`Vector4i.max`](class_vector4i.md#class_vector4i_method_max).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_maxf"></div>

[`float`](class_float.md) **maxf** ( a: [`float`](class_float.md), b: [`float`](class_float.md) )<div id="class_@globalscope_method_maxf"></div>

Returns the maximum of two [`float`](class_float.md) values.

```

    maxf(3.6, 24)   # Returns 24.0
    maxf(-3.99, -4) # Returns -3.99
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_maxi"></div>

[`int`](class_int.md) **maxi** ( a: [`int`](class_int.md), b: [`int`](class_int.md) )<div id="class_@globalscope_method_maxi"></div>

Returns the maximum of two [`int`](class_int.md) values.

```

    maxi(1, 2)   # Returns 2
    maxi(-3, -4) # Returns -3
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_min"></div>

[`Variant`](class_variant.md) **min** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_min"></div>

Returns the minimum of the given numeric values. This function can take any number of arguments.

```

    min(1, 7, 3, -6, 5) # Returns -6
```

 **Note:** When using this on vectors it will *not* perform component-wise minimum, and will pick the smallest value when compared using `x < y`. To perform component-wise minimum, use [`Vector2.min`](class_vector2.md#class_vector2_method_min), [`Vector2i.min`](class_vector2i.md#class_vector2i_method_min), [`Vector3.min`](class_vector3.md#class_vector3_method_min), [`Vector3i.min`](class_vector3i.md#class_vector3i_method_min), [`Vector4.min`](class_vector4.md#class_vector4_method_min), and [`Vector4i.min`](class_vector4i.md#class_vector4i_method_min).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_minf"></div>

[`float`](class_float.md) **minf** ( a: [`float`](class_float.md), b: [`float`](class_float.md) )<div id="class_@globalscope_method_minf"></div>

Returns the minimum of two [`float`](class_float.md) values.

```

    minf(3.6, 24)   # Returns 3.6
    minf(-3.99, -4) # Returns -4.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_mini"></div>

[`int`](class_int.md) **mini** ( a: [`int`](class_int.md), b: [`int`](class_int.md) )<div id="class_@globalscope_method_mini"></div>

Returns the minimum of two [`int`](class_int.md) values.

```

    mini(1, 2)   # Returns 1
    mini(-3, -4) # Returns -4
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_move_toward"></div>

[`float`](class_float.md) **move_toward** ( from: [`float`](class_float.md), to: [`float`](class_float.md), delta: [`float`](class_float.md) )<div id="class_@globalscope_method_move_toward"></div>

Moves `from` toward `to` by the `delta` amount. Will not go past `to`.

Use a negative `delta` value to move away.

```

    move_toward(5, 10, 4)    # Returns 9
    move_toward(10, 5, 4)    # Returns 6
    move_toward(5, 10, 9)    # Returns 10
    move_toward(10, 5, -1.5) # Returns 11.5
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_nearest_po2"></div>

[`int`](class_int.md) **nearest_po2** ( value: [`int`](class_int.md) )<div id="class_@globalscope_method_nearest_po2"></div>

Returns the smallest integer power of 2 that is greater than or equal to `value`.

```

    nearest_po2(3) # Returns 4
    nearest_po2(4) # Returns 4
    nearest_po2(5) # Returns 8
    
    nearest_po2(0)  # Returns 0 (this may not be expected)
    nearest_po2(-1) # Returns 0 (this may not be expected)
```

 **Warning:** Due to its implementation, this method returns `0` rather than `1` for values less than or equal to `0`, with an exception for `value` being the smallest negative 64-bit integer (`-9223372036854775808`) in which case the `value` is returned unchanged.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_pingpong"></div>

[`float`](class_float.md) **pingpong** ( value: [`float`](class_float.md), length: [`float`](class_float.md) )<div id="class_@globalscope_method_pingpong"></div>

Wraps `value` between `0` and the `length`. If the limit is reached, the next value the function returns is decreased to the `0` side or increased to the `length` side (like a triangle wave). If `length` is less than zero, it becomes positive.

```

    pingpong(-3.0, 3.0) # Returns 3.0
    pingpong(-2.0, 3.0) # Returns 2.0
    pingpong(-1.0, 3.0) # Returns 1.0
    pingpong(0.0, 3.0)  # Returns 0.0
    pingpong(1.0, 3.0)  # Returns 1.0
    pingpong(2.0, 3.0)  # Returns 2.0
    pingpong(3.0, 3.0)  # Returns 3.0
    pingpong(4.0, 3.0)  # Returns 2.0
    pingpong(5.0, 3.0)  # Returns 1.0
    pingpong(6.0, 3.0)  # Returns 0.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_posmod"></div>

[`int`](class_int.md) **posmod** ( x: [`int`](class_int.md), y: [`int`](class_int.md) )<div id="class_@globalscope_method_posmod"></div>

Returns the integer modulus of `x` divided by `y` that wraps equally in positive and negative.

```

    print("#(i)  (i % 3)   (posmod(i, 3))")
    for i in range(-3, 4):
        print("%2d       %2d  | %2d" % [i, i % 3, posmod(i, 3)])
```

Prints:

```text

    (i)  (i % 3)   (posmod(i, 3))
    -3        0  |  0
    -2       -2  |  1
    -1       -1  |  2
     0        0  |  0
     1        1  |  1
     2        2  |  2
     3        0  |  0
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_pow"></div>

[`float`](class_float.md) **pow** ( base: [`float`](class_float.md), exp: [`float`](class_float.md) )<div id="class_@globalscope_method_pow"></div>

Returns the result of `base` raised to the power of `exp`.

In GDScript, this is the equivalent of the `**` operator.

```

    pow(2, 5)   # Returns 32.0
    pow(4, 1.5) # Returns 8.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_print"></div>

`void` **print** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_print"></div>

Converts one or more arguments of any type to string in the best way possible and prints them to the console.



```gdscript

    var a = [1, 2, 3]
    print("a", "b", a) # Prints ab[1, 2, 3]
```

```csharp

    var a = new Godot.Collections.Array { 1, 2, 3 };
    GD.Print("a", "b", a); // Prints ab[1, 2, 3]
```



 **Note:** Consider using [`push_error`](class_@globalscope.md#class_@globalscope_method_push_error) and [`push_warning`](class_@globalscope.md#class_@globalscope_method_push_warning) to print error and warning messages instead of [`print`](class_@globalscope.md#class_@globalscope_method_print) or [`print_rich`](class_@globalscope.md#class_@globalscope_method_print_rich). This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed. See also [`Engine.print_to_stdout`](class_engine.md#class_engine_property_print_to_stdout) and [`ProjectSettings.application/run/disable_stdout`](class_projectsettings.md#class_projectsettings_property_application/run/disable_stdout).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_print_rich"></div>

`void` **print_rich** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_print_rich"></div>

Converts one or more arguments of any type to string in the best way possible and prints them to the console.

The following BBCode tags are supported: `b`, `i`, `u`, `s`, `indent`, `code`, `url`, `center`, `right`, `color`, `bgcolor`, `fgcolor`.

Color tags only support the following named colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `pink`, `purple`, `cyan`, `white`, `orange`, `gray`. Hexadecimal color codes are not supported.

URL tags only support URLs wrapped by a URL tag, not URLs with a different title.

When printing to standard output, the supported subset of BBCode is converted to ANSI escape codes for the terminal emulator to display. Support for ANSI escape codes varies across terminal emulators, especially for italic and strikethrough. In standard output, `code` is represented with faint text but without any font change. Unsupported tags are left as-is in standard output.



```gdscript

    print_rich("[color=green][b]Hello world![/b][/color]") # Prints out "Hello world!" in green with a bold font
```

```csharp

    GD.PrintRich("[color=green][b]Hello world![/b][/color]"); // Prints out "Hello world!" in green with a bold font
```



 **Note:** Consider using [`push_error`](class_@globalscope.md#class_@globalscope_method_push_error) and [`push_warning`](class_@globalscope.md#class_@globalscope_method_push_warning) to print error and warning messages instead of [`print`](class_@globalscope.md#class_@globalscope_method_print) or [`print_rich`](class_@globalscope.md#class_@globalscope_method_print_rich). This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed.

 **Note:** On Windows, only Windows 10 and later correctly displays ANSI escape codes in standard output.

 **Note:** Output displayed in the editor supports clickable `[url=address]text[/url]` tags. The `[url]` tag's `address` value is handled by [`OS.shell_open`](class_os.md#class_os_method_shell_open) when clicked.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_print_verbose"></div>

`void` **print_verbose** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_print_verbose"></div>

If verbose mode is enabled ([`OS.is_stdout_verbose`](class_os.md#class_os_method_is_stdout_verbose) returning `true`), converts one or more arguments of any type to string in the best way possible and prints them to the console.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_printerr"></div>

`void` **printerr** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_printerr"></div>

Prints one or more arguments to strings in the best way possible to standard error line.



```gdscript

    printerr("prints to stderr")
```

```csharp

    GD.PrintErr("prints to stderr");
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_printraw"></div>

`void` **printraw** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_printraw"></div>

Prints one or more arguments to strings in the best way possible to the OS terminal. Unlike [`print`](class_@globalscope.md#class_@globalscope_method_print), no newline is automatically added at the end.

 **Note:** The OS terminal is *not* the same as the editor's Output dock. The output sent to the OS terminal can be seen when running Godot from a terminal. On Windows, this requires using the `console.exe` executable.



```gdscript

    printraw("A")
    printraw("B")
    printraw("C")
    # Prints ABC to terminal
```

```csharp

    GD.PrintRaw("A");
    GD.PrintRaw("B");
    GD.PrintRaw("C");
    // Prints ABC to terminal
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_prints"></div>

`void` **prints** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_prints"></div>

Prints one or more arguments to the console with a space between each argument.



```gdscript

    prints("A", "B", "C") # Prints A B C
```

```csharp

    GD.PrintS("A", "B", "C"); // Prints A B C
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_printt"></div>

`void` **printt** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_printt"></div>

Prints one or more arguments to the console with a tab between each argument.



```gdscript

    printt("A", "B", "C") # Prints A       B       C
```

```csharp

    GD.PrintT("A", "B", "C"); // Prints A       B       C
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_push_error"></div>

`void` **push_error** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_push_error"></div>

Pushes an error message to Godot's built-in debugger and to the OS terminal.



```gdscript

    push_error("test error") # Prints "test error" to debugger and terminal as error call
```

```csharp

    GD.PushError("test error"); // Prints "test error" to debugger and terminal as error call
```



 **Note:** This function does not pause project execution. To print an error message and pause project execution in debug builds, use `assert(false, "test error")` instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_push_warning"></div>

`void` **push_warning** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_push_warning"></div>

Pushes a warning message to Godot's built-in debugger and to the OS terminal.



```gdscript

    push_warning("test warning") # Prints "test warning" to debugger and terminal as warning call
```

```csharp

    GD.PushWarning("test warning"); // Prints "test warning" to debugger and terminal as warning call
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_rad_to_deg"></div>

[`float`](class_float.md) **rad_to_deg** ( rad: [`float`](class_float.md) )<div id="class_@globalscope_method_rad_to_deg"></div>

Converts an angle expressed in radians to degrees.

```

    rad_to_deg(0.523599) # Returns 30
    rad_to_deg(PI)       # Returns 180
    rad_to_deg(PI * 2)   # Returns 360
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_rand_from_seed"></div>

[`PackedInt64Array`](class_packedint64array.md) **rand_from_seed** ( seed: [`int`](class_int.md) )<div id="class_@globalscope_method_rand_from_seed"></div>

Given a `seed`, returns a [`PackedInt64Array`](class_packedint64array.md) of size `2`, where its first element is the randomized [`int`](class_int.md) value, and the second element is the same as `seed`. Passing the same `seed` consistently returns the same array.

 **Note:** "Seed" here refers to the internal state of the pseudo random number generator, currently implemented as a 64 bit integer.

```

    var a = rand_from_seed(4)
    
    print(a[0])	# Prints 2879024997
    print(a[1])	# Prints 4
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randf"></div>

[`float`](class_float.md) **randf** ( )<div id="class_@globalscope_method_randf"></div>

Returns a random floating-point value between `0.0` and `1.0` (inclusive).



```gdscript

    randf() # Returns e.g. 0.375671
```

```csharp

    GD.Randf(); // Returns e.g. 0.375671
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randf_range"></div>

[`float`](class_float.md) **randf_range** ( from: [`float`](class_float.md), to: [`float`](class_float.md) )<div id="class_@globalscope_method_randf_range"></div>

Returns a random floating-point value between `from` and `to` (inclusive).



```gdscript

    randf_range(0, 20.5) # Returns e.g. 7.45315
    randf_range(-10, 10) # Returns e.g. -3.844535
```

```csharp

    GD.RandRange(0.0, 20.5);   // Returns e.g. 7.45315
    GD.RandRange(-10.0, 10.0); // Returns e.g. -3.844535
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randfn"></div>

[`float`](class_float.md) **randfn** ( mean: [`float`](class_float.md), deviation: [`float`](class_float.md) )<div id="class_@globalscope_method_randfn"></div>

Returns a [*normally-distributed*](https://en.wikipedia.org/wiki/Normal_distribution), pseudo-random floating-point value from the specified `mean` and a standard `deviation`. This is also known as a Gaussian distribution.

 **Note:** This method uses the [*Box-Muller transform*](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) algorithm.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randi"></div>

[`int`](class_int.md) **randi** ( )<div id="class_@globalscope_method_randi"></div>

Returns a random unsigned 32-bit integer. Use remainder to obtain a random value in the interval `[0, N - 1]` (where N is smaller than 2^32).



```gdscript

    randi()           # Returns random integer between 0 and 2^32 - 1
    randi() % 20      # Returns random integer between 0 and 19
    randi() % 100     # Returns random integer between 0 and 99
    randi() % 100 + 1 # Returns random integer between 1 and 100
```

```csharp

    GD.Randi();           // Returns random integer between 0 and 2^32 - 1
    GD.Randi() % 20;      // Returns random integer between 0 and 19
    GD.Randi() % 100;     // Returns random integer between 0 and 99
    GD.Randi() % 100 + 1; // Returns random integer between 1 and 100
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randi_range"></div>

[`int`](class_int.md) **randi_range** ( from: [`int`](class_int.md), to: [`int`](class_int.md) )<div id="class_@globalscope_method_randi_range"></div>

Returns a random signed 32-bit integer between `from` and `to` (inclusive). If `to` is lesser than `from`, they are swapped.



```gdscript

    randi_range(0, 1)      # Returns either 0 or 1
    randi_range(-10, 1000) # Returns random integer between -10 and 1000
```

```csharp

    GD.RandRange(0, 1);      // Returns either 0 or 1
    GD.RandRange(-10, 1000); // Returns random integer between -10 and 1000
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_randomize"></div>

`void` **randomize** ( )<div id="class_@globalscope_method_randomize"></div>

Randomizes the seed (or the internal state) of the random number generator. The current implementation uses a number based on the device's time.

 **Note:** This function is called automatically when the project is run. If you need to fix the seed to have consistent, reproducible results, use [`seed`](class_@globalscope.md#class_@globalscope_method_seed) to initialize the random number generator.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_remap"></div>

[`float`](class_float.md) **remap** ( value: [`float`](class_float.md), istart: [`float`](class_float.md), istop: [`float`](class_float.md), ostart: [`float`](class_float.md), ostop: [`float`](class_float.md) )<div id="class_@globalscope_method_remap"></div>

Maps a `value` from range `[istart, istop]` to `[ostart, ostop]`. See also [`lerp`](class_@globalscope.md#class_@globalscope_method_lerp) and [`inverse_lerp`](class_@globalscope.md#class_@globalscope_method_inverse_lerp). If `value` is outside `[istart, istop]`, then the resulting value will also be outside `[ostart, ostop]`. If this is not desired, use [`clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on the result of this function.

```

    remap(75, 0, 100, -1, 1) # Returns 0.5
```

For complex use cases where multiple ranges are needed, consider using [`Curve`](class_curve.md) or [`Gradient`](class_gradient.md) instead.

 **Note:** If `istart == istop`, the return value is undefined (most likely NaN, INF, or -INF).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_rid_allocate_id"></div>

[`int`](class_int.md) **rid_allocate_id** ( )<div id="class_@globalscope_method_rid_allocate_id"></div>

Allocates a unique ID which can be used by the implementation to construct an RID. This is used mainly from native extensions to implement servers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_rid_from_int64"></div>

[`RID`](class_rid.md) **rid_from_int64** ( base: [`int`](class_int.md) )<div id="class_@globalscope_method_rid_from_int64"></div>

Creates an RID from a `base`. This is used mainly from native extensions to build servers.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_rotate_toward"></div>

[`float`](class_float.md) **rotate_toward** ( from: [`float`](class_float.md), to: [`float`](class_float.md), delta: [`float`](class_float.md) )<div id="class_@globalscope_method_rotate_toward"></div>

Rotates `from` toward `to` by the `delta` amount. Will not go past `to`.

Similar to [`move_toward`](class_@globalscope.md#class_@globalscope_method_move_toward), but interpolates correctly when the angles wrap around [`@GDScript.TAU`](class_@gdscript.md#class_@gdscript_constant_tau).

If `delta` is negative, this function will rotate away from `to`, toward the opposite angle, and will not go past the opposite angle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_round"></div>

[`Variant`](class_variant.md) **round** ( x: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_round"></div>

Rounds `x` to the nearest whole number, with halfway cases rounded away from 0. Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    round(2.4) # Returns 2
    round(2.5) # Returns 3
    round(2.6) # Returns 3
```

See also [`floor`](class_@globalscope.md#class_@globalscope_method_floor), [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil), and [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped).

 **Note:** For better type safety, use [`roundf`](class_@globalscope.md#class_@globalscope_method_roundf), [`roundi`](class_@globalscope.md#class_@globalscope_method_roundi), [`Vector2.round`](class_vector2.md#class_vector2_method_round), [`Vector3.round`](class_vector3.md#class_vector3_method_round), or [`Vector4.round`](class_vector4.md#class_vector4_method_round).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_roundf"></div>

[`float`](class_float.md) **roundf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_roundf"></div>

Rounds `x` to the nearest whole number, with halfway cases rounded away from 0.

A type-safe version of [`round`](class_@globalscope.md#class_@globalscope_method_round), returning a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_roundi"></div>

[`int`](class_int.md) **roundi** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_roundi"></div>

Rounds `x` to the nearest whole number, with halfway cases rounded away from 0.

A type-safe version of [`round`](class_@globalscope.md#class_@globalscope_method_round), returning an [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_seed"></div>

`void` **seed** ( base: [`int`](class_int.md) )<div id="class_@globalscope_method_seed"></div>

Sets the seed for the random number generator to `base`. Setting the seed manually can ensure consistent, repeatable results for most random functions.



```gdscript

    var my_seed = "Godot Rocks".hash()
    seed(my_seed)
    var a = randf() + randi()
    seed(my_seed)
    var b = randf() + randi()
    # a and b are now identical
```

```csharp

    ulong mySeed = (ulong)GD.Hash("Godot Rocks");
    GD.Seed(mySeed);
    var a = GD.Randf() + GD.Randi();
    GD.Seed(mySeed);
    var b = GD.Randf() + GD.Randi();
    // a and b are now identical
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_sign"></div>

[`Variant`](class_variant.md) **sign** ( x: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_sign"></div>

Returns the same type of [`Variant`](class_variant.md) as `x`, with `-1` for negative values, `1` for positive values, and `0` for zeros. For `nan` values it returns 0.

Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    sign(-6.0) # Returns -1
    sign(0.0)  # Returns 0
    sign(6.0)  # Returns 1
    sign(NAN)  # Returns 0
    
    sign(Vector3(-6.0, 0.0, 6.0)) # Returns (-1, 0, 1)
```

 **Note:** For better type safety, use [`signf`](class_@globalscope.md#class_@globalscope_method_signf), [`signi`](class_@globalscope.md#class_@globalscope_method_signi), [`Vector2.sign`](class_vector2.md#class_vector2_method_sign), [`Vector2i.sign`](class_vector2i.md#class_vector2i_method_sign), [`Vector3.sign`](class_vector3.md#class_vector3_method_sign), [`Vector3i.sign`](class_vector3i.md#class_vector3i_method_sign), [`Vector4.sign`](class_vector4.md#class_vector4_method_sign), or [`Vector4i.sign`](class_vector4i.md#class_vector4i_method_sign).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_signf"></div>

[`float`](class_float.md) **signf** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_signf"></div>

Returns `-1.0` if `x` is negative, `1.0` if `x` is positive, and `0.0` if `x` is zero. For `nan` values of `x` it returns 0.0.

```

    signf(-6.5) # Returns -1.0
    signf(0.0)  # Returns 0.0
    signf(6.5)  # Returns 1.0
    signf(NAN)  # Returns 0.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_signi"></div>

[`int`](class_int.md) **signi** ( x: [`int`](class_int.md) )<div id="class_@globalscope_method_signi"></div>

Returns `-1` if `x` is negative, `1` if `x` is positive, and `0` if `x` is zero.

```

    signi(-6) # Returns -1
    signi(0)  # Returns 0
    signi(6)  # Returns 1
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_sin"></div>

[`float`](class_float.md) **sin** ( angle_rad: [`float`](class_float.md) )<div id="class_@globalscope_method_sin"></div>

Returns the sine of angle `angle_rad` in radians.

```

    sin(0.523599)       # Returns 0.5
    sin(deg_to_rad(90)) # Returns 1.0
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_sinh"></div>

[`float`](class_float.md) **sinh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_sinh"></div>

Returns the hyperbolic sine of `x`.

```

    var a = log(2.0) # Returns 0.693147
    sinh(a) # Returns 0.75
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_smoothstep"></div>

[`float`](class_float.md) **smoothstep** ( from: [`float`](class_float.md), to: [`float`](class_float.md), x: [`float`](class_float.md) )<div id="class_@globalscope_method_smoothstep"></div>

Returns a smooth cubic Hermite interpolation between `0` and `1`.

For positive ranges (when `from <= to`) the return value is `0` when `x <= from`, and `1` when `x >= to`. If `x` lies between `from` and `to`, the return value follows an S-shaped curve that smoothly transitions from `0` to `1`.

For negative ranges (when `from > to`) the function is mirrored and returns `1` when `x <= to` and `0` when `x >= from`.

This S-shaped curve is the cubic Hermite interpolator, given by `f(y) = 3*y^2 - 2*y^3` where `y = (x-from) / (to-from)`.

```

    smoothstep(0, 2, -5.0) # Returns 0.0
    smoothstep(0, 2, 0.5) # Returns 0.15625
    smoothstep(0, 2, 1.0) # Returns 0.5
    smoothstep(0, 2, 2.0) # Returns 1.0
```

Compared to [`ease`](class_@globalscope.md#class_@globalscope_method_ease) with a curve value of `-1.6521`, [`smoothstep`](class_@globalscope.md#class_@globalscope_method_smoothstep) returns the smoothest possible curve with no sudden changes in the derivative. If you need to perform more advanced transitions, use [`Tween`](class_tween.md) or [`AnimationPlayer`](class_animationplayer.md).

 [*Comparison between smoothstep() and ease(x, -1.6521) return values*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/smoothstep_ease_comparison.png) 

 [*Smoothstep() return values with positive, zero, and negative ranges*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/smoothstep_range.webp) 



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_snapped"></div>

[`Variant`](class_variant.md) **snapped** ( x: [`Variant`](class_variant.md), step: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_snapped"></div>

Returns the multiple of `step` that is the closest to `x`. This can also be used to round a floating-point number to an arbitrary number of decimals.

The returned value is the same type of [`Variant`](class_variant.md) as `step`. Supported types: [`int`](class_int.md), [`float`](class_float.md), [`Vector2`](class_vector2.md), [`Vector2i`](class_vector2i.md), [`Vector3`](class_vector3.md), [`Vector3i`](class_vector3i.md), [`Vector4`](class_vector4.md), [`Vector4i`](class_vector4i.md).

```

    snapped(100, 32)  # Returns 96
    snapped(3.14159, 0.01)  # Returns 3.14
    
    snapped(Vector2(34, 70), Vector2(8, 8))  # Returns (32, 72)
```

See also [`ceil`](class_@globalscope.md#class_@globalscope_method_ceil), [`floor`](class_@globalscope.md#class_@globalscope_method_floor), and [`round`](class_@globalscope.md#class_@globalscope_method_round).

 **Note:** For better type safety, use [`snappedf`](class_@globalscope.md#class_@globalscope_method_snappedf), [`snappedi`](class_@globalscope.md#class_@globalscope_method_snappedi), [`Vector2.snapped`](class_vector2.md#class_vector2_method_snapped), [`Vector2i.snapped`](class_vector2i.md#class_vector2i_method_snapped), [`Vector3.snapped`](class_vector3.md#class_vector3_method_snapped), [`Vector3i.snapped`](class_vector3i.md#class_vector3i_method_snapped), [`Vector4.snapped`](class_vector4.md#class_vector4_method_snapped), or [`Vector4i.snapped`](class_vector4i.md#class_vector4i_method_snapped).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_snappedf"></div>

[`float`](class_float.md) **snappedf** ( x: [`float`](class_float.md), step: [`float`](class_float.md) )<div id="class_@globalscope_method_snappedf"></div>

Returns the multiple of `step` that is the closest to `x`. This can also be used to round a floating-point number to an arbitrary number of decimals.

A type-safe version of [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped), returning a [`float`](class_float.md).

```

    snappedf(32.0, 2.5)  # Returns 32.5
    snappedf(3.14159, 0.01)  # Returns 3.14
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_snappedi"></div>

[`int`](class_int.md) **snappedi** ( x: [`float`](class_float.md), step: [`int`](class_int.md) )<div id="class_@globalscope_method_snappedi"></div>

Returns the multiple of `step` that is the closest to `x`.

A type-safe version of [`snapped`](class_@globalscope.md#class_@globalscope_method_snapped), returning an [`int`](class_int.md).

```

    snappedi(53, 16)  # Returns 48
    snappedi(4096, 100)  # Returns 4100
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_sqrt"></div>

[`float`](class_float.md) **sqrt** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_sqrt"></div>

Returns the square root of `x`, where `x` is a non-negative number.

```

    sqrt(9)     # Returns 3
    sqrt(10.24) # Returns 3.2
    sqrt(-1)    # Returns NaN
```

 **Note:** Negative values of `x` return NaN ("Not a Number"). in C#, if you need negative inputs, use `System.Numerics.Complex`.



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_step_decimals"></div>

[`int`](class_int.md) **step_decimals** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_step_decimals"></div>

Returns the position of the first non-zero digit, after the decimal point. Note that the maximum return value is 10, which is a design decision in the implementation.

```

    var n = step_decimals(5)       # n is 0
    n = step_decimals(1.0005)      # n is 4
    n = step_decimals(0.000000005) # n is 9
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_str"></div>

[`String`](class_string.md) **str** ( ... ) vararg[^vararg]<div id="class_@globalscope_method_str"></div>

Converts one or more arguments of any [`Variant`](class_variant.md) type to a [`String`](class_string.md) in the best way possible.

```

    var a = [10, 20, 30]
    var b = str(a)
    print(len(a)) # Prints 3 (the number of elements in the array).
    print(len(b)) # Prints 12 (the length of the string "[10, 20, 30]").
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_str_to_var"></div>

[`Variant`](class_variant.md) **str_to_var** ( string: [`String`](class_string.md) )<div id="class_@globalscope_method_str_to_var"></div>

Converts a formatted `string` that was returned by [`var_to_str`](class_@globalscope.md#class_@globalscope_method_var_to_str) to the original [`Variant`](class_variant.md).



```gdscript

    var data = '{ "a": 1, "b": 2 }' # data is a String
    var dict = str_to_var(data)     # dict is a Dictionary
    print(dict["a"])                # Prints 1
```

```csharp

    string data = "{ \"a\": 1, \"b\": 2 }";           // data is a string
    var dict = GD.StrToVar(data).AsGodotDictionary(); // dict is a Dictionary
    GD.Print(dict["a"]);                              // Prints 1
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_tan"></div>

[`float`](class_float.md) **tan** ( angle_rad: [`float`](class_float.md) )<div id="class_@globalscope_method_tan"></div>

Returns the tangent of angle `angle_rad` in radians.

```

    tan(deg_to_rad(45)) # Returns 1
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_tanh"></div>

[`float`](class_float.md) **tanh** ( x: [`float`](class_float.md) )<div id="class_@globalscope_method_tanh"></div>

Returns the hyperbolic tangent of `x`.

```

    var a = log(2.0) # Returns 0.693147
    tanh(a)          # Returns 0.6
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_type_convert"></div>

[`Variant`](class_variant.md) **type_convert** ( variant: [`Variant`](class_variant.md), type: [`int`](class_int.md) )<div id="class_@globalscope_method_type_convert"></div>

Converts the given `variant` to the given `type`, using the [Variant.Type](#enum_@globalscope_variant.type) values. This method is generous with how it handles types, it can automatically convert between array types, convert numeric [`String`](class_string.md) s to [`int`](class_int.md), and converting most things to [`String`](class_string.md).

If the type conversion cannot be done, this method will return the default value for that type, for example converting [`Rect2`](class_rect2.md) to [`Vector2`](class_vector2.md) will always return [`Vector2.ZERO`](class_vector2.md#class_vector2_constant_zero). This method will never show error messages as long as `type` is a valid Variant type.

The returned value is a [`Variant`](class_variant.md), but the data inside and its type will be the same as the requested type.

```

    type_convert("Hi!", TYPE_INT) # Returns 0
    type_convert("123", TYPE_INT) # Returns 123
    type_convert(123.4, TYPE_INT) # Returns 123
    type_convert(5, TYPE_VECTOR2) # Returns (0, 0)
    type_convert("Hi!", TYPE_NIL) # Returns null
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_type_string"></div>

[`String`](class_string.md) **type_string** ( type: [`int`](class_int.md) )<div id="class_@globalscope_method_type_string"></div>

Returns a human-readable name of the given `type`, using the [Variant.Type](#enum_@globalscope_variant.type) values.

```

    print(TYPE_INT) # Prints 2.
    print(type_string(TYPE_INT)) # Prints "int".
    print(type_string(TYPE_STRING)) # Prints "String".
```

See also [`typeof`](class_@globalscope.md#class_@globalscope_method_typeof).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_typeof"></div>

[`int`](class_int.md) **typeof** ( variable: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_typeof"></div>

Returns the internal type of the given `variable`, using the [Variant.Type](#enum_@globalscope_variant.type) values.

```

    var json = JSON.new()
    json.parse('["a", "b", "c"]')
    var result = json.get_data()
    if typeof(result) == TYPE_ARRAY:
        print(result[0]) # Prints a
    else:
        print("Unexpected result")
```

See also [`type_string`](class_@globalscope.md#class_@globalscope_method_type_string).



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_var_to_bytes"></div>

[`PackedByteArray`](class_packedbytearray.md) **var_to_bytes** ( variable: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_var_to_bytes"></div>

Encodes a [`Variant`](class_variant.md) value to a byte array, without encoding objects. Deserialization can be done with [`bytes_to_var`](class_@globalscope.md#class_@globalscope_method_bytes_to_var).

 **Note:** If you need object serialization, see [`var_to_bytes_with_objects`](class_@globalscope.md#class_@globalscope_method_var_to_bytes_with_objects).

 **Note:** Encoding [`Callable`](class_callable.md) is not supported and will result in an empty value, regardless of the data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_var_to_bytes_with_objects"></div>

[`PackedByteArray`](class_packedbytearray.md) **var_to_bytes_with_objects** ( variable: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_var_to_bytes_with_objects"></div>

Encodes a [`Variant`](class_variant.md) value to a byte array. Encoding objects is allowed (and can potentially include executable code). Deserialization can be done with [`bytes_to_var_with_objects`](class_@globalscope.md#class_@globalscope_method_bytes_to_var_with_objects).

 **Note:** Encoding [`Callable`](class_callable.md) is not supported and will result in an empty value, regardless of the data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_var_to_str"></div>

[`String`](class_string.md) **var_to_str** ( variable: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_var_to_str"></div>

Converts a [`Variant`](class_variant.md) `variable` to a formatted [`String`](class_string.md) that can then be parsed using [`str_to_var`](class_@globalscope.md#class_@globalscope_method_str_to_var).



```gdscript

    var a = { "a": 1, "b": 2 }
    print(var_to_str(a))
```

```csharp

    var a = new Godot.Collections.Dictionary { ["a"] = 1, ["b"] = 2 };
    GD.Print(GD.VarToStr(a));
```



Prints:

```text

    {
        "a": 1,
        "b": 2
    }
```

 **Note:** Converting [`Signal`](class_signal.md) or [`Callable`](class_callable.md) is not supported and will result in an empty value for these types, regardless of their data.







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_weakref"></div>

[`Variant`](class_variant.md) **weakref** ( obj: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_weakref"></div>

Returns a [`WeakRef`](class_weakref.md) instance holding a weak reference to `obj`. Returns an empty [`WeakRef`](class_weakref.md) instance if `obj` is `null`. Prints an error and returns `null` if `obj` is neither [`Object`](class_object.md)-derived nor `null`.

A weak reference to an object is not enough to keep the object alive: when the only remaining references to a referent are weak references, garbage collection is free to destroy the referent and reuse its memory for something else. However, until the object is actually destroyed the weak reference may return the object even if there are no strong references to it.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_wrap"></div>

[`Variant`](class_variant.md) **wrap** ( value: [`Variant`](class_variant.md), min: [`Variant`](class_variant.md), max: [`Variant`](class_variant.md) )<div id="class_@globalscope_method_wrap"></div>

Wraps the [`Variant`](class_variant.md) `value` between `min` and `max`. Can be used for creating loop-alike behavior or infinite surfaces.

Variant types [`int`](class_int.md) and [`float`](class_float.md) are supported. If any of the arguments is [`float`](class_float.md) this function returns a [`float`](class_float.md), otherwise it returns an [`int`](class_int.md).

```

    var a = wrap(4, 5, 10)
    # a is 9 (int)
    
    var a = wrap(7, 5, 10)
    # a is 7 (int)
    
    var a = wrap(10.5, 5, 10)
    # a is 5.5 (float)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_wrapf"></div>

[`float`](class_float.md) **wrapf** ( value: [`float`](class_float.md), min: [`float`](class_float.md), max: [`float`](class_float.md) )<div id="class_@globalscope_method_wrapf"></div>

Wraps the float `value` between `min` and `max`. Can be used for creating loop-alike behavior or infinite surfaces.

```

    # Infinite loop between 5.0 and 9.9
    value = wrapf(value + 0.1, 5.0, 10.0)
```

```

    # Infinite rotation (in radians)
    angle = wrapf(angle + 0.1, 0.0, TAU)
```

```

    # Infinite rotation (in radians)
    angle = wrapf(angle + 0.1, -PI, PI)
```

 **Note:** If `min` is `0`, this is equivalent to [`fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod), so prefer using that instead.

 [`wrapf`](class_@globalscope.md#class_@globalscope_method_wrapf) is more flexible than using the [`fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) approach by giving the user control over the minimum value.







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_@globalscope_method_wrapi"></div>

[`int`](class_int.md) **wrapi** ( value: [`int`](class_int.md), min: [`int`](class_int.md), max: [`int`](class_int.md) )<div id="class_@globalscope_method_wrapi"></div>

Wraps the integer `value` between `min` and `max`. Can be used for creating loop-alike behavior or infinite surfaces.

```

    # Infinite loop between 5 and 9
    frame = wrapi(frame + 1, 5, 10)
```

```

    # result is -2
    var result = wrapi(-6, -5, -1)
```





[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
