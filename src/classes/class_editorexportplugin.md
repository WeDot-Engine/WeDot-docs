<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/EditorExportPlugin.xml。 -->

<div id="_class_editorexportplugin"></div>

# EditorExportPlugin

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A script that is executed when exporting the project.

## 描述

**EditorExportPlugin** s are automatically invoked whenever the user exports the project. Their most common use is to determine what files are being included in the exported project. For each plugin, [`_export_begin`](#class_editorexportplugin_private_method__export_begin) is called at the beginning of the export process and then [`_export_file`](#class_editorexportplugin_private_method__export_file) is called for each exported file.

To use **EditorExportPlugin**, register it using the [`EditorPlugin.add_export_plugin`](#class_editorplugin_method_add_export_plugin) method first.

## 方法

| [`bool`](class_bool.md)                                     | [`_begin_customize_resources`](#class_editorexportplugin_private_method__begin_customize_resources) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]                    |
| [`bool`](class_bool.md)                                     | [`_begin_customize_scenes`](#class_editorexportplugin_private_method__begin_customize_scenes) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]                          |
| [`Resource`](class_resource.md)                             | [`_customize_resource`](#class_editorexportplugin_private_method__customize_resource) ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                  |
| [`Node`](class_node.md)                                     | [`_customize_scene`](#class_editorexportplugin_private_method__customize_scene) ( scene: [`Node`](class_node.md), path: [`String`](class_string.md) ) virtual[^virtual]                                                                                                                   |
| `void`                                                      | [`_end_customize_resources`](#class_editorexportplugin_private_method__end_customize_resources) ( ) virtual[^virtual]                                                                                                                                                                     |
| `void`                                                      | [`_end_customize_scenes`](#class_editorexportplugin_private_method__end_customize_scenes) ( ) virtual[^virtual]                                                                                                                                                                           |
| `void`                                                      | [`_export_begin`](#class_editorexportplugin_private_method__export_begin) ( features: [`PackedStringArray`](class_packedstringarray.md), is_debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [`int`](class_int.md) ) virtual[^virtual]                           |
| `void`                                                      | [`_export_end`](#class_editorexportplugin_private_method__export_end) ( ) virtual[^virtual]                                                                                                                                                                                               |
| `void`                                                      | [`_export_file`](#class_editorexportplugin_private_method__export_file) ( path: [`String`](class_string.md), type: [`String`](class_string.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]                                                           |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_android_dependencies`](#class_editorexportplugin_private_method__get_android_dependencies) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                   |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_android_dependencies_maven_repos`](#class_editorexportplugin_private_method__get_android_dependencies_maven_repos) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                           |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_android_libraries`](#class_editorexportplugin_private_method__get_android_libraries) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                         |
| [`String`](class_string.md)                                 | [`_get_android_manifest_activity_element_contents`](#class_editorexportplugin_private_method__get_android_manifest_activity_element_contents) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]       |
| [`String`](class_string.md)                                 | [`_get_android_manifest_application_element_contents`](#class_editorexportplugin_private_method__get_android_manifest_application_element_contents) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const] |
| [`String`](class_string.md)                                 | [`_get_android_manifest_element_contents`](#class_editorexportplugin_private_method__get_android_manifest_element_contents) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                         |
| [`int`](class_int.md)                                       | [`_get_customization_configuration_hash`](#class_editorexportplugin_private_method__get_customization_configuration_hash) ( ) virtual[^virtual] const[^const]                                                                                                                             |
| [`PackedStringArray`](class_packedstringarray.md)           | [`_get_export_features`](#class_editorexportplugin_private_method__get_export_features) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]                                                             |
| [`String`](class_string.md)                                 | [`_get_export_option_warning`](#class_editorexportplugin_private_method__get_export_option_warning) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]                                            |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`_get_export_options`](#class_editorexportplugin_private_method__get_export_options) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]                                                                                               |
| [`Dictionary`](class_dictionary.md)                         | [`_get_export_options_overrides`](#class_editorexportplugin_private_method__get_export_options_overrides) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]                                                                           |
| [`String`](class_string.md)                                 | [`_get_name`](#class_editorexportplugin_private_method__get_name) ( ) virtual[^virtual] const[^const]                                                                                                                                                                                     |
| [`bool`](class_bool.md)                                     | [`_should_update_export_options`](#class_editorexportplugin_private_method__should_update_export_options) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]                                                                           |
| [`bool`](class_bool.md)                                     | [`_supports_platform`](#class_editorexportplugin_private_method__supports_platform) ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]                                                                                                 |
| `void`                                                      | [`add_file`](#class_editorexportplugin_method_add_file) ( path: [`String`](class_string.md), file: [`PackedByteArray`](class_packedbytearray.md), remap: [`bool`](class_bool.md) )                                                                                                        |
| `void`                                                      | [`add_ios_bundle_file`](#class_editorexportplugin_method_add_ios_bundle_file) ( path: [`String`](class_string.md) )                                                                                                                                                                       |
| `void`                                                      | [`add_ios_cpp_code`](#class_editorexportplugin_method_add_ios_cpp_code) ( code: [`String`](class_string.md) )                                                                                                                                                                             |
| `void`                                                      | [`add_ios_embedded_framework`](#class_editorexportplugin_method_add_ios_embedded_framework) ( path: [`String`](class_string.md) )                                                                                                                                                         |
| `void`                                                      | [`add_ios_framework`](#class_editorexportplugin_method_add_ios_framework) ( path: [`String`](class_string.md) )                                                                                                                                                                           |
| `void`                                                      | [`add_ios_linker_flags`](#class_editorexportplugin_method_add_ios_linker_flags) ( flags: [`String`](class_string.md) )                                                                                                                                                                    |
| `void`                                                      | [`add_ios_plist_content`](#class_editorexportplugin_method_add_ios_plist_content) ( plist_content: [`String`](class_string.md) )                                                                                                                                                          |
| `void`                                                      | [`add_ios_project_static_lib`](#class_editorexportplugin_method_add_ios_project_static_lib) ( path: [`String`](class_string.md) )                                                                                                                                                         |
| `void`                                                      | [`add_macos_plugin_file`](#class_editorexportplugin_method_add_macos_plugin_file) ( path: [`String`](class_string.md) )                                                                                                                                                                   |
| `void`                                                      | [`add_shared_object`](#class_editorexportplugin_method_add_shared_object) ( path: [`String`](class_string.md), tags: [`PackedStringArray`](class_packedstringarray.md), target: [`String`](class_string.md) )                                                                             |
| [`Variant`](class_variant.md)                               | [`get_option`](#class_editorexportplugin_method_get_option) ( name: [`StringName`](class_stringname.md) ) const[^const]                                                                                                                                                                   |
| `void`                                                      | [`skip`](#class_editorexportplugin_method_skip) ( )                                                                                                                                                                                                                                       |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_editorexportplugin_private_method__begin_customize_resources"></div>

[`bool`](class_bool.md) **_begin_customize_resources** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__begin_customize_resources"></div>

Return `true` if this plugin will customize resources based on the platform and features used.

When enabled, [`_get_customization_configuration_hash`](#class_editorexportplugin_private_method__get_customization_configuration_hash) and [`_customize_resource`](#class_editorexportplugin_private_method__customize_resource) will be called and must be implemented.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__begin_customize_scenes"></div>

[`bool`](class_bool.md) **_begin_customize_scenes** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__begin_customize_scenes"></div>

Return `true` if this plugin will customize scenes based on the platform and features used.

When enabled, [`_get_customization_configuration_hash`](#class_editorexportplugin_private_method__get_customization_configuration_hash) and [`_customize_scene`](#class_editorexportplugin_private_method__customize_scene) will be called and must be implemented.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__customize_resource"></div>

[`Resource`](class_resource.md) **_customize_resource** ( resource: [`Resource`](class_resource.md), path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorexportplugin_private_method__customize_resource"></div>

Customize a resource. If changes are made to it, return the same or a new resource. Otherwise, return `null`.

The *path* argument is only used when customizing an actual file, otherwise this means that this resource is part of another one and it will be empty.

Implementing this method is required if [`_begin_customize_resources`](#class_editorexportplugin_private_method__begin_customize_resources) returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__customize_scene"></div>

[`Node`](class_node.md) **_customize_scene** ( scene: [`Node`](class_node.md), path: [`String`](class_string.md) ) virtual[^virtual]<div id="class_editorexportplugin_private_method__customize_scene"></div>

Customize a scene. If changes are made to it, return the same or a new scene. Otherwise, return `null`. If a new scene is returned, it is up to you to dispose of the old one.

Implementing this method is required if [`_begin_customize_scenes`](#class_editorexportplugin_private_method__begin_customize_scenes) returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__end_customize_resources"></div>

`void` **_end_customize_resources** ( ) virtual[^virtual]<div id="class_editorexportplugin_private_method__end_customize_resources"></div>

This is called when the customization process for resources ends.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__end_customize_scenes"></div>

`void` **_end_customize_scenes** ( ) virtual[^virtual]<div id="class_editorexportplugin_private_method__end_customize_scenes"></div>

This is called when the customization process for scenes ends.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__export_begin"></div>

`void` **_export_begin** ( features: [`PackedStringArray`](class_packedstringarray.md), is_debug: [`bool`](class_bool.md), path: [`String`](class_string.md), flags: [`int`](class_int.md) ) virtual[^virtual]<div id="class_editorexportplugin_private_method__export_begin"></div>

Virtual method to be overridden by the user. It is called when the export starts and provides all information about the export. `features` is the list of features for the export, `is_debug` is `true` for debug builds, `path` is the target path for the exported project. `flags` is only used when running a runnable profile, e.g. when using native run on Android.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__export_end"></div>

`void` **_export_end** ( ) virtual[^virtual]<div id="class_editorexportplugin_private_method__export_end"></div>

Virtual method to be overridden by the user. Called when the export is finished.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__export_file"></div>

`void` **_export_file** ( path: [`String`](class_string.md), type: [`String`](class_string.md), features: [`PackedStringArray`](class_packedstringarray.md) ) virtual[^virtual]<div id="class_editorexportplugin_private_method__export_file"></div>

Virtual method to be overridden by the user. Called for each exported file before [`_customize_resource`](#class_editorexportplugin_private_method__customize_resource) and [`_customize_scene`](#class_editorexportplugin_private_method__customize_scene). The arguments can be used to identify the file. `path` is the path of the file, `type` is the [`Resource`](class_resource.md) represented by the file (e.g. [`PackedScene`](class_packedscene.md)), and `features` is the list of features for the export.

Calling [`skip`](#class_editorexportplugin_method_skip) inside this callback will make the file not included in the export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_dependencies"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_android_dependencies** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_dependencies"></div>

Virtual method to be overridden by the user. This is called to retrieve the set of Android dependencies provided by this plugin. Each returned Android dependency should have the format of an Android remote binary dependency: `org.godot.example:my-plugin:0.0.0` 

For more information see [*Android documentation on dependencies*](https://developer.android.com/build/dependencies?agpversion=4.1#dependency-types).

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_dependencies_maven_repos"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_android_dependencies_maven_repos** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_dependencies_maven_repos"></div>

Virtual method to be overridden by the user. This is called to retrieve the URLs of Maven repositories for the set of Android dependencies provided by this plugin.

For more information see [*Gradle documentation on dependency management*](https://docs.gradle.org/current/userguide/dependency_management.html#sec:maven_repo).

 **Note:** Google's Maven repo and the Maven Central repo are already included by default.

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_libraries"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_android_libraries** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_libraries"></div>

Virtual method to be overridden by the user. This is called to retrieve the local paths of the Android libraries archive (AAR) files provided by this plugin.

 **Note:** Relative paths **must** be relative to Godot's `res://addons/` directory. For example, an AAR file located under `res://addons/hello_world_plugin/HelloWorld.release.aar` can be returned as an absolute path using `res://addons/hello_world_plugin/HelloWorld.release.aar` or a relative path using `hello_world_plugin/HelloWorld.release.aar`.

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_manifest_activity_element_contents"></div>

[`String`](class_string.md) **_get_android_manifest_activity_element_contents** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_manifest_activity_element_contents"></div>

Virtual method to be overridden by the user. This is used at export time to update the contents of the `activity` element in the generated Android manifest.

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_manifest_application_element_contents"></div>

[`String`](class_string.md) **_get_android_manifest_application_element_contents** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_manifest_application_element_contents"></div>

Virtual method to be overridden by the user. This is used at export time to update the contents of the `application` element in the generated Android manifest.

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_android_manifest_element_contents"></div>

[`String`](class_string.md) **_get_android_manifest_element_contents** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_android_manifest_element_contents"></div>

Virtual method to be overridden by the user. This is used at export time to update the contents of the `manifest` element in the generated Android manifest.

 **Note:** Only supported on Android and requires [`EditorExportPlatformAndroid.gradle_build/use_gradle_build`](#class_editorexportplatformandroid_property_gradle_build/use_gradle_build) to be enabled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_customization_configuration_hash"></div>

[`int`](class_int.md) **_get_customization_configuration_hash** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_customization_configuration_hash"></div>

Return a hash based on the configuration passed (for both scenes and resources). This helps keep separate caches for separate export configurations.

Implementing this method is required if [`_begin_customize_resources`](#class_editorexportplugin_private_method__begin_customize_resources) returns `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_export_features"></div>

[`PackedStringArray`](class_packedstringarray.md) **_get_export_features** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), debug: [`bool`](class_bool.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_export_features"></div>

Return a [`PackedStringArray`](class_packedstringarray.md) of additional features this preset, for the given `platform`, should have.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_export_option_warning"></div>

[`String`](class_string.md) **_get_export_option_warning** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md), option: [`String`](class_string.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_export_option_warning"></div>

Check the requirements for the given `option` and return a non-empty warning string if they are not met.

 **Note:** Use [`get_option`](#class_editorexportplugin_method_get_option) to check the value of the export options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_export_options"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **_get_export_options** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_export_options"></div>

Return a list of export options that can be configured for this export plugin.

Each element in the return value is a [`Dictionary`](class_dictionary.md) with the following keys:

- `option`: A dictionary with the structure documented by [`Object.get_property_list`](#class_object_method_get_property_list), but all keys are optional.

- `default_value`: The default value for this option.

- `update_visibility`: An optional boolean value. If set to `true`, the preset will emit [`Object.property_list_changed`](#class_object_signal_property_list_changed) when the option is changed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_export_options_overrides"></div>

[`Dictionary`](class_dictionary.md) **_get_export_options_overrides** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_export_options_overrides"></div>

Return a [`Dictionary`](class_dictionary.md) of override values for export options, that will be used instead of user-provided values. Overridden options will be hidden from the user interface.

```

    class MyExportPlugin extends EditorExportPlugin:
        func _get_name() -> String:
            return "MyExportPlugin"
    
        func _supports_platform(platform) -> bool:
            if platform is EditorExportPlatformPC:
                # Run on all desktop platforms including Windows, MacOS and Linux.
                return true
            return false
    
        func _get_export_options_overrides(platform) -> Dictionary:
            # Override "Embed PCK" to always be enabled.
            return {
                "binary_format/embed_pck": true,
            }
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__get_name"></div>

[`String`](class_string.md) **_get_name** ( ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__get_name"></div>

Return the name identifier of this plugin (for future identification by the exporter). The plugins are sorted by name before exporting.

Implementing this method is required.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__should_update_export_options"></div>

[`bool`](class_bool.md) **_should_update_export_options** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__should_update_export_options"></div>

Return `true`, if the result of [`_get_export_options`](#class_editorexportplugin_private_method__get_export_options) has changed and the export options of preset corresponding to `platform` should be updated.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_private_method__supports_platform"></div>

[`bool`](class_bool.md) **_supports_platform** ( platform: [`EditorExportPlatform`](class_editorexportplatform.md) ) virtual[^virtual] const[^const]<div id="class_editorexportplugin_private_method__supports_platform"></div>

Return `true` if the plugin supports the given `platform`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_file"></div>

`void` **add_file** ( path: [`String`](class_string.md), file: [`PackedByteArray`](class_packedbytearray.md), remap: [`bool`](class_bool.md) )<div id="class_editorexportplugin_method_add_file"></div>

Adds a custom file to be exported. `path` is the virtual path that can be used to load the file, `file` is the binary data of the file.

When called inside [`_export_file`](#class_editorexportplugin_private_method__export_file) and `remap` is `true`, the current file will not be exported, but instead remapped to this custom file. `remap` is ignored when called in other places.

 `file` will not be imported, so consider using [`_customize_resource`](#class_editorexportplugin_private_method__customize_resource) to remap imported resources.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_bundle_file"></div>

`void` **add_ios_bundle_file** ( path: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_bundle_file"></div>

Adds an iOS bundle file from the given `path` to the exported project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_cpp_code"></div>

`void` **add_ios_cpp_code** ( code: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_cpp_code"></div>

Adds a C++ code to the iOS export. The final code is created from the code appended by each active export plugin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_embedded_framework"></div>

`void` **add_ios_embedded_framework** ( path: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_embedded_framework"></div>

Adds a dynamic library (\*.dylib, \*.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.

 **Note:** For static libraries (*.a) works in same way as [`add_ios_framework`](#class_editorexportplugin_method_add_ios_framework).

 **Note:** This method should not be used for System libraries as they are already present on the device.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_framework"></div>

`void` **add_ios_framework** ( path: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_framework"></div>

Adds a static library (\*.a) or dynamic library (\*.dylib, \*.framework) to Linking Phase in iOS's Xcode project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_linker_flags"></div>

`void` **add_ios_linker_flags** ( flags: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_linker_flags"></div>

Adds linker flags for the iOS export.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_plist_content"></div>

`void` **add_ios_plist_content** ( plist_content: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_plist_content"></div>

Adds content for iOS Property List files.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_ios_project_static_lib"></div>

`void` **add_ios_project_static_lib** ( path: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_ios_project_static_lib"></div>

Adds a static lib from the given `path` to the iOS project.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_macos_plugin_file"></div>

`void` **add_macos_plugin_file** ( path: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_macos_plugin_file"></div>

Adds file or directory matching `path` to `PlugIns` directory of macOS app bundle.

 **Note:** This is useful only for macOS exports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_add_shared_object"></div>

`void` **add_shared_object** ( path: [`String`](class_string.md), tags: [`PackedStringArray`](class_packedstringarray.md), target: [`String`](class_string.md) )<div id="class_editorexportplugin_method_add_shared_object"></div>

Adds a shared object or a directory containing only shared objects with the given `tags` and destination `path`.

 **Note:** In case of macOS exports, those shared objects will be added to `Frameworks` directory of app bundle.

In case of a directory code-sign will error if you place non code object in directory.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_get_option"></div>

[`Variant`](class_variant.md) **get_option** ( name: [`StringName`](class_stringname.md) ) const[^const]<div id="class_editorexportplugin_method_get_option"></div>

Returns the current value of an export option supplied by [`_get_export_options`](#class_editorexportplugin_private_method__get_export_options).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_editorexportplugin_method_skip"></div>

`void` **skip** ( )<div id="class_editorexportplugin_method_skip"></div>

To be called inside [`_export_file`](#class_editorexportplugin_private_method__export_file). Skips the current file, so it's not included in the export.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
