<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/EditorExportPlatformExtension.xml。 -->

<div id="_class_editorexportplatformextension"></div>

# EditorExportPlatformExtension

**继承：** [`EditorExportPlatform`](class_editorexportplatform.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Base class for custom [`EditorExportPlatform`](class_editorexportplatform.md) implementations (plugins).

## 描述

External [`EditorExportPlatform`](class_editorexportplatform.md) implementations should inherit from this class.

To use [`EditorExportPlatform`](class_editorexportplatform.md), register it using the [`EditorPlugin.add_export_platform`](class_editorplugin.md#class_editorplugin_method_add_export_platform) method first.

## 方法

|||
|:-:|:--|
| [`bool`](class_bool.md)                                     | [`_can_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__can_export) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                                                                            |
| `void`                                                      | [`_cleanup`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__cleanup) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                            |
| [Error](#enum_@globalscope_error)                           | [`_export_pack`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__export_pack) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]                                                                         |
| [Error](#enum_@globalscope_error)                           | [`_export_pack_patch`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__export_pack_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual] |
| [Error](#enum_@globalscope_error)                           | [`_export_project`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__export_project) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]                                                                   |
| [Error](#enum_@globalscope_error)                           | [`_export_zip`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__export_zip) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]                                                                           |
| [Error](#enum_@globalscope_error)                           | [`_export_zip_patch`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__export_zip_patch) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]   |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_binary_extensions`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_binary_extensions) ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]                                                                                                                                                                      |
| [`String`](class_string.md)                                 | [`_get_debug_protocol`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_debug_protocol) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                        |
| [`String`](class_string.md)                                 | [`_get_device_architecture`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_device_architecture) ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`_get_export_option_visibility`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_export_option_visibility) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                   |
| [`String`](class_string.md)                                 | [`_get_export_option_warning`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_export_option_warning) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), option: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]                                                                                                                 |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_export_options`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_export_options) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                        |
| [`Texture2D`](class_texture2d.md)                           | [`_get_logo`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_logo) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                            |
| [`String`](class_string.md)                                 | [`_get_name`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                            |
| [`ImageTexture`](class_imagetexture.md)                     | [`_get_option_icon`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_option_icon) ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                |
| [`String`](class_string.md)                                 | [`_get_option_label`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_option_label) ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                              |
| [`String`](class_string.md)                                 | [`_get_option_tooltip`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_option_tooltip) ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                          |
| [`int`](class_int.md)                                       | [`_get_options_count`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_options_count) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                          |
| [`String`](class_string.md)                                 | [`_get_options_tooltip`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_options_tooltip) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                      |
| [`String`](class_string.md)                                 | [`_get_os_name`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_os_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                      |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_platform_features`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_platform_features) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                  |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_preset_features`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_preset_features) ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]                                                                                                                                                                          |
| [`Texture2D`](class_texture2d.md)                           | [`_get_run_icon`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_run_icon) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                                                                                    |
| [`bool`](class_bool.md)                                     | [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]                                                                                                                                                  |
| [`bool`](class_bool.md)                                     | [`_is_executable`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__is_executable) ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                                                                                                                                                                                                |
| [`bool`](class_bool.md)                                     | [`_poll_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__poll_export) ( ) virtual[^virtual]                                                                                                                                                                                                                                                                    |
| [Error](#enum_@globalscope_error)                           | [`_run`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__run) ( preset: [`EditorExportPreset`](class_editorexportpreset.md), device: [`int`](class_int.md), debug_flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`_should_update_export_options`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__should_update_export_options) ( ) virtual[^virtual]                                                                                                                                                                                                                                  |
| [`String`](class_string.md)                                 | [`get_config_error`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_get_config_error) ( ) const[^const]                                                                                                                                                                                                                                                                        |
| [`bool`](class_bool.md)                                     | [`get_config_missing_templates`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_get_config_missing_templates) ( ) const[^const]                                                                                                                                                                                                                                                |
| `void`                                                      | [`set_config_error`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_set_config_error) ( error_text: [`String`](class_string.md) ) const[^const]                                                                                                                                                                                                                                |
| `void`                                                      | [`set_config_missing_templates`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_set_config_missing_templates) ( missing_templates: [`bool`](class_bool.md) ) const[^const]                                                                                                                                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorexportplatformextension_private_method__can_export"></div>

[`bool`](class_bool.md) **_can_export** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__can_export"></div>

**Optional.** 

Returns `true`, if specified `preset` is valid and can be exported. Use [`set_config_error`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_set_config_error) and [`set_config_missing_templates`](class_editorexportplatformextension.md#class_editorexportplatformextension_method_set_config_missing_templates) to set error details.

Usual implementation can call [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration) and [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) to determine if export is possible.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__cleanup"></div>

`void` **_cleanup** ( ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__cleanup"></div>

**Optional.** 

Called by the editor before platform is unregistered.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__export_pack"></div>

[Error](#enum_@globalscope_error) **_export_pack** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__export_pack"></div>

**Optional.** 

Creates a PCK archive at `path` for the specified `preset`.

This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and PCK is selected as a file type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__export_pack_patch"></div>

[Error](#enum_@globalscope_error) **_export_pack_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__export_pack_patch"></div>

**Optional.** 

Creates a patch PCK archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.

This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and PCK is selected as a file type.

 **Note:** The patches provided in `patches` have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__export_project"></div>

[Error](#enum_@globalscope_error) **_export_project** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__export_project"></div>

**Required.** 

Creates a full project at `path` for the specified `preset`.

This method is called when "Export" button is pressed in the export dialog.

This method implementation can call [`EditorExportPlatform.save_pack`](class_editorexportplatform.md#class_editorexportplatform_method_save_pack) or [`EditorExportPlatform.save_zip`](class_editorexportplatform.md#class_editorexportplatform_method_save_zip) to use default PCK/ZIP export process, or calls [`EditorExportPlatform.export_project_files`](class_editorexportplatform.md#class_editorexportplatform_method_export_project_files) and implement custom callback for processing each exported file.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__export_zip"></div>

[Error](#enum_@globalscope_error) **_export_zip** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__export_zip"></div>

**Optional.** 

Create a ZIP archive at `path` for the specified `preset`.

This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and ZIP is selected as a file type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__export_zip_patch"></div>

[Error](#enum_@globalscope_error) **_export_zip_patch** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md), path: [`String`](class_string.md), patches: [`PackedStringArray`](class_packedstringarray.md), flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__export_zip_patch"></div>

**Optional.** 

Create a ZIP archive at `path` for the specified `preset`, containing only the files that have changed since the last patch.

This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and ZIP is selected as a file type.

 **Note:** The patches provided in `patches` have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_binary_extensions"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_binary_extensions** ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_binary_extensions"></div>

**Required.** 

Returns array of supported binary extensions for the full project export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_debug_protocol"></div>

[`String`](class_string.md) **_get_debug_protocol** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_debug_protocol"></div>

**Optional.** 

Returns protocol used for remote debugging. Default implementation return `tcp://`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_device_architecture"></div>

[`String`](class_string.md) **_get_device_architecture** ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_device_architecture"></div>

**Optional.** 

Returns device architecture for one-click deploy.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_export_option_visibility"></div>

[`bool`](class_bool.md) **_get_export_option_visibility** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_export_option_visibility"></div>

**Optional.** 

Validates `option` and returns visibility for the specified `preset`. Default implementation return `true` for all options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_export_option_warning"></div>

[`String`](class_string.md) **_get_export_option_warning** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), option: [`StringName`](class_stringname.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_export_option_warning"></div>

**Optional.** 

Validates `option` and returns warning message for the specified `preset`. Default implementation return empty string for all options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_export_options"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_export_options** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_export_options"></div>

**Optional.** 

Returns a property list, as an [`Array`](class_array.md) of dictionaries. Each [`Dictionary`](class_dictionary.md) must at least contain the `name: StringName` and `type: Variant.Type` entries.

Additionally, the following keys are supported:

- `hint: PropertyHint` 

- `hint_string: String` 

- `usage: PropertyUsageFlags` 

- `class_name: StringName` 

- `default_value: Variant`, default value of the property.

- `update_visibility: bool`, if set to `true`, [`_get_export_option_visibility`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__get_export_option_visibility) is called for each property when this property is changed.

- `required: bool`, if set to `true`, this property warnings are critical, and should be resolved to make export possible. This value is a hint for the [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration) implementation, and not used by the engine directly.

See also [`Object._get_property_list`](class_object.md#class_object_private_method__get_property_list).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_logo"></div>

[`Texture2D`](class_texture2d.md) **_get_logo** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_logo"></div>

**Required.** 

Returns platform logo displayed in the export dialog, logo should be 32x32 adjusted to the current editor scale, see [`EditorInterface.get_editor_scale`](class_editorinterface.md#class_editorinterface_method_get_editor_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_name"></div>

**Required.** 

Returns export platform name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_option_icon"></div>

[`ImageTexture`](class_imagetexture.md) **_get_option_icon** ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_option_icon"></div>

**Optional.** 

Returns one-click deploy menu item icon for the specified `device`, icon should be 16x16 adjusted to the current editor scale, see [`EditorInterface.get_editor_scale`](class_editorinterface.md#class_editorinterface_method_get_editor_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_option_label"></div>

[`String`](class_string.md) **_get_option_label** ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_option_label"></div>

**Optional.** 

Returns one-click deploy menu item label for the specified `device`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_option_tooltip"></div>

[`String`](class_string.md) **_get_option_tooltip** ( device: [`int`](class_int.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_option_tooltip"></div>

**Optional.** 

Returns one-click deploy menu item tooltip for the specified `device`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_options_count"></div>

[`int`](class_int.md) **_get_options_count** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_options_count"></div>

**Optional.** 

Returns number one-click deploy devices (or other one-click option displayed in the menu).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_options_tooltip"></div>

[`String`](class_string.md) **_get_options_tooltip** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_options_tooltip"></div>

**Optional.** 

Returns tooltip of the one-click deploy menu button.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_os_name"></div>

[`String`](class_string.md) **_get_os_name** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_os_name"></div>

**Required.** 

Returns target OS name.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_platform_features"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_platform_features** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_platform_features"></div>

**Required.** 

Returns array of platform specific features.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_preset_features"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_preset_features** ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_preset_features"></div>

**Required.** 

Returns array of platform specific features for the specified `preset`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__get_run_icon"></div>

[`Texture2D`](class_texture2d.md) **_get_run_icon** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__get_run_icon"></div>

**Optional.** 

Returns icon of the one-click deploy menu button, icon should be 16x16 adjusted to the current editor scale, see [`EditorInterface.get_editor_scale`](class_editorinterface.md#class_editorinterface_method_get_editor_scale).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__has_valid_export_configuration"></div>

[`bool`](class_bool.md) **_has_valid_export_configuration** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__has_valid_export_configuration"></div>

**Required.** 

Returns `true` if export configuration is valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__has_valid_project_configuration"></div>

[`bool`](class_bool.md) **_has_valid_project_configuration** ( preset: [`EditorExportPreset`](class_editorexportpreset.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__has_valid_project_configuration"></div>

**Required.** 

Returns `true` if project configuration is valid.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__is_executable"></div>

[`bool`](class_bool.md) **_is_executable** ( path: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplatformextension_private_method__is_executable"></div>

**Optional.** 

Returns `true` if specified file is a valid executable (native executable or script) for the target platform.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__poll_export"></div>

[`bool`](class_bool.md) **_poll_export** ( ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__poll_export"></div>

**Optional.** 

Returns `true` if one-click deploy options are changed and editor interface should be updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__run"></div>

[Error](#enum_@globalscope_error) **_run** ( preset: [`EditorExportPreset`](class_editorexportpreset.md), device: [`int`](class_int.md), debug_flags: [DebugFlags](#enum_editorexportplatform_debugflags) ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__run"></div>

**Optional.** 

This method is called when `device` one-click deploy menu option is selected.

Implementation should export project to a temporary location, upload and run it on the specific `device`, or perform another action associated with the menu item.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_private_method__should_update_export_options"></div>

[`bool`](class_bool.md) **_should_update_export_options** ( ) virtual[^virtual]<div id="class_editorexportplatformextension_private_method__should_update_export_options"></div>

**Optional.** 

Returns `true` if export options list is changed and presets should be updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_method_get_config_error"></div>

[`String`](class_string.md) **get_config_error** ( ) const[^const]<div id="class_editorexportplatformextension_method_get_config_error"></div>

Returns current configuration error message text. This method should be called only from the [`_can_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__can_export), [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration), or [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) implementations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_method_get_config_missing_templates"></div>

[`bool`](class_bool.md) **get_config_missing_templates** ( ) const[^const]<div id="class_editorexportplatformextension_method_get_config_missing_templates"></div>

Returns `true` is export templates are missing from the current configuration. This method should be called only from the [`_can_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__can_export), [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration), or [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) implementations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_method_set_config_error"></div>

`void` **set_config_error** ( error_text: [`String`](class_string.md) ) const[^const]<div id="class_editorexportplatformextension_method_set_config_error"></div>

Sets current configuration error message text. This method should be called only from the [`_can_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__can_export), [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration), or [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) implementations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplatformextension_method_set_config_missing_templates"></div>

`void` **set_config_missing_templates** ( missing_templates: [`bool`](class_bool.md) ) const[^const]<div id="class_editorexportplatformextension_method_set_config_missing_templates"></div>

Set to `true` is export templates are missing from the current configuration. This method should be called only from the [`_can_export`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__can_export), [`_has_valid_export_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_export_configuration), or [`_has_valid_project_configuration`](class_editorexportplatformextension.md#class_editorexportplatformextension_private_method__has_valid_project_configuration) implementations.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
