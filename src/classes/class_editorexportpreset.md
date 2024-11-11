<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorExportPreset.xml。 -->

<div id="_class_editorexportpreset"></div>

# EditorExportPreset

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Export preset configuration.

## 描述

Export preset configuration. Instances of **EditorExportPreset** by editor UI and intended to be used a read-only configuration passed to the [`EditorExportPlatform`](class_editorexportplatform.md) methods when exporting the project.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                   | [`are_advanced_options_enabled`](class_editorexportpreset.md#class_editorexportpreset_method_are_advanced_options_enabled) ( ) const[^const]                                                                                           |
| [`String`](class_string.md)                               | [`get_custom_features`](class_editorexportpreset.md#class_editorexportpreset_method_get_custom_features) ( ) const[^const]                                                                                                             |
| [`Dictionary`](class_dictionary.md)                       | [`get_customized_files`](class_editorexportpreset.md#class_editorexportpreset_method_get_customized_files) ( ) const[^const]                                                                                                           |
| [`int`](class_int.md)                                     | [`get_customized_files_count`](class_editorexportpreset.md#class_editorexportpreset_method_get_customized_files_count) ( ) const[^const]                                                                                               |
| [`bool`](class_bool.md)                                   | [`get_encrypt_directory`](class_editorexportpreset.md#class_editorexportpreset_method_get_encrypt_directory) ( ) const[^const]                                                                                                         |
| [`bool`](class_bool.md)                                   | [`get_encrypt_pck`](class_editorexportpreset.md#class_editorexportpreset_method_get_encrypt_pck) ( ) const[^const]                                                                                                                     |
| [`String`](class_string.md)                               | [`get_encryption_ex_filter`](class_editorexportpreset.md#class_editorexportpreset_method_get_encryption_ex_filter) ( ) const[^const]                                                                                                   |
| [`String`](class_string.md)                               | [`get_encryption_in_filter`](class_editorexportpreset.md#class_editorexportpreset_method_get_encryption_in_filter) ( ) const[^const]                                                                                                   |
| [`String`](class_string.md)                               | [`get_encryption_key`](class_editorexportpreset.md#class_editorexportpreset_method_get_encryption_key) ( ) const[^const]                                                                                                               |
| [`String`](class_string.md)                               | [`get_exclude_filter`](class_editorexportpreset.md#class_editorexportpreset_method_get_exclude_filter) ( ) const[^const]                                                                                                               |
| [ExportFilter](#enum_editorexportpreset_exportfilter)     | [`get_export_filter`](class_editorexportpreset.md#class_editorexportpreset_method_get_export_filter) ( ) const[^const]                                                                                                                 |
| [`String`](class_string.md)                               | [`get_export_path`](class_editorexportpreset.md#class_editorexportpreset_method_get_export_path) ( ) const[^const]                                                                                                                     |
| [FileExportMode](#enum_editorexportpreset_fileexportmode) | [`get_file_export_mode`](class_editorexportpreset.md#class_editorexportpreset_method_get_file_export_mode) ( path: [`String`](class_string.md), default: [FileExportMode](#enum_editorexportpreset_fileexportmode) = 0 ) const[^const] |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_files_to_export`](class_editorexportpreset.md#class_editorexportpreset_method_get_files_to_export) ( ) const[^const]                                                                                                             |
| [`String`](class_string.md)                               | [`get_include_filter`](class_editorexportpreset.md#class_editorexportpreset_method_get_include_filter) ( ) const[^const]                                                                                                               |
| [`Variant`](class_variant.md)                             | [`get_or_env`](class_editorexportpreset.md#class_editorexportpreset_method_get_or_env) ( name: [`StringName`](class_stringname.md), env_var: [`String`](class_string.md) ) const[^const]                                               |
| [`PackedStringArray`](class_packedstringarray.md)         | [`get_patches`](class_editorexportpreset.md#class_editorexportpreset_method_get_patches) ( ) const[^const]                                                                                                                             |
| [`String`](class_string.md)                               | [`get_preset_name`](class_editorexportpreset.md#class_editorexportpreset_method_get_preset_name) ( ) const[^const]                                                                                                                     |
| [`int`](class_int.md)                                     | [`get_script_export_mode`](class_editorexportpreset.md#class_editorexportpreset_method_get_script_export_mode) ( ) const[^const]                                                                                                       |
| [`String`](class_string.md)                               | [`get_version`](class_editorexportpreset.md#class_editorexportpreset_method_get_version) ( name: [`StringName`](class_stringname.md), windows_version: [`bool`](class_bool.md) ) const[^const]                                         |
| [`bool`](class_bool.md)                                   | [`has`](class_editorexportpreset.md#class_editorexportpreset_method_has) ( property: [`StringName`](class_stringname.md) ) const[^const]                                                                                               |
| [`bool`](class_bool.md)                                   | [`has_export_file`](class_editorexportpreset.md#class_editorexportpreset_method_has_export_file) ( path: [`String`](class_string.md) )                                                                                                 |
| [`bool`](class_bool.md)                                   | [`is_dedicated_server`](class_editorexportpreset.md#class_editorexportpreset_method_is_dedicated_server) ( ) const[^const]                                                                                                             |
| [`bool`](class_bool.md)                                   | [`is_runnable`](class_editorexportpreset.md#class_editorexportpreset_method_is_runnable) ( ) const[^const]                                                                                                                             |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_editorexportpreset_exportfilter"></div>

enum **ExportFilter**: <div id="enum_editorexportpreset_exportfilter"></div>

<div id="_class_editorexportpreset_constant_export_all_resources"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **EXPORT_ALL_RESOURCES** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_export_selected_scenes"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **EXPORT_SELECTED_SCENES** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_export_selected_resources"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **EXPORT_SELECTED_RESOURCES** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_exclude_selected_resources"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **EXCLUDE_SELECTED_RESOURCES** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_export_customized"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **EXPORT_CUSTOMIZED** = ``4``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorexportpreset_fileexportmode"></div>

enum **FileExportMode**: <div id="enum_editorexportpreset_fileexportmode"></div>

<div id="_class_editorexportpreset_constant_mode_file_not_customized"></div>

[FileExportMode](#enum_editorexportpreset_fileexportmode) **MODE_FILE_NOT_CUSTOMIZED** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_mode_file_strip"></div>

[FileExportMode](#enum_editorexportpreset_fileexportmode) **MODE_FILE_STRIP** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_mode_file_keep"></div>

[FileExportMode](#enum_editorexportpreset_fileexportmode) **MODE_FILE_KEEP** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_mode_file_remove"></div>

[FileExportMode](#enum_editorexportpreset_fileexportmode) **MODE_FILE_REMOVE** = ``3``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_editorexportpreset_scriptexportmode"></div>

enum **ScriptExportMode**: <div id="enum_editorexportpreset_scriptexportmode"></div>

<div id="_class_editorexportpreset_constant_mode_script_text"></div>

[ScriptExportMode](#enum_editorexportpreset_scriptexportmode) **MODE_SCRIPT_TEXT** = ``0``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_mode_script_binary_tokens"></div>

[ScriptExportMode](#enum_editorexportpreset_scriptexportmode) **MODE_SCRIPT_BINARY_TOKENS** = ``1``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<div id="_class_editorexportpreset_constant_mode_script_binary_tokens_compressed"></div>

[ScriptExportMode](#enum_editorexportpreset_scriptexportmode) **MODE_SCRIPT_BINARY_TOKENS_COMPRESSED** = ``2``

该枚举目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！



<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorexportpreset_method_are_advanced_options_enabled"></div>

[`bool`](class_bool.md) **are_advanced_options_enabled** ( ) const[^const]<div id="class_editorexportpreset_method_are_advanced_options_enabled"></div>

Returns `true`, is "Advanced" toggle is enabled in the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_custom_features"></div>

[`String`](class_string.md) **get_custom_features** ( ) const[^const]<div id="class_editorexportpreset_method_get_custom_features"></div>

Returns string with a comma separated list of custom features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_customized_files"></div>

[`Dictionary`](class_dictionary.md) **get_customized_files** ( ) const[^const]<div id="class_editorexportpreset_method_get_customized_files"></div>

Returns [`Dictionary`](class_dictionary.md) of files selected in the "Resources" tab of the export dialog. Dictionary keys are file names and values are export mode - `"strip`, `"keep"`, or `"remove"`. See also [`get_file_export_mode`](class_editorexportpreset.md#class_editorexportpreset_method_get_file_export_mode).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_customized_files_count"></div>

[`int`](class_int.md) **get_customized_files_count** ( ) const[^const]<div id="class_editorexportpreset_method_get_customized_files_count"></div>

Returns number of files selected in the "Resources" tab of the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_encrypt_directory"></div>

[`bool`](class_bool.md) **get_encrypt_directory** ( ) const[^const]<div id="class_editorexportpreset_method_get_encrypt_directory"></div>

Returns `true`, PCK directory encryption is enabled in the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_encrypt_pck"></div>

[`bool`](class_bool.md) **get_encrypt_pck** ( ) const[^const]<div id="class_editorexportpreset_method_get_encrypt_pck"></div>

Returns `true`, PCK encryption is enabled in the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_encryption_ex_filter"></div>

[`String`](class_string.md) **get_encryption_ex_filter** ( ) const[^const]<div id="class_editorexportpreset_method_get_encryption_ex_filter"></div>

Returns file filters to exclude during PCK encryption.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_encryption_in_filter"></div>

[`String`](class_string.md) **get_encryption_in_filter** ( ) const[^const]<div id="class_editorexportpreset_method_get_encryption_in_filter"></div>

Returns file filters to include during PCK encryption.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_encryption_key"></div>

[`String`](class_string.md) **get_encryption_key** ( ) const[^const]<div id="class_editorexportpreset_method_get_encryption_key"></div>

Returns PCK encryption key.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_exclude_filter"></div>

[`String`](class_string.md) **get_exclude_filter** ( ) const[^const]<div id="class_editorexportpreset_method_get_exclude_filter"></div>

Returns file filters to exclude during export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_export_filter"></div>

[ExportFilter](#enum_editorexportpreset_exportfilter) **get_export_filter** ( ) const[^const]<div id="class_editorexportpreset_method_get_export_filter"></div>

Returns export file filter mode selected in the "Resources" tab of the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_export_path"></div>

[`String`](class_string.md) **get_export_path** ( ) const[^const]<div id="class_editorexportpreset_method_get_export_path"></div>

Returns export target path.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_file_export_mode"></div>

[FileExportMode](#enum_editorexportpreset_fileexportmode) **get_file_export_mode** ( path: [`String`](class_string.md), default: [FileExportMode](#enum_editorexportpreset_fileexportmode) = 0 ) const[^const]<div id="class_editorexportpreset_method_get_file_export_mode"></div>

Returns file export mode for the specified file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_files_to_export"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_files_to_export** ( ) const[^const]<div id="class_editorexportpreset_method_get_files_to_export"></div>

Returns array of files to export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_include_filter"></div>

[`String`](class_string.md) **get_include_filter** ( ) const[^const]<div id="class_editorexportpreset_method_get_include_filter"></div>

Returns file filters to include during export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_or_env"></div>

[`Variant`](class_variant.md) **get_or_env** ( name: [`StringName`](class_stringname.md), env_var: [`String`](class_string.md) ) const[^const]<div id="class_editorexportpreset_method_get_or_env"></div>

Returns export option value or value of environment variable if it is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_patches"></div>

[`PackedStringArray`](class_packedstringarray.md) **get_patches** ( ) const[^const]<div id="class_editorexportpreset_method_get_patches"></div>

Returns the list of packs on which to base a patch export on.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_preset_name"></div>

[`String`](class_string.md) **get_preset_name** ( ) const[^const]<div id="class_editorexportpreset_method_get_preset_name"></div>

Returns export preset name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_script_export_mode"></div>

[`int`](class_int.md) **get_script_export_mode** ( ) const[^const]<div id="class_editorexportpreset_method_get_script_export_mode"></div>

Returns script export mode.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_get_version"></div>

[`String`](class_string.md) **get_version** ( name: [`StringName`](class_stringname.md), windows_version: [`bool`](class_bool.md) ) const[^const]<div id="class_editorexportpreset_method_get_version"></div>

Returns the preset's version number, or fall back to the [`ProjectSettings.application/config/version`](class_projectsettings.md#class_projectsettings_property_application/config/version) project setting if set to an empty string.

If `windows_version` is `true`, formats the returned version number to be compatible with Windows executable metadata.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_has"></div>

[`bool`](class_bool.md) **has** ( property: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorexportpreset_method_has"></div>

Returns `true` if preset has specified property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_has_export_file"></div>

[`bool`](class_bool.md) **has_export_file** ( path: [`String`](class_string.md) )<div id="class_editorexportpreset_method_has_export_file"></div>

Returns `true` if specified file is exported.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_is_dedicated_server"></div>

[`bool`](class_bool.md) **is_dedicated_server** ( ) const[^const]<div id="class_editorexportpreset_method_is_dedicated_server"></div>

Returns `true` if dedicated server export mode is selected in the export dialog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportpreset_method_is_runnable"></div>

[`bool`](class_bool.md) **is_runnable** ( ) const[^const]<div id="class_editorexportpreset_method_is_runnable"></div>

Returns `true` if "Runnable" toggle is enabled in the export dialog.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
