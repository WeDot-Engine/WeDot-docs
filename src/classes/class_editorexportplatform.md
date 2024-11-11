<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorExportPlatform.xml。 -->

<div id="_class_editorexportplatform"></div>

# EditorExportPlatform

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`EditorExportPlatformAndroid`](class_editorexportplatformandroid.md), [`EditorExportPlatformExtension`](class_editorexportplatformextension.md), [`EditorExportPlatformIOS`](class_editorexportplatformios.md), [`EditorExportPlatformMacOS`](class_editorexportplatformmacos.md), [`EditorExportPlatformPC`](class_editorexportplatformpc.md), [`EditorExportPlatformWeb`](class_editorexportplatformweb.md)

Identifies a supported export platform, and internally provides the functionality of exporting to that platform.

## 描述

Base resource that provides the functionality of exporting a release build of a project to a platform, from the editor. Stores platform-specific metadata such as the name and supported features of the platform, and performs the exporting of projects, PCK files, and ZIP files. Uses an export template for the platform provided at the time of project exporting.

Used in scripting by [`EditorExportPlugin`](class_editorexportplugin.md) to configure platform-specific customization of scenes and resources. See [`EditorExportPlugin._begin_customize_scenes`](class_editorexportplugin.md#class_editorexportplugin_private_method__begin_customize_scenes) and [`EditorExportPlugin._begin_customize_resources`](class_editorexportplugin.md#class_editorexportplugin_private_method__begin_customize_resources) for more details.

## 方法

|||
|:-:|:--|
| `void`                                                            | [`add_message`](class_editorexportplatform.md#class_editorexportplatform_method_add_message) ( type: [ExportMessageType](#enum_editorexportplatform_exportmessagetype), category: [`String`](class_string.md), message: [`String`](class_string.md) )                                                                                                                                         |
| `void`                                                            | [`clear_messages`](class_editorexportplatform.md#class_editorexportplatform_method_clear_messages) ( )                                                                                                                                                                                                                                                                                        |
| [`EditorExportPreset`](class_editorexportpreset.md)               | [`create_preset`](class_editorexportplatform.md#class_editorexportplatform_method_create_preset) ( )                                                                                                                                                                                                                                                                                          |
| [Error](#enum_@globalscope_error)                                 | [`export_pack`](class_editorexportplatform.md#class_editorexportplatform_method_export_pack) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )                                                                                               |
| [Error](#enum_@globalscope_error)                                 | [`export_pack_patch`](class_editorexportplatform.md#class_editorexportplatform_method_export_pack_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 ) |
| [Error](#enum_@globalscope_error)                                 | [`export_project`](class_editorexportplatform.md#class_editorexportplatform_method_export_project) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )                                                                                         |
| [Error](#enum_@globalscope_error)                                 | [`export_project_files`](class_editorexportplatform.md#class_editorexportplatform_method_export_project_files) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), save_cb: [`Callable`](class_callable.md), shared_cb: [`Callable`](class_callable.md) = Callable() )                                                                             |
| [Error](#enum_@globalscope_error)                                 | [`export_zip`](class_editorexportplatform.md#class_editorexportplatform_method_export_zip) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )                                                                                                 |
| [Error](#enum_@globalscope_error)                                 | [`export_zip_patch`](class_editorexportplatform.md#class_editorexportplatform_method_export_zip_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )   |
| [`Dictionary`](class_dictionary.md)                               | [`find_export_template`](class_editorexportplatform.md#class_editorexportplatform_method_find_export_template) ( template_file_name: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                              |
| [`PackedStringArray`](class_packedstringarray.md)                 | [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) ( flags: [DebugFlags](#enum_editorexportplatform_debugflags) )                                                                                                                                                                                                                         |
| [`Array`](class_array.md)                                         | [`get_current_presets`](class_editorexportplatform.md#class_editorexportplatform_method_get_current_presets) ( ) const[^const]                                                                                                                                                                                                                                                                |
| [`PackedStringArray`](class_packedstringarray.md)                 | [`get_forced_export_files`](class_editorexportplatform.md#class_editorexportplatform_method_get_forced_export_files) ( ) static[^static]                                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                                       | [`get_message_category`](class_editorexportplatform.md#class_editorexportplatform_method_get_message_category) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                 |
| [`int`](class_int.md)                                             | [`get_message_count`](class_editorexportplatform.md#class_editorexportplatform_method_get_message_count) ( ) const[^const]                                                                                                                                                                                                                                                                    |
| [`String`](class_string.md)                                       | [`get_message_text`](class_editorexportplatform.md#class_editorexportplatform_method_get_message_text) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                         |
| [ExportMessageType](#enum_editorexportplatform_exportmessagetype) | [`get_message_type`](class_editorexportplatform.md#class_editorexportplatform_method_get_message_type) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                                                                         |
| [`String`](class_string.md)                                       | [`get_os_name`](class_editorexportplatform.md#class_editorexportplatform_method_get_os_name) ( ) const[^const]                                                                                                                                                                                                                                                                                |
| [ExportMessageType](#enum_editorexportplatform_exportmessagetype) | [`get_worst_message_type`](class_editorexportplatform.md#class_editorexportplatform_method_get_worst_message_type) ( ) const[^const]                                                                                                                                                                                                                                                          |
| [`Dictionary`](class_dictionary.md)                               | [`save_pack`](class_editorexportplatform.md#class_editorexportplatform_method_save_pack) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), embed: [`bool`](class_bool.md) = false )                                                                                                                           |
| [`Dictionary`](class_dictionary.md)                               | [`save_pack_patch`](class_editorexportplatform.md#class_editorexportplatform_method_save_pack_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )                                                                                                                                                       |
| [`Dictionary`](class_dictionary.md)                               | [`save_zip`](class_editorexportplatform.md#class_editorexportplatform_method_save_zip) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )                                                                                                                                                                     |
| [`Dictionary`](class_dictionary.md)                               | [`save_zip_patch`](class_editorexportplatform.md#class_editorexportplatform_method_save_zip_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )                                                                                                                                                         |
| [Error](#enum_@globalscope_error)                                 | [`ssh_push_to_remote`](class_editorexportplatform.md#class_editorexportplatform_method_ssh_push_to_remote) ( host: [`String`](class_string.md), port: [`String`](class_string.md), scp_args: [`PackedStringArray`](class_packedstringarray.md), src_file: [`String`](class_string.md), dst_file: [`String`](class_string.md) ) const[^const]                                                  |
| [Error](#enum_@globalscope_error)                                 | [`ssh_run_on_remote`](class_editorexportplatform.md#class_editorexportplatform_method_ssh_run_on_remote) ( host: [`String`](class_string.md), port: [`String`](class_string.md), ssh_arg: [`PackedStringArray`](class_packedstringarray.md), cmd_args: [`String`](class_string.md), output: [`Array`](class_array.md) = [], port_fwd: [`int`](class_int.md) = -1 ) const[^const]              |
| [`int`](class_int.md)                                             | [`ssh_run_on_remote_no_wait`](class_editorexportplatform.md#class_editorexportplatform_method_ssh_run_on_remote_no_wait) ( host: [`String`](class_string.md), port: [`String`](class_string.md), ssh_args: [`PackedStringArray`](class_packedstringarray.md), cmd_args: [`String`](class_string.md), port_fwd: [`int`](class_int.md) = -1 ) const[^const]                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorexportplatform_exportmessagetype"></div>

enum **ExportMessageType**: <div id="enum_editorexportplatform_exportmessagetype"></div>

<div id="_class_editorexportplatform_constant_export_message_none"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **EXPORT_MESSAGE_NONE** = ``0``

Invalid message type used as the default value when no type is specified.

<div id="_class_editorexportplatform_constant_export_message_info"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **EXPORT_MESSAGE_INFO** = ``1``

Message type for informational messages that have no effect on the export.

<div id="_class_editorexportplatform_constant_export_message_warning"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **EXPORT_MESSAGE_WARNING** = ``2``

Message type for warning messages that should be addressed but still allow to complete the export.

<div id="_class_editorexportplatform_constant_export_message_error"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **EXPORT_MESSAGE_ERROR** = ``3``

Message type for error messages that must be addressed and fail the export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorexportplatform_debugflags"></div>

flags **DebugFlags**: <div id="enum_editorexportplatform_debugflags"></div>

<div id="_class_editorexportplatform_constant_debug_flag_dumb_client"></div>

[DebugFlags](#enum_editorexportplatform_debugflags) **DEBUG_FLAG_DUMB_CLIENT** = ``1``

Flag is set if remotely debugged project is expected to use remote file system. If set, [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) will add `--remove-fs` and `--remote-fs-password` (if password is set in the editor settings) command line arguments to the list.

<div id="_class_editorexportplatform_constant_debug_flag_remote_debug"></div>

[DebugFlags](#enum_editorexportplatform_debugflags) **DEBUG_FLAG_REMOTE_DEBUG** = ``2``

Flag is set if remote debug is enabled. If set, [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) will add `--remote-debug` and `--breakpoints` (if breakpoints are selected in the script editor or added by the plugin) command line arguments to the list.

<div id="_class_editorexportplatform_constant_debug_flag_remote_debug_localhost"></div>

[DebugFlags](#enum_editorexportplatform_debugflags) **DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST** = ``4``

Flag is set if remotely debugged project is running on the localhost. If set, [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) will use `localhost` instead of [`EditorSettings.network/debug/remote_host`](class_editorsettings.md#class_editorsettings_property_network/debug/remote_host) as remote debugger host.

<div id="_class_editorexportplatform_constant_debug_flag_view_collisions"></div>

[DebugFlags](#enum_editorexportplatform_debugflags) **DEBUG_FLAG_VIEW_COLLISIONS** = ``8``

Flag is set if "Visible Collision Shapes" remote debug option is enabled. If set, [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) will add `--debug-collisions` command line arguments to the list.

<div id="_class_editorexportplatform_constant_debug_flag_view_navigation"></div>

[DebugFlags](#enum_editorexportplatform_debugflags) **DEBUG_FLAG_VIEW_NAVIGATION** = ``16``

Flag is set if Visible Navigation" remote debug option is enabled. If set, [`gen_export_flags`](class_editorexportplatform.md#class_editorexportplatform_method_gen_export_flags) will add `--debug-navigation` command line arguments to the list.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorexportplatform_method_add_message"></div>

`void` **add_message** ( type: [ExportMessageType](#enum_editorexportplatform_exportmessagetype), category: [`String`](class_string.md), message: [`String`](class_string.md) )<div id="class_editorexportplatform_method_add_message"></div>

Adds a message to the export log that will be displayed when exporting ends.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_clear_messages"></div>

`void` **clear_messages** ( )<div id="class_editorexportplatform_method_clear_messages"></div>

Clears the export log.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_create_preset"></div>

[`EditorExportPreset`](class_editorexportpreset.md) **create_preset** ( )<div id="class_editorexportplatform_method_create_preset"></div>

Create a new preset for this platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_pack"></div>

[Error](#enum_@globalscope_error) **export_pack** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )<div id="class_editorexportplatform_method_export_pack"></div>

Creates a PCK archive at `path` for the specified `preset`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_pack_patch"></div>

[Error](#enum_@globalscope_error) **export_pack_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )<div id="class_editorexportplatform_method_export_pack_patch"></div>

Creates a patch PCK archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.

 **Note:** `patches` is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_project"></div>

[Error](#enum_@globalscope_error) **export_project** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )<div id="class_editorexportplatform_method_export_project"></div>

Creates a full project at `path` for the specified `preset`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_project_files"></div>

[Error](#enum_@globalscope_error) **export_project_files** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), save_cb: [`Callable`](class_callable.md), shared_cb: [`Callable`](class_callable.md) = Callable() )<div id="class_editorexportplatform_method_export_project_files"></div>

Exports project files for the specified preset. This method can be used to implement custom export format, other than PCK and ZIP. One of the callbacks is called for each exported file.

 `save_cb` is called for all exported files and have the following arguments: `file_path: String`, `file_data: PackedByteArray`, `file_index: int`, `file_count: int`, `encryption_include_filters: PackedStringArray`, `encryption_exclude_filters: PackedStringArray`, `encryption_key: PackedByteArray`.

 `shared_cb` is called for exported native shared/static libraries and have the following arguments: `file_path: String`, `tags: PackedStringArray`, `target_folder: String`.

 **Note:** `file_index` and `file_count` are intended for progress tracking only and aren't necesserely unique and precise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_zip"></div>

[Error](#enum_@globalscope_error) **export_zip** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )<div id="class_editorexportplatform_method_export_zip"></div>

Create a ZIP archive at `path` for the specified `preset`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_export_zip_patch"></div>

[Error](#enum_@globalscope_error) **export_zip_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md) = PackedStringArray(), flags: [DebugFlags](#enum_editorexportplatform_debugflags) = 0 )<div id="class_editorexportplatform_method_export_zip_patch"></div>

Create a patch ZIP archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.

 **Note:** `patches` is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_find_export_template"></div>

[`Dictionary`](class_dictionary.md) **find_export_template** ( template_file_name: [`String`](class_string.md) ) const[^const]<div id="class_editorexportplatform_method_find_export_template"></div>

Locates export template for the platform, and returns [`Dictionary`](class_dictionary.md) with the following keys: `path: String` and `error: String`. This method is provided for convenience and custom export platforms aren't required to use it or keep export templates stored in the same way official templates are.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_gen_export_flags"></div>

[`PackedStringArray`](class_packedstringarray.md) **gen_export_flags** ( flags: [DebugFlags](#enum_editorexportplatform_debugflags) )<div id="class_editorexportplatform_method_gen_export_flags"></div>

Generates array of command line arguments for the default export templates for the debug flags and editor settings.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_current_presets"></div>

[`Array`](class_array.md) **get_current_presets** ( ) const[^const]<div id="class_editorexportplatform_method_get_current_presets"></div>

Returns array of [`EditorExportPreset`](class_editorexportpreset.md) s for this platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_forced_export_files"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_forced_export_files** ( ) static[^static]<div id="class_editorexportplatform_method_get_forced_export_files"></div>

Returns array of core file names that always should be exported regardless of preset config.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_message_category"></div>

[`String`](class_string.md) **get_message_category** ( index: [`int`](class_int.md) ) const[^const]<div id="class_editorexportplatform_method_get_message_category"></div>

Returns message category, for the message with `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_message_count"></div>

[`int`](class_int.md) **get_message_count** ( ) const[^const]<div id="class_editorexportplatform_method_get_message_count"></div>

Returns number of messages in the export log.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_message_text"></div>

[`String`](class_string.md) **get_message_text** ( index: [`int`](class_int.md) ) const[^const]<div id="class_editorexportplatform_method_get_message_text"></div>

Returns message text, for the message with `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_message_type"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **get_message_type** ( index: [`int`](class_int.md) ) const[^const]<div id="class_editorexportplatform_method_get_message_type"></div>

Returns message type, for the message with `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_os_name"></div>

[`String`](class_string.md) **get_os_name** ( ) const[^const]<div id="class_editorexportplatform_method_get_os_name"></div>

Returns the name of the export operating system handled by this **EditorExportPlatform** class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_get_worst_message_type"></div>

[ExportMessageType](#enum_editorexportplatform_exportmessagetype) **get_worst_message_type** ( ) const[^const]<div id="class_editorexportplatform_method_get_worst_message_type"></div>

Returns most severe message type currently present in the export log.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_save_pack"></div>

[`Dictionary`](class_dictionary.md) **save_pack** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), embed: [`bool`](class_bool.md) = false )<div id="class_editorexportplatform_method_save_pack"></div>

Saves PCK archive and returns [`Dictionary`](class_dictionary.md) with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).

If `embed` is `true`, PCK content is appended to the end of `path` file and return [`Dictionary`](class_dictionary.md) additionally include following keys: `embedded_start: int` (embedded PCK offset) and `embedded_size: int` (embedded PCK size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_save_pack_patch"></div>

[`Dictionary`](class_dictionary.md) **save_pack_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )<div id="class_editorexportplatform_method_save_pack_patch"></div>

Saves patch PCK archive and returns [`Dictionary`](class_dictionary.md) with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_save_zip"></div>

[`Dictionary`](class_dictionary.md) **save_zip** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )<div id="class_editorexportplatform_method_save_zip"></div>

Saves ZIP archive and returns [`Dictionary`](class_dictionary.md) with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_save_zip_patch"></div>

[`Dictionary`](class_dictionary.md) **save_zip_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md) )<div id="class_editorexportplatform_method_save_zip_patch"></div>

Saves patch ZIP archive and returns [`Dictionary`](class_dictionary.md) with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_ssh_push_to_remote"></div>

[Error](#enum_@globalscope_error) **ssh_push_to_remote** ( host: [`String`](class_string.md), port: [`String`](class_string.md), scp_args: [`PackedStringArray`](class_packedstringarray.md), src_file: [`String`](class_string.md), dst_file: [`String`](class_string.md) ) const[^const]<div id="class_editorexportplatform_method_ssh_push_to_remote"></div>

Uploads specified file over SCP protocol to the remote host.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_ssh_run_on_remote"></div>

[Error](#enum_@globalscope_error) **ssh_run_on_remote** ( host: [`String`](class_string.md), port: [`String`](class_string.md), ssh_arg: [`PackedStringArray`](class_packedstringarray.md), cmd_args: [`String`](class_string.md), output: [`Array`](class_array.md) = [], port_fwd: [`int`](class_int.md) = -1 ) const[^const]<div id="class_editorexportplatform_method_ssh_run_on_remote"></div>

Executes specified command on the remote host via SSH protocol and returns command output in the `output`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatform_method_ssh_run_on_remote_no_wait"></div>

[`int`](class_int.md) **ssh_run_on_remote_no_wait** ( host: [`String`](class_string.md), port: [`String`](class_string.md), ssh_args: [`PackedStringArray`](class_packedstringarray.md), cmd_args: [`String`](class_string.md), port_fwd: [`int`](class_int.md) = -1 ) const[^const]<div id="class_editorexportplatform_method_ssh_run_on_remote_no_wait"></div>

Executes specified command on the remote host via SSH protocol and returns process ID (on the remote host) without waiting for command to finish.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
